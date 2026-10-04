export const metadata = {
  title: "Retail Technology Solutions | Retail Software & Automation | OXAVYN",
  description: "Improve retail operations with OXAVYN solutions for customers, CRM, sales, inventory, ERP, orders, analytics and automation.",
  keywords: ["retail technology solutions"],
  alternates: {
    canonical: "https://oxavyn.com/industries/retail"
  },
  openGraph: {
    title: "Retail Technology Solutions | Retail Software & Automation | OXAVYN",
    description: "Improve retail operations with OXAVYN solutions for customers, CRM, sales, inventory, ERP, orders, analytics and automation.",
    url: "https://oxavyn.com/industries/retail",
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
    title: "Retail Technology Solutions | Retail Software & Automation | OXAVYN",
    description: "Improve retail operations with OXAVYN solutions for customers, CRM, sales, inventory, ERP, orders, analytics and automation.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import RetailClient from "./RetailClient";
import "./Retail.css";



export default function RetailIndustryPage() {
  return <RetailClient />;
}
