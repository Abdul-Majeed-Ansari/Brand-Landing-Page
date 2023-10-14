import React, { useState } from "react";
import brand_logo from "../assets/brand_logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const links = [
    { name: "MENU", link: "/" },
    { name: "LOCATION", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  return (
    <>
      <div className="shadow-md w-[98%] ml-2 lg:h-[72px] h-[40px]">
        <div className="relative lg:flex lg:items-center lg:justify-between">
          <div className="mt-[15px] xs:ml-[20px] sm:ml-[30px] lg:ml-[70px]">
            <img
              src={brand_logo}
              alt="logo"
              className="xs:w-[60px] lg:w-[76px] xs:h-[33px] lg:h-[43px]"
            />
          </div>

          <div
            className="flex items-center justify-end text-2xl text-white lg:hidden absolute top-0 right-6 z-10"
            onClick={() => setisOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>

          <div className="w-8 h-8 bg-gray-600 border-[1px] border-solid rounded lg:hidden absolute -top-1 right-5 z-0"></div>

          <div className="">
            <ul
              className={`xs:shadow-md lg:shadow-none rounded mx-2 lg:flex lg:gap-6 lg:mx-10 pl-5 py-3 absolute lg:static w-[95%] lg:w-auto lg:z-[auto] z-[1] bg-white transition-all ease-in-out ${
                isOpen ? "top-11" : "top-[-400px]"
              }`}
            >
              {links.map((link) => (
                <li className="my-2">
                  <a
                    href="/"
                    className="text-[18px] font-bold text-[#2E2E2E] hover:text-blue-500 duration-1000"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mr-[80px]">
            <button className="bg-[red] text-white p-[6px_16px] xs:hidden lg:block rounded">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
