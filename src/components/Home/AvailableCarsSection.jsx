import { getAvailableCars } from "@/app/lib/dataFetch";
import CarsCard from "../shared/carsCard/CarsCard";

const AvailableCarsSection = async () => {
  const AvailableCars = await getAvailableCars();
  console.log(AvailableCars);
  return (
    <div className="w-full max-w-7xl mx-auto ">
      <h2 className="mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-10 lg:leading-16  text-zinc-900">
        Available
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {AvailableCars.map((car) => (
          <CarsCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default AvailableCarsSection;
