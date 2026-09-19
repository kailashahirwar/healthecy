import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LegalPage } from "@/components/legal-page";
import { displayEmail, displayPhone, inquiryEmail, phoneHref, registeredOffice } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Welsphere Global Private Limited, operating as Healthecy, collects, uses, stores, shares and processes personal and health-related information.",
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

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="How we handle your information."
      intro="This Privacy Policy explains how Welsphere Global Private Limited, operating under the brand name Healthecy (“Healthecy”, “we”, “us” or “our”), collects, uses, stores, shares and otherwise processes personal information when you visit our website, contact us, request information, book or use our services, participate in our care programmes, or otherwise interact with us."
      effectiveDate="19 September 2026"
      lastUpdated="19 September 2026"
      preamble={
        <>
          <Block>Welsphere Global Private Limited currently operates Healthecy from Bengaluru, Karnataka, India.</Block>
          <Block>
            We are committed to handling personal information responsibly and maintaining appropriate confidentiality and security in relation to personal and health-related information.
          </Block>
          <Block>
            This Privacy Policy should be read together with our Terms & Conditions and any service-specific consent forms, agreements or notices applicable to the services you use.
          </Block>
        </>
      }
      sections={[
        {
          title: "1. Scope of This Privacy Policy",
          body: (
            <>
              <Block>This Privacy Policy applies to personal information collected or processed through:</Block>
              <List
                items={[
                  "The Healthecy website;",
                  "Website contact and enquiry forms;",
                  "Telephone calls;",
                  "Email and electronic communications;",
                  "WhatsApp or other messaging platforms used for service communication;",
                  "Consultation requests;",
                  "Specialist medical consultations coordinated through Healthecy;",
                  "Physiotherapy services;",
                  "Clinical nutrition services;",
                  "Lifestyle coaching;",
                  "Rehabilitation and recovery programmes;",
                  "Post-hospital and continued-care services;",
                  "International patient support;",
                  "Other services, programmes and interactions provided by Healthecy.",
                ]}
              />
              <Block>
                This Privacy Policy does not govern the independent privacy practices of hospitals, doctors, laboratories, diagnostic centres, payment processors, travel providers, accommodation providers or other third parties that may independently process your information.
              </Block>
              <Block>Such third parties may have their own privacy policies, terms and professional obligations.</Block>
            </>
          ),
        },
        {
          title: "2. Information We May Collect",
          body: (
            <>
              <Block>Depending on the services requested and your interaction with Healthecy, we may collect the following categories of information.</Block>
              <h3>2.1 Personal and Contact Information</h3>
              <Block>This may include:</Block>
              <List
                items={[
                  "Full name;",
                  "Date of birth;",
                  "Age;",
                  "Gender, where relevant;",
                  "Mobile telephone number;",
                  "Email address;",
                  "Residential or correspondence address;",
                  "City, state and country;",
                  "Emergency contact details;",
                  "Preferred method of communication.",
                ]}
              />
              <h3>2.2 Health and Medical Information</h3>
              <Block>Where necessary to provide, coordinate or facilitate requested services, we may collect health-related information, including:</Block>
              <List
                items={[
                  "Medical history;",
                  "Current and previous health conditions;",
                  "Surgical history;",
                  "Hospitalisation information;",
                  "Diagnosis information provided by you or your healthcare professional;",
                  "Prescriptions;",
                  "Medical reports;",
                  "Laboratory reports;",
                  "Imaging reports;",
                  "Medication information;",
                  "Allergies;",
                  "Physiotherapy and rehabilitation information;",
                  "Mobility and functional information;",
                  "Nutritional and dietary information;",
                  "Lifestyle information;",
                  "Information provided during consultations;",
                  "Information relating to recovery and care;",
                  "Other health information voluntarily provided by you or relevant to the services requested.",
                ]}
              />
              <h3>2.3 Appointment and Service Information</h3>
              <Block>We may collect:</Block>
              <List
                items={[
                  "Consultation details;",
                  "Appointment dates and times;",
                  "Service/package details;",
                  "Care programme details;",
                  "Session information;",
                  "Assigned professional;",
                  "Cancellation and rescheduling information;",
                  "Follow-up information;",
                  "Service-related communications.",
                ]}
              />
              <h3>2.4 Payment and Transaction Information</h3>
              <Block>Where applicable, we may collect:</Block>
              <List
                items={[
                  "Payment status;",
                  "Invoice details;",
                  "Transaction references;",
                  "Package purchases;",
                  "Refund information;",
                  "Other information necessary to administer payments.",
                ]}
              />
              <Block>
                Where payments are processed through third-party payment gateways, those providers may independently process payment information according to their own privacy policies and terms.
              </Block>
              <h3>2.5 Website and Technical Information</h3>
              <Block>Depending on the website and technologies used, we may collect:</Block>
              <List
                items={[
                  "IP address;",
                  "Browser type;",
                  "Device information;",
                  "Operating system;",
                  "Website activity;",
                  "Referring pages;",
                  "Cookies;",
                  "Analytics information;",
                  "Technical logs;",
                  "Security-related information.",
                ]}
              />
            </>
          ),
        },
        {
          title: "3. How We Collect Information",
          body: (
            <>
              <Block>We may collect information:</Block>
              <List
                items={[
                  "Directly from you;",
                  "Through website forms;",
                  "During consultations;",
                  "During care assessments;",
                  "Through telephone, email or messaging;",
                  "From your authorised representative or caregiver;",
                  "From a family member where appropriately authorised;",
                  "From a hospital or healthcare professional where legally permitted and necessary for your requested care;",
                  "Through service providers acting on our behalf;",
                  "Through other lawful sources.",
                ]}
              />
              <Block>We seek to collect information that is reasonably necessary for the relevant purpose.</Block>
            </>
          ),
        },
        {
          title: "4. Purposes for Which We Process Personal Information",
          body: (
            <>
              <Block>We may process personal information for purposes including:</Block>
              <List
                items={[
                  "Responding to enquiries;",
                  "Understanding your service requirements;",
                  "Scheduling consultations and appointments;",
                  "Facilitating specialist medical consultations;",
                  "Coordinating care;",
                  "Providing physiotherapy;",
                  "Providing rehabilitation services;",
                  "Providing clinical nutrition services;",
                  "Providing lifestyle coaching;",
                  "Providing post-hospital and continued-care services;",
                  "Providing international patient support;",
                  "Maintaining appropriate service and patient records;",
                  "Communicating with patients and authorised representatives;",
                  "Managing appointments and follow-ups;",
                  "Processing payments and issuing invoices;",
                  "Coordinating with doctors, hospitals and other healthcare professionals;",
                  "Providing customer support;",
                  "Improving our services and website;",
                  "Maintaining website and information security;",
                  "Preventing fraud, misuse or unauthorised activity;",
                  "Complying with applicable legal, regulatory, accounting and record-keeping requirements;",
                  "Establishing, exercising or defending legal rights or claims;",
                  "Performing other lawful purposes permitted under applicable law.",
                ]}
              />
              <Block>We will process personal information for specified and legitimate purposes and in accordance with applicable law.</Block>
            </>
          ),
        },
        {
          title: "5. Processing of Health-Related Information",
          body: (
            <>
              <Block>Health-related information is an important part of the services provided by Healthecy.</Block>
              <Block>
                Where you voluntarily provide medical reports, prescriptions, health history, treatment information, nutritional information or other health-related information, we may process such information for purposes including:
              </Block>
              <List
                items={[
                  "Understanding your care requirements;",
                  "Facilitating appropriate specialist consultation;",
                  "Coordinating physiotherapy;",
                  "Providing clinical nutrition support;",
                  "Providing lifestyle support;",
                  "Planning rehabilitation and recovery services;",
                  "Coordinating continued care;",
                  "Communicating relevant information to professionals involved in your requested care;",
                  "Maintaining appropriate service records.",
                ]}
              />
              <Block>
                Access to health-related information will be restricted, as reasonably appropriate, to persons who require the information for legitimate service, operational, legal or regulatory purposes.
              </Block>
            </>
          ),
        },
        {
          title: "6. Consent and Lawful Processing",
          body: (
            <>
              <Block>Where consent is required under applicable law, Healthecy will obtain consent through an appropriate mechanism.</Block>
              <Block>Depending on the service, consent may be obtained through:</Block>
              <List
                items={[
                  "Website forms;",
                  "Electronic consent;",
                  "Written consent;",
                  "Consultation documentation;",
                  "Service agreements;",
                  "Patient consent forms;",
                  "Other appropriate methods.",
                ]}
              />
              <Block>
                Where applicable law provides a right to withdraw consent, you may request withdrawal using the contact details provided in this Privacy Policy.
              </Block>
              <Block>
                Withdrawal of consent may affect our ability to provide services where the relevant processing is necessary to provide those services.
              </Block>
              <Block>
                Withdrawal will not necessarily affect processing that was lawfully carried out before withdrawal or processing that is otherwise permitted or required by law.
              </Block>
            </>
          ),
        },
        {
          title: "7. Sharing and Disclosure of Personal Information",
          body: (
            <>
              <Block>We may share personal information where reasonably necessary, authorised or legally permitted with:</Block>
              <List
                items={[
                  "Associated specialist medical advisors;",
                  "Physiotherapists;",
                  "Clinical dietitians;",
                  "Lifestyle coaches;",
                  "Psychologists and mental-health professionals where involved;",
                  "Other healthcare professionals involved in the requested services;",
                  "Hospitals and medical institutions;",
                  "Diagnostic laboratories and service providers where relevant;",
                  "Payment service providers;",
                  "IT, hosting, cloud-storage and technology service providers;",
                  "Communication and messaging service providers;",
                  "Professional advisers;",
                  "Accountants, auditors and legal advisers;",
                  "Government authorities, regulators, courts or law-enforcement agencies where required or permitted by law.",
                ]}
              />
              <Block>
                Where third-party service providers process information on our behalf, Healthecy will take reasonable steps to ensure appropriate confidentiality and data-protection safeguards, subject to applicable law.
              </Block>
            </>
          ),
        },
        {
          title: "8. Associated Specialist Medical Advisors",
          body: (
            <>
              <Block>Healthecy may coordinate consultations with associated specialist medical advisors, including specialists such as:</Block>
              <List
                items={[
                  "Orthopaedic specialists;",
                  "Gastroenterologists;",
                  "Endocrinologists;",
                  "Cardiologists;",
                  "Neurologists;",
                  "Oncologists;",
                  "Other appropriately qualified medical professionals.",
                ]}
              />
              <Block>
                These professionals may operate as independent professionals, consultants or advisors and are not necessarily employees of Welsphere Global Private Limited or Healthecy.
              </Block>
              <Block>
                Where you request or authorise a consultation, relevant information may be shared with the concerned professional to the extent reasonably necessary and lawful to provide the requested consultation.
              </Block>
              <Block>Such healthcare professionals may maintain their own professional records and may have separate privacy obligations.</Block>
            </>
          ),
        },
        {
          title: "9. International Patients",
          body: (
            <>
              <Block>Healthecy may provide support to international patients seeking healthcare in India.</Block>
              <Block>Depending on the services requested, information may be processed for:</Block>
              <List
                items={[
                  "Online consultation;",
                  "Medical coordination;",
                  "Hospital coordination;",
                  "Travel-related assistance;",
                  "Accommodation coordination;",
                  "Local assistance;",
                  "Rehabilitation;",
                  "Clinical nutrition;",
                  "Lifestyle support;",
                  "Continued care.",
                ]}
              />
              <Block>
                Where necessary to provide these services, information may be shared with relevant hospitals, doctors, healthcare providers, travel or accommodation providers and other service providers.
              </Block>
              <Block>
                International patient information may be processed or transferred across jurisdictions where necessary to provide the requested services and where permitted by applicable law.
              </Block>
            </>
          ),
        },
        {
          title: "10. Cookies and Similar Technologies",
          body: (
            <>
              <Block>The Healthecy website may use cookies and similar technologies for purposes including:</Block>
              <List
                items={[
                  "Website functionality;",
                  "Security;",
                  "Website performance;",
                  "Analytics;",
                  "Understanding website usage;",
                  "Improving user experience.",
                ]}
              />
              <Block>Where applicable law requires consent for particular cookies or similar technologies, appropriate consent mechanisms will be used.</Block>
              <Block>You may also be able to control cookies through your browser settings. Disabling certain cookies may affect website functionality.</Block>
            </>
          ),
        },
        {
          title: "11. Communications",
          body: (
            <>
              <Block>We may communicate with you through:</Block>
              <List
                items={[
                  "Telephone;",
                  "Email;",
                  "SMS;",
                  "WhatsApp;",
                  "Other messaging platforms;",
                  "Website communications;",
                  "Other contact details provided by you.",
                ]}
              />
              <Block>Communications may relate to:</Block>
              <List
                items={[
                  "Consultations;",
                  "Appointments;",
                  "Services;",
                  "Payments;",
                  "Follow-ups;",
                  "Care coordination;",
                  "Enquiries;",
                  "Administrative matters;",
                  "Other relevant service communications.",
                ]}
              />
              <Block>Where permitted by law, you may opt out of non-essential promotional communications.</Block>
            </>
          ),
        },
        {
          title: "12. Data Security",
          body: (
            <>
              <Block>
                Healthecy takes reasonable technical, organisational and administrative measures designed to protect personal information from unauthorised access, misuse, alteration, disclosure, loss or destruction.
              </Block>
              <Block>Such measures may include:</Block>
              <List
                items={[
                  "Access controls;",
                  "Authentication;",
                  "Restricted access;",
                  "Secure systems;",
                  "Confidentiality obligations;",
                  "Vendor controls;",
                  "Technical monitoring;",
                  "Appropriate backup and recovery measures.",
                ]}
              />
              <Block>However, no internet transmission, electronic system or storage system can be guaranteed to be completely secure.</Block>
            </>
          ),
        },
        {
          title: "13. Personal Data Breaches and Security Incidents",
          body: (
            <Block>
              If Healthecy becomes aware of a personal-data breach or security incident, we will take appropriate steps to investigate, contain, mitigate and remediate the incident and make notifications or disclosures where required by applicable law.
            </Block>
          ),
        },
        {
          title: "14. Data Retention",
          body: (
            <>
              <Block>We may retain personal information for as long as reasonably necessary for:</Block>
              <List
                items={[
                  "Providing services;",
                  "Maintaining patient/service records;",
                  "Follow-up and continued care;",
                  "Legal and regulatory compliance;",
                  "Accounting and tax requirements;",
                  "Dispute resolution;",
                  "Establishing or defending legal claims;",
                  "Preventing fraud;",
                  "Maintaining security.",
                ]}
              />
              <Block>Different categories of information may have different retention periods.</Block>
              <Block>
                Where personal information is no longer required and there is no lawful reason to retain it, we will take appropriate steps to delete, anonymise or otherwise dispose of it in accordance with applicable law and our retention practices.
              </Block>
            </>
          ),
        },
        {
          title: "15. Your Rights",
          body: (
            <>
              <Block>Subject to applicable law and applicable conditions or limitations, you may have rights concerning your personal information, including rights to:</Block>
              <List
                items={[
                  "Request access to applicable personal information;",
                  "Request correction of inaccurate information;",
                  "Request updating of information;",
                  "Request deletion/erasure where applicable;",
                  "Withdraw consent where applicable;",
                  "Raise a grievance;",
                  "Exercise other rights available under applicable data-protection law.",
                ]}
              />
              <Block>Requests may be made using the contact details below.</Block>
              <Block>We may need to verify your identity before processing certain requests.</Block>
            </>
          ),
        },
        {
          title: "16. Children and Minors",
          body: (
            <>
              <Block>Healthecy may provide services to minors where appropriate and permitted by law.</Block>
              <Block>Where parental or guardian consent or authorisation is required, we will seek such consent or authorisation through appropriate means.</Block>
              <Block>Information relating to minors will be processed only for lawful and appropriate purposes.</Block>
            </>
          ),
        },
        {
          title: "17. Third-Party Websites and Services",
          body: (
            <>
              <Block>The Healthecy website may contain links to third-party websites or services.</Block>
              <Block>Healthecy does not control the privacy practices, security, availability or content of third-party websites.</Block>
              <Block>Users should review the privacy policies and terms of third-party websites before providing information to them.</Block>
            </>
          ),
        },
        {
          title: "18. International Data Transfers",
          body: (
            <Block>
              Where services involving international patients require personal information to be processed outside India or shared with entities located outside India, such processing will be carried out subject to applicable law and any applicable restrictions.
            </Block>
          ),
        },
        {
          title: "19. Legal and Regulatory Disclosures",
          body: (
            <>
              <Block>Healthecy may disclose personal information where reasonably necessary or legally required to:</Block>
              <List
                items={[
                  "Comply with applicable law;",
                  "Respond to lawful governmental requests;",
                  "Comply with court orders;",
                  "Protect the rights, property or safety of Healthecy, patients or others;",
                  "Investigate fraud, misuse or security incidents;",
                  "Establish or defend legal claims.",
                ]}
              />
            </>
          ),
        },
        {
          title: "20. Changes to This Privacy Policy",
          body: (
            <>
              <Block>Healthecy may update this Privacy Policy from time to time to reflect changes in:</Block>
              <List
                items={[
                  "Services;",
                  "Technology;",
                  "Business practices;",
                  "Data-processing practices;",
                  "Applicable law;",
                  "Regulatory requirements.",
                ]}
              />
              <Block>The updated Privacy Policy will be published on this page with a revised “Last Updated” date.</Block>
            </>
          ),
        },
        {
          title: "21. Privacy and Grievance Contact",
          body: (
            <>
              <Block>For privacy questions, requests or complaints, please contact:</Block>
              <p>
                Welsphere Global Private Limited
                <br />
                Brand: Healthecy
                <br />
                Email:{" "}
                <a className="font-semibold text-accent" href={`mailto:${inquiryEmail}`}>
                  {inquiryEmail}
                </a>{" "}
                or{" "}
                <a className="font-semibold text-accent" href={`mailto:${displayEmail}`}>
                  {displayEmail}
                </a>
                <br />
                Phone:{" "}
                <a className="font-semibold text-accent" href={phoneHref}>
                  {displayPhone}
                </a>
                <br />
                Registered Office: {registeredOffice}
              </p>
              <Block>We will endeavour to address privacy-related requests and grievances within the period required by applicable law.</Block>
            </>
          ),
        },
        {
          title: "22. Governing Law",
          body: (
            <>
              <Block>This Privacy Policy is governed by the applicable laws of India.</Block>
              <Block>
                Any dispute relating to this Privacy Policy shall be dealt with in accordance with applicable Indian law and the applicable jurisdiction provisions governing Welsphere Global Private Limited.
              </Block>
              <Block>
                Important: This Privacy Policy is intended to provide transparency regarding Healthecy’s information practices. It should be reviewed by qualified Indian legal counsel before publication and whenever there is a material change to Healthecy’s services, technology, data-processing practices or applicable law.
              </Block>
            </>
          ),
        },
      ]}
    />
  );
}
