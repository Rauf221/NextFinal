import Section_4 from "../HandMadeServices/HandMadeServices";
import SwiperMainContext from "../Swiper/SwiperSection2";
import SwiperSection3 from "../Swiper/SwiperForSection3";
import SwiperForHandMadeServices from "../Swiper/SwiperForHandMadeServices";
import TestimonialSlider from "../Swiper/SwiperForWhatTheySayAboutUs";
import InstagramSection from "../WhatTheySayAboutUs/Instagram";
import SignupSection from "../HeyYouSignUP/HeyYouSignUP";

export default function HomePageMainContext() {
  return (
    <>
      <section className="section_1">
        <div className="container w-full  h-[600px]  flex gap-5">
          <div className="w-[50%]  h-[100%] bg-[url('https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2018/10/banner-1-opt.jpg')]  bg-cover">
            <div className="flex flex-col p-8">
              <span className="text-[#79b38a] font-bold ">
                MATTIS LAOREET SAPIEN
              </span>
              <span className="text-5xl w-[200px] lora font-light mt-5">
                Porta Consectetur Imperdiet Frigilla
              </span>
              <span className="text-sm font-bold mt-5 flex flex-col">
                READ MORE
                <span className="h-[1px] w-[14%] bg-[#79b38a]"></span>
              </span>
            </div>
          </div>
          <div className=" w-[50%] h-[100%]  flex flex-col gap-5">
            <div className="w-[100%] h-[50%] bg-[url('https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2018/10/finaly-banner-handmade-9-opt.jpg')]  bg-cover">
              <div className="flex flex-col p-8">
                <span className="text-[#79b38a] font-bold ">SEMPER</span>
                <span className="text-2xl w-[200px] lora font-medium mt-3">
                  Feugiat Scelerisque Imperdiet
                </span>
                <span className="text-xs font-bold mt-3 flex flex-col">
                  READ MORE
                  <span className="h-[2px] w-[14%] bg-[#79b38a]"></span>
                </span>
              </div>
            </div>
            <div className="flex  w-[100%] h-[50%] gap-5">
              <div className="w-[60%] h-[100%] bg-[url('https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2018/10/finaly-banner-handmade-7-opt.jpg')]  bg-cover">
                <div className="flex flex-col p-8">
                  <span className="text-[#79b38a] font-bold ">SEMPER</span>
                  <span className="text-2xl w-[200px] lora font-medium mt-3">
                    Adipiscing Sodales
                  </span>
                  <span className="text-xs font-bold mt-3 flex flex-col">
                    READ MORE
                    <span className="h-[2px] w-[27%] bg-[#79b38a]"></span>
                  </span>
                </div>
              </div>
              <div className="w-[40%] h-[100%] bg-[url('https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2018/10/finaly-banner-handmade-8-opt.jpg')]  bg-cover"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_2 container w-[100%] h-[1000px]">
        <div className="w-[100%] flex flex-col items-center mt-24 gap-3">
          <span className="text-[#79b38a] font-bold text-sm">
            WOODEN ACCESSORIES
          </span>
          <h1 className="lora text-2xl">FEATURED PRODUCTS</h1>
          <p className="font-normal">
            Visit our shop to see amazing creations from our designers.
          </p>
        </div>
        <div className="w-[100%] flex justify-center mt-7">
          <ul className="flex gap-5">
            <li className="relative group">
              <span className="lora">BEST SELLERS</span>
              <span className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#87B38D]"></span>
            </li>
            <li className="relative group">
              <span className="lora">FEATURED</span>
              <span className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#87B38D]"></span>
            </li>
            <li className="relative group">
              <span className="lora">SALES</span>
              <span className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#87B38D]"></span>
            </li>
          </ul>
        </div>
        <div className="w-[100%] h-[800px] p-5">
          <SwiperMainContext />
        </div>
      </section>
      <section className="section_3 container w-[100%] ">
      <div className="w-[100%] flex flex-col items-center mt-24 gap-3">
          <span className="text-[#79b38a] font-bold text-sm">
            WOODEN ACCESSORIES
          </span>
          <h1 className="lora text-2xl">FEATURED CATEGORIES</h1>
          <p className="font-normal">
            Visit our shop to see amazing creations from our designers.
          </p>
        </div>
        <div className="w-full mt-7">
         <SwiperSection3/>
        </div>
     </section>
     <section className="section_4 container w-[100%]">
      <div className="w-[100%] flex flex-col items-center mt-24 gap-3">
          <span className="text-[#79b38a] font-bold text-sm">
            WOODEN ACCESSORIES
          </span>
          <h1 className="lora text-2xl">HAND MADE SERVICE</h1>
          <p className="font-normal">
            Visit our shop to see amazing creations from our designers.
          </p>
        </div>
        <div className="w-full mt-10">
          <Section_4/>
        </div>
     </section>
      <section className="section_5 container mx-auto w-[100%] ">
        <div className="w-[100%] flex flex-col items-center mt-16 gap-3">
          <span className="text-[#79b38a] font-bold text-sm">
            WOODEN ACCESSORIES
          </span>
          <h1 className="lora text-2xl">HAND MADE SERVICE</h1>
          <p className="font-normal">
            Visit our shop to see amazing creations from our designers.
          </p>
        </div>
        <div className="w-[100%] h-auto p-5">
            <SwiperForHandMadeServices/>
        </div>
      </section>
      <section className="section_6 container flex mx-auto w-[100%]">
        <div className="flex flex-col w-[50%] mt-20">
          <TestimonialSlider />
        </div>
        <div className="flex w-[50%] mt-20">
        <InstagramSection />
        </div>
      </section>
      <section className="section_7  w-[100%] mt-20">
        <div>
          <SignupSection />
        </div>
      </section>
    </>
  );
}
