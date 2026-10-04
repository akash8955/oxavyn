export const metadata = {
  title: "Oxavyn | Web, App & AI Solutions Company",
  description: "Oxavyn builds modern websites, mobile applications, AI solutions and custom software that help businesses grow, automate operations and create better digital experiences.",
  keywords: ["web app and AI solutions company","web development company","app development company","AI solutions company","software development company","digital solutions company"],
  alternates: {
    canonical: "https://oxavyn.com/"
  },
  openGraph: {
    title: "Oxavyn | Web, App & AI Solutions Company",
    description: "Oxavyn builds modern websites, mobile applications, AI solutions and custom software that help businesses grow, automate operations and create better digital experiences.",
    url: "https://oxavyn.com/",
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
    title: "Oxavyn | Web, App & AI Solutions Company",
    description: "Oxavyn builds modern websites, mobile applications, AI solutions and custom software that help businesses grow, automate operations and create better digital experiences.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import HeroSlider from "../../components/HeroSlider";
import LogoMarquee from "../../components/LogoMarquee";
import TrustedPartner from "../../components/TrustedPartner";
import ServiceSolutions from "../../components/ServiceSolutions";
import AIPoweredInnovations from "../../components/AIPoweredInnovations";
import SeamlessIntegrations from "../../components/SeamlessIntegrations";
import EngineeredForDevelopers from "../../components/EngineeredForDevelopers";
import TechStackMarquee from "../../components/TechStackMarquee";
import CoreStrengths from "../../components/CoreStrengths";
import BusinessBenefits from "../../components/BusinessBenefits";
import ConnectedEcosystems from "../../components/ConnectedEcosystems";
import TechnologySolutions from "../../components/TechnologySolutions";

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <LogoMarquee />
      <TrustedPartner />
      <ServiceSolutions />
      <AIPoweredInnovations />
      <SeamlessIntegrations />
      <EngineeredForDevelopers />
      <TechStackMarquee />
      <CoreStrengths />
      <BusinessBenefits />
      <ConnectedEcosystems />
      <TechnologySolutions />
    </main>
  );
}
