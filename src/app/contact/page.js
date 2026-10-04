export const metadata = {
  title: "Contact OXAVYN | Web, App & AI Solutions",
  description: "Contact OXAVYN to discuss web development, mobile applications, AI solutions, custom software, automation and digital product development.",
  keywords: ["contact web development company"],
  alternates: {
    canonical: "https://oxavyn.com/contact"
  },
  openGraph: {
    title: "Contact OXAVYN | Web, App & AI Solutions",
    description: "Contact OXAVYN to discuss web development, mobile applications, AI solutions, custom software, automation and digital product development.",
    url: "https://oxavyn.com/contact",
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
    title: "Contact OXAVYN | Web, App & AI Solutions",
    description: "Contact OXAVYN to discuss web development, mobile applications, AI solutions, custom software, automation and digital product development.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import ContactNew from '@/components/ContactNew';



export default function ContactPage() {
  return (
    <main>
      <ContactNew />
    </main>
  );
}
