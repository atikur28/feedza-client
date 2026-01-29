import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Smile, Truck } from "lucide-react";

const steps = [
  {
    title: "Choose Your Favorite",
    description:
      "Browse our wide variety of delicious meals and pick exactly what you love. You can order online or call us to customize your order according to your taste and preferences. It's fast, easy, and convenient!",
    icon: ShoppingBag,
  },
  {
    title: "We Deliver Your Meals",
    description:
      "Once your order is placed, our professional delivery team ensures your meals are freshly prepared and delivered straight to your doorstep. Enjoy hot and delicious food without leaving the comfort of your home.",
    icon: Truck,
  },
  {
    title: "Eat and Enjoy",
    description:
      "Relax and enjoy your meals with your family or friends. No shopping, no cooking, no counting, and no cleaning required. Experience the joy of healthy, hassle-free dining at home with FoodHub.",
    icon: Smile,
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          HOW IT WORKS
        </h2>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="border-none shadow-none text-center">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold">{step.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
