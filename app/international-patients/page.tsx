import type { Metadata } from "next";
import { ServiceLayout } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "International Patient Support",
  description:
    "Healthecy provides coordinated support for international patients seeking healthcare in India, from online consultation and medical coordination to travel, accommodation, local assistance and continued care.",
};

export default function InternationalPatientsPage() {
  return (
    <ServiceLayout
      intro={{
        eyebrow: "International Patient Support",
        title: "Healthcare in India, coordinated with clarity.",
        body: [
          "Healthecy provides coordinated support for international patients seeking healthcare in India, from online consultation and medical coordination to travel, accommodation and local assistance.",
          "Following treatment, our team can also coordinate appropriate rehabilitation, clinical nutrition, lifestyle support and continued care based on the patient’s needs.",
        ],
      }}
      sectionTitle="International Patient Journey"
      columns={3}
      numbered
      cards={[
        {
          title: "Initial Consultation & Medical Assessment",
          body: "We help understand the patient’s medical requirements and connect them with the appropriate specialist/medical team for consultation and treatment planning.",
        },
        {
          title: "Treatment Planning & Coordination",
          body: "Based on the patient’s requirements, we help coordinate appointments, medical consultations, hospital/procedure-related arrangements and the overall care plan.",
        },
        {
          title: "Travel & Flight Assistance",
          body: "We provide coordination and support regarding the patient’s travel arrangements, including flight planning and other practical requirements associated with travelling to India for treatment.",
        },
        {
          title: "Accommodation & Stay Support",
          body: "We assist with suitable accommodation and local arrangements during the patient’s stay, depending on their individual requirements and treatment schedule.",
        },
        {
          title: "Priority Medical Coordination",
          body: "Where appropriate, we help coordinate timely access to the relevant specialist consultations, hospitals and healthcare professionals involved in the patient’s care.",
        },
        {
          title: "Hospital / Procedure Coordination",
          body: "We coordinate with the relevant healthcare providers for consultations, investigations, procedures, surgeries or other planned medical care, as applicable.",
        },
        {
          title: "Recovery & Rehabilitation",
          body: "After the procedure or hospital treatment, Healthecy can continue supporting the patient through physiotherapy, rehabilitation, clinical nutrition, lifestyle support and other appropriate continued-care services.",
        },
        {
          title: "Post-Treatment & Continued Care",
          body: "Our support does not necessarily end when the patient leaves the hospital. We can continue coordinating recovery and care according to the patient’s needs, including support that may continue after returning home where applicable.",
        },
        {
          title: "Return Journey & Going Back Home",
          body: "Once the patient’s treatment and recovery phase in India is complete and they are medically cleared to travel, we can assist with coordinating their return journey and practical arrangements for going back home.",
        },
      ]}
      panelNote="Healthecy does not guarantee doctor availability, hospital admission, visas, travel documents or treatment outcomes. Medical decisions remain with appropriately qualified healthcare professionals."
      ctaTitle="Planning treatment in India?"
      ctaBody="Tell us your healthcare requirement, home country and preferred city. We will guide you through the next steps."
      ctaLabel="Connect with Our International Care Team"
    />
  );
}
