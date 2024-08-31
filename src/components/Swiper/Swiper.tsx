"use client";
import { FaStar } from "react-icons/fa6";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaComment, FaShareAlt } from "react-icons/fa";

const SwiperMainContext = () => {
  return (
    <div className="relative h-[750px]">
      <Swiper
        spaceBetween= {30}
        slidesPerView={4}
       
        grabCursor={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[850px] w-[300px] flex flex-col gap-5">
            <div className="h-[50%] w-[100%] flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-1-opt.jpg"
                  className="w-[283px] h-[323px]"
                  alt=""
                />
              </div>
              <div className="text-center gap-1 flex flex-col">
                <h1 className="lora text-sm mt-2">Wall Photo</h1>
                <p className="text-xs">Decor</p>
                <span className=" flex text-[#eabe12]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="text-sm text-[#79b38a]">£599.00</span>
              </div>
            </div>
            <div className="h-[50%] w-[100%] ">
              <div className="h-[50%] w-[100%] flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <img
                    src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-6-opt.jpg"
                    className="w-[283px] h-[323px]"
                    alt=""
                  />
                </div>
                <div className="text-center gap-1 flex flex-col">
                  <h1 className="lora text-sm mt-2">Wall Clocks</h1>
                  <p className="text-xs">Clocks</p>

                  <div className="flex items-center gap-[2px]">
                    <span className="line-through text-xs text-slate-600">
                      £399.00
                    </span>
                    <span className="text-sm text-[#79b38a]">£320.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[850px] w-[300px] flex flex-col gap-5">
            <div className="h-[50%] w-[100%] flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-1-opt.jpg"
                  className="w-[283px] h-[323px]"
                  alt=""
                />
              </div>
              <div className="text-center gap-1 flex flex-col">
                <h1 className="lora text-sm mt-2">Wall Photo</h1>
                <p className="text-xs">Decor</p>
                <span className="text-sm text-[#79b38a]">£599.00</span>
              </div>
            </div>
            <div className="h-[50%] w-[100%] ">
              <div className="h-[50%] w-[100%] flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <img
                    src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-6-opt.jpg"
                    className="w-[283px] h-[323px]"
                    alt=""
                  />
                </div>
                <div className="text-center gap-1 flex flex-col">
                  <h1 className="lora text-sm mt-2">Wall Clocks</h1>
                  <p className="text-xs">Clocks</p>
                  <span className="text-sm text-[#79b38a]">£320.00</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="h-[850px] w-[300px] flex flex-col gap-5">
            <div className="h-[50%] w-[100%] flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-1-opt.jpg"
                  className="w-[283px] h-[323px]"
                  alt=""
                />
              </div>
              <div className="text-center gap-1 flex flex-col">
                <h1 className="lora text-sm mt-2">Wall Photo</h1>
                <p className="text-xs">Decor</p>
                <span className="text-sm text-[#79b38a]">£599.00</span>
              </div>
            </div>
            <div className="h-[50%] w-[100%] ">
              <div className="h-[50%] w-[100%] flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <img
                    src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-6-opt.jpg"
                    className="w-[283px] h-[323px]"
                    alt=""
                  />
                </div>
                <div className="text-center gap-1 flex flex-col">
                  <h1 className="lora text-sm mt-2">Wall Clocks</h1>
                  <p className="text-xs">Clocks</p>
                  <span className="text-sm text-[#79b38a]">£320.00</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[850px] w-[300px] flex flex-col gap-5">
            <div className="h-[50%] w-[100%] flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-1-opt.jpg"
                  className="w-[283px] h-[323px]"
                  alt=""
                />
              </div>
              <div className="text-center gap-1 flex flex-col">
                <h1 className="lora text-sm mt-2">Wall Photo</h1>
                <p className="text-xs">Decor</p>
                <span className=" flex text-[#eabe12]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="text-sm text-[#79b38a]">£599.00</span>
              </div>
            </div>
            <div className="h-[50%] w-[100%] ">
              <div className="h-[50%] w-[100%] flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <img
                    src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-6-opt.jpg"
                    className="w-[283px] h-[323px]"
                    alt=""
                  />
                </div>
                <div className="text-center gap-1 flex flex-col">
                  <h1 className="lora text-sm mt-2">Wall Clocks</h1>
                  <p className="text-xs">Clocks</p>

                  <div className="flex items-center gap-[2px]">
                    <span className="line-through text-xs text-slate-600">
                      £399.00
                    </span>
                    <span className="text-sm text-[#79b38a]">£320.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[850px] w-[300px] flex flex-col gap-5">
            <div className="h-[50%] w-[100%] flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-1-opt.jpg"
                  className="w-[283px] h-[323px]"
                  alt=""
                />
              </div>
              <div className="text-center gap-1 flex flex-col">
                <h1 className="lora text-sm mt-2">Wall Photo</h1>
                <p className="text-xs">Decor</p>
                <span className=" flex text-[#eabe12]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="text-sm text-[#79b38a]">£599.00</span>
              </div>
            </div>
            <div className="h-[50%] w-[100%] ">
              <div className="h-[50%] w-[100%] flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <img
                    src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-6-opt.jpg"
                    className="w-[283px] h-[323px]"
                    alt=""
                  />
                </div>
                <div className="text-center gap-1 flex flex-col">
                  <h1 className="lora text-sm mt-2">Wall Clocks</h1>
                  <p className="text-xs">Clocks</p>

                  <div className="flex items-center gap-[2px]">
                    <span className="line-through text-xs text-slate-600">
                      £399.00
                    </span>
                    <span className="text-sm text-[#79b38a]">£320.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[850px] w-[300px] flex flex-col gap-5">
            <div className="h-[50%] w-[100%] flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-1-opt.jpg"
                  className="w-[283px] h-[323px]"
                  alt=""
                />
              </div>
              <div className="text-center gap-1 flex flex-col">
                <h1 className="lora text-sm mt-2">Wall Photo</h1>
                <p className="text-xs">Decor</p>
                <span className=" flex text-[#eabe12]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="text-sm text-[#79b38a]">£599.00</span>
              </div>
            </div>
            <div className="h-[50%] w-[100%] ">
              <div className="h-[50%] w-[100%] flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <img
                    src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-6-opt.jpg"
                    className="w-[283px] h-[323px]"
                    alt=""
                  />
                </div>
                <div className="text-center gap-1 flex flex-col">
                  <h1 className="lora text-sm mt-2">Wall Clocks</h1>
                  <p className="text-xs">Clocks</p>

                  <div className="flex items-center gap-[2px]">
                    <span className="line-through text-xs text-slate-600">
                      £399.00
                    </span>
                    <span className="text-sm text-[#79b38a]">£320.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[850px] w-[300px] flex flex-col gap-5">
            <div className="h-[50%] w-[100%] flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-1-opt.jpg"
                  className="w-[283px] h-[323px]"
                  alt=""
                />
              </div>
              <div className="text-center gap-1 flex flex-col">
                <h1 className="lora text-sm mt-2">Wall Photo</h1>
                <p className="text-xs">Decor</p>
                <span className=" flex text-[#eabe12]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="text-sm text-[#79b38a]">£599.00</span>
              </div>
            </div>
            <div className="h-[50%] w-[100%] ">
              <div className="h-[50%] w-[100%] flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <img
                    src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-6-opt.jpg"
                    className="w-[283px] h-[323px]"
                    alt=""
                  />
                </div>
                <div className="text-center gap-1 flex flex-col">
                  <h1 className="lora text-sm mt-2">Wall Clocks</h1>
                  <p className="text-xs">Clocks</p>

                  <div className="flex items-center gap-[2px]">
                    <span className="line-through text-xs text-slate-600">
                      £399.00
                    </span>
                    <span className="text-sm text-[#79b38a]">£320.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[850px] w-[300px] flex flex-col gap-5">
            <div className="h-[50%] w-[100%] flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-1-opt.jpg"
                  className="w-[283px] h-[323px]"
                  alt=""
                />
              </div>
              <div className="text-center gap-1 flex flex-col">
                <h1 className="lora text-sm mt-2">Wall Photo</h1>
                <p className="text-xs">Decor</p>
                <span className=" flex text-[#eabe12]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="text-sm text-[#79b38a]">£599.00</span>
              </div>
            </div>
            <div className="h-[50%] w-[100%] ">
              <div className="h-[50%] w-[100%] flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <img
                    src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-6-opt.jpg"
                    className="w-[283px] h-[323px]"
                    alt=""
                  />
                </div>
                <div className="text-center gap-1 flex flex-col">
                  <h1 className="lora text-sm mt-2">Wall Clocks</h1>
                  <p className="text-xs">Clocks</p>

                  <div className="flex items-center gap-[2px]">
                    <span className="line-through text-xs text-slate-600">
                      £399.00
                    </span>
                    <span className="text-sm text-[#79b38a]">£320.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[850px] w-[300px] flex flex-col gap-5">
            <div className="h-[50%] w-[100%] flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-1-opt.jpg"
                  className="w-[283px] h-[323px]"
                  alt=""
                />
              </div>
              <div className="text-center gap-1 flex flex-col">
                <h1 className="lora text-sm mt-2">Wall Photo</h1>
                <p className="text-xs">Decor</p>
                <span className=" flex text-[#eabe12]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="text-sm text-[#79b38a]">£599.00</span>
              </div>
            </div>
            <div className="h-[50%] w-[100%] ">
              <div className="h-[50%] w-[100%] flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <img
                    src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-6-opt.jpg"
                    className="w-[283px] h-[323px]"
                    alt=""
                  />
                </div>
                <div className="text-center gap-1 flex flex-col">
                  <h1 className="lora text-sm mt-2">Wall Clocks</h1>
                  <p className="text-xs">Clocks</p>

                  <div className="flex items-center gap-[2px]">
                    <span className="line-through text-xs text-slate-600">
                      £399.00
                    </span>
                    <span className="text-sm text-[#79b38a]">£320.00</span>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Buttons */}
      <div className="swiper-button-prev "></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};
export default SwiperMainContext;
