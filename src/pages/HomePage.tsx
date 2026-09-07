import Hero from '@/components/sections/Hero';
import SelectedWork from '@/components/sections/SelectedWork';
import Services from '@/components/sections/Services';
import WhyWorkWithMe from '@/components/sections/WhyWorkWithMe';
import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import Process from '@/components/sections/Process';
import FreelanceCTA from '@/components/sections/FreelanceCTA';
import Contact from '@/components/sections/Contact';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <WhyWorkWithMe />
      <About />
      <TechStack />
      <Process />
      <FreelanceCTA />
      <Contact />
    </>
  );
}
