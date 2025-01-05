import DealsSection from "@/components/home/DealsSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TopCategories from "@/components/home/TopCategories";

export default function Home() {
  return (
   <div>
    <HeroSection />
    <TopCategories />
    <FeaturedProducts />
    <DealsSection />
    <TestimonialsSection />
   </div>
  );
}
