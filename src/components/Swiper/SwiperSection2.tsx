
"use client";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useSWR from "swr";
import "swiper/css";
import "swiper/css/navigation";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosSearch, IoIosGitCompare, IoMdHeartEmpty } from "react-icons/io";
import Sidebar from "../Sidebar/Sidebar";
import Modal from "../Modal/Section2Modal";
import WishlistItem from "../Pages/wishlist";
import styles from "../../styles/Slider.module.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type ProductType = {
  title: string;
  category: string;
  price: string;
  oldPrice?: string;
  image: string;
  rating: number | null;
};

type SlideType = {
  id: number;
  products: ProductType[];
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SwiperMainContext = () => {
  
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const [wishlistItems, setWishlistItems] = useState<ProductType[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const { data, error } = useSWR<SlideType[]>("http://localhost:3001/swiper", fetcher);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const swiper = (document.querySelector('.mySwiper') as any)?.swiper;
    if (swiper) {
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [data]); 

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const addToCart = (product: ProductType) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setIsSidebarOpen(true);
    setCartCount(cartCount + 1);
  };

  const openModalWithProduct = (product: ProductType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const addToWishlist = (product: ProductType) => {
    setWishlistItems((prevItems) => [...prevItems, product]);
  };

  const removeFromWishlist = (product: ProductType) => {
    setWishlistItems((prevItems) => prevItems.filter(item => item !== product));
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative h-[900px]">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`, 
        }}
        modules={[Navigation]}
        className={`mySwiper ${styles.mySwiper}`}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="h-[850px] w-[300px] flex flex-col gap-5">
              <div className="relative h-[50%] w-[100%] flex flex-col items-center">
                <div className="flex flex-col items-center group/main">
                  <img
                    src={slide.products[0]?.image}
                    className="w-[283px] h-[323px]"
                    alt={slide.products[0]?.title}
                  />
                  <div className="absolute w-[180px] h-[50px] top-[260px] flex text-2xl justify-center items-center gap-5 bg-white opacity-0 translate-y-5 group-hover/main:opacity-100 group-hover/main:translate-y-0 transition-all duration-300">
                    <div className="relative group/icons">
                      <GiShoppingCart onClick={() => addToCart(slide.products[0])} />
                      <div className="w-[90px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/icons:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Add to Cart
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>
                    <div className="relative group/icons">
                      <IoIosSearch onClick={() => openModalWithProduct(slide.products[0])} />
                      <div className="w-[90px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/icons:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Quick View
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>
                    <div className="relative group/icons">
                      <IoIosGitCompare />
                      <div className="w-[90px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/icons:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Compare
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>
                    <div className="relative group/icons">
                      <IoMdHeartEmpty onClick={() => addToWishlist(slide.products[0])} />
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

           
              <div className="relative h-[50%] w-[100%] flex flex-col items-center">
               
                <div className="flex flex-col items-center group/main">
                  <img
                    src={slide.products[1]?.image}
                    className="w-[283px] h-[323px]"
                    alt={slide.products[1]?.title}
                  />
                  <div className="absolute w-[180px] h-[50px] top-[260px] flex text-2xl justify-center items-center gap-5 bg-white opacity-0 translate-y-5 group-hover/main:opacity-100 group-hover/main:translate-y-0 transition-all duration-300">
                    <div className="relative group/icons">
                      <GiShoppingCart onClick={() => addToCart(slide.products[1])} />
                      <div className="w-[90px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/icons:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Add to Cart
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>
              
                    <div className="relative group/icons">
                      <IoIosSearch onClick={() => openModalWithProduct(slide.products[1])} />
                      <div className="w-[90px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/icons:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Quick View
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>
             
                    <div className="relative group/icons">
                      <IoIosGitCompare />
                      <div className="w-[90px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/icons:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Compare
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>
                    <div className="relative group/icons">
                      <IoMdHeartEmpty onClick={() => addToWishlist(slide.products[1])} />
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
                  {slide.products[1]?.rating && (
                    <span className="flex text-[#eabe12]">
                      {[...Array(slide.products[1].rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </span>
                  )}
                  <span className="text-sm text-[#79b38a]">
                    {slide.products[1]?.price}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`absolute top-[400px] left-[1100px] ${styles.swiperButtonNext}`}>
      <MdArrowForwardIos />
      </div>
      <div className={`absolute top-[400px] right-[1100px] ${styles.swiperButtonPrev}`}>
      <MdArrowBackIos />
      </div>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} cartItems={cartItems} setCartItems={setCartItems} />
      {selectedProduct && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={selectedProduct} />
      )}
    </div>
  );
};

export default SwiperMainContext;

