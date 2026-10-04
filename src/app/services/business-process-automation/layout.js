export const metadata = {
  title: "Business Process Automation Services | OXAVYN",
  description: "OXAVYN helps businesses automate processes, connect systems, reduce repetitive work and create more efficient digital operations.",
  keywords: ["business process automation services"],
  alternates: {
    canonical: "https://oxavyn.com/services/business-process-automation"
  },
  openGraph: {
    title: "Business Process Automation Services | OXAVYN",
    description: "OXAVYN helps businesses automate processes, connect systems, reduce repetitive work and create more efficient digital operations.",
    url: "https://oxavyn.com/services/business-process-automation",
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
    title: "Business Process Automation Services | OXAVYN",
    description: "OXAVYN helps businesses automate processes, connect systems, reduce repetitive work and create more efficient digital operations.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};
export default function Layout({ children }) {
  return children;
}
