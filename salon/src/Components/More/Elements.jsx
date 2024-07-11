import React from "react";
import { FaInfo } from "react-icons/fa";
import { PiHairDryerBold } from "react-icons/pi";
import { RiFlowerFill } from "react-icons/ri";
import Footer from "../Footer";

const Elements = () => {
  return (
    <div className="lg:w-[73vw]">
      <div className="px-5 lg:px-20 pb-20">
        <h1 className="font-bold text-[50px] py-8">Elements</h1>
        <h1 className="font-bold text-[30px] pt-5">Alert message</h1>

        <div className="flex bg-blue-100 p-4 mt-8">
          <FaInfo className="text-[30px] text-blue-800" />
          <div className="ml-4 text-[15px]">
            <h1 className="font-bold text-gray-800">Info Message</h1>
            <p className="text-blue-600">
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen.
            </p>
          </div>
        </div>

        <div className="flex bg-green-100 p-4 mt-8">
          <FaInfo className="text-[30px] text-green-800" />
          <div className="ml-4 text-[15px]">
            <h1 className="font-bold text-gray-800">Success Message</h1>
            <p className="text-green-600">
              She packed her seven versalia, put her initial into the belt and
              made herself on the way. When she reached the first hills of the
              Italic Mountains, she had a last view back on the skyline of her
              hometown.
            </p>
          </div>
        </div>

        <div className="flex bg-red-100 p-4 mt-8">
          <FaInfo className="text-[30px] text-red-800" />
          <div className="ml-4 text-[15px]">
            <h1 className="font-bold text-gray-800">Warning Message</h1>
            <p className="text-red-600">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-[30px] font-bold">Counter</h1>
          <div className="lg:flex lg:justify-between">
            <div className="mt-4">
              <h1 className="text-[40px] font-bold text-pink-600">60%</h1>
              <p className="text-gray-700">She packed her seven versalia</p>
            </div>
            <div className="mt-4">
              <h1 className="text-[40px] font-bold text-pink-600">123+</h1>
              <p className="text-gray-700">A small river named Duden</p>
            </div>
            <div className="mt-4">
              <h1 className="text-[40px] font-bold text-pink-600">500%</h1>
              <p className="text-gray-700">Far far away, behind the word</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-[30px] font-bold">CTA</h1>
          <div className="border-2 mt-4 p-5 bg-gray-100 lg:flex lg:justify-between lg:items-center">
            <div>
              <h1 className="text-[20px] font-bold">Did You Know?</h1>
              <p className="mt-3 italic text-gray-500 text-[18px] pr-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
            </div>
            <div>
              <button className=" outline-none self-center lg:w-40 bg-pink-600 mt-3 px-5 py-2 text-[12px] font-bold text-white rounded-full">
                <a href="#">LEARN MORE</a>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-[30px] font-bold">Feature</h1>
          <div className="lg:flex ">
            <div className="flex mt-3 lg:m-5">
              <PiHairDryerBold className="text-[80px] text-pink-600 " />
              <div className="ml-2 mt-6">
                <h1 className="text-[18px] font-bold">Hairdresser</h1>
                <p className="mt-2">
                  A hairdresser is a person whose occupation is to cut or style
                  hair in order to change or maintain a person’s image.
                </p>
                <div className="mt-2">
                  <a href="#" className="text-pink-600 underline">
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            <div className="flex mt-3 lg:m-5">
              <RiFlowerFill className="text-[80px] text-pink-600 " />
              <div className="ml-2 mt-6">
                <h1 className="text-[18px] font-bold">Cosmetics</h1>
                <p className="mt-2">
                  Cosmetics are substances or products used to enhance or alter
                  the appearance of the face or fragrance and texture of the
                  body.
                </p>
                <div className="mt-2">
                  <a href="#" className="text-pink-600 underline">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-[30px] font-bold">Definition List</h1>
          <div className="mt-3">
            <div className="lg:flex items-center justify-between">
              <h1 className="text-[20px] font-bold text-gray-600">
                Vivien Hawkins
              </h1>
              <p className="text-pink-600 underline">(123) 456 789</p>
            </div>
            <hr className="my-3" />

            <div className="lg:flex items-center justify-between">
              <h1 className="text-[20px] font-bold text-gray-600">
                Rudy Martinez
              </h1>
              <p className="text-pink-600 underline">(321) 789 456</p>
            </div>
            <hr className="my-3" />

            <div className="lg:flex items-center justify-between">
              <h1 className="text-[20px] font-bold text-gray-600">
                Matthew Hernandez
              </h1>
              <p className="text-pink-600 underline">(789) 465 132</p>
            </div>
            <hr className="my-3" />

            <div className="lg:flex items-center justify-between">
              <h1 className="text-[20px] font-bold text-gray-600">
                Debra McDaniel
              </h1>
              <p className="text-pink-600 underline">(987) 123 654</p>
            </div>
            <hr className="my-3" />
          </div>
        </div>
        <a href="#" className=" text-gray-600">
          Learn more
        </a>

        <div className="mt-8 mb-8">
          <h1 className="text-[30px] font-bold">Pricing Table</h1>
          <div className="mt-3 lg:flex justify-between gap-16">
            <div className=" border-2 text-center mt-3 pb-10 lg:w-[50%]">
              <h1 className=" bg-cyan-500 p-3 text-xl text-white">Massage</h1>
              <div className="p-3">
                <h1 className="text-pink-600 text-[50px] font-bold">$40</h1>
                <p className=" italic text-gray-400">per 30 minutes</p>
                <hr className="my-3" />
              </div>
              <p className="px-4 py-2 text-gray-500 lg:text-[20px]">
                Lorem ipsum dolor sit amet <br /> Aenean commodo ligula eget{" "}
                <br />
                Aenean massa natoque penatibus <br /> Magnis dis parturient
                montes
              </p>
              <button className=" m-3 outline-none self-center lg:w-40 bg-pink-600 mt-3 px-5 py-2 text-[12px] font-bold text-white rounded-full">
                <a href="#">LEARN MORE</a>
              </button>
            </div>

            <div className=" border-2 text-center mt-3 pb-10 lg:w-[50%]">
              <h1 className=" bg-cyan-500 p-3 text-xl text-white">
                Aromatherapy
              </h1>
              <div className="p-3">
                <h1 className="text-pink-600 text-[50px] font-bold">$30</h1>
                <p className=" italic text-gray-400">per 30 minutes</p>
                <hr className="my-3" />
              </div>
              <p className="px-4 py-2 text-gray-500 lg:text-[20px]">
                Curabitur ullamcorper ultricies <br />
                Nam eget dui etiam rhoncus <br />
                Maecenas tempus tellus eget <br />
                Adipiscing sem neque sed
              </p>
              <button className=" m-3 outline-none self-center lg:w-40 bg-pink-600 mt-3 px-5 py-2 text-[12px] font-bold text-white rounded-full">
                <a href="#">LEARN MORE</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Elements;
