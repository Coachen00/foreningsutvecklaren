import { useEffect, useId, useMemo, useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";
import type { QuizQuestion } from "@/content/cases";
import { cn } from "@/lib/utils";

interface Props {
  /** Unik nyckel per case — används för localStorage ("klarat"). */
  storageKey: string;
  questions: QuizQuestion[];
}

const STORAGE_PREFIX = "fu-quiz-";

/**
 * Klient-endast quiz. Inget sparas centralt — bara "klarat" + poäng i
 * localStorage så besökaren ser sin egen progress. Tillgängligt: fieldset/
 * legend per fråga, native radio, aria-live på feedback och resultat.
 */
const QuizBlock = ({ storageKey, questions }: Props) => {
  const baseId = useId();
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;

  const score = useMemo(
    () =>
      questions.reduce(
        (acc, q) => (answers[q.id] === q.correctOptionId ? acc + 1 : acc),
        0,
      ),
    [answers, questions],
  );

  useEffect(() => {
    if (!allAnswered || typeof window === "undefined") return;
    try {
      window.localStorage.setItem(
        STORAGE_PREFIX + storageKey,
        JSON.stringify({ score, total: questions.length, done: true }),
      );
    } catch {
      /* localStorage kan vara blockerad — tyst fallback, quizet funkar ändå */
    }
  }, [allAnswered, score, questions.length, storageKey]);

  const select = (questionId: string, optionId: string) => {
    setAnswers((prev) =>
      prev[questionId] ? prev : { ...prev, [questionId]: optionId },
    );
  };

  const reset = () => {
    setAnswers({});
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem(STORAGE_PREFIX + storageKey);
      } catch {
        /* ignore */
      }
    }
  };

  return (
    <div className="card-gradient rounded-xl border border-border p-6 sm:p-8">
      <p className="font-mono text-micro uppercase tracking-wider text-signal-gold">
        Quiz · {answeredCount}/{questions.length} besvarade
      </p>
      <h3 className="mt-3 text-headline font-semibold text-foreground">
        Testa dig själv
      </h3>

      <ol className="mt-8 space-y-8" role="list">
        {questions.map((q, qi) => {
          const chosen = answers[q.id];
          const answered = Boolean(chosen);
          const correct = chosen === q.correctOptionId;
          const feedbackId = `${baseId}-fb-${q.id}`;

          return (
            <li key={q.id}>
              <fieldset
                aria-describedby={answered ? feedbackId : undefined}
                className="border-0 p-0 m-0"
              >
                <legend className="text-base font-semibold text-foreground">
                  <span className="font-mono text-micro text-muted-foreground">
                    {qi + 1}.
                  </span>{" "}
                  {q.prompt}
                </legend>

                <div className="mt-4 space-y-2" role="radiogroup">
                  {q.options.map((opt) => {
                    const isChosen = chosen === opt.id;
                    const isCorrect = opt.id === q.correctOptionId;
                    const showAsCorrect = answered && isCorrect;
                    const showAsWrong = answered && isChosen && !isCorrect;

                    return (
                      <label
                        key={opt.id}
                        className={cn(
                          "flex min-h-[44px] cursor-pointer items-center gap-3 rounded-md border px-4 py-3 text-base transition-colors",
                          "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
                          !answered &&
                            "border-border hover:border-accent/40 hover:bg-accent/5",
                          answered && !showAsCorrect && !showAsWrong &&
                            "border-border opacity-70",
                          showAsCorrect &&
                            "border-accent/50 bg-accent/10 text-foreground",
                          showAsWrong &&
                            "border-destructive/50 bg-destructive/10 text-foreground",
                          answered && "cursor-default",
                        )}
                      >
                        <input
                          type="radio"
                          name={`${baseId}-${q.id}`}
                          value={opt.id}
                          checked={isChosen}
                          disabled={answered}
                          onChange={() => select(q.id, opt.id)}
                          className="h-4 w-4 shrink-0 accent-primary"
                        />
                        <span className="flex-1">{opt.label}</span>
                        {showAsCorrect && (
                          <CheckCircle2
                            className="h-5 w-5 shrink-0 text-accent"
                            aria-hidden="true"
                          />
                        )}
                        {showAsWrong && (
                          <XCircle
                            className="h-5 w-5 shrink-0 text-destructive"
                            aria-hidden="true"
                          />
                        )}
                      </label>
                    );
                  })}
                </div>

                {answered && (
                  <p
                    id={feedbackId}
                    aria-live="polite"
                    className={cn(
                      "mt-3 text-small leading-relaxed",
                      correct ? "text-accent" : "text-foreground/75",
                    )}
                  >
                    <span className="font-semibold">
                      {correct ? "Rätt." : "Inte riktigt."}
                    </span>{" "}
                    {q.explanation}
                  </p>
                )}
              </fieldset>
            </li>
          );
        })}
      </ol>

      {allAnswered && (
        <div
          role="status"
          className="mt-8 flex flex-col gap-4 rounded-xl border border-accent/30 bg-accent/10 p-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="flex items-center gap-3 text-base font-semibold text-foreground">
            <Trophy className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            Klart — {score} av {questions.length} rätt.
          </p>
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-small font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Gör om quizet
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizBlock;
