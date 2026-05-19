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
    owner: { name = "", role = "", verifiedType = "" } = {},
  } = car || {};

  return (
    <Card
      className="
        h-full
        bg-white
        border border-zinc-200/60
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all duration-300
        rounded-2xl
        overflow-hidden
        group
      "
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Image
              src={car?.brandImageUrl}
              width={38}
              height={38}
              alt={car?.carName}
              className="rounded-full border border-zinc-200 object-cover"
            />

            <div className="min-w-0">
              <h2 className="text-[15px] font-bold tracking-wide text-zinc-900 truncate">
                {brand}
              </h2>

              <p className="text-sm text-zinc-500 font-medium truncate">
                {carName}
              </p>
            </div>
          </div>

          <Chip
            size="sm"
            className={`
              border font-semibold whitespace-nowrap
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

        <div className="relative aspect-video w-full mt-5">
          <Image
            src={car?.imageUrl}
            fill
            alt={brand}
            className="
              object-contain
              group-hover:scale-105
              transition-transform
              duration-500
            "
          />
        </div>
      </div>

      <div className="border-t border-zinc-100 px-5 py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <Avatar size="sm">
            <Avatar.Image
              alt={name}
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
            />
            <Avatar.Fallback>SM</Avatar.Fallback>
          </Avatar>

          <div className="min-w-0">
            <h2 className="text-sm font-semibold text-zinc-800 truncate">
              {name}
            </h2>

            <p className="text-xs font-medium flex items-center gap-1 text-zinc-500 truncate">
              <Icon
                className="text-sky-500 text-sm shrink-0"
                icon="lets-icons:check-fill"
              />

              {role || verifiedType}
            </p>
          </div>
        </div>

        <p className="text-lg sm:text-xl font-black tracking-tight text-zinc-900 whitespace-nowrap">
          ${dailyRentPrice}
          <span className="text-sm font-medium text-zinc-500">/day</span>
        </p>
      </div>

      <div className="px-5 pb-5 flex items-center justify-between gap-3">
        <div
          className="
            flex items-center gap-1
            bg-zinc-100
            px-3 py-1.5
            rounded-full
            w-fit
          "
        >
          <Icon icon="solar:star-bold" className="text-yellow-500 text-sm" />

          <p className="text-xs font-semibold text-zinc-700 whitespace-nowrap">
            {car?.bookingCount} Bookings
          </p>
        </div>

        <Link
          href=""
          className="
            text-sm
            font-semibold
            text-zinc-900
            hover:text-primary
            transition-colors
          "
        >
          Details
        </Link>
      </div>
    </Card>
  );
};

export default CarsCard;
