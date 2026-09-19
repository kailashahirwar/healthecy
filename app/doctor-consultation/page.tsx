import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { ServiceLayout } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Doctor Consultation Coordination",
  description:
    "Healthecy helps patients navigate appropriate medical consultations by understanding their healthcare requirement and coordinating access to associated specialist medical advisors.",
};

const specialists = [
  {
    title: "Orthopaedic Specialist",
    body: "Specialist guidance for bone, joint and musculoskeletal conditions, including patients recovering from orthopaedic procedures and joint replacement.",
  },
  {
    title: "Gastroenterologist",
    body: "Specialist guidance for digestive and gastrointestinal conditions, with appropriate nutrition and lifestyle support alongside medical care.",
  },
  {
    title: "Endocrinologist",
    body: "Specialist guidance for hormonal and metabolic conditions, including diabetes, thyroid and related health concerns.",
  },
  {
    title: "Cardiologist",
    body: "Specialist guidance for cardiovascular and heart-related health concerns, with appropriate rehabilitation, nutrition and lifestyle support where required.",
  },
  {
    title: "Neurologist",
    body: "Specialist guidance for neurological conditions where rehabilitation, mobility, balance, coordination and functional recovery may be required.",
  },
  {
    title: "Oncologist",
    body: "Specialist guidance for patients undergoing or recovering from cancer treatment, with appropriate rehabilitation and clinical nutrition support where required.",
  },
];

const journey = [
  { title: "Understand your requirement", body: "We begin by listening to your healthcare concern, history and the support you are looking for." },
  { title: "Identify the appropriate specialty", body: "We help clarify the type of healthcare professional or clinical partner that may be relevant." },
  { title: "Coordinate the consultation", body: "We support consultation coordination and medical documentation sharing where appropriate." },
  { title: "Support the next step", body: "Where appropriate, we can help coordinate follow-up and related recovery support." },
];

export default function DoctorConsultationPage() {
  return (
    <ServiceLayout
      intro={{
        eyebrow: "Doctor consultation",
        title: "The right consultation can be the first step toward better care.",
        body: "Healthecy helps patients navigate appropriate medical consultations by understanding their healthcare requirement and coordinating access to relevant healthcare professionals and clinical partners.",
      }}
      sectionTitle="Specialist Medical Advisors"
      cards={specialists}
      columns={3}
      extra={
        <>
          <p className="mt-10 max-w-3xl text-lg leading-8 text-muted-foreground">
            Healthecy works with associated specialist medical advisors who provide medical guidance when required. Based on the individual’s needs and appropriate professional assessment, specialist medical guidance may be complemented by ongoing support from our physiotherapists, clinical dietitians, lifestyle coaches and other care professionals.
          </p>
          <h2 className="mt-16 text-4xl font-extrabold tracking-[-0.05em] text-primary">
            How we can support your consultation journey
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {journey.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <CircleCheck size={22} className="text-accent" />
                <h3 className="mt-8 text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </>
      }
      panelNote="Healthecy does not replace doctors or provide every medical specialty. We help coordinate access to associated specialist medical advisors and clinical partners when medical guidance is required."
      ctaTitle="Start with a conversation."
      ctaBody="Tell us what you need and we’ll help you understand the next step."
      ctaLabel="Request a Consultation"
    />
  );
}
