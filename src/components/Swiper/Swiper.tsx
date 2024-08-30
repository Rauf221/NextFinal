'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaComment, FaShareAlt } from 'react-icons/fa';

const SwiperMainContext = () => {
    return (
       
            <div className="relative">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                    grabCursor={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <div></div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                       
                    </SwiperSlide>

                    <SwiperSlide>
                       
                    </SwiperSlide>
                </Swiper>

                {/* Navigation Buttons */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
     
    );
}
export default SwiperMainContext;
