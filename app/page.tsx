import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import FeaturedCaseStudies from './components/FeaturedCaseStudies';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';


export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <FeaturedCaseStudies />
      <WhyChooseUs />
      <Process />
      
    </main>
  );
}