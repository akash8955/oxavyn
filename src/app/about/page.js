export const metadata = {
  title: "About OXAVYN | Technology & Digital Solutions Company",
  description: "Learn about OXAVYN, a technology and digital solutions company focused on web development, mobile apps, AI, software, automation and digital transformation.",
  keywords: ["technology and digital solutions company","software development company","digital transformation company","AI technology company"],
  alternates: {
    canonical: "https://oxavyn.com/about"
  },
  openGraph: {
    title: "About OXAVYN | Technology & Digital Solutions Company",
    description: "Learn about OXAVYN, a technology and digital solutions company focused on web development, mobile apps, AI, software, automation and digital transformation.",
    url: "https://oxavyn.com/about",
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
    title: "About OXAVYN | Technology & Digital Solutions Company",
    description: "Learn about OXAVYN, a technology and digital solutions company focused on web development, mobile apps, AI, software, automation and digital transformation.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import AboutEditorial from "../../components/AboutEditorial";


export default function About() {
  return (
    <main>
      <AboutEditorial />
    </main>
  );
}
