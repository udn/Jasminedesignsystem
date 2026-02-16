import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';
import type { FAQItem, Language } from '@/data/copy/types';
import { t } from '@/data/copy/types';

interface FAQSectionProps {
  items: FAQItem[];
  lang: Language;
  sectionTitle?: { id: string; en: string };
}

export function FAQSection({ items, lang, sectionTitle }: FAQSectionProps) {
  const title = sectionTitle
    ? t(sectionTitle, lang)
    : lang === 'id'
      ? 'Pertanyaan yang Sering Diajukan'
      : 'Frequently Asked Questions';

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-neutral-900)] break-words">
          {title}
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {items.map((item, index) => (
              <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="rounded-xl border border-[var(--color-neutral-200)] bg-white dark:bg-[var(--color-neutral-100)] px-4 sm:px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-[var(--color-neutral-900)] py-5 hover:no-underline break-words">
                {t(item.question, lang)}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[var(--color-neutral-600)] leading-relaxed pb-5 break-words">
                {t(item.answer, lang)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
