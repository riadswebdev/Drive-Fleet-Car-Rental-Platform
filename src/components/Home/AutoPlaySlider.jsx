"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { bannerData } from "@/lib/BannerData";
import Image from "next/image";

const AutoPlaySlider = () => {
  return (
    <div className="w-full max-w-162.5 h-62.5 md:h-100 lg:h-125">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        observer={true}
        observeParents={true}
        className="mySwiper"
      >
        {bannerData.map((data) => (
          <SwiperSlide className="" key={data.id}>
            <Image
              src={data?.image}
              width={900}
              height={700}
              alt="Banner Image"
              className="flex items-center justify-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoPlaySlider;
