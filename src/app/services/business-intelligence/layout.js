export const metadata = {
  title: "Business Intelligence Services | BI Solutions | OXAVYN",
  description: "OXAVYN creates business intelligence solutions, dashboards and reporting systems that help organizations understand performance and make informed decisions.",
  keywords: ["business intelligence services"],
  alternates: {
    canonical: "https://oxavyn.com/services/business-intelligence"
  },
  openGraph: {
    title: "Business Intelligence Services | BI Solutions | OXAVYN",
    description: "OXAVYN creates business intelligence solutions, dashboards and reporting systems that help organizations understand performance and make informed decisions.",
    url: "https://oxavyn.com/services/business-intelligence",
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
    title: "Business Intelligence Services | BI Solutions | OXAVYN",
    description: "OXAVYN creates business intelligence solutions, dashboards and reporting systems that help organizations understand performance and make informed decisions.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};
export default function Layout({ children }) {
  return children;
}
