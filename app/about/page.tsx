import AboutHero from '../components/AboutHero';
import OurStory from '../components/OurStory';
import VisionMission from '../components/VisionMission';
import Philosophy from '../components/Philosophy';
import TeamSection from '../components/TeamSection';
import StatsSection from '../components/StatsSection';
import GlobalPresence from '../components/GlobalPresence';

export default function About() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <VisionMission />
      <Philosophy />
      <TeamSection />
      <StatsSection />
      <GlobalPresence />
    </main>
  );
}