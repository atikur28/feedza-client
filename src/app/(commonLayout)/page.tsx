import CategoryCards from "@/components/homePage/CategoryCards";
import HomeBanner from "@/components/homePage/HomeBanner";
import HowItWorks from "@/components/homePage/HowItWorks";
import PopularMealsProviderSection from "@/components/homePage/PopularMealsProviderSection";
import RecentMeals from "@/components/homePage/RecentMeals";
import WhyChooseUs from "@/components/homePage/WhyChooseUs";

export default function Home() {
  return (
    <div className="max-w-477 mx-auto">
      <HomeBanner />
      <HowItWorks />
      <RecentMeals />
      <PopularMealsProviderSection />
      <CategoryCards />
      <WhyChooseUs />
    </div>
  );
}
