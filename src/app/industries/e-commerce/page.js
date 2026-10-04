export const metadata = {
  title: "E-commerce Technology Solutions | E-commerce Development | OXAVYN",
  description: "Build connected e-commerce experiences with OXAVYN through web platforms, mobile apps, CRM, inventory, analytics and business automation.",
  keywords: ["e-commerce technology solutions"],
  alternates: {
    canonical: "https://oxavyn.com/industries/e-commerce"
  },
  openGraph: {
    title: "E-commerce Technology Solutions | E-commerce Development | OXAVYN",
    description: "Build connected e-commerce experiences with OXAVYN through web platforms, mobile apps, CRM, inventory, analytics and business automation.",
    url: "https://oxavyn.com/industries/e-commerce",
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
    title: "E-commerce Technology Solutions | E-commerce Development | OXAVYN",
    description: "Build connected e-commerce experiences with OXAVYN through web platforms, mobile apps, CRM, inventory, analytics and business automation.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import EcommerceClient from "./EcommerceClient";
import "./Ecommerce.css";



export default function EcommerceIndustryPage() {
  return <EcommerceClient />;
}
