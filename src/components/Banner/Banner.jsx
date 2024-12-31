import React from "react";
import BannerImg from "../../assets/women/women2.png";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="w-full mx-auto object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-5 sm:pt-0">
          <h1 data-aos="fade-up" className="font-serif text-4xl sm:text-6xl font-bold mt-1 text-center">
            Ayo Investasi di
            <br />
            MD Dana
          </h1>
          <p
              data-aos="fade-up"
              className="font-serif text-xl dark:text-gray-200 tracking-wide leading-5 gap-2 text-center"
            >
            Wujudkan Tujuan Keuangan Kamu Bersama MD Dana
            <br />
            melalui Investasi Saham
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
