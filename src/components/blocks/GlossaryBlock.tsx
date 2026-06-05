import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GLOSSARY, type GlossaryCategory } from "@/content/begrepp";

interface Props {
  /** Override för ordlistan. Standard: hela GLOSSARY. */
  categories?: GlossaryCategory[];
}

const GlossaryBlock = ({ categories = GLOSSARY }: Props) => {
  return (
    <div className="flex flex-col gap-12">
      {categories.map((category) => (
        <section
          key={category.id}
          aria-labelledby={`glossary-cat-${category.id}`}
        >
          <h3
            id={`glossary-cat-${category.id}`}
            className="mb-2 font-mono text-micro uppercase tracking-wider text-primary"
          >
            {category.label}
          </h3>
          <Accordion type="multiple" className="border-t border-border">
            {category.terms.map((term) => (
              <AccordionItem key={term.id} value={term.id}>
                <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                  {term.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="max-w-[68ch] text-small leading-relaxed text-muted-foreground">
                    {term.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      ))}
    </div>
  );
};

export default GlossaryBlock;
