import CareerHero from '@/components/CareerHero';
import WhyJoin from '@/components/WhyJoin';
import PerksRecreation from '@/components/PerksRecreation';
import CultureCode from '@/components/CultureCode';
import JobOpenings from '@/components/JobOpenings';

export const metadata = {
  title: 'Careers - Oxavyn',
  description: 'Join a team where ideas become meaningful solutions.',
};

export default function Careers() {
  return (
    <main className="career-page-wrapper">
      <CareerHero />
      <WhyJoin />
      <PerksRecreation />
      <CultureCode />
      <JobOpenings />
    </main>
  );
}
