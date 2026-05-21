"use client";

import UpdateCarModal from "@/app/update-car/page";
import { Card, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import DeleteCar from "./DeleteAddedCar";

const MyAddedCarCard = ({ car }) => {
  const {
    _id,
    carName,
    dailyRentPrice,
    carType,
    seatCapacity,
    pickupLocation,
    availability,
    description,
    owner,
  } = car || {};

  return (
    <Card className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-video overflow-hidden bg-zinc-100">
        <Image
          src={car?.imageUrl || "/placeholder-car.png"}
          fill
          alt={carName || "Car Image"}
          className="object-contain p-4 sm:p-5 transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
          <Chip
            className={`border text-xs sm:text-sm font-semibold ${
              availability === "Available" ?
                "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {availability}
          </Chip>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="min-w-0">
            <h2 className="truncate text-xl sm:text-2xl font-black tracking-tight text-zinc-900">
              {carName}
            </h2>

            <p className="mt-1 text-sm font-medium text-zinc-500">{carType}</p>
          </div>

          <div className="sm:text-right">
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900">
              ${dailyRentPrice}
            </h3>

            <p className="text-xs font-medium text-zinc-500">/day</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
          <div className="flex items-center gap-2 rounded-2xl bg-zinc-100 px-3 py-2">
            <Icon
              icon="solar:users-group-rounded-bold"
              className="text-base sm:text-lg text-zinc-700"
            />

            <span className="text-xs sm:text-sm font-semibold text-zinc-700">
              {seatCapacity} Seats
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-zinc-100 px-3 py-2 max-w-full">
            <Icon
              icon="solar:map-point-bold"
              className="text-base sm:text-lg text-zinc-700 shrink-0"
            />

            <span className="truncate text-xs sm:text-sm font-semibold text-zinc-700">
              {pickupLocation}
            </span>
          </div>
        </div>
        <p className="mt-5 line-clamp-2 text-sm leading-6 text-zinc-600">
          {description}
        </p>

        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-zinc-100 bg-zinc-50 p-3">
          {owner?.avatar && (
            <Image
              src={owner.avatar}
              width={45}
              height={45}
              alt={owner?.name || "Owner"}
              className="h-11 w-11 rounded-full object-cover shrink-0"
            />
          )}

          <div className="min-w-0">
            <h4 className="truncate font-bold text-zinc-900">{owner?.name}</h4>

            <p className="flex items-center gap-1 truncate text-xs sm:text-sm text-zinc-500">
              <Icon
                icon="lets-icons:check-fill"
                className="shrink-0 text-sky-500"
              />

              {owner?.role}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="w-full sm:flex-1">
            <UpdateCarModal car={car} />
          </div>

          <DeleteCar id={_id} />
        </div>
      </div>
    </Card>
  );
};

export default MyAddedCarCard;
