// components/Header.tsx
import {

  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,

} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FiHeart } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollinvisble = 300;

    const [showStickyHeader, setShowStickyHeader] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
  
        if (currentScrollY < scrollinvisble) {
        
          setShowStickyHeader(false);
        } else {
        
          setShowStickyHeader(true);
        }
       
       if (currentScrollY > lastScrollY) {
          
          setShowStickyHeader(false);
        }
        setLastScrollY(currentScrollY);
      };
       
      window.addEventListener("scroll", handleScroll);
  
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lastScrollY]); 
  
  return (
    <>
    
    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Navbar 1 */}
      <header
        className={`w-full transition-transform duration-300 `}
      >
        {/* Üst Çubuk */}
        <div className="bg-[#87B38D] text-white text-xs">
          <div className="container mx-auto flex justify-between items-center px-4">
            {/* Sol Taraf */}

            <div className="flex items-center space-x-4">
              <div className="h-[40px] w-[1px] bg-slate-300 "></div>
              <div className="flex items-center space-x-2">
                <span>ENGLISH</span>
              </div>
              <div className="h-[40px] w-[1px] bg-slate-300 "></div>
              <div className="flex items-center space-x-2">
                <span>COUNTRY</span>
              </div>
              <div className="h-[40px] w-[1px] bg-slate-300 "></div>
              <span>FREE SHIPPING FOR ALL ORDERS OF $150</span>
            </div>

            {/* Sağ Taraf */}
            <div className="flex items-center space-x-2  ">
              <FaFacebookF className="cursor-pointer text-[17px]" />
              <FaTwitter className="cursor-pointer text-[17px]" />
              <FaInstagram className="cursor-pointer text-[17px]" />
              <FaYoutube className="cursor-pointer text-[17px]" />
              <FaPinterest className="cursor-pointer text-[15px]  " />
              <div className="h-[40px] w-[1px] bg-slate-300 "></div>
              <HiOutlineMail className="cursor-pointer text-[17px] " />
              <span className="cursor-pointer ">NEWSLETTER</span>
              <div className="h-[40px] w-[1px] bg-slate-300 "></div>
              <span className="cursor-pointer ">CONTACT US</span>
              <div className="h-[40px] w-[1px] bg-slate-300 "></div>
              <span className="cursor-pointer ">FAQS</span>
              <div className="h-[40px] w-[1px] bg-slate-300 "></div>
            </div>
          </div>
        </div>

        {/* Ana Başlık ve Menü */}
        <div className="bg-white text-black">
          <div className="container mx-auto flex justify-between items-center py-6 px-4">
            {/* Sol Taraf */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <img
                  src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/technology.svg"
                  className="w-[40px] h-[40px]"
                  alt=""
                />
                <div>
                  <span className="block text-sm">Call toll-free</span>
                  <a
                    href="tel:+73099321312"
                    className="block text-sm text-gray-600"
                  >
                    +73 099 321 312
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2024/08/handmade-questions.svg"
                  className="w-[40px] h-[40px]"
                  alt=""
                />
                <div>
                  <span className="block text-sm">Any questions</span>
                  <a
                    href="mailto:hand@made.com"
                    className="block text-sm text-gray-600"
                  >
                    hand@made.com
                  </a>
                </div>
              </div>
            </div>

            {/* Ortadaki Logo */}
            <div>
              <Link href="/" className="text-3xl font-bold">
                <img
                  src="https://woodmart.b-cdn.net/handmade/wp-content/themes/woodmart/images/wood-logo-dark.svg"
                  className="w-[220px] h-[50x]"
                  alt=""
                />
              </Link>
            </div>

            {/* Sağ Taraf */}
            <div className="flex items-center space-x-6">
              <Link href="/login" className="text-sm hover:text-[#87B38D]">
                LOGIN / REGISTER
              </Link>
              <div className="flex items-center space-x-2">
                <div className="relative flex text-center justify-center items-center">
                  <HiOutlineSearch className="cursor-pointer text-2xl text-black hover:text-[#87B38D]" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="relative flex text-center justify-center items-center">
                  <FiHeart className="cursor-pointer text-xl text-black hover:text-[#87B38D]" />
                  <span className="absolute bottom-3 left-4  bg-[#87B38D] text-xs flex justify-center items-center  text-white h-4 w-4 rounded-full">
                    0
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 relative">
                <div className="relative flex text-center justify-center items-center  ">
               <button onClick={toggleSidebar}>
               <LiaShoppingBagSolid className="  cursor-pointer text-2xl text-black hover:text-[#87B38D]" onClick={toggleSidebar} />
               </button>
                  <span className="absolute bottom-3 left-4  bg-[#87B38D] text-xs flex justify-center items-center  text-white h-4 w-4 rounded-full">
                    0
                  </span>
                </div>
              </div>
              <span className="text-sm">£0.00</span>
            </div>
          </div>
        </div>

        {/* Alt Navigasyon Menüsü */}
        <nav className="bg-white text-gray-500 w-[100%] relative">
          <div className="h-[1px] bg-slate-100 mb-2"></div>
          <div className="container mx-auto  flex justify-center py-2 px-4 items-center">
            <ul className="flex space-x-4 items-start justify-center  ">
              <li className="group mt-[3px] ">
                <Link
                  href="/"
                  className="flex items-center relative text-sm hover:text-[#87B38D]"
                >
                  HOME <IoIosArrowDown className="text-gray-300" />
                  <span className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#87B38D]"></span>
                </Link>

                <div className="h-[550px] invisible w-[100%] mt-[2px] left-0 group-hover:visible  transition-all duration-150 bg-white absolute shadow-inner  ">
                  <div className="container  h-[550px] opacity-0  flex group-hover:visible group-hover:opacity-100 traslition-all duration-300 flex-wrap py-5 justify-center gap-5 ">
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2024/06/demo-default-1.jpg"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2023/02/demo-mega-electronics.jpg"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2022/06/preview-megamarket.jpg"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2023/02/demo-mega-electronics.jpg"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2019/05/preview-retail-2.jpg.webp"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2019/05/preview-retail-2.jpg.webp"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2019/05/preview-retail-2.jpg.webp"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2019/05/preview-retail-2.jpg.webp"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2019/05/preview-retail-2.jpg.webp"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2019/05/preview-retail-2.jpg.webp"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div>
                      <button className="px-5 py-2 bg-green-700 text-white">
                        View All Demos
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group relative">
                <Link
                  href="/shop"
                  className="relative text-sm group hover:text-[#87B38D]"
                >
                  SHOP
                  <span className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#87B38D]"></span>
                </Link>
              </li>
              <li className="group relative">
                <Link
                  href="/blog"
                  className="relative text-sm group hover:text-[#87B38D]"
                >
                  BLOG
                  <span className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#87B38D]"></span>
                </Link>
              </li>
              <li className="group relative">
                <Link
                  href="/factory"
                  className="relative text-sm group hover:text-[#87B38D]"
                >
                  OUR FACTORY
                  <span className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#87B38D]"></span>
                </Link>
              </li>
              <li className="group relative">
                <Link
                  href="/vendors"
                  className="relative text-sm group hover:text-[#87B38D]"
                >
                  LIST OF VENDORS
                  <span className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#87B38D]"></span>
                </Link>
              </li>
              <li className="group relative">
                <Link
                  href="/vendor-page"
                  className="relative text-sm group hover:text-[#87B38D]"
                >
                  VENDOR PAGE
                  <span className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#87B38D]"></span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="h-[1px] bg-slate-100 mt-2"></div>
      </header>
      {/* navbar 2 */}
      <header className={`w-full flex justify-center top-0 p-2 bg-white fixed shadow-md z-[1000] transition-transform duration-300  ${
          showStickyHeader ? "translate-y-0 " : "-translate-y-full top-0"
        }`}>
      <nav className={`  container  top-0  flex w-[100%] text-gray-500  transition-transform duration-300`} 
         
       >
           <div>
            <Link href="/" className="">
              <img
                src="https://woodmart.b-cdn.net/handmade/wp-content/themes/woodmart/images/wood-logo-dark.svg"
                className="w-[300px] h-[50px]"
                alt=""
              />
            </Link>
          </div>
          <div className="h-[1px] bg-slate-100 mb-2"></div>
          <div className="container mx-auto  flex justify-center py-2 px-4 items-center">
            <ul className="flex space-x-4 items-start justify-center  ">
              <li className="group mt-[3px] ">
                <Link
                  href="/"
                  className="flex items-center relative text-sm hover:text-[#87B38D]"
                >
                  HOME <IoIosArrowDown className="text-gray-300" />
                  <span className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#87B38D]"></span>
                </Link>

                <div className="h-[550px] invisible w-[100%] mt-[2px] left-0 group-hover:visible  transition-all duration-150 bg-white absolute shadow-inner  ">
                  <div className="container  h-[550px] opacity-0  flex group-hover:visible group-hover:opacity-100 traslition-all duration-300 flex-wrap py-5 justify-center gap-5 ">
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2019/05/preview-retail-2.jpg.webp"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2019/05/preview-retail-2.jpg.webp"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2019/05/preview-retail-2.jpg.webp"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2019/05/preview-retail-2.jpg.webp"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2019/05/preview-retail-2.jpg.webp"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2019/05/preview-retail-2.jpg.webp"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2019/05/preview-retail-2.jpg.webp"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2019/05/preview-retail-2.jpg.webp"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2019/05/preview-retail-2.jpg.webp"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div className=" flex-col items-center flex shadow-md h-[220px] ">
                      <img
                        src="https://woodmart.xtemos.com/wp-content/uploads/2019/05/preview-retail-2.jpg.webp"
                        className="w-[222px] mb-2 h-[185px]"
                        alt=""
                      />
                      <span>Default</span>
                    </div>
                    <div>
                      <button className="px-5 py-2 bg-green-700 text-white">
                        View All Demos
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group relative">
                <Link
                  href="/shop"
                  className="relative text-sm group hover:text-[#87B38D]"
                >
                  SHOP
                  <span className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#87B38D]"></span>
                </Link>
              </li>
              <li className="group relative">
                <Link
                  href="/blog"
                  className="relative text-sm group hover:text-[#87B38D]"
                >
                  BLOG
                  <span className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#87B38D]"></span>
                </Link>
              </li>
              <li className="group relative">
                <Link
                  href="/factory"
                  className="relative text-sm group hover:text-[#87B38D]"
                >
                  OUR FACTORY
                  <span className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#87B38D]"></span>
                </Link>
              </li>
              <li className="group relative">
                <Link
                  href="/vendors"
                  className="relative text-sm group hover:text-[#87B38D]"
                >
                  LIST OF VENDORS
                  <span className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#87B38D]"></span>
                </Link>
              </li>
              <li className="group relative">
                <Link
                  href="/vendor-page"
                  className="relative text-sm group hover:text-[#87B38D]"
                >
                  VENDOR PAGE
                  <span className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-[#87B38D]"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
              <Link href="/" className="text-sm w-[120px] hover:text-[#87B38D]">
                LOGIN / REGISTER
              </Link>
              <div className="flex items-center ">
                <div className="relative flex text-center justify-center items-center">
                  <HiOutlineSearch className="cursor-pointer text-2xl text-black hover:text-[#87B38D]" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="relative flex text-center justify-center items-center">
                  <FiHeart className="cursor-pointer text-xl text-black hover:text-[#87B38D]" />
                  <span className="absolute bottom-3 left-4  bg-[#87B38D] text-xs flex justify-center items-center  text-white h-4 w-4 rounded-full">
                    0
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 relative">
                <div className="relative flex text-center justify-center items-center  ">
                  <LiaShoppingBagSolid className="  cursor-pointer text-2xl text-black hover:text-[#87B38D]" />
                  <span className="absolute bottom-3 left-4  bg-[#87B38D] text-xs flex justify-center items-center  text-white h-4 w-4 rounded-full">
                    0
                  </span>
                </div>
              </div>
              <span className="text-sm">£0.00</span>
            </div>
        </nav>
      </header>
      
    </>
  );
};

export default Header;
