export const metadata = {
  title: "Technology Internships for Students | OXAVYN",
  description: "Explore OXAVYN technology internship programs designed around practical learning, projects, mentorship, industry skills and career preparation.",
  keywords: ["technology internships for students","software development internship","web development internship","AI internship","student internship"],
  alternates: {
    canonical: "https://oxavyn.com/students/internships"
  },
  openGraph: {
    title: "Technology Internships for Students | OXAVYN",
    description: "Explore OXAVYN technology internship programs designed around practical learning, projects, mentorship, industry skills and career preparation.",
    url: "https://oxavyn.com/students/internships",
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
    title: "Technology Internships for Students | OXAVYN",
    description: "Explore OXAVYN technology internship programs designed around practical learning, projects, mentorship, industry skills and career preparation.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternshipClient from "./InternshipClient";
import "./Internship.css";



export default function InternshipsPage() {
  return (
    <div className="internship-page-wrapper">
      <main className="cinematic-main">
        <InternshipClient />
      </main>
    </div>
  );
}
