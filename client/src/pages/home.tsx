import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import OptimizeSleepSection from "@/components/OptimizeSleepSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StorySection />
      <OptimizeSleepSection />
    </div>
  );
}
