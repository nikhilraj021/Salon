// src/Footer.jsx
import React from "react";
// import { Link } from "react-router-dom";
import image1 from "/images/gallery_02-300x300.jpg";
import image2 from "/images/gallery_04-300x300.jpg";
import image3 from "/images/Capture.jpg";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-5 pb-3">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image3}
          className="absolute inset-0 w-full h-full opacity-5"
          alt="Background-image"
        />
      </div>
      <div className="py-10 px-4 lg:px-8 text-white ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="z-10">
            <h2 className="flex text-lg font-semibold">ABOUT BEAUTYSPOT</h2>
            <p className="my-8">
              BeautySpot is an ideal WordPress theme for beauty salons,
              hairdressers, wellness or spa websites. Clean and fast code is
              wrapped in unique design and easy-to-use admin area.
            </p>
            <p>
              You can buy this WordPress theme on{" "}
              <a href="#" className="underline hover:no-underline ">
                ThemeForest
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">LATEST GALLERIES</h2>
            <div className="mb-4 pb-3 border-b border-gray-700 flex gap-2">
              <img
                src={image1}
                className="mt-1 w-[46px] h-[46px]"
                alt="Gallery"
              />
              <p>
                <p className="font-semibold">
                  There is also a growing trend in boutique salons
                </p>
                <p className=" text-[13px] text-sm text-gray-400">
                  May 23, 2021
                </p>
                <p className="text-[13px] text-sm text-gray-400">6 images</p>
              </p>
            </div>
            <div className="mb-4 flex gap-2">
              <img
                src={image2}
                className="mt-1 w-[46px] h-[46px]"
                alt="Gallery"
              />
              <p>
                <p className="font-semibold">
                  A manicure is a treatment for the hands
                </p>
                <p className=" text-[13px] text-sm text-gray-400">
                  May 21, 2021
                </p>
                <p className="text-[13px] text-sm text-gray-400">6 images</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
