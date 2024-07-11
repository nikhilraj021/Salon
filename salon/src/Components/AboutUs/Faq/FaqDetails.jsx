import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { faqs } from "../../../shared/faq";
import Footer from "../../Footer";

const FaqDetails = () => {
  const { faqId } = useParams();
  const [faqItem, setFaqItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setFaqItem(faqs[Number(faqId) - 1]);
  }, [faqId]);

  return (
    faqItem && (
      <div className="lg:w-[73vw]">
        <div className="px-4 py-8 md:px-16 lg:p-[94px]">
          <h1 className="text-5xl lg:text-7xl font-bold lg:mb-14 text-gray-800">
            {faqItem.question}
          </h1>
          <p className="my-8 text-xl lg:text-2xl text-gray-500">{faqItem.answer}</p>
          <hr className="mb-5" />
          <div className="flex flex-col gap-5 md:flex-row md:justify-between lg:py-4">
            {faqId > 1 && (
              <div className="">
                <button
                  className=" block text-[12px] text-gray-400"
                  onClick={() => navigate("/faq/" + (Number(faqId) - 1))}
                >
                  Previous
                </button>
                <a
                  className="text-pink-600 cursor-pointer hover:underline"
                  onClick={() => navigate("/faq/" + (Number(faqId) - 1))}
                >
                  {faqs[faqId - 2]?.question}
                </a>
              </div>
            )}
            {faqId < faqs.length && (
              <div className="">
                <button
                  className=" block text-[12px] text-gray-400 "
                  onClick={() => navigate("/faq/" + (Number(faqId) + 1))}
                >
                  Next
                </button>

                <a
                  className="text-pink-600 cursor-pointer hover:underline"
                  onClick={() => navigate("/faq/" + (Number(faqId) + 1))}
                >
                  {faqs[Number(faqId) + 1 - 1]?.question}
                </a>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    )
  );
};

export default FaqDetails;
