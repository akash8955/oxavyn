import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternshipClient from "./InternshipClient";
import "./Internship.css";

export const metadata = {
  title: "Internship Programs | Oxavyn",
  description: "Step into real-world technology experiences designed to help you learn, build, collaborate, and become career ready.",
};

export default function InternshipsPage() {
  return (
    <div className="internship-page-wrapper">
      <main className="cinematic-main">
        <InternshipClient />
      </main>
    </div>
  );
}
