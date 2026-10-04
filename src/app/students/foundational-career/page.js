export const metadata = {
  title: "Student Career & Technology Foundation Programs | OXAVYN",
  description: "Build a strong technology foundation with OXAVYN programs for first-year to final-year students, placement preparation and internship readiness.",
  keywords: ["student career development programs"],
  alternates: {
    canonical: "https://oxavyn.com/students/foundational-career"
  },
  openGraph: {
    title: "Student Career & Technology Foundation Programs | OXAVYN",
    description: "Build a strong technology foundation with OXAVYN programs for first-year to final-year students, placement preparation and internship readiness.",
    url: "https://oxavyn.com/students/foundational-career",
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
    title: "Student Career & Technology Foundation Programs | OXAVYN",
    description: "Build a strong technology foundation with OXAVYN programs for first-year to final-year students, placement preparation and internship readiness.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import FoundationalCareerClient from "./FoundationalCareerClient";
import "./FoundationalCareer.css";



export default function FoundationalCareerPage() {
  return <FoundationalCareerClient />;
}
