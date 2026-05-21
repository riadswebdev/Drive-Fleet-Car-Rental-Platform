import MyAddedCarCard from "@/components/ui/AddedCarsCard";
import { getAddedCarsData } from "../lib/dataFetch";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyAddedCarPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;
  const usersAddedCars = await getAddedCarsData(userId);
  const carsData = usersAddedCars?.data ?? usersAddedCars ?? [];
  return (
    <div className="mx-5 xl:mx-0">
      <div className="w-full max-w-7xl mx-auto mb-5">
        <h2 className="mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-10 lg:leading-16  text-zinc-900">
          My Added Cars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carsData?.length > 0 ?
            carsData?.map((car) => <MyAddedCarCard key={car._id} car={car} />)
          : <p>No cars added yet</p>}
        </div>
      </div>
    </div>
  );
};

export default MyAddedCarPage;
