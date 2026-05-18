import { Avatar, Card, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const CarsCard = ({ car }) => {
  const {
    carName = "",
    brand = "",
    availability = 0,
    dailyRentPrice = 0,
    owner: { name = "", role = "", verifiedType = "" },
  } = car || {};

  return (
    <Card className="bg-white border border-zinc-200/60 shadow-sm hover:scale-101 hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden group">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={car?.brandImageUrl}
              width={38}
              height={38}
              alt={car?.carName}
              className="rounded-full border border-zinc-200"
            />

            <div>
              <h2 className="text-[15px] font-bold tracking-wide text-zinc-900">
                {brand}
              </h2>

              <p className="text-sm text-zinc-500 font-medium">{carName}</p>
            </div>
          </div>

          <Chip
            size="sm"
            className="
          bg-emerald-50 
          text-emerald-700 
          border 
          border-emerald-200
          font-semibold
        "
          >
            {availability}
          </Chip>
        </div>

        <div className="relative aspect-video w-full mt-4">
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

      <div className="border-t border-zinc-100 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar size="sm">
            <Avatar.Image
              alt={name}
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
            />
            <Avatar.Fallback>SM</Avatar.Fallback>
          </Avatar>

          <div>
            <h2 className="text-sm font-semibold text-zinc-800">{name}</h2>

            <p className="text-xs font-medium flex items-center gap-1 text-zinc-500">
              <Icon
                className="text-sky-500 text-sm"
                icon="lets-icons:check-fill"
              />

              {verifiedType}
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-xl font-black tracking-tight text-zinc-900">
            ${dailyRentPrice}
            <span className="text-sm font-medium text-zinc-500">/day</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CarsCard;
