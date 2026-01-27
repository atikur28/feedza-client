import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">Feedza</h2>
            <p className="text-sm text-muted-foreground mt-3">
              Discover & order delicious meals from your favorite restaurants.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/meals"
                  className="hover:text-primary hover:underline"
                >
                  Meals
                </Link>
              </li>
              <li>
                <Link
                  href="/providers"
                  className="hover:text-primary hover:underline"
                >
                  Providers
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary hover:underline"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* User Links */}
          <div>
            <h3 className="font-semibold mb-3">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/login"
                  className="hover:text-primary hover:underline"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="hover:text-primary hover:underline"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  href="/orders"
                  className="hover:text-primary hover:underline"
                >
                  My Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="font-semibold mb-3">Craving Something Delicious?</h3>

            <p className="text-sm text-muted-foreground mb-3">
              Browse meals from top restaurants near you. Order instantly, track
              in real-time, and enjoy hot, fresh food delivered straight to your
              door.
            </p>

            <Button asChild>
              <Link href="/meals">Order Now</Link>
            </Button>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Feedza. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
