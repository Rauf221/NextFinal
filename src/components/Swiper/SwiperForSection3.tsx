"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useSWR from "swr";
import "swiper/css";
import "swiper/css/navigation";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styles from "../../styles/Slider.module.css";


const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SwiperSection3 = () => {
  
 
  const { data, error } = useSWR<{ swiper: { id: string, title: string, image: string, productsCount: number }[] }>("http://localhost:3001/DatasForAdminPanel", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="relative">
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
        {data?.map((Product: { id: string, title: string, image: string, productsCount: number }) => (
          <SwiperSlide key={Product?.id}>
            <div className="relative group h-[320px] w-[385px]">
              <div className="bg-cover overflow-hidden">
                <img
                  src={Product?.image}
                  className="h-[320px] w-[385px] transition-transform duration-500 transform group-hover:scale-110"
                  alt={Product?.title}
                />
              </div>

              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <button className="bg-[#79b38a] text-white text-2xl lora py-3 px-6 opacity-100 transition-opacity duration-400 group-hover:opacity-0">
                  {Product?.title}
                </button>
                <div className="absolute inset-0 flex justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100 group-hover:delay-300 items-center">
                  <span className="text-white font-bold">{Product?.productsCount} PRODUCTS</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

  
      <div className={`absolute top-[50%] transform -translate-y-1/2 left-[1220px] ${styles.swiperButtonPrev}`}>
      <MdArrowForwardIos /> 
      </div>
      <div className={`absolute top-[50%] transform -translate-y-1/2 right-[1220px] ${styles.swiperButtonNext}`}>
       <MdArrowBackIos />
      </div>
    </div>
  );
};

export default SwiperSection3;
