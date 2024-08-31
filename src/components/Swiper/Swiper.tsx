"use client";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useSWR from "swr";
import "swiper/css";
import "swiper/css/navigation";

// Define the type for the product in the JSON
type ProductType = {
  title: string;
  category: string;
  price: string;
  oldPrice?: string;
  image: string;
  rating: number | null;
};

// Define the type for each slide in the JSON
type SlideType = {
  id: number;
  products: ProductType[];
};

// SWR fetcher function
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SwiperMainContext = () => {
  // Use SWR to fetch data
  const { data, error } = useSWR<SlideType[]>('http://localhost:3001/swiper', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="relative h-[750px]">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {/* Swiper slide container for two products */}
            <div className="h-[850px] w-[300px] flex flex-col gap-5">
              {/* 1st Card */}
              <div className="h-[50%] w-[100%] flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <img
                    src={slide.products[0]?.image}
                    className="w-[283px] h-[323px]"
                    alt={slide.products[0]?.title}
                  />
                </div>
                <div className="text-center gap-1 flex flex-col">
                  <h1 className="lora text-sm mt-2">{slide.products[0]?.title}</h1>
                  <p className="text-xs">{slide.products[0]?.category}</p>
                  {slide.products[0]?.rating && (
                    <span className="flex text-[#eabe12]">
                      {[...Array(slide.products[0].rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </span>
                  )}
                  <span className="text-sm text-[#79b38a]">{slide.products[0]?.price}</span>
                </div>
              </div>

              {/* 2nd Card */}
              <div className="h-[50%] w-[100%] flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <img
                    src={slide.products[1]?.image}
                    className="w-[283px] h-[323px]"
                    alt={slide.products[1]?.title}
                  />
                </div>
                <div className="text-center gap-1 flex flex-col">
                  <h1 className="lora text-sm mt-2">{slide.products[1]?.title}</h1>
                  <p className="text-xs">{slide.products[1]?.category}</p>
                  {slide.products[1]?.oldPrice ? (
                    <div className="flex items-center gap-[2px]">
                      <span className="line-through text-xs text-slate-600">
                        {slide.products[1]?.oldPrice}
                      </span>
                      <span className="text-sm text-[#79b38a]">{slide.products[1]?.price}</span>
                    </div>
                  ) : (
                    <span className="text-sm text-[#79b38a]">{slide.products[1]?.price}</span>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="swiper-button-prev "></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default SwiperMainContext;
