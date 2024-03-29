import React from 'react';

import AboutSection from './components/about-section';
import TechSection from './components/tech-section';
import EducationSection from './components/education-section';
import CompanySection from './components/company-section';

export default function ProfileLayout({ profile, data, locale }: any) {
  return (
    <main>
      <AboutSection profile={profile} />
      <TechSection profile={profile} />
      <EducationSection profile={profile} />
      <CompanySection profile={profile} />
    </main>
  );
}
