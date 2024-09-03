"use client";
import React from "react";
import Image from "next/image";

const InstagramSection = () => {
  const images = [
    "https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2021/03/wd-inst-handmade-6.jpg",
    "https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2021/03/wd-inst-handmade-5.jpg",
    "https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2021/03/wd-inst-handmade-4.jpg",
    "https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2021/03/wd-inst-handmade-3.jpg",
    "https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2021/03/wd-inst-handmade-2.jpg",
    "https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2021/03/wd-inst-handmade-1.jpg",
  ];

  return (
    <div className="relative flex flex-col items-center">
      <div className="grid grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="w-full h-full overflow-hidden relative group">
            <img
              src={src}
              alt={`Instagram Image ${index + 1}`}
              width={200}
              height={200}
              className="object-cover w-full h-full  "
            />
            <div className="absolute  inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>
          </div>
        ))}
      </div>

      <div className="absolute top-[92px] flex items-center justify-center bg-white bg-opacity-100 w-[300px] h-[220px] p-10">
        <div className="text-center">
          <h3 className="text-lg font-semibold lora">INSTAGRAM</h3>
          <p className="text-xs text-gray-500 lora opacity-50">@NAME_ACCOUNT</p>
          <p className="text-gray-600 mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
