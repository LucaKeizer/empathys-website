import HeroSection from '@/components/HeroSection';
import CompanyIntroSection from '@/components/CompanyIntroSection';
import TeamSection from '@/components/TeamSection';
import ProductShowcaseSection from '@/components/ProductShowcaseSection';
import VideoSection from '@/components/VideoSection';

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with improved design */}
      <HeroSection />
      
      {/* Company Introduction with modern styling */}
      <CompanyIntroSection />
      
      {/* Enhanced Team Section */}
      <TeamSection />
      
      {/* Product Showcase with better visuals */}
      <ProductShowcaseSection />
      
      {/* Video Section */}
      <VideoSection />
    </div>
  );
}