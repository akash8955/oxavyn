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
  title: "Oxavyn",
  description: "A premium modern web application",
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
