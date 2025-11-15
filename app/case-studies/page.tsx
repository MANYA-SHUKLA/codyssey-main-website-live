import CaseStudyDetail from '../components/CaseStudyDetail';
import { caseStudies } from '../data/caseStudies';

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }));
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const study = caseStudies.find(s => s.id === params.id);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <p className="text-gray-400">The case study you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return <CaseStudyDetail study={study} />;
}