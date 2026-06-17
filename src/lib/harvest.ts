import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

/**
 * "Uppdateringar från rutiner" — skördat arbete från andra föreningar.
 *
 * Raderna skördas av ett schemalagt script (scripts/harvest/) och granskas
 * manuellt i Supabase innan de blir synliga. Endast status = "approved" når
 * publiken. Klienten läser via anon-nyckeln; RLS i Supabase styr åtkomsten.
 *
 * Vi lagrar bara titel + kort sammanfattning + källänk — aldrig kopierad
 * fulltext. Källan ska alltid attribueras och länkas.
 */
export interface HarvestItem {
  id: string;
  title: string;
  summary: string;
  sourceName: string;
  sourceUrl: string;
  publishedAt: string | null;
}

/** Rå rad som den ser ut i Supabase (snake_case kolumner). */
interface HarvestRow {
  id: string;
  title: string | null;
  summary: string | null;
  source_name: string | null;
  source_url: string | null;
  published_at: string | null;
}

export const isHttpsUrl = (url: string): boolean => {
  try {
    return new URL(url).protocol === "https:";
  } catch {
    return false;
  }
};

/**
 * Defensiv filtrering: släpp igenom bara rader med all obligatorisk data och
 * en säker https-källänk. Skyddar UI:t mot trasig eller osäker DB-data.
 */
export const sanitizeItems = (rows: HarvestRow[]): HarvestItem[] =>
  rows
    .filter(
      (r) =>
        r.title &&
        r.summary &&
        r.source_name &&
        r.source_url &&
        isHttpsUrl(r.source_url),
    )
    .map((r) => ({
      id: r.id,
      title: r.title as string,
      summary: r.summary as string,
      sourceName: r.source_name as string,
      sourceUrl: r.source_url as string,
      publishedAt: r.published_at,
    }));

/** Svensk datumetikett, eller tom sträng om datum saknas/är ogiltigt. */
export const formatUpdateDate = (iso: string | null): string => {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

async function fetchApprovedUpdates(): Promise<HarvestItem[]> {
  const { data, error } = await supabase
    .from("harvest_items")
    .select("id,title,summary,source_name,source_url,published_at")
    .eq("status", "approved")
    .order("published_at", { ascending: false, nullsFirst: false })
    .limit(50);

  if (error) throw error;
  return sanitizeItems((data ?? []) as HarvestRow[]);
}

export const useApprovedUpdates = () =>
  useQuery({
    queryKey: ["harvest-updates"],
    queryFn: fetchApprovedUpdates,
    staleTime: 5 * 60 * 1000,
  });
