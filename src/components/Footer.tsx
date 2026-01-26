import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="mb-4 text-xl font-semibold text-foreground">
          Vill du bidra eller veta mer?
        </h3>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Mail className="h-5 w-5" />
          <span>
            Kontakta{" "}
            <span className="font-medium text-foreground">[NAMN/MEJL]</span>
          </span>
        </div>
        <div className="mt-8 text-sm text-muted-foreground">
          <p>Fotbollsnyttan Göteborg · Kommittén för föreningsutveckling (GFF)</p>
          <p className="mt-1">© {new Date().getFullYear()} Alla rättigheter förbehållna</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
