"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Herosection() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-screen"
      >
        <SwiperSlide>
          <div className="py-20 flex flex-col md:flex-row h-full bg-gradient-to-br from-[#005f73] to-[#0a9396] text-white">
            {/* Left Side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-[#ec9a01] drop-shadow-lg leading-tight animate-fadeIn">
                Welcome to <span className="text-white">Al-Naseer Travel</span>
              </h1>
              <p className="text-center text-base md:text-lg leading-relaxed max-w-md text-white mb-6">
                Enjoy exclusive Umrah packages, crafted to include top-tier services and amenities for a smooth, hassle-free spiritual journey.
              </p>
              <button className="mt-4 px-6 py-3 rounded-lg bg-[#ec9a01] text-white font-semibold hover:bg-white hover:text-[#ec9a01] transition-colors duration-300 shadow-lg transform hover:scale-105">
                Explore Packages
              </button>
            </div> 

            {/* Right Side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10">
              <Image
                src="/makkah1.png"
                alt="Makkah Image"
                width={800}
                height={800}
                className="relative z-20 rounded-lg shadow-none animate-slideUp w-full h-auto" // Removed shadow-2xl for no shade
              />
            </div>
          </div>
        </SwiperSlide>

        

        {/* Additional Slides 2 */}
        <SwiperSlide>
          <div className="py-20 flex flex-col md:flex-row h-full bg-gradient-to-br from-[#005f73] to-[#0a9396] text-white">
            {/* Left Side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-[#ec9a01] drop-shadow-lg leading-tight animate-fadeIn">
                UMRAH PACKAGES <span className="text-white">1446-2024/2025</span>
              </h1>
              <p className="text-center text-base md:text-lg leading-relaxed max-w-md text-white mb-6">
                BIN-NASEER Offer Umrah packages typically include various services and  amenities required for a comfortable and hassle-free journey. 
              </p>
              <button className="mt-4 px-6 py-3 rounded-lg bg-[#ec9a01] text-white font-semibold hover:bg-white hover:text-[#ec9a01] transition-colors duration-300 shadow-lg transform hover:scale-105">
                Explore Packages
              </button>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10">
              <Image
                src="/hijaz-umrah-kafela.webp"
                alt="Banner Image"
                width={800}
                height={800}
                className="relative z-20 rounded-lg shadow-none animate-slideUp w-full h-auto" // Ensure no shadow is applied
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Herosection;
