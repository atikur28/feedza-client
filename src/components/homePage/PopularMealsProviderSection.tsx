import { Button } from "@/components/ui/button";
import { providerService } from "@/services/provider.service";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";

interface Provider {
  id: string;
  restaurantName: string;
  address: string;
  logo?: string | null;
  orders?: any[];
}

export default async function PopularMealsProviderSection() {
  const providersRes = await providerService.getAllProviders();
  const providers: Provider[] = providersRes.data || [];

  // sort by order count
  const sortedProviders = [...providers].sort(
    (a, b) => (b.orders?.length || 0) - (a.orders?.length || 0),
  );

  return (
    <section className="max-w-400 mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Popular Providers</h2>
        <Link href="/providers">
          <Button variant="default" className="cursor-pointer">
            All Providers
          </Button>
        </Link>
      </div>

      {/* Providers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedProviders.slice(0, 4).map((provider) => (
          <Card
            key={provider.id}
            className="hover:shadow-lg transition border pt-0"
          >
            <CardHeader className="p-0">
              <div className="relative h-40 w-full bg-muted">
                <Image
                  src={provider.logo || "https://via.placeholder.com/300x200"}
                  alt={provider.restaurantName}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </CardHeader>

            <CardContent className="p-4 space-y-1">
              <h3 className="text-lg font-semibold">
                {provider.restaurantName}
              </h3>

              <p className="text-sm text-muted-foreground">
                {provider.address}
              </p>

              <p className="text-sm mt-2">
                Orders:{" "}
                <span className="font-semibold text-orange-600">
                  {provider.orders?.length || 0}
                </span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
