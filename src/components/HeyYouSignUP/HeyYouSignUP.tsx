import React from "react";
import { FaFacebookF, FaTwitter, FaEnvelope, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SignupSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2018/10/finaly-banner-handmade-11-opt.jpg?id=1055"
          alt="Background"
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      <div className="relative z-10 text-center">
        <h3 className="text-md text-[#79b38a] mb-4">LAOREET IN VITAE AMET</h3>
        <h2 className="text-4xl lora  mb-4">
          HEY YOU, SIGN UP AND <br />
          CONNECT TO WOODMART!
        </h2>
        <form className="flex justify-center text-start items-center gap-4 mt-6">
          <input
            type="email"
            placeholder="Your email address"
            className="px-16 py-2 border border-gray-300  focus:outline-none"
          />
          <button className="px-6 py-2 bg-[#79b38a] text-white ">
            SIGN UP
          </button>
        </form>
        <p className="text-gray-600 mt-4 text-sm">
          Will be used in accordance with our{" "}
          <a href="#" className="text-gray-800 underline">
            Privacy Policy
          </a>
        </p>

        <div className="flex justify-center items-center gap-3 mt-8 ">
          <div className="w-8 h-8 rounded-full  hover:bg-[#365493] flex justify-center items-center border-[2px] border-gray-300 group">    <FaFacebookF className="text-gray-400 cursor-pointer group-hover:text-white transition duration-200" /></div>
          <div className="w-8 h-8 rounded-full  hover:bg-black flex justify-center items-center border-[2px] border-gray-300 group">    <FaXTwitter className="text-gray-400 cursor-pointer group-hover:text-white transition duration-200" /></div>
          <div className="w-8 h-8 rounded-full  hover:bg-orange-400 flex justify-center items-center border-[2px] border-gray-300 group">    <FaEnvelope className="text-gray-400 cursor-pointer group-hover:text-white transition duration-200" /></div>
          <div className="w-8 h-8 rounded-full  hover:bg-red-600 flex justify-center items-center border-[2px] border-gray-300 group">    <FaPinterestP className="text-gray-400 cursor-pointer group-hover:text-white transition duration-200" /></div>
      

        </div>
      </div>
    </div>
  );
};

export default SignupSection;
