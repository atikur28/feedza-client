import CategoryCards from "@/components/homePage/CategoryCards";
import HomeBanner from "@/components/homePage/HomeBanner";
import HowItWorks from "@/components/homePage/HowItWorks";

export default function Home() {
  return (
    <div className="max-w-477 mx-auto">
      <HomeBanner />
      <HowItWorks />
      <CategoryCards />
    </div>
  );
}
