import HeroSection from '@/components/contact/HeroSection';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import ContactMainSection from '@/components/contact/ContactMainSection';
import MapSection from '@/components/contact/MapSection';
import CTASection from '@/components/contact/CTASection';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ContactInfoSection />
      <ContactMainSection />
      <MapSection />
      <CTASection />
    </div>
  );
}
