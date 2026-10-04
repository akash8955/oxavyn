export const metadata = {
  title: "Careers at OXAVYN | Technology & Software Jobs",
  description: "Explore career opportunities at OXAVYN and join a growing technology team working across web development, mobile apps, AI, software and digital solutions.",
  keywords: ["technology jobs at OXAVYN"],
  alternates: {
    canonical: "https://oxavyn.com/careers"
  },
  openGraph: {
    title: "Careers at OXAVYN | Technology & Software Jobs",
    description: "Explore career opportunities at OXAVYN and join a growing technology team working across web development, mobile apps, AI, software and digital solutions.",
    url: "https://oxavyn.com/careers",
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
    title: "Careers at OXAVYN | Technology & Software Jobs",
    description: "Explore career opportunities at OXAVYN and join a growing technology team working across web development, mobile apps, AI, software and digital solutions.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import CareerHero from '@/components/CareerHero';
import WhyJoin from '@/components/WhyJoin';
import PerksRecreation from '@/components/PerksRecreation';
import CultureCode from '@/components/CultureCode';
import JobOpenings from '@/components/JobOpenings';



export default function Careers() {
  return (
    <main className="career-page-wrapper">
      <CareerHero />
      <WhyJoin />
      <PerksRecreation />
      <CultureCode />
      <JobOpenings />
    </main>
  );
}
