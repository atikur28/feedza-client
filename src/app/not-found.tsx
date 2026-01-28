import { Button } from "@/components/ui/button";
import { UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center space-y-4">
        <UtensilsCrossed className="mx-auto h-12 w-12 text-muted-foreground" />

        <h1 className="text-2xl font-bold">Page not found 🍽️</h1>

        <p className="text-sm text-muted-foreground">
          The page you’re looking for doesn’t exist.
        </p>

        <Link href="/">
          <Button>Go back home</Button>
        </Link>
      </div>
    </div>
  );
}
