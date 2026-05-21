import { Avatar, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { getSingleCar } from "@/app/lib/dataFetch";
import BookingModal from "@/components/ui/BookNowButton";
import ErrorPage from "@/app/error";

export const metadata = {
  title: "DriveFleet Car Details",
  description: "View detailed information and availability for rental cars on DriveFleet.",
};

const CarDetailsPage = async ({ params }) => {
  const { Id } = await params;

  const singleCar = await getSingleCar(Id);
  if (!singleCar?.success) return <ErrorPage />;

  const car = singleCar?.data;

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src={car?.brandImageUrl}
                  width={48}
                  height={48}
                  alt={car?.brand}
                  className="rounded-full border border-zinc-200"
                />
                <div>
                  <h2 className="text-2xl font-black text-zinc-900">
                    {car?.brand}
                  </h2>

                  <p className="text-zinc-500 font-medium">{car?.carName}</p>
                </div>
              </div>

              <Chip
                size="lg"
                className={`
                  border font-semibold
                  ${
                    car?.availability === "Available" ?
                      "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : "bg-red-50 text-red-700 border-red-200"
                  }
                `}
              >
                {car?.availability}
              </Chip>
            </div>

            <div className="relative aspect-video w-full mt-10">
              <Image
                src={car?.imageUrl}
                fill
                alt={car?.carName}
                className="object-contain"
              />
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xl font-black text-zinc-900 mb-5">
              Car Features
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-zinc-100 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon icon="mdi:car-seat" className="text-blue-500 text-xl" />

                  <p className="text-sm font-medium text-zinc-500">
                    Seat Capacity
                  </p>
                </div>

                <h4 className="font-bold text-zinc-900">
                  {car?.seatCapacity} Seats
                </h4>
              </div>

              <div className="border border-zinc-100 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon
                    icon="solar:steering-wheel-bold"
                    className="text-blue-500 text-xl"
                  />

                  <p className="text-sm font-medium text-zinc-500">Car Type</p>
                </div>

                <h4 className="font-bold text-zinc-900">{car?.carType}</h4>
              </div>

              <div className="border border-zinc-100 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon
                    icon="solar:map-point-bold"
                    className="text-blue-500 text-xl"
                  />

                  <p className="text-sm font-medium text-zinc-500">
                    Pickup Location
                  </p>
                </div>

                <h4 className="font-bold text-zinc-900">
                  {car?.pickupLocation}
                </h4>
              </div>

              <div className="border border-zinc-100 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon
                    icon="solar:ticket-sale-bold"
                    className="text-blue-500 text-xl"
                  />

                  <p className="text-sm font-medium text-zinc-500">
                    Total Bookings
                  </p>
                </div>

                <h4 className="font-bold text-zinc-900">
                  {car?.bookingCount}+
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                {car?.brand}
              </div>

              <div className="bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full text-sm font-semibold">
                Premium Rental
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 leading-tight">
              {car?.carName}
            </h1>

            <p className="text-zinc-500 leading-8 mt-6 text-base">
              {car?.description}
            </p>
          </div>

          <div className="border border-zinc-200 rounded-3xl p-6 bg-white shadow-sm">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm text-zinc-500 font-medium">
                  Daily Rental Price
                </p>

                <h2 className="text-5xl font-black text-zinc-900 mt-2">
                  ${car?.dailyRentPrice}
                </h2>

                <p className="text-zinc-500 font-medium mt-1">Per Day Rental</p>
              </div>

              <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                Best Price
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <BookingModal car={car} />
            </div>
          </div>

          <div className="border border-zinc-200 rounded-3xl p-6 bg-white shadow-sm">
            <p className="text-sm font-semibold text-zinc-500 mb-5">
              Vehicle Owner
            </p>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar src={car?.owner?.avatar} className="w-16 h-16" />

                <div>
                  <h3 className="font-black text-lg text-zinc-900">
                    {car?.owner?.name}
                  </h3>

                  <p className="flex items-center gap-1 text-sm text-zinc-500 font-medium mt-1">
                    <Icon
                      icon="lets-icons:check-fill"
                      className="text-sky-500"
                    />

                    {car?.owner?.role}
                  </p>
                </div>
              </div>

              <button className="h-11 px-5 rounded-xl border border-zinc-200 hover:bg-zinc-50 transition-colors text-sm font-semibold">
                Contact
              </button>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-3xl p-6 bg-white shadow-sm">
            <h3 className="text-xl font-black text-zinc-900 mb-5">
              Rental Terms
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon
                  icon="solar:shield-check-bold"
                  className="text-blue-500 text-xl"
                />

                <p className="text-zinc-600">
                  Full insurance coverage included
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Icon
                  icon="solar:clock-circle-bold"
                  className="text-blue-500 text-xl"
                />

                <p className="text-zinc-600">24/7 customer support available</p>
              </div>

              <div className="flex items-center gap-3">
                <Icon
                  icon="solar:wallet-money-bold"
                  className="text-blue-500 text-xl"
                />

                <p className="text-zinc-600">No hidden extra charges</p>
              </div>

              <div className="flex items-center gap-3">
                <Icon
                  icon="solar:document-text-bold"
                  className="text-blue-500 text-xl"
                />

                <p className="text-zinc-600">Valid driving license required</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetailsPage;
