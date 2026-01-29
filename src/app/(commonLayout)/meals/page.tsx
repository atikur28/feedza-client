import MealsBanner from "@/components/mealsPage/MealsBanner";
import MealsClient from "@/components/mealsPage/MealsClient";
import { mealService } from "@/services/meal.service";

const MealsPage = async () => {
  const res = await mealService.getAllMeals();

  return (
    <div className="container mx-auto px-4 space-y-10 pb-10">
      <MealsBanner />

      <MealsClient meals={res.data ?? []} />
    </div>
  );
};

export default MealsPage;
