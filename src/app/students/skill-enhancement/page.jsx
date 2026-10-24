import React from 'react';
import { redirect } from 'next/navigation';
import connectToDatabase from '@/lib/db';
import Settings from '@/models/Settings';
import SkillEnhancementClient from './SkillEnhancementClient';

export const metadata = {
  title: 'Skill Enhancement Programs | Oxavyn',
  description: 'Learn the technologies and problem-solving skills that help you become confident, capable and career ready.',
};

export const dynamic = 'force-dynamic';

export default async function SkillEnhancementPage() {
  await connectToDatabase();
  const settingsDoc = await Settings.findOne({ key: 'showStudentSections' }).lean();
  const showStudentSections = settingsDoc ? settingsDoc.value !== false : true;

  if (!showStudentSections) {
    redirect('/students');
  }

  return <SkillEnhancementClient />;
}
