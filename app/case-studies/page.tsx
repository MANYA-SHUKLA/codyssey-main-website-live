import CaseStudiesHero from '../components/CaseStudiesHero';
import CaseStudiesGrid from '../components/CaseStudiesGrid';
import CaseStudiesCTA from '../components/CaseStudiesCTA';

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <CaseStudiesCTA />
    </main>
  );
}