import React from "react";
import { GrMail } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { Link } from "react-router-dom";
import Footer from "../../Footer";

const Matthew = () => {
  return (
    <div className="lg:w-[73vw]">
      <Link to={"/aboutUs/ourteam/matthew"}>
        <div>
          <div className=" px-4 py-[67px] bg-white p-6 rounded-lg shadow-md md:m-5 lg:m-12">
            <div className=" md:flex">
              <img
                src="https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/person_03-300x300.jpg"
                alt="Matthew Hernandez"
                className="w-32 md:w-20 border-4 border-pink-500 rounded-full mb-4"
              />
              <div className="md:ml-5">
                <h1 className="text-4xl font-bold">Matthew Hernandez</h1>
                <p className="text-gray-600 text-lg  italic">
                  Barber and Hairdresser
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-base mt-6">
              The barber pole, featuring red and white spiraling stripes,
              symbolized different aspects of the craft. It is a symbol from the
              time when barbers used to perform medical procedures. The white
              and red stripes represent bandages and blood while the blue
              stripes represent veins. In the U.S., the blue stripe is also
              sometimes used to match the flag.
            </p>
            <hr className="my-5" />
            <div className="text-pink-600">
              <div className="flex items-center gap-2 my-2">
                <GrMail className="text-xl" />
                <p className="text-sm">example@example.com</p>
              </div>
              <div className="flex items-center gap-2 my-2">
                <IoMdCall className="text-xl" />
                <p className="text-sm">(123) 456 789</p>
              </div>
            </div>
            <div className="flex gap-2 my-5">
              <a href="https://x.com/">
                <FaTwitter className="bg-gray-300 text-2xl p-[5px] rounded-full text-white" />
              </a>
              <a href="https://www.facebook.com/">
                <CgFacebook className="bg-gray-300 text-2xl p-[5px] rounded-full text-white" />
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </Link>
    </div>
  );
};

export default Matthew;
