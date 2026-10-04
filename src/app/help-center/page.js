export const metadata = {
  title: "OXAVYN Help Center | Technology & Service Support",
  description: "Find answers and helpful information about OXAVYN services, projects, technology solutions, student programs and digital products.",
  
  alternates: {
    canonical: "https://oxavyn.com/help-center"
  },
  openGraph: {
    title: "OXAVYN Help Center | Technology & Service Support",
    description: "Find answers and helpful information about OXAVYN services, projects, technology solutions, student programs and digital products.",
    url: "https://oxavyn.com/help-center",
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
    title: "OXAVYN Help Center | Technology & Service Support",
    description: "Find answers and helpful information about OXAVYN services, projects, technology solutions, student programs and digital products.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import HelpCenterClient from './HelpCenterClient';



export default function HelpCenterPage() {
  return <HelpCenterClient />;
}
