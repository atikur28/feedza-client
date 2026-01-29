import Image from "next/image";

const MealsDetailsBanner = () => {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-125 mx-auto max-w-400">
        <Image
          src="https://i.ibb.co.com/fV1sqvhZ/meal-details-banner.jpg"
          alt="Delicious Meals"
          fill
          className="object-cover rounded-2xl"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-foreground font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            INDULGE IN DELICIOUSNESS
          </h1>
          <p className="text-foreground mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl max-w-3xl">
            Dive into our carefully curated meals, crafted with fresh
            ingredients and passion. Perfect for any craving, delivered right to
            your door.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MealsDetailsBanner;
