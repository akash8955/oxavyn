export const metadata = {
  title: "Healthcare Technology Solutions | Healthcare Software | OXAVYN",
  description: "OXAVYN builds healthcare technology solutions including management systems, CRM, ERP, analytics, automation and connected digital experiences.",
  keywords: ["healthcare technology solutions"],
  alternates: {
    canonical: "https://oxavyn.com/industries/healthcare"
  },
  openGraph: {
    title: "Healthcare Technology Solutions | Healthcare Software | OXAVYN",
    description: "OXAVYN builds healthcare technology solutions including management systems, CRM, ERP, analytics, automation and connected digital experiences.",
    url: "https://oxavyn.com/industries/healthcare",
    siteName: "Oxavyn",
    images: [
      {
        url: "/images/oxavyn-digital-transformation.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Technology Solutions | Healthcare Software | OXAVYN",
    description: "OXAVYN builds healthcare technology solutions including management systems, CRM, ERP, analytics, automation and connected digital experiences.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import HealthcareClient from "./HealthcareClient";
import "./Healthcare.css";



export default function HealthcareIndustryPage() {
  return <HealthcareClient />;
}
