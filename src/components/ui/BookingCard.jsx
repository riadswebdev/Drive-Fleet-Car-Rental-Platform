"use client";

import { cancelBookingCar } from "@/app/lib/action";
import { Button, Card, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const MyBookingCard = ({ booking }) => {
  const router = useRouter();
  const {
    _id,
    carId,
    carName,
    availability,
    bookingDate,
    dailyRentPrice,
    driverNeeded,
    specialNote,
  } = booking || {};

  const cancelBookingData = async () => {
    const result = await cancelBookingCar(_id);
    if (result.success) {
      toast.success("Successfully item delete");
      router.refresh();
    } else {
      toast.error("Item delete failed");
    }
  };

  return (
    <Card className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 mb-5">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 relative w-full aspect-video bg-zinc-100 shrink-0">
          <Image
            src={booking?.imageUrl}
            fill
            alt={carName}
            className="object-contain p-6 hover:scale-105 transition-transform duration-500"
          />

          <div className="flex-2 absolute top-4 left-4">
            <Chip
              className={`
                border font-semibold
                ${
                  availability === "Available" ?
                    "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-red-50 text-red-700 border-red-200"
                }
              `}
            >
              {availability}
            </Chip>
          </div>
        </div>

        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black text-zinc-900">{carName}</h2>

                <p className="text-sm text-zinc-500 mt-1">
                  Booking ID: {_id?.slice(-6)}
                </p>
              </div>

              <div className="sm:text-right">
                <h3 className="text-4xl font-black text-zinc-900">
                  ${dailyRentPrice}
                </h3>

                <p className="text-sm text-zinc-500 font-medium">Total Price</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-3 rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-3">
                <Icon
                  icon="solar:calendar-bold"
                  className="text-blue-500 text-xl"
                />

                <div>
                  <p className="text-xs font-medium text-zinc-500">
                    Booking Date
                  </p>

                  <h4 className="font-bold text-zinc-900 text-sm">
                    {new Date(bookingDate).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-3">
                <Icon
                  icon="solar:user-hand-up-bold"
                  className="text-blue-500 text-xl"
                />

                <div>
                  <p className="text-xs font-medium text-zinc-500">
                    Driver Needed
                  </p>

                  <h4 className="font-bold text-zinc-900 text-sm">
                    {driverNeeded}
                  </h4>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-zinc-100 bg-zinc-50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon
                  icon="solar:notes-bold"
                  className="text-blue-500 text-lg"
                />

                <p className="text-sm font-semibold text-zinc-600">
                  Special Note
                </p>
              </div>

              <p className="text-sm leading-7 text-zinc-700">
                {specialNote || "No special note added"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-7">
            <Link href={`/explore-car/${carId}`}>
              <Button className="h-11 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                View Details
              </Button>
            </Link>

            <Button
              onPress={cancelBookingData}
              variant="bordered"
              color="danger"
              className="h-11 px-6 rounded-2xl font-semibold"
            >
              Cancel Booking
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MyBookingCard;
