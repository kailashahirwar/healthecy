import type { Metadata } from "next";
import { StructuredProgramme } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Healthy Ageing & Geriatric Care",
  description:
    "Ongoing physiotherapy, nutrition and lifestyle support for older adults, focused on maintaining mobility, nutritional health, independence and quality of life.",
};

export default function HealthyAgeingGeriatricCarePage() {
  return (
    <StructuredProgramme
      intro={{
        eyebrow: "Structured programme",
        title: "Healthy Ageing & Geriatric Care.",
        body: "Ongoing physiotherapy, nutrition and lifestyle support for older adults, focused on maintaining mobility, nutritional health, independence and quality of life.",
      }}
      approachTitle="Support for staying active, nourished and independent."
      approachBody="Healthecy coordinates ongoing physiotherapy, clinical nutrition and lifestyle support for older adults. Associated specialist medical advisors can provide additional medical guidance when required. This programme complements, rather than replaces, the treating doctor’s care."
      pillars={[
        { title: "Mobility", body: "Physiotherapy support focused on movement, strength, balance and everyday function." },
        { title: "Nutritional health", body: "Clinical nutrition support for appetite, strength, recovery and sustainable eating." },
        { title: "Independence", body: "Practical support designed around remaining confident in daily life at home." },
        { title: "Quality of life", body: "A connected approach to movement, nutrition and lifestyle that can continue over time." },
      ]}
      journey={[
        { title: "Understand current needs", body: "We begin with mobility, nutrition, home context and the support that would help most." },
        { title: "Coordinate appropriate care", body: "We help identify physiotherapy, nutrition and lifestyle pathways that fit the individual." },
        { title: "Build sustainable routines", body: "Support is shaped around realistic daily habits and family or caregiver context." },
        { title: "Review over time", body: "Needs can change with age and health; the plan can be reviewed as required." },
      ]}
      noteTitle="Support that complements medical care"
      noteBody="Healthecy works alongside the treating physician and associated specialist medical advisors. Urgent symptoms, falls with injury or sudden changes in health require prompt medical assessment."
      ctaTitle="Talk through healthy ageing support."
      ctaBody="Share a brief overview of current needs and the ongoing support you are looking for."
      ctaLabel="Discuss Healthy Ageing Support"
    />
  );
}
