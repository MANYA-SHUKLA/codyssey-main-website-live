import ServicesHero from '../components/ServicesHero';
import ServicesList from '../components/ServicesList';
import ServiceUseCases from '../components/ServiceUseCases';
import ServiceProcess from '../components/ServiceProcess';
import ServiceTools from '../components/ServiceTools';
import ServiceFAQ from '../components/ServiceFAQ';
import ServiceCTA from '../components/ServiceCTA';
export default function Services() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <ServiceUseCases />
      <ServiceProcess />
      <ServiceTools />
      <ServiceFAQ />
      <ServiceCTA />
    </main>
  );
}
