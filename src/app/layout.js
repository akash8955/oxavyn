import { Inter, Outfit } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import connectToDatabase from '../lib/db';
import Media from '../models/Media';
import Settings from '../models/Settings';
import { MediaProvider } from '../components/MediaProvider';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://oxavyn.com'),
  title: {
    default: "Oxavyn | Web, App & AI Solutions Company",
    template: "%s | OXAVYN"
  },
  description: "Oxavyn builds modern websites, mobile applications, AI solutions and custom software that help businesses grow, automate operations and create better digital experiences.",
  keywords: ["web app and AI solutions company", "web development company", "app development company", "AI solutions company", "software development company", "digital solutions company"],
  openGraph: {
    title: "Oxavyn | Web, App & AI Solutions Company",
    description: "Oxavyn builds modern websites, mobile applications, AI solutions and custom software that help businesses grow, automate operations and create better digital experiences.",
    url: "https://oxavyn.com",
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

export default async function RootLayout({ children }) {
  let allMedia = [];
  let showStudentSections = true;
  
  try {
    await connectToDatabase();
    const mediaDocs = await Media.find({ isActive: true }).lean();
    allMedia = JSON.parse(JSON.stringify(mediaDocs));
    
    const settingsDoc = await Settings.findOne({ key: 'showStudentSections' }).lean();
    if (settingsDoc && settingsDoc.value !== undefined) {
      showStudentSections = settingsDoc.value;
    }
  } catch (error) {
    console.error("Global fetch failed:", error);
  }

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <MediaProvider initialMedia={allMedia}>
          <Navbar initialShowStudentSections={showStudentSections} />
          {children}
          <Footer />
        </MediaProvider>
      </body>
    </html>
  );
}
