import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Massage = () => {
  return (
    <div className="lg:w-[73vw]">
      <div className="px-3 py-6 md:p-12 lg:flex gap-5 ">
        <div className="lg:w-[70vw]">
          <h1 className="text-5xl font-bold my-[40px] lg:text-[70px]">
            The main professionals that provide therapeutic
          </h1>
          <div>
            <img src="/images/Spa-2.jpg" alt="Spa-image" class="" />
            <p className="my-5 text-[18px]">
              Many types of practices are associated with massage and include
              bodywork, manual therapy, energy medicine, neural mobilization and
              breathwork. Other names for massage and related practices include
              hands-on work, body/somatic therapy, and somatic movement
              education. Body-mind integration techniques stress self-awareness
              and movement over physical manipulations by a practitioner.
              Therapies related to movement awareness/education are closer to
              dance and movement therapies. Massage can also have connections
              with the New Age movement and alternative medicine as well as
              holistice philosophies of preventative medical care, as well as
              being used by mainstream medical practitioners.
            </p>

            <hr />
            <div className="md:flex justify-between my-5">
              <div className="mb-10 flex md:justify-end ">
                <Link to="/latestblogpostSpa">
                  <div className="">
                    <button className="text-[12px] text-gray-400 md:text-[16px]">
                      Previous
                    </button>
                  </div>
                  <a
                    href="#"
                    className="text-pink-500 hover:underline decoration-pink-500 md:text-[20px]"
                  >
                    A spa is a location where mineral-rich spring water
                  </a>
                </Link>
              </div>

              <div className="mb-10 flex md:justify-end ">
                <Link to="/latestblogpostHair">
                  <div className="flex md:justify-end">
                    <button className="text-[12px] text-gray-400 md:text-[16px]">
                      Next
                    </button>
                  </div>
                  <a
                    href="#"
                    className="text-pink-500 hover:underline decoration-pink-500 md:text-[20px]"
                  >
                    The dyeing of hair is an ancient art that involves
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mt-56">
          <h1>NEWS</h1>
          <hr />
          <div className="my-3">
            <h1 className="my-3">
              A spa is a location where mineral-rich spring water
            </h1>
            <p className="text-gray-400 text-sm">
              May 23, 2021 in Spa Treatments
            </p>
          </div>
          <div className="my-3">
            <h1 className="my-3">
              The main professionals that provide therapeutic
            </h1>
            <p className="text-gray-400 text-sm">
              May 22, 2021 in Spa Treatments
            </p>
          </div>
          <div className="my-3">
            <h1 className="my-3">
              The dyeing of hair is an ancient art that involves
            </h1>
            <p className="text-gray-400 text-sm">May 21, 2021 in Hair Care</p>
          </div>
          <div className="my-3">
            <h1 className="my-3">
              Beauty salons have proven to be a recession-proof industry
            </h1>
            <p className="text-gray-400 text-sm">May 20, 2021 in Makeup Tips</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Massage;
