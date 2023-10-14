import React from "react";
import shoe_image from "../assets/shoe_image.png";

const Banner = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto xl:mt-[100px] mt-[70px] xs:mx-[35px] sm:mx-[45px] md:mx-[75px] flex flex-col xl:flex-row relative">
        <div>
          <h1 className="xl:w-[595px] xl:h-[306px] xl:text-[108px] lg:text-[100px] lg:leading-[90px] text-[40px] font-extrabold leading-[50px] xl:leading-[102px]">
            YOUR FEET
            <br /> DESERVE
            <br /> THE BEST
          </h1>
          <p className="w-[404px] h-[91px] xl:mt-[36px] mt-[20px] font-semibold lg:text-[16px] text-[12px] text-[#5A5959] leading-6">
            YOUR FEET DESERVE THE BEST AND WE’RE
            <br /> HERE TO HELP YOU WITH OUR SHOES.
            <br /> YOUR FEET DESERVE THE BEST AND WE’RE
            <br /> HERE TO HELP YOU WITH OUR SHOES.
          </p>
          <div className="xl:mt-[36px] my-[20px] flex gap-4">
            <button className="bg-[#D01C28] text-[16px] leading-7 text-white p-[6px_16px] font-semibold">
              Shop Now
            </button>
            <button className="text-[16px] text-[#5A5959] font-semibold leading-7 border-[1px] border-[#5A5959] p-[6px_16px]">
              Catageory
            </button>
          </div>
        </div>
        <div className="xs:mt-[50px] xl:mt-0">
          <img
            src={shoe_image}
            alt="shoe"
            className="lg:w-[530px] lg:h-[487px] w-[400px] h-[330px] absolute xs:-right-[10px] xl:top-[80px] xl:-right-[70px] overflow-x-hidden"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
