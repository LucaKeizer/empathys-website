import HeroSection from '@/components/HeroSection';
import CompanyIntroSection from '@/components/CompanyIntroSection';

// Lazy load below-the-fold components
import { 
  LazyTeamSection,
  LazyProductShowcaseSection,
  LazyVideoSection
} from '@/components/LazyComponents';

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Above the fold - Load immediately */}
      <HeroSection />
      
      {/* Still important but can be optimized */}
      <CompanyIntroSection />
      
      {/* Below the fold - Lazy load these */}
      <LazyTeamSection />
      
      <LazyProductShowcaseSection />
      
      <LazyVideoSection />
    </div>
  );
}