"use client";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useSWR from "swr";
import "swiper/css";
import "swiper/css/navigation";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";

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
  const { data, error } = useSWR<SlideType[]>(
    "http://localhost:3001/swiper",
    fetcher
  );

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
            <div className="h-[850px] w-[300px] flex flex-col gap-5 ">
              <div className=" relative h-[50%] w-[100%] flex flex-col items-center">
                <div className="flex flex-col items-center group/main">
                  <img
                    src={slide.products[0]?.image}
                    className="w-[283px] h-[323px]"
                    alt={slide.products[0]?.title}
                  />
                  <div className="absolute w-[180px] h-[50px] top-[260px] flex text-2xl justify-center items-center gap-5 bg-white opacity-0 translate-y-5 group-hover/main:opacity-100 group-hover/main:translate-y-0  transition-all duration-300">
                    <div className="relative group/icons">
                      <IoCheckmarkOutline />
                      <div className="w-[90px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/icons:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Add to Cart
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>

                    {/* Quick View Icon */}
                    <div className="relative group/icons">
                      <IoIosSearch />
                      <div className="w-[90px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/icons:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Quick View
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>

                    {/* Compare Icon */}
                    <div className="relative group/icons">
                      <IoIosGitCompare />
                      <div className="w-[90px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/icons:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Compare
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>

                    {/* Add to Wishlist Icon */}
                    <div className="relative group/icons">
                      <IoMdHeartEmpty />
                      <div className="w-[120px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/icons:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Add to wishlist
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center gap-1 flex flex-col">
                  <h1 className="lora text-sm mt-2">
                    {slide.products[0]?.title}
                  </h1>
                  <p className="text-xs">{slide.products[0]?.category}</p>
                  {slide.products[0]?.rating && (
                    <span className="flex text-[#eabe12]">
                      {[...Array(slide.products[0].rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </span>
                  )}
                  <span className="text-sm text-[#79b38a]">
                    {slide.products[0]?.price}
                  </span>
                </div>
              </div>

              {/* 2nd Card */}
              <div className="relative h-[50%] w-[100%] flex flex-col items-center ">
                {/* Product Image and Details */}
                <div className="flex flex-col items-center group/main">
                  <img
                    src={slide.products[1]?.image}
                    className="w-[283px] h-[323px]"
                    alt={slide.products[1]?.title}
                  />
                  <div className="absolute w-[180px] h-[50px] top-[260px] flex text-2xl justify-center items-center gap-5 bg-white opacity-0 translate-y-5 group-hover/main:opacity-100 group-hover/main:translate-y-0  transition-all duration-300">
                    <div className="relative group/icons">
                      <IoCheckmarkOutline />
                      <div className="w-[90px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/icons:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Add to Cart
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>

                    {/* Quick View Icon */}
                    <div className="relative group/icons">
                      <IoIosSearch />
                      <div className="w-[90px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/icons:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Quick View
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>

                    {/* Compare Icon */}
                    <div className="relative group/icons">
                      <IoIosGitCompare />
                      <div className="w-[90px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/icons:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Compare
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>

                    {/* Add to Wishlist Icon */}
                    <div className="relative group/icons">
                      <IoMdHeartEmpty />
                      <div className="w-[120px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/icons:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Add to wishlist
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center gap-1 flex flex-col">
                  <h1 className="lora text-sm mt-2">
                    {slide.products[1]?.title}
                  </h1>
                  <p className="text-xs">{slide.products[1]?.category}</p>
                  {slide.products[1]?.oldPrice ? (
                    <div className="flex items-center gap-[2px]">
                      <span className="line-through text-xs text-slate-600">
                        {slide.products[1]?.oldPrice}
                      </span>
                      <span className="text-sm text-[#79b38a]">
                        {slide.products[1]?.price}
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm text-[#79b38a]">
                      {slide.products[1]?.price}
                    </span>
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
