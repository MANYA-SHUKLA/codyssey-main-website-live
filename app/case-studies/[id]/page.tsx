import CaseStudyDetail from '../../components/CaseStudyDetail';
import { caseStudies } from '../../data/caseStudies';

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
    return <div>Case study not found</div>;
  }

  return <CaseStudyDetail study={study} />;
}