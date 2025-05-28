import HeroSection from '@/components/HeroSection';
import CompanyIntroSection from '@/components/CompanyIntroSection';
import TeamSection from '@/components/TeamSection';
import ProductShowcaseSection from '@/components/ProductShowcaseSection';
import VideoSection from '@/components/VideoSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompanyIntroSection />
      <TeamSection />
      <ProductShowcaseSection />
      <VideoSection />
    </div>
  );
}