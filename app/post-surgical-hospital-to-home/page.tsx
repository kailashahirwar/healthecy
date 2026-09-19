import type { Metadata } from "next";
import { StructuredProgramme } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Post-Surgical & Hospital-to-Home Care",
  description:
    "Continued physiotherapy, nutrition and lifestyle support for patients transitioning from hospital or surgery into recovery at home and everyday life.",
};

export default function PostSurgicalHospitalToHomePage() {
  return (
    <StructuredProgramme
      intro={{
        eyebrow: "Structured programme",
        title: "Post-Surgical & Hospital-to-Home Care.",
        body: "Continued physiotherapy, nutrition and lifestyle support for patients transitioning from hospital or surgery into recovery at home and everyday life.",
      }}
      approachTitle="Care that continues after discharge."
      approachBody="Leaving hospital is often the start of a longer recovery period. Healthecy helps coordinate physiotherapy, clinical nutrition and lifestyle support so patients can move from medical treatment into everyday life with clearer ongoing care. Specialist medical advisors are available when additional medical guidance is required."
      pillars={[
        { title: "Physiotherapy", body: "Rehabilitation support for mobility, strength and function after surgery or hospital treatment." },
        { title: "Clinical nutrition", body: "Practical nutrition support during recovery and the return to everyday eating routines." },
        { title: "Lifestyle support", body: "Guidance for sustainable routines as you settle back into home and daily life." },
        { title: "Continuity of care", body: "A connected pathway from hospital discharge through ongoing recovery support." },
      ]}
      journey={[
        { title: "Understand the transition", body: "Share the procedure or hospital stay, current recovery needs and home context." },
        { title: "Coordinate support", body: "We help identify relevant physiotherapy, nutrition and lifestyle pathways." },
        { title: "Support recovery at home", body: "Care is shaped around function, energy, nutrition and everyday routines." },
        { title: "Stay connected", body: "As recovery progresses, support can be reviewed and adapted." },
      ]}
      noteTitle="Important care note"
      noteBody="Healthecy complements the treating surgical or medical team and does not replace post-operative medical follow-up. Acute symptoms after surgery require urgent assessment by the treating team or emergency services."
      ctaTitle="Talk through hospital-to-home support."
      ctaBody="Tell us about the recent treatment or surgery and the recovery support you are looking for."
      ctaLabel="Discuss Hospital-to-Home Care"
    />
  );
}
