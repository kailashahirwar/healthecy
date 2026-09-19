import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { displayPhone, inquiryEmail, phoneHref, registeredOffice } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms governing use of the Healthecy website and services provided by Welsphere Global Private Limited.",
};

function List({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Block({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="Using the Healthecy website."
      intro="These Terms & Conditions (“Terms”) govern your access to and use of the Healthecy website and the services provided by Welsphere Global Private Limited, operating under the brand name Healthecy (“Healthecy”, “we”, “us” or “our”)."
      effectiveDate="19 September 2026"
      lastUpdated="19 September 2026"
      preamble={
        <>
          <Block>Welsphere Global Private Limited currently operates Healthecy from Bengaluru, Karnataka, India.</Block>
          <Block>
            By accessing the Healthecy website, submitting an enquiry, requesting a consultation, booking an appointment, purchasing a service or care programme, or otherwise using our services, you acknowledge that you have read, understood and agreed to these Terms, subject to applicable law.
          </Block>
          <Block>If you do not agree with these Terms, please do not use the website or services.</Block>
        </>
      }
      sections={[
        {
          title: "1. About Healthecy",
          body: (
            <>
              <Block>Healthecy is a healthcare support and continued-care provider offering services including:</Block>
              <List
                items={[
                  "Physiotherapy;",
                  "Physical rehabilitation;",
                  "Clinical nutrition;",
                  "Lifestyle coaching;",
                  "Post-surgical recovery support;",
                  "Post-hospital care;",
                  "Neurological rehabilitation;",
                  "Musculoskeletal care;",
                  "Clinical nutrition and specialised feeding support;",
                  "Healthy ageing and geriatric support;",
                  "Care coordination;",
                  "Access to associated specialist medical advisors;",
                  "International patient support;",
                  "Other related services offered from time to time.",
                ]}
              />
              <Block>Healthecy is operated by Welsphere Global Private Limited.</Block>
            </>
          ),
        },
        {
          title: "2. Healthecy Is Not a Hospital",
          body: (
            <>
              <Block>Healthecy is a care and recovery service provider and is not a hospital.</Block>
              <Block>Healthecy’s services are intended to support patients during appropriate recovery, rehabilitation, nutrition, lifestyle and continued-care stages and do not replace:</Block>
              <List
                items={[
                  "Emergency medical services;",
                  "Hospitals;",
                  "A treating physician;",
                  "A surgeon;",
                  "A specialist physician;",
                  "Any other qualified healthcare professional responsible for the patient’s medical treatment.",
                ]}
              />
              <Block>Where medical treatment is required, patients should consult the appropriate qualified healthcare professional or healthcare institution.</Block>
            </>
          ),
        },
        {
          title: "3. Nature of Healthecy’s Services",
          body: (
            <>
              <Block>Depending on the patient’s needs and professional assessment, Healthecy may coordinate or provide:</Block>
              <List
                items={[
                  "Physiotherapy;",
                  "Rehabilitation;",
                  "Clinical nutrition;",
                  "Lifestyle coaching;",
                  "Post-surgical recovery support;",
                  "Post-hospital recovery support;",
                  "Continued-care support;",
                  "Specialist medical consultation coordination;",
                  "International patient support.",
                ]}
              />
              <Block>The services provided to an individual will depend on their circumstances, professional assessment, availability and the services purchased.</Block>
            </>
          ),
        },
        {
          title: "4. Specialist Medical Advisors",
          body: (
            <>
              <Block>Healthecy may coordinate access to associated specialist medical advisors, including:</Block>
              <List
                items={[
                  "Orthopaedic specialists;",
                  "Gastroenterologists;",
                  "Endocrinologists;",
                  "Cardiologists;",
                  "Neurologists;",
                  "Oncologists;",
                  "Other appropriately qualified medical specialists.",
                ]}
              />
              <Block>
                Such doctors may be independent professionals, consultants or advisors and are not necessarily employees of Welsphere Global Private Limited or Healthecy.
              </Block>
              <Block>
                The relevant healthcare professional is responsible for their own professional medical judgment, advice, diagnosis, prescription and treatment decisions within their lawful professional scope.
              </Block>
              <Block>
                Healthecy may facilitate consultation, scheduling and care coordination but does not control the independent professional judgment of an associated doctor.
              </Block>
            </>
          ),
        },
        {
          title: "5. Medical Consultation",
          body: (
            <>
              <Block>Medical consultations may be provided in person or remotely where appropriate and available.</Block>
              <Block>
                The healthcare professional may determine that an in-person examination, diagnostic investigation, hospital visit or other form of medical care is required.
              </Block>
              <Block>A consultation does not guarantee:</Block>
              <List
                items={[
                  "A particular diagnosis;",
                  "A particular treatment;",
                  "A prescription;",
                  "Admission to a hospital;",
                  "A particular recovery period;",
                  "A specific medical outcome.",
                ]}
              />
              <Block>Information provided during an online consultation may be subject to limitations associated with remote consultation.</Block>
            </>
          ),
        },
        {
          title: "6. Emergency Medical Care",
          body: (
            <>
              <Block>Healthecy services are not intended for medical emergencies.</Block>
              <Block>
                If you experience a medical emergency or symptoms requiring immediate medical attention, you should immediately contact the appropriate emergency medical service or proceed to the nearest appropriate hospital or emergency facility.
              </Block>
              <Block>You should not delay emergency medical care because you are waiting for a Healthecy consultation, response or appointment.</Block>
            </>
          ),
        },
        {
          title: "7. Physiotherapy and Rehabilitation",
          body: (
            <>
              <Block>Physiotherapy and rehabilitation services are provided based on appropriate professional assessment.</Block>
              <Block>The nature, duration, frequency and progression of treatment may vary depending on:</Block>
              <List
                items={[
                  "Medical condition;",
                  "Surgical history;",
                  "Functional capacity;",
                  "Symptoms;",
                  "Pain;",
                  "Medical advice;",
                  "Patient response;",
                  "Professional assessment;",
                  "Other relevant circumstances.",
                ]}
              />
              <Block>Patients must provide accurate and relevant health information.</Block>
              <Block>
                Physiotherapy and rehabilitation outcomes vary between individuals, and Healthecy does not guarantee a particular clinical or functional outcome.
              </Block>
            </>
          ),
        },
        {
          title: "8. Clinical Nutrition",
          body: (
            <>
              <Block>
                Clinical nutrition services may include nutritional assessment, dietary guidance, meal planning and related support based on the individual’s requirements and available health information.
              </Block>
              <Block>Patients should disclose relevant:</Block>
              <List
                items={[
                  "Medical conditions;",
                  "Medications;",
                  "Allergies;",
                  "Food restrictions;",
                  "Dietary requirements;",
                  "Relevant medical history.",
                ]}
              />
              <Block>Clinical nutrition services do not replace medical treatment where medical treatment is required.</Block>
              <Block>No specific weight, nutritional, disease-management or health outcome is guaranteed.</Block>
            </>
          ),
        },
        {
          title: "9. Lifestyle Coaching",
          body: (
            <>
              <Block>Lifestyle coaching may include support relating to:</Block>
              <List
                items={[
                  "Physical activity;",
                  "General lifestyle habits;",
                  "Behavioural support;",
                  "Sleep and recovery habits;",
                  "Health-supportive routines;",
                  "General wellness.",
                ]}
              />
              <Block>Lifestyle coaching does not replace medical diagnosis or medical treatment.</Block>
              <Block>Where a health condition requires medical care, the patient should consult an appropriately qualified healthcare professional.</Block>
            </>
          ),
        },
        {
          title: "10. Post-Hospital and Continued Care",
          body: (
            <>
              <Block>Healthecy may provide ongoing care and recovery support after:</Block>
              <List
                items={[
                  "Hospitalisation;",
                  "Surgery;",
                  "Joint replacement;",
                  "Cancer treatment;",
                  "Neurological procedures;",
                  "Other medical treatment;",
                  "Prolonged illness.",
                ]}
              />
              <Block>Such support may include physiotherapy, rehabilitation, clinical nutrition, lifestyle coaching and care coordination.</Block>
              <Block>Healthecy does not assume responsibility for medical treatment provided by a hospital, treating doctor or independent healthcare professional.</Block>
              <Block>Patients should continue to follow appropriate instructions and follow-up recommendations provided by their treating medical professionals.</Block>
            </>
          ),
        },
        {
          title: "11. Individual Assessment and Care Planning",
          body: (
            <>
              <Block>Services are provided according to the individual’s circumstances and appropriate professional assessment.</Block>
              <Block>Healthecy or the relevant healthcare professional may modify, postpone, suspend or discontinue a service where:</Block>
              <List
                items={[
                  "The service is not appropriate;",
                  "Further medical assessment is required;",
                  "The patient’s condition has changed;",
                  "Relevant medical information has not been provided;",
                  "Continuing the service may not be appropriate;",
                  "The patient requires a higher level of medical care;",
                  "Other legitimate professional or safety considerations arise.",
                ]}
              />
              <Block>Where appropriate, the patient may be advised to seek medical or emergency care.</Block>
            </>
          ),
        },
        {
          title: "12. Patient Responsibilities",
          body: (
            <>
              <Block>Patients are responsible for:</Block>
              <List
                items={[
                  "Providing accurate and complete information;",
                  "Disclosing relevant medical history;",
                  "Informing relevant professionals about medications and allergies;",
                  "Providing relevant medical reports and documents;",
                  "Informing Healthecy about significant changes in their health;",
                  "Following appropriate professional recommendations;",
                  "Attending scheduled appointments;",
                  "Following applicable package and session conditions;",
                  "Communicating cancellation or rescheduling requests within the applicable timeframe;",
                  "Providing appropriate consent where required;",
                  "Treating Healthecy employees, professionals, consultants and associated personnel respectfully;",
                  "Using the website and services lawfully.",
                ]}
              />
              <Block>
                Healthecy should not be responsible, to the extent permitted by law, for consequences materially arising from inaccurate, incomplete or deliberately withheld information provided by a patient.
              </Block>
            </>
          ),
        },
        {
          title: "13. Appointments and Availability",
          body: (
            <>
              <Block>Appointments are subject to availability.</Block>
              <Block>Healthecy may confirm, reschedule or cancel an appointment where reasonably necessary.</Block>
              <Block>Patients are expected to attend appointments at the scheduled time.</Block>
              <Block>Specific service or package policies may apply to cancellations, rescheduling, late cancellation and no-shows.</Block>
            </>
          ),
        },
        {
          title: "14. Cancellation, Rescheduling and No-Shows",
          body: (
            <>
              <Block>Patients may cancel or reschedule appointments according to the applicable service policy communicated at the time of booking or purchase.</Block>
              <Block>Late cancellations and missed appointments may result in:</Block>
              <List
                items={[
                  "Session deduction;",
                  "Cancellation charges;",
                  "Loss of appointment;",
                  "Other applicable consequences.",
                ]}
              />
              <Block>Any specific cancellation policy communicated at the time of purchase will form part of the applicable service terms, subject to applicable law.</Block>
            </>
          ),
        },
        {
          title: "15. Packages and Sessions",
          body: (
            <>
              <Block>Where a service is purchased as a package:</Block>
              <List
                items={[
                  "The package will include the services and number of sessions specified at purchase;",
                  "The package will be subject to its stated validity period;",
                  "Sessions may be subject to cancellation and no-show conditions;",
                  "Packages may not be transferable unless expressly agreed by Healthecy;",
                  "Unused sessions may expire according to the applicable package terms;",
                  "Refunds will be governed by the applicable refund policy.",
                ]}
              />
            </>
          ),
        },
        {
          title: "16. Fees and Payments",
          body: (
            <>
              <Block>Fees will be communicated before or at the time of booking or purchase.</Block>
              <Block>Depending on the service, payment may be required:</Block>
              <List
                items={[
                  "In advance;",
                  "At booking;",
                  "On a session basis;",
                  "According to an agreed payment schedule.",
                ]}
              />
              <Block>Applicable taxes, including GST where legally applicable, may be charged.</Block>
              <Block>Payments may be processed through third-party payment providers.</Block>
            </>
          ),
        },
        {
          title: "17. Refunds",
          body: (
            <>
              <Block>Refund eligibility will depend on the service purchased and the applicable refund policy.</Block>
              <Block>Where a refund is approved, it may be processed through the original payment method or another appropriate method.</Block>
              <Block>Refund calculations may take into account:</Block>
              <List
                items={[
                  "Services already provided;",
                  "Sessions already used;",
                  "Third-party charges;",
                  "Applicable taxes;",
                  "Cancellation conditions;",
                  "Other applicable contractual terms.",
                ]}
              />
              <Block>Nothing in these Terms is intended to exclude or restrict any mandatory consumer rights or remedies available under applicable Indian law.</Block>
            </>
          ),
        },
        {
          title: "18. No Guarantee of Results",
          body: (
            <>
              <Block>Healthcare and rehabilitation outcomes vary between individuals.</Block>
              <Block>Healthecy does not guarantee:</Block>
              <List
                items={[
                  "Complete recovery;",
                  "Elimination of pain;",
                  "Restoration of a particular level of mobility;",
                  "Weight loss;",
                  "Weight gain;",
                  "Muscle gain;",
                  "Disease improvement;",
                  "Prevention of complications;",
                  "A particular rehabilitation timeline;",
                  "A specific nutritional outcome;",
                  "A specific lifestyle outcome;",
                  "Any specific medical result.",
                ]}
              />
              <Block>Professional recommendations are based on available information, professional assessment and professional judgment.</Block>
            </>
          ),
        },
        {
          title: "19. Medical Records and Information",
          body: (
            <>
              <Block>Patients are responsible for providing accurate information and relevant medical documents where required for appropriate service delivery.</Block>
              <Block>Healthecy may maintain appropriate patient/service records for:</Block>
              <List
                items={[
                  "Service delivery;",
                  "Care coordination;",
                  "Follow-up;",
                  "Administrative purposes;",
                  "Legal and regulatory compliance;",
                  "Record keeping;",
                  "Other lawful purposes.",
                ]}
              />
              <Block>
                The processing of personal and health information is governed by the Healthecy{" "}
                <Link className="font-semibold text-accent" href="/privacy">
                  Privacy Policy
                </Link>{" "}
                and applicable law.
              </Block>
            </>
          ),
        },
        {
          title: "20. Third-Party Healthcare Professionals and Institutions",
          body: (
            <>
              <Block>Healthecy may coordinate with third parties including:</Block>
              <List
                items={[
                  "Hospitals;",
                  "Specialist doctors;",
                  "Laboratories;",
                  "Diagnostic centres;",
                  "Other healthcare professionals;",
                  "Healthcare institutions.",
                ]}
              />
              <Block>Such third parties may operate independently and may have their own professional responsibilities, terms and privacy policies.</Block>
              <Block>Healthecy does not control the independent clinical decisions, treatment, availability or professional conduct of independent third parties.</Block>
            </>
          ),
        },
        {
          title: "21. International Patient Support",
          body: (
            <>
              <Block>Healthecy may provide coordinated support to international patients seeking healthcare in India.</Block>
              <Block>Services may include:</Block>
              <List
                items={[
                  "Online consultation coordination;",
                  "Medical coordination;",
                  "Hospital coordination;",
                  "Travel-related assistance;",
                  "Accommodation assistance;",
                  "Local assistance;",
                  "Post-treatment rehabilitation;",
                  "Clinical nutrition;",
                  "Lifestyle support;",
                  "Continued care.",
                ]}
              />
              <Block>International patients remain responsible for:</Block>
              <List
                items={[
                  "Passport and travel documentation;",
                  "Visa and immigration requirements;",
                  "Travel arrangements;",
                  "Personal insurance;",
                  "Third-party medical expenses;",
                  "Accommodation charges;",
                  "Compliance with applicable laws and requirements.",
                ]}
              />
              <Block>Healthecy does not guarantee:</Block>
              <List
                items={[
                  "Visa approval;",
                  "Immigration approval;",
                  "Hospital admission;",
                  "Availability of a particular doctor;",
                  "Availability of accommodation;",
                  "Travel arrangements;",
                  "Treatment outcomes;",
                  "Recovery outcomes;",
                  "Third-party services.",
                ]}
              />
            </>
          ),
        },
        {
          title: "22. Travel, Accommodation and Other Third-Party Services",
          body: (
            <>
              <Block>Where Healthecy assists with travel, accommodation, transportation or other local arrangements, those services may be provided by independent third parties.</Block>
              <Block>Healthecy may assist with coordination but does not necessarily provide the underlying third-party service.</Block>
              <Block>Third-party terms, prices, cancellation policies and liabilities may apply separately.</Block>
            </>
          ),
        },
        {
          title: "23. Website Information",
          body: (
            <>
              <Block>Information published on the Healthecy website is intended for general informational purposes.</Block>
              <Block>Website information should not be treated as a substitute for an individual medical assessment or professional healthcare advice.</Block>
              <Block>Website information may be updated, changed or corrected from time to time.</Block>
              <Block>Healthecy does not guarantee that every item of website information is complete, current or suitable for every individual.</Block>
            </>
          ),
        },
        {
          title: "24. User-Submitted Information",
          body: (
            <>
              <Block>Users must not knowingly submit:</Block>
              <List
                items={[
                  "False information;",
                  "Fraudulent documents;",
                  "Misleading information;",
                  "Malicious software;",
                  "Unlawful content;",
                  "Content that infringes another person’s rights.",
                ]}
              />
              <Block>
                Healthecy may suspend or refuse services where reasonably necessary because of fraud, misuse, unlawful activity, security concerns or material breach of these Terms.
              </Block>
            </>
          ),
        },
        {
          title: "25. Website Use",
          body: (
            <>
              <Block>Users must not:</Block>
              <List
                items={[
                  "Attempt unauthorised access;",
                  "Interfere with website operation;",
                  "Introduce malicious code;",
                  "Attempt to compromise website security;",
                  "Scrape or reproduce protected content without permission;",
                  "Impersonate another person;",
                  "Use the website for unlawful purposes;",
                  "Misuse enquiry or contact forms;",
                  "Use the website to harass or threaten staff or professionals.",
                ]}
              />
            </>
          ),
        },
        {
          title: "26. Intellectual Property",
          body: (
            <>
              <Block>
                Unless otherwise stated, the Healthecy name, brand, logo, website design, text, graphics, photographs, videos, documents and other materials are owned by or licensed to Welsphere Global Private Limited or the relevant rights holders.
              </Block>
              <Block>
                No material may be reproduced, modified, distributed, commercially exploited or republished without appropriate permission, except where permitted by applicable law.
              </Block>
            </>
          ),
        },
        {
          title: "27. Communications",
          body: (
            <>
              <Block>Healthecy may communicate with users through:</Block>
              <List
                items={[
                  "Telephone;",
                  "Email;",
                  "SMS;",
                  "WhatsApp;",
                  "Other messaging platforms;",
                  "Other communication channels provided by the user.",
                ]}
              />
              <Block>Users are responsible for ensuring that their contact information is accurate.</Block>
              <Block>Electronic communications may be subject to technical limitations and reasonable security risks.</Block>
            </>
          ),
        },
        {
          title: "28. Privacy",
          body: (
            <>
              <Block>
                Personal information collected through the website and services will be handled in accordance with the Healthecy{" "}
                <Link className="font-semibold text-accent" href="/privacy">
                  Privacy Policy
                </Link>
                .
              </Block>
              <Block>The Privacy Policy forms part of the overall terms governing use of Healthecy’s website and services.</Block>
            </>
          ),
        },
        {
          title: "29. Limitation of Liability",
          body: (
            <>
              <Block>To the maximum extent permitted by applicable law, Healthecy shall not be responsible for losses arising directly from circumstances including:</Block>
              <List
                items={[
                  "Materially inaccurate or incomplete information provided by a patient;",
                  "Failure to disclose relevant information;",
                  "Failure to follow reasonable professional instructions;",
                  "Missed appointments;",
                  "Independent third-party healthcare services;",
                  "Independent doctors or hospitals;",
                  "Travel or accommodation services provided by third parties;",
                  "Events beyond Healthecy’s reasonable control;",
                  "Technical failures outside Healthecy’s reasonable control.",
                ]}
              />
              <Block>Nothing in these Terms is intended to exclude or limit liability that cannot legally be excluded or limited under applicable Indian law.</Block>
              <Block>Nothing in these Terms limits a patient’s statutory consumer rights or other rights that cannot legally be waived.</Block>
            </>
          ),
        },
        {
          title: "30. Indemnification",
          body: (
            <>
              <Block>To the extent permitted by applicable law, a user may be responsible for losses, claims, costs or liabilities arising from the user’s:</Block>
              <List
                items={[
                  "Fraudulent conduct;",
                  "Deliberately misleading information;",
                  "Unlawful conduct;",
                  "Material breach of these Terms;",
                  "Misuse of Healthecy’s website or services;",
                  "Infringement of another person’s rights.",
                ]}
              />
              <Block>Any indemnification obligation shall apply only to the extent permitted by applicable law.</Block>
            </>
          ),
        },
        {
          title: "31. Force Majeure",
          body: (
            <>
              <Block>Healthecy will not be responsible for delay, interruption or inability to provide services caused by circumstances beyond its reasonable control, including:</Block>
              <List
                items={[
                  "Natural disasters;",
                  "Epidemics or pandemics;",
                  "Government restrictions;",
                  "Civil disturbances;",
                  "War;",
                  "Terrorism;",
                  "Strikes;",
                  "Power failures;",
                  "Internet or telecommunications failures;",
                  "Infrastructure failures;",
                  "Other events beyond reasonable control.",
                ]}
              />
              <Block>Where reasonably possible, Healthecy will take reasonable steps to minimise disruption.</Block>
            </>
          ),
        },
        {
          title: "32. Suspension or Termination",
          body: (
            <>
              <Block>Healthecy may suspend or terminate access to the website or services where reasonably necessary because of:</Block>
              <List
                items={[
                  "Non-payment;",
                  "Fraud;",
                  "Material breach of these Terms;",
                  "Abuse or threatening conduct;",
                  "Unlawful activity;",
                  "Misuse of services;",
                  "Security concerns;",
                  "Other circumstances permitted by law.",
                ]}
              />
              <Block>Any payment obligations already accrued will remain payable, subject to applicable law and any applicable refund rights.</Block>
            </>
          ),
        },
        {
          title: "33. Complaints and Grievances",
          body: (
            <>
              <Block>Patients may raise service-related complaints or grievances using:</Block>
              <p>
                Welsphere Global Private Limited
                <br />
                Brand: Healthecy
                <br />
                Grievance Contact: [INSERT NAME / DESIGNATION]
                <br />
                Email:{" "}
                <a className="font-semibold text-accent" href={`mailto:${inquiryEmail}`}>
                  {inquiryEmail}
                </a>
                <br />
                Phone:{" "}
                <a className="font-semibold text-accent" href={phoneHref}>
                  {displayPhone}
                </a>
                <br />
                Registered Office: {registeredOffice}
              </p>
              <Block>Healthecy will endeavour to review and address complaints within the applicable timeframe required by law and its internal grievance procedures.</Block>
            </>
          ),
        },
        {
          title: "34. Governing Law",
          body: (
            <>
              <Block>These Terms shall be governed by the laws of India.</Block>
              <Block>
                Subject to applicable law, disputes arising from or relating to these Terms or the services shall be subject to the jurisdiction of the competent courts having jurisdiction over the relevant matter and parties.
              </Block>
              <Block>The final jurisdiction clause should be confirmed by legal counsel based on the registered office and applicable legal requirements.</Block>
            </>
          ),
        },
        {
          title: "35. Changes to These Terms",
          body: (
            <>
              <Block>Healthecy may update these Terms from time to time to reflect:</Block>
              <List
                items={[
                  "Changes in services;",
                  "Changes in business practices;",
                  "Changes in technology;",
                  "Changes in applicable law;",
                  "Regulatory requirements.",
                ]}
              />
              <Block>The updated version will be published on the website with a revised “Last Updated” date.</Block>
              <Block>Where required by applicable law, appropriate notice or consent will be provided.</Block>
            </>
          ),
        },
        {
          title: "36. Severability",
          body: (
            <Block>
              If any provision of these Terms is determined by a competent authority to be invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.
            </Block>
          ),
        },
        {
          title: "37. No Waiver",
          body: (
            <Block>
              Failure by Healthecy to enforce any provision of these Terms on one occasion does not constitute a waiver of the right to enforce that provision or any other provision in the future.
            </Block>
          ),
        },
        {
          title: "38. Entire Agreement",
          body: (
            <>
              <Block>These Terms, together with:</Block>
              <List
                items={[
                  "The Healthecy Privacy Policy;",
                  "Applicable service-specific terms;",
                  "Patient consent forms;",
                  "Consultation terms;",
                  "Package terms;",
                  "Cancellation and refund policies;",
                  "International patient agreements;",
                  "Other documents expressly incorporated into the relevant service;",
                ]}
              />
              <Block>form the applicable agreement governing the use of Healthecy’s website and services, subject to applicable law.</Block>
              <Block>
                Where a service-specific agreement contains terms specifically applicable to that service, those terms will apply to that service to the extent they are consistent with applicable law.
              </Block>
            </>
          ),
        },
        {
          title: "39. Contact Information",
          body: (
            <>
              <Block>For questions regarding these Terms or Healthecy services:</Block>
              <p>
                Welsphere Global Private Limited
                <br />
                Brand: Healthecy
                <br />
                Registered/Operating Location: Bengaluru, Karnataka, India
                <br />
                Official Email:{" "}
              <a className="font-semibold text-accent" href={`mailto:${inquiryEmail}`}>
                {inquiryEmail}
                </a>
                <br />
                Phone:{" "}
                <a className="font-semibold text-accent" href={phoneHref}>
                  {displayPhone}
                </a>
                <br />
                Registered Office: {registeredOffice}
              </p>
              <Block>
                LEGAL REVIEW NOTICE: These Terms & Conditions are intended as a comprehensive website draft for Healthecy. They should be reviewed and approved by qualified Indian legal counsel before publication, particularly in relation to healthcare services, professional liability, consumer protection, data protection, online consultations, international patients, refunds, limitation of liability, indemnification and jurisdiction.
              </Block>
            </>
          ),
        },
      ]}
    />
  );
}
