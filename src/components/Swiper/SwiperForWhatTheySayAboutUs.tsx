"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  return (
    <div className="relative flex items-center mr-10 ">
      {/* Left Navigation Button */}
      <div
        className="swiper-button-prev-custom absolute left-0 z-10 cursor-pointer"
      >
        <MdArrowBackIos size={24} />
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="mySwiper w-full "
      >
        {/* Testimonial Slide 1 */}
        <SwiperSlide>
          <div className="text-center p-8">
            <p className="text-sm uppercase text-green-600 mb-2">Wooden Accessories</p>
            <h2 className="text-2xl  mb-6 lora">What They Say About Us</h2>
            <img
              className="rounded-full w-24 h-24 mx-auto mb-4"
              src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/cropped-1-1.jpg"
              alt="Customer"
            />
            <p className="text-gray-500 mb-4">
              Fringilla iaculis ante torquent a diam a vestibulum diam nisi
              augue dictumst parturient a vestibulum tortor viverra inceptos
              adipiscing nec a ullamcorper. Ullamcorper aliquam rutrum.
            </p>
            <p className="font-bold">Elsa Nora - <span className="opacity-50">Happy Customer</span></p>
          </div>
        </SwiperSlide>

        {/* Testimonial Slide 2 */}
        <SwiperSlide>
          <div className="text-center p-8">
            <p className="text-sm uppercase text-green-600 mb-2">Wooden Accessories</p>
            <h2 className="text-2xl font-bold mb-6">What They Say About Us</h2>
            <img
              className="rounded-full w-24 h-24 mx-auto mb-4"
              src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/cropped-6-1.jpg"
              alt="Customer"
            />
            <p className="text-gray-500 mb-4">
             

			Imperdiet a in a magna cursus tristique sed eros sed scelerisque purus netus ridiculus a gravida non fusce maecenas adipiscing suspendisse netus sed a rutrum odio nisi integer susp.
			
            </p>
            <p className="font-bold">John Doe - Satisfied Client</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center p-8">
            <p className="text-sm uppercase text-green-600 mb-2">Wooden Accessories</p>
            <h2 className="text-2xl font-bold mb-6">What They Say About Us</h2>
            <img
              className="rounded-full w-24 h-24 mx-auto mb-4"
              src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/cropped-2-1.jpg"
              alt="Customer"
            />
            <p className="text-gray-500 mb-4">
              Fringilla iaculis ante torquent a diam a vestibulum diam nisi
              augue dictumst parturient a vestibulum tortor viverra inceptos
              adipiscing nec a ullamcorper. Ullamcorper aliquam rutrum.
            </p>
            <p className="font-bold">Elsa Nora - Happy Customer</p>
          </div>
        </SwiperSlide>
        {/* More Slides as Needed */}
      </Swiper>

      {/* Right Navigation Button */}
      <div
        className="swiper-button-next-custom absolute right-0 z-10 cursor-pointer"
      >
        <MdArrowForwardIos size={24} />
      </div>
    </div>
  );
};

export default TestimonialSlider;
