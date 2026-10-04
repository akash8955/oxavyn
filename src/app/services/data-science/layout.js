export const metadata = {
  title: "Data Science Services | Data Science Solutions | OXAVYN",
  description: "Use data science, analytics and machine learning to uncover patterns, improve decisions and create intelligent business solutions with OXAVYN.",
  keywords: ["data science services"],
  alternates: {
    canonical: "https://oxavyn.com/services/data-science"
  },
  openGraph: {
    title: "Data Science Services | Data Science Solutions | OXAVYN",
    description: "Use data science, analytics and machine learning to uncover patterns, improve decisions and create intelligent business solutions with OXAVYN.",
    url: "https://oxavyn.com/services/data-science",
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
    title: "Data Science Services | Data Science Solutions | OXAVYN",
    description: "Use data science, analytics and machine learning to uncover patterns, improve decisions and create intelligent business solutions with OXAVYN.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};
export default function Layout({ children }) {
  return children;
}
