import type { NextConfig } from "next";

const htmlRedirects = [
  "about",
  "clinical-nutrition",
  "contact",
  "digestive-gut-care",
  "doctor-consultation",
  "faq",
  "healthy-ageing-geriatric-care",
  "how-it-works",
  "international-patients",
  "lifestyle-coaching",
  "mental-health-support",
  "metabolic-heart-care",
  "neurological-rehabilitation",
  "onco-recovery",
  "physiotherapy-rehabilitation",
  "post-surgical-hospital-to-home",
  "privacy",
  "services",
  "terms",
  "tube-feed-care",
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  serverExternalPackages: ["nodemailer"],
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      ...htmlRedirects.map((slug) => ({
        source: `/pages/${slug}.html`,
        destination: `/${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
