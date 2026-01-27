"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Healthy Inside, Fresh Outside",
    text: "We deliver healthy food that is ready to eat. Just choose your own menu you like.",
    align: "left",
    bg: "https://i.ibb.co/7dJxbQwf/home-banner1.jpg",
  },
  {
    id: 2,
    title: "Healthy Food Comes From Healthy Ingredients",
    text: "Our meals are made from fresh ingredients and crafted with care for your health.",
    align: "center",
    bg: "https://i.ibb.co/tw57J3w3/home-banner2.jpg",
  },
  {
    id: 3,
    title: "Healthy Food, For Breakfast",
    text: "Start your day with a healthy breakfast delivered straight to your door.",
    align: "right",
    bg: "https://i.ibb.co/twm1R0xG/home-banner3.jpg",
  },
];

export default function HomeBanner() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = window.setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 8000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div
      className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Text Content */}
          <div
            className={`absolute inset-0 flex items-center justify-${
              slide.align === "left"
                ? "start"
                : slide.align === "center"
                  ? "center"
                  : "end"
            } px-4 md:px-8 lg:px-16 xl:px-44`}
          >
            <div className="max-w-112.5 text-foreground">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="mb-6 font-medium">{slide.text}</p>
              <Link href="/about">
                <Button variant="default" className="cursor-pointer">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
