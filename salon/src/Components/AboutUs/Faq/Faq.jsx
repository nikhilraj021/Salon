import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { faqs } from "../../../shared/faq";

const Faq = () => {
  const [arrowToggle, setArrowToggle] = useState(null);

  const handleArrowToggle = (index) => {
    setArrowToggle(index);
  };

  return (
    <div className="lg:w-[73vw]">
      <div className="px-4 py-8 md:p-12 lg:p-20">
        <h1 className="text-5xl font-bold lg:mb-14">
          Frequently Asked Questions
        </h1>
        <div>
          {faqs.map((faq, index) => (
            <div className="border my-4" key={index}>
              <div className="border-b flex p-5 gap-3 lg:justify-between items-center md:px-10 font-semibold">
                <h1 className="md:text-[20px] ">{faq.question}</h1>
                <div className="text-pink-600 cursor-pointer">
                  {arrowToggle === index ? (
                    <IoIosArrowUp
                      className="text-xl "
                      onClick={() => handleArrowToggle(null)}
                    />
                  ) : (
                    <IoIosArrowDown
                      className="text-xl"
                      onClick={() => handleArrowToggle(index)}
                    />
                  )}
                </div>
              </div>
              {arrowToggle === index ? (
                <div className="p-5 pr-10 md:px-10 md:pr-20 text-gray-600">
                  <p className="md:text-[22px]">{faq.answer}</p>
                  <Link to={"/faq/"+(index+1)}>
                    <button className="text-[14px] my-3 underline text-gray-400">
                      Permalink
                    </button>
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
