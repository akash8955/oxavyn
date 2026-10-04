export const metadata = {
  title: "Education Technology Solutions | EdTech Software | OXAVYN",
  description: "OXAVYN develops education technology solutions for schools, colleges, universities, coaching centers and training organizations.",
  keywords: ["education technology solutions"],
  alternates: {
    canonical: "https://oxavyn.com/industries/education"
  },
  openGraph: {
    title: "Education Technology Solutions | EdTech Software | OXAVYN",
    description: "OXAVYN develops education technology solutions for schools, colleges, universities, coaching centers and training organizations.",
    url: "https://oxavyn.com/industries/education",
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
    title: "Education Technology Solutions | EdTech Software | OXAVYN",
    description: "OXAVYN develops education technology solutions for schools, colleges, universities, coaching centers and training organizations.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import EducationClient from "./EducationClient";
import "./Education.css";



export default function EducationIndustryPage() {
  return <EducationClient />;
}
