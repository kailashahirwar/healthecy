import type { Metadata } from "next";
import { StructuredProgramme } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Neurological Rehabilitation",
  description:
    "Physiotherapy and functional rehabilitation focused on mobility, balance, coordination and functional recovery for people with neurological conditions or following neurological procedures.",
};

export default function NeurologicalRehabilitationPage() {
  return (
    <StructuredProgramme
      intro={{
        eyebrow: "Structured programme",
        title: "Neurological Rehabilitation.",
        body: "Physiotherapy and functional rehabilitation focused on mobility, balance, coordination and functional recovery for people with neurological conditions or following neurological procedures.",
      }}
      approachTitle="Support for mobility, balance and everyday function."
      approachBody="Healthecy coordinates physiotherapy-led rehabilitation around neurological recovery needs, alongside associated specialist medical advisors when additional medical guidance is required. We do not replace neurology care or make treatment-outcome promises."
      pillars={[
        { title: "Mobility support", body: "Physiotherapy-led work toward safer, more confident movement in daily life." },
        { title: "Balance and coordination", body: "Structured rehabilitation focused on balance, coordination and functional confidence." },
        { title: "Functional recovery", body: "Support shaped around everyday tasks, independence and the goals that matter to you." },
        { title: "Care coordination", body: "A clearer connection between rehabilitation, treating clinicians and next-step support." },
      ]}
      journey={[
        { title: "Understand the need", body: "We begin with the neurological condition or procedure, current function and the support you are looking for." },
        { title: "Coordinate rehabilitation", body: "We help identify an appropriate physiotherapy and functional-recovery pathway." },
        { title: "Build a practical plan", body: "Support is shaped around mobility, balance, energy and daily routines." },
        { title: "Review and adapt", body: "As recovery evolves, the plan can be reviewed with appropriate professionals." },
      ]}
      noteTitle="Support that complements specialist care"
      noteBody="Healthecy can coordinate rehabilitation alongside a treating neurologist or medical team. Urgent neurological symptoms should always be assessed by an appropriate medical professional."
      ctaTitle="Talk through neurological rehabilitation support."
      ctaBody="Share a brief overview of the current care context and the recovery support you are looking for."
      ctaLabel="Discuss Neurological Rehabilitation"
    />
  );
}
