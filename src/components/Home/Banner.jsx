import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="mx-5 xl:mx-0">
      <div className=" md:flex flex-row-reverse items-center justify-between my-30 w-full max-w-300 mx-auto">
        <div className="mb-10">
          <Image
            src="https://ik.imagekit.io/i455l48ls/HeroImage.png"
            width={600}
            height={600}
            alt="Banner Image"
          />
        </div>

        <div className=" ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-10 lg:leading-16 mb-5 text-zinc-900">
            Drive Your Dream. <br className="hidden md:block" /> Rent With
            Confidence.
          </h2>
          <p className="mb-5 max-w-xl text-default-500 leading-7">
            Find the perfect ride for every journey with our seamless car{" "}
            <br className="hidden sm:block" /> rental platform.Choose from a
            wide range of vehicles
          </p>
          <Link href="/explore-car">
            <Button size="lg" className="rounded-md font-semibold px-6">
              Explore Cars
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
