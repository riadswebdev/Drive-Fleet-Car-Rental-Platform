import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import AutoPlaySlider from "./AutoPlaySlider";

const Banner = () => {
  return (
    <div className="mx-5 xl:mx-0">
      <div className=" md:flex flex-row-reverse items-center justify-between py-20 md:py-28 w-full max-w-300 mx-auto">
        <div className="mb-10">

          <AutoPlaySlider />
        </div>

        <div className=" ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-10 lg:leading-16 mb-5 text-zinc-900">
            Drive Your Dream.
            <br className="hidden md:block" />
            Rent With Confidence.
          </h2>
          <p className="mb-5 max-w-xl text-gray-600 leading-7">
            Explore world-class vehicles built for comfort, speed
            <br className="hidden sm:block" />
            and unforgettable journeys across every destination.
          </p>
          <Link href="/explore-car">
            <Button size="lg" className="px-6 py-3 rounded-lg font-semibold">
              Explore Cars{" "}
              <Icon className="size-6" icon="boxicons:arrow-right" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
