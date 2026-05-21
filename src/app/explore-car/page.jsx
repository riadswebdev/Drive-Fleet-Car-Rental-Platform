import { getAllCars, searchValue } from "@/app/lib/dataFetch";
import CarsCard from "@/components/shared/carsCard/CarsCard";
import CarsCategory from "@/components/ui/Category";
import SearchCars from "@/components/ui/SearchCars";

export const metadata = {
  title: "Explore Cars | Drive Fleet Car Rental",
  description: "Browse available rental cars, search by model, and discover categories on the Drive Fleet car rental platform.",
};

const ExplorePage = async ({ searchParams }) => {
  const { query } = await searchParams;
  const AllCars = query ? await searchValue(query) : await getAllCars();

  return (
    <div className="mx-5 xl:mx-0">
      <div className="w-full max-w-7xl mx-auto my-25">
        <h2 className="mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-10 lg:leading-16  text-zinc-900">
          Explore Cars
        </h2>
        <div className="my-5 md:flex items-center justify-between gap-5">
          <div className="mb-5">
            <SearchCars />
          </div>
          <div className="">
            <CarsCategory />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AllCars?.map((car) => (
            <CarsCard key={car._id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
