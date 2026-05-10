import { useEffect, useState, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const translateAuthError = (message: string) => {
  const m = message.toLowerCase();
  if (m.includes("invalid login")) return "Fel e-post eller lösenord.";
  if (m.includes("email not confirmed"))
    return "E-postadressen är inte bekräftad ännu.";
  if (m.includes("rate limit") || m.includes("too many"))
    return "För många försök. Vänta en stund och försök igen.";
  return "Det gick inte att logga in. Försök igen.";
};

type LocationState = { from?: { pathname?: string } } | null;

const Login = () => {
  useDocumentTitle("Logga in", "Logga in på Fotbollsnyttan Arbetsrum.");
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, resetPassword, session, loading } = useAuth();

  const fromState = (location.state as LocationState)?.from?.pathname;
  const redirectTo = fromState && fromState !== "/login" ? fromState : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [resetOpen, setResetOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetting, setResetting] = useState(false);

  useEffect(() => {
    if (!loading && session) {
      navigate(redirectTo, { replace: true });
    }
  }, [loading, session, navigate, redirectTo]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      await signIn(email.trim(), password);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "";
      toast.error(translateAuthError(msg));
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = async (e: FormEvent) => {
    e.preventDefault();
    if (resetting) return;
    setResetting(true);
    try {
      await resetPassword(resetEmail.trim());
      toast.success("Återställningslänk skickad. Kolla din inkorg.");
      setResetOpen(false);
      setResetEmail("");
    } catch {
      toast.error("Det gick inte att skicka återställning. Försök igen.");
    } finally {
      setResetting(false);
    }
  };

  const openReset = () => {
    setResetEmail(email.trim());
    setResetOpen(true);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2
          className="h-5 w-5 animate-spin text-muted-foreground"
          aria-label="Verifierar inloggning"
        />
      </div>
    );
  }

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
          Fotbollsnyttan Arbetsrum
        </p>
        <h1 className="mb-6 font-serif text-4xl font-medium tracking-tight text-foreground">
          Logga in
        </h1>

        {fromState && fromState !== "/" ? (
          <p
            role="status"
            className="mb-8 rounded-md border border-border bg-card px-4 py-3 text-left text-sm text-muted-foreground"
          >
            Sidan kräver inloggning. Logga in så fortsätter du till{" "}
            <code className="font-mono text-foreground">{fromState}</code>.
          </p>
        ) : (
          <div className="mb-4" />
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-left" noValidate>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              E-post
            </Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Lösenord
            </Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={submitting}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={submitting || !email || !password}
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
                Loggar in…
              </>
            ) : (
              "Logga in"
            )}
          </Button>

          <div className="text-center">
            <button
              type="button"
              onClick={openReset}
              className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Glömt lösenord?
            </button>
          </div>
        </form>

        <p className="mt-16 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          GFF · Göteborgs Fotbollförbund
        </p>
      </main>

      <Dialog open={resetOpen} onOpenChange={setResetOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-medium">
              Återställ lösenord
            </DialogTitle>
            <DialogDescription>
              Vi skickar en länk till din e-post. Följ den för att välja ett
              nytt lösenord.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleReset} className="space-y-4" noValidate>
            <div className="space-y-2">
              <Label htmlFor="reset-email" className="text-sm font-medium">
                E-post
              </Label>
              <Input
                id="reset-email"
                type="email"
                autoComplete="email"
                required
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                disabled={resetting}
              />
            </div>

            <DialogFooter>
              <Button
                type="submit"
                className="w-full sm:w-auto"
                disabled={resetting || !resetEmail}
              >
                {resetting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
                    Skickar…
                  </>
                ) : (
                  "Skicka återställning"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;
