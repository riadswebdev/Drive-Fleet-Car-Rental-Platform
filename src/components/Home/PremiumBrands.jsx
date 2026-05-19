"use client";

import Image from "next/image";

const PremiumBrands = () => {
  const brands = [
    {
      id: 1,
      name: "BMW",
      logo: "https://ik.imagekit.io/i455l48ls/BMW.png",
    },
    {
      id: 2,
      name: "Ferrari",
      logo: "https://ik.imagekit.io/i455l48ls/Ferrari.png",
    },
    {
      id: 3,
      name: "Lamborghini",
      logo: "https://ik.imagekit.io/i455l48ls/Lamborgini.png",
    },
    {
      id: 4,
      name: "Audi",
      logo: "https://ik.imagekit.io/i455l48ls/Audi.png",
    },
    {
      id: 5,
      name: "McLaren",
      logo: "https://ik.imagekit.io/i455l48ls/McLaren.png",
    },
    {
      id: 6,
      name: "Porsche",
      logo: "https://ik.imagekit.io/i455l48ls/Porsche.png",
    },
    {
      id: 7,
      name: "Mercedes-Benz",
      logo: "https://ik.imagekit.io/i455l48ls/Mercedes-Benz.png",
    },
    {
      id: 8,
      name: "Rolls-Royce",
      logo: "https://ik.imagekit.io/i455l48ls/RollsRoycl.png",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-500 font-semibold mb-2">Premium Brands</p>

          <h2 className="text-3xl md:text-4xl font-black text-zinc-900">
            Drive The World’s Best Cars
          </h2>

          <p className="text-zinc-500 mt-3 max-w-2xl mx-auto">
            Explore elite automotive brands trusted for luxury, performance,
            comfort, and unforgettable driving experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white border border-zinc-200 rounded-2xl h-32 flex flex-col items-center justify-center gap-3 hover:border-blue-500/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={brand.logo}
                width={55}
                height={55}
                alt={brand.name}
                className="object-contain"
              />

              <p className="text-sm font-semibold text-zinc-700 text-center px-2">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumBrands;
