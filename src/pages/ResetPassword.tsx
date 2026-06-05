import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import supabase from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const ResetPassword = () => {
  useDocumentTitle("Nytt lösenord", "Välj ett nytt lösenord.");
  const navigate = useNavigate();
  const { session, loading } = useAuth();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [linkValid, setLinkValid] = useState<boolean | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (loading) return;
    setLinkValid(Boolean(session));
  }, [loading, session]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setFormError(null);

    if (password.length < 8) {
      const m = "Lösenordet behöver vara minst 8 tecken.";
      setFormError(m);
      toast.error(m);
      return;
    }
    if (password !== confirm) {
      const m = "Lösenorden matchar inte.";
      setFormError(m);
      toast.error(m);
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      toast.success("Lösenordet är uppdaterat.");
      navigate("/", { replace: true });
    } catch (err) {
      if (import.meta.env.DEV) console.error("Lösenordsbyte misslyckades:", err);
      const m = "Det gick inte att uppdatera lösenordet. Försök igen.";
      setFormError(m);
      toast.error(m);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <a href="#main-content" className="skip-link">
        Hoppa till innehållet
      </a>
      <main
        id="main-content"
        className="w-full max-w-sm animate-fade-up text-center"
      >
        <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          Föreningsutvecklaren
        </p>
        <h1 className="mb-10 font-serif text-4xl font-medium tracking-tight text-foreground">
          Nytt lösenord
        </h1>

        {linkValid === false ? (
          <div className="space-y-6 text-left">
            <p className="text-sm text-muted-foreground">
              Länken är ogiltig eller har gått ut. Begär en ny återställning
              från inloggningssidan.
            </p>
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => navigate("/login", { replace: true })}
            >
              Till inloggning
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 text-left"
            noValidate
          >
            {formError && (
              <p
                id="reset-error"
                role="alert"
                className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
              >
                {formError}
              </p>
            )}
            <div className="space-y-2">
              <Label htmlFor="new-password" className="text-sm font-medium">
                Nytt lösenord
              </Label>
              <Input
                id="new-password"
                type="password"
                autoComplete="new-password"
                required
                aria-invalid={formError ? true : undefined}
                aria-describedby={formError ? "reset-error" : undefined}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={submitting || loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-sm font-medium">
                Bekräfta lösenord
              </Label>
              <Input
                id="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                aria-invalid={formError ? true : undefined}
                aria-describedby={formError ? "reset-error" : undefined}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                disabled={submitting || loading}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={submitting || loading || !password || !confirm}
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
                  Sparar…
                </>
              ) : (
                "Spara nytt lösenord"
              )}
            </Button>
          </form>
        )}

        <p className="mt-16 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          GFF · Göteborgs Fotbollförbund
        </p>
      </main>
    </div>
  );
};

export default ResetPassword;
