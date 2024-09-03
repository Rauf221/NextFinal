"use client";
import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useSWR from "swr";
import "swiper/css";
import "swiper/css/navigation";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styles from "../../styles/Slider.module.css";
// SWR fetcher function
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SwiperSection3 = () => {
  // Use SWR to fetch data
  const { data, error } = useSWR<[]>("http://localhost:3001/swiper", fetcher);



  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="relative ">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`, 
        }}
        modules={[Navigation]}
        className={`mySwiper ${styles.mySwiper}`}
      >
        <SwiperSlide>
          <div className="relative group h-[320px] w-[385px]">
            <div className="bg-cover overflow-hidden">
              <img
                src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2018/10/handmade-categories-6-opt.jpg"
                className="h-[320px] w-[385px] transition-transform duration-500 transform group-hover:scale-110"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>

            <div className="absolute inset-0 flex justify-center items-center">
              <button className="bg-[#79b38a] text-white text-2xl lora py-3 px-6 opacity-100 transition-opacity duration-400 group-hover:opacity-0">
          TOYS
              </button>
              <div className="absolute inset-0 flex justify-center opacity-0 transition-opacity duration-400  group-hover:opacity-100 group-hover:delay-300 items-center">
                <span className="  text-white font-bold ">4 PRODUCTS</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative group h-[320px] w-[385px]">
            <div className="bg-cover overflow-hidden">
              <img
                src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2018/10/handmade-categories-4-opt.jpg"
                className="h-[320px] w-[385px] transition-transform duration-500 transform group-hover:scale-110"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>

            <div className="absolute inset-0 flex justify-center items-center">
              <button className="bg-[#79b38a] text-white text-2xl lora py-3 px-6 opacity-100 transition-opacity duration-400 group-hover:opacity-0">
                CLOCKS
              </button>
              <div className="absolute inset-0 flex justify-center opacity-0 transition-opacity duration-400  group-hover:opacity-100 group-hover:delay-300 items-center">
                <span className="  text-white font-bold ">4 PRODUCTS</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="relative group h-[320px] w-[385px]">
            <div className="bg-cover overflow-hidden">
              <img
                src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2018/10/handmade-categories-5-opt.jpg"
                className="h-[320px] w-[385px] transition-transform duration-500 transform group-hover:scale-110"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>

            <div className="absolute inset-0 flex justify-center items-center">
              <button className="bg-[#79b38a] text-white text-2xl lora py-3 px-6 opacity-100 transition-opacity duration-400 group-hover:opacity-0">
               ACCESSORIES
              </button>
              <div className="absolute inset-0 flex justify-center opacity-0 transition-opacity duration-400  group-hover:opacity-100 group-hover:delay-300 items-center">
                <span className="  text-white font-bold ">4 PRODUCTS</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative group h-[320px] w-[385px]">
            <div className="bg-cover overflow-hidden">
              <img
                src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2021/09/handmade-category-4.jpg"
                className="h-[320px] w-[385px] transition-transform duration-500 transform group-hover:scale-110"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>

            <div className="absolute inset-0 flex justify-center items-center">
              <button className="bg-[#79b38a] text-white text-2xl lora py-3 px-6 opacity-100 transition-opacity duration-400 group-hover:opacity-0">
              DECOR
              </button>
              <div className="absolute inset-0 flex justify-center opacity-0 transition-opacity duration-400  group-hover:opacity-100 group-hover:delay-300 items-center">
                <span className="  text-white font-bold ">4 PRODUCTS</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Buttons */}
      <div className={`absolute top-[150px] left-[1120px] ${styles.swiperButtonNext}`}>
      <MdArrowForwardIos />
      </div>
      <div className={`absolute top-[150px] right-[1120px] ${styles.swiperButtonPrev}`}>
      <MdArrowBackIos />
      </div>

    </div>
  );
};

export default SwiperSection3;
