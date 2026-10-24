import { redirect } from 'next/navigation';
import connectToDatabase from '@/lib/db';
import Settings from '@/models/Settings';
import './StudentBanner.css';

export const metadata = {
  title: "Students | OXAVYN",
  description: "Oxavyn Students - Something big is coming soon. Stay tuned for transformative technology learning and mentorship programs.",
  alternates: {
    canonical: "https://oxavyn.com/students"
  },
  openGraph: {
    title: "Students | OXAVYN",
    description: "Oxavyn Students - Something big is coming soon. Stay tuned for transformative technology learning and mentorship programs.",
    url: "https://oxavyn.com/students",
    siteName: "Oxavyn",
    images: [
      {
        url: "/images/student_banner.png",
        width: 1808,
        height: 870,
        alt: "Oxavyn Students - Something Big Is Coming Soon"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Students | OXAVYN",
    description: "Oxavyn Students - Something big is coming soon. Stay tuned for transformative technology learning and mentorship programs.",
    images: ["/images/student_banner.png"],
  },
};

export const dynamic = 'force-dynamic';

export default async function StudentsPage() {
  await connectToDatabase();
  const settingsDoc = await Settings.findOne({ key: 'showStudentSections' }).lean();
  const showStudentSections = settingsDoc ? settingsDoc.value !== false : true;

  // When toggle is ON, student dropdown feature is enabled and banner page is hidden
  if (showStudentSections) {
    redirect('/students/internships');
  }

  return (
    <main className="student-banner-page" id="student-banner-page">
      <h1 className="student-banner-sr-only">Oxavyn Students - Something Big Is Coming Soon</h1>
      <div 
        className="student-banner-bg" 
        id="student-banner-bg"
        role="img" 
        aria-label="Oxavyn Students - Something big is coming soon. Learn, Grow, Get Mentored, Be Future Ready." 
      />
    </main>
  );
}
