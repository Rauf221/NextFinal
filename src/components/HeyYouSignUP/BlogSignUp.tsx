import React from "react";
import { FaFacebookF, FaTwitter, FaEnvelope, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const BlogSignupSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[150px] mt-16 bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2018/10/finaly-banner-handmade-11-opt.jpg?id=1055"
          alt="Background"
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      <div className="relative z-10  flex gap-10 ">
        <div>
        <h3 className="text-md text-[#79b38a] font-bold ">LAOREET IN VITAE AMET</h3>
        <h2 className="text-3xl lora  ">
        Hey you, sign up and connect to Woodmart!

        </h2>
        </div>
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

      
      </div>
    </div>
  );
};

export default BlogSignupSection;
