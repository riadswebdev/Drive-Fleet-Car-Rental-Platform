import { getAllCars } from "@/app/lib/dataFetch";
import CarsCard from "@/components/shared/carsCard/CarsCard";

const ExplorePage = async () => {
  const AllCars = await getAllCars();

  return (
    <div className="mx-5 xl:mx-0">
      <div className="w-full max-w-7xl mx-auto my-25">
        <h2 className="mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-10 lg:leading-16  text-zinc-900">
          Explore Cars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {AllCars.map((car) => (
            <CarsCard key={car._id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
