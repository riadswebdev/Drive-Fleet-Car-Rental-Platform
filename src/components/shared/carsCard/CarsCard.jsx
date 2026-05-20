import { Avatar, Card, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const CarsCard = ({ car }) => {
  const {
    carName = "",
    brand = "",
    availability = "",
    dailyRentPrice = 0,
    bookingCount = 0,
    carType = "",
    imageUrl = "",
    brandImageUrl = "",
    owner: { name = "", role = "", verifiedType = "", avatar = "" } = {},
  } = car || {};

  return (
    <Card className="h-full bg-white border border-zinc-200/70 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Image
              src={brandImageUrl}
              width={40}
              height={40}
              alt={brand}
              className="rounded-full border border-zinc-200 object-cover shrink-0"
            />

            <div className="min-w-0">
              <h2 className="text-[15px] font-bold text-zinc-900 tracking-wide truncate">
                {brand}
              </h2>

              <p className="text-sm text-zinc-500 truncate">{carName}</p>
            </div>
          </div>

          <Chip
            size="sm"
            className={`font-semibold border whitespace-nowrap ${
              availability === "Available" ?
                "bg-emerald-50 text-emerald-700 border-emerald-200"
              : "bg-red-50 text-red-700 border-red-200"
            }`}
          >
            {availability}
          </Chip>
        </div>

        <div className="relative aspect-video w-full mt-6">
          <Image
            src={imageUrl}
            fill
            alt={carName}
            className="object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="flex items-center justify-between gap-3 mt-5">
          <div className="px-1  truncate">
            <div className="flex items-center gap-1 bg-zinc-100 px-2 py-1 rounded-full mb-2">
              <Icon icon="mdi:car-sports" className="text-zinc-700 text-sm" />

              <p className="text-xs font-semibold text-zinc-700">{carType}</p>
            </div>

            <div className="flex items-center gap-1 bg-zinc-100 px-2 py-1 rounded-full">
              <Icon
                icon="solar:star-bold"
                className="text-yellow-500 text-sm"
              />

              <p className="text-xs font-semibold text-zinc-700">
                {bookingCount} Bookings
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <p className="text-xl font-black tracking-tight text-zinc-900">
              ${dailyRentPrice}
              <span className="text-sm font-medium text-zinc-500">/day</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-100 px-5 pb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <Avatar size="sm" src={avatar} alt={name} className="shrink-0" />

          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-zinc-800 truncate">
              {name}
            </h3>

            <p className="flex items-center gap-1 text-xs text-zinc-500 truncate">
              <Icon
                icon="lets-icons:check-fill"
                className="text-sky-500 text-sm shrink-0"
              />

              {role || verifiedType}
            </p>
          </div>
        </div>

        <Link
          href={`/explore-car/${car._id}`}
          className="text-sm font-semibold text-zinc-900 hover:text-blue-600 transition-colors whitespace-nowrap"
        >
          Details
        </Link>
      </div>
    </Card>
  );
};

export default CarsCard;
