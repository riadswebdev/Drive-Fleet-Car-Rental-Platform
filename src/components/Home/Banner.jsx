import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="mx-5 xl:mx-0">
      <div className=" md:flex flex-row-reverse items-center justify-between py-20 md:py-28 w-full max-w-300 mx-auto">
        <div className="mb-10">
          <Image
            src="https://ik.imagekit.io/i455l48ls/HeroImage.png"
            width={600}
            height={600}
            alt="Banner Image"
            className="object-contain flex items-center justify-center"
          />
        </div>

        <div className=" ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-10 lg:leading-16 mb-5 text-zinc-900">
            Drive Your Dream. <br className="hidden md:block" /> Rent With
            Confidence.
          </h2>
          <p className="mb-5 max-w-xl text-gray-600 leading-7">
            Find the perfect ride for every journey with our seamless car{" "}
            <br className="hidden sm:block" /> rental platform.Choose from a
            wide range of vehicles
          </p>
          <Link href="/explore-car">
            <Button size="lg" className="px-6 py-3 rounded-lg font-semibold">
              Explore Cars <Icon className="size-6" icon="boxicons:arrow-right"/>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
