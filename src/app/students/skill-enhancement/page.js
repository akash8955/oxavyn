export const metadata = {
  title: "Technology Skill Enhancement Programs | OXAVYN",
  description: "Develop practical technology skills with OXAVYN programs covering web development, DSA, core subjects, resumes, self-paced learning and mentorship.",
  keywords: ["technology skill development programs"],
  alternates: {
    canonical: "https://oxavyn.com/students/skill-enhancement"
  },
  openGraph: {
    title: "Technology Skill Enhancement Programs | OXAVYN",
    description: "Develop practical technology skills with OXAVYN programs covering web development, DSA, core subjects, resumes, self-paced learning and mentorship.",
    url: "https://oxavyn.com/students/skill-enhancement",
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
    title: "Technology Skill Enhancement Programs | OXAVYN",
    description: "Develop practical technology skills with OXAVYN programs covering web development, DSA, core subjects, resumes, self-paced learning and mentorship.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import SkillEnhancementClient from "./SkillEnhancementClient";
import "./SkillEnhancement.css";



export default function SkillEnhancementPage() {
  return <SkillEnhancementClient />;
}
