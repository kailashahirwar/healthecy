import type { Metadata } from "next";
import { StructuredProgramme } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Metabolic, Hormonal & Cardiovascular Health",
  description:
    "Ongoing nutrition, lifestyle and movement support for people managing metabolic, hormonal or cardiovascular health conditions, alongside appropriate specialist medical guidance.",
};

export default function MetabolicHeartCarePage() {
  return (
    <StructuredProgramme
      intro={{
        eyebrow: "Structured programme",
        title: "Metabolic, Hormonal & Cardiovascular Health.",
        body: "Ongoing nutrition, lifestyle and movement support for people managing metabolic, hormonal or cardiovascular health conditions, alongside appropriate specialist medical guidance.",
      }}
      approachTitle="Support for the habits around long-term health."
      approachBody="Healthecy coordinates appropriate clinical nutrition, movement and lifestyle support alongside your treating physician, endocrinology or cardiology team. We do not replace medical diagnosis, medication management or emergency care."
      pillars={[
        { title: "Medical coordination", body: "Support for navigating appropriate physician and specialist consultation pathways." },
        { title: "Clinical nutrition", body: "Dietetic support aligned with individual healthcare needs and clinical guidance." },
        { title: "Movement support", body: "Practical movement and rehabilitation guidance where appropriate to your care plan." },
        { title: "Lifestyle coaching", body: "Sustainable routines for sleep, stress, activity and everyday wellbeing." },
      ]}
      journeyTitle="A coordinated approach"
      journey={[
        { title: "Understand your needs", body: "Start with your health context, current care and the goals that matter to you." },
        { title: "Identify support", body: "We help clarify relevant consultation, nutrition, movement and lifestyle pathways." },
        { title: "Build practical routines", body: "Support is shaped around realistic changes that can work in daily life." },
        { title: "Review the journey", body: "As needs change, appropriate support can be reviewed and coordinated." },
      ]}
      noteTitle="Important care note"
      noteBody="Healthecy is not an emergency service. Chest pain, severe breathlessness, fainting or other urgent symptoms require immediate medical attention."
      ctaTitle="Bring more clarity to your health journey."
      ctaBody="Talk to our team about coordinated support around your existing medical care."
      ctaLabel="Discuss Metabolic, Hormonal & Heart Care"
    />
  );
}
