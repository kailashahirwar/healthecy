import type { ReactNode } from "react";
import { PageIntro } from "@/components/page-chrome";

type Section = {
  title: string;
  body: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  effectiveDate,
  lastUpdated,
  preamble,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  effectiveDate?: string;
  lastUpdated?: string;
  preamble?: ReactNode;
  sections: Section[];
}) {
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title} body={intro} />
      <section className="mx-auto max-w-3xl space-y-10 px-5 py-16 leading-8 text-muted-foreground lg:px-8 lg:py-24">
        {effectiveDate || lastUpdated ? (
          <div className="space-y-1 text-sm font-semibold text-primary">
            {effectiveDate ? <p>Effective Date: {effectiveDate}</p> : null}
            {lastUpdated ? <p>Last Updated: {lastUpdated}</p> : null}
          </div>
        ) : (
          <p className="text-sm font-semibold text-primary">Last updated: 18 September 2026</p>
        )}
        {preamble ? <div className="space-y-4">{preamble}</div> : null}
        {sections.map((section) => (
          <article key={section.title}>
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-primary">{section.title}</h2>
            <div className="mt-4 space-y-4 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:tracking-[-0.02em] [&_h3]:text-primary [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
              {section.body}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
