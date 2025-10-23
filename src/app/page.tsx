import HeroSection from '@/components/sections/HeroSection';
import ServicesOverview from '@/components/sections/HomeServicesOverview';
import AboutPreview from '@/components/sections/AboutPreview';
import WhyChooseUs from '@/components/sections/WhyChooseSection';
import ContactForm from '@/components/shared/ContactForm';
import ContactSection from '@/components/sections/HomeContactSection';
import CTASection from '@/components/sections/HomeCTASection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';

export default function HomePage() {
  return (
    <>


      <HeroSection />
      <AboutPreview />
      <ServicesOverview />
      <ProcessSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
    </>
  );
}