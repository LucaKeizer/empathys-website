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
      
      {/* Placeholder for footer */}
      <div className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>Footer coming next...</p>
        </div>
      </div>
    </div>
  );
}