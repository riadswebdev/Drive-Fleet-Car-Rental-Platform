"use client";

import { addCars } from "../lib/action";
import { authClient } from "@/lib/auth-client";
import {
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Button,
} from "@heroui/react";
import toast from "react-hot-toast";
import RoundedLoading from "../loading";
import { useRouter } from "next/navigation";

const carTypes = [
  "SUV",
  "Sedan",
  "Hatchback",
  "Luxury",
  "Sports",
  "Convertible",
  "Electric",
  "Supercar",
];

const availabilityOptions = ["Available", "Unavailable"];

const AddCarsPage = () => {
  useEffect(() => {
    document.title = "DriveFleet Car Rental Platform | Add New Car";
  }, []);

  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  if (isPending) return <RoundedLoading />;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const carData = Object.fromEntries(formData.entries());
    const addCarData = {
      userId: session?.user?.id,
      ...carData,
      owner: {
        name: session?.user?.name,
        avatar: session?.user?.image,
        role: "Verified Dealer",
      },
    };
    const result = await addCars(addCarData);
    if (result.success) {
      toast.success(result.message);
      router.replace("/my-added-car");
      router.refresh();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="mx-5">
      <div
        className="mx-auto w-full max-w-3xl shadow-sm py-8 px-5 sm:px-8 my-10 bg-white rounded-3xl border border-zinc-100
        "
      >
        <div className="text-center mb-8">
          <div className="bg-blue-50 w-fit mx-auto rounded-full mb-4">
            <h4 className="px-4 py-3 font-black text-xl">
              D<span className="text-blue-600">F</span>
            </h4>
          </div>

          <h3 className="text-3xl font-bold tracking-tight text-zinc-900">
            Add New Car
          </h3>

          <p className="text-sm text-zinc-500 mt-2">
            List your premium vehicle and start earning instantly.
          </p>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <TextField isRequired name="carName">
              <Label>Car Name</Label>

              <Input
                placeholder="e.g. Lamborghini Huracán EVO"
                className="rounded-xl"
              />

              <FieldError />
            </TextField>

            <TextField isRequired name="dailyRentPrice">
              <Label>Daily Rent Price ($)</Label>

              <Input
                type="number"
                placeholder="e.g. 950"
                className="rounded-xl"
              />

              <FieldError />
            </TextField>

            <div className="w-full">
              <Label>Car Type</Label>

              <select
                name="carType"
                required
                className=" w-full h-11 px-3 rounded-xl border border-zinc-200 bg-white text-sm outline-none"
              >
                <option value="">Select car type</option>

                {carTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <TextField isRequired name="seatCapacity">
              <Label>Seat Capacity</Label>

              <Input
                type="number"
                placeholder="e.g. 4"
                className="rounded-xl"
              />

              <FieldError />
            </TextField>

            <TextField isRequired name="pickupLocation">
              <Label>Pickup Location</Label>

              <Input
                placeholder="e.g. Dubai Marina, UAE"
                className="rounded-xl"
              />

              <FieldError />
            </TextField>

            <div className="w-full">
              <Label>Availability Status</Label>

              <select
                name="availability"
                required
                className=" w-full h-11 px-3 rounded-xl border border-zinc-200 bg-white text-sm outline-none"
              >
                <option value="">Select status</option>

                {availabilityOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <TextField isRequired name="imageUrl">
            <Label>Car Image URL</Label>

            <Input
              type="url"
              placeholder="https://example.com/car-image.png"
              className="rounded-xl"
            />

            <FieldError />
          </TextField>

          <TextField isRequired name="description">
            <Label>Description</Label>

            <textarea
              rows={5}
              name="description"
              placeholder="Write premium car description..."
              className="w-full rounded-xl border border-zinc-200 p-3 outline-none resize-none"
            />

            <FieldError />
          </TextField>

          <Button
            type="submit"
            className=" w-full h-12 rounded-xl font-semibold text-base "
          >
            Add Car Listing
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddCarsPage;
