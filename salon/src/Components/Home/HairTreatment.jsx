import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const HairTreatment = () => {
  return (
    <div className="lg:w-[73vw]">
      <div className="px-3 py-6 md:p-12 lg:flex gap-5 ">
        <div className="lg:w-[70vw]">
          <h1 className="text-5xl font-bold my-[40px] lg:text-[70px]">
            The dyeing of hair is an ancient art that involves
          </h1>
          <div>
            <img src="/images/haire-cut.jpg" alt="Spa-image" class="" />
            <p className="my-5 text-[18px]">
              In ancient times, the dyes were obtained from plants. Some of the
              most well known are henna (Lawsonia inermis), indigo, Cassia
              obovata, senna, turmeric and amla. Others include katam (buxus
              dioica), black walnut hulls, red ochre and leeks. In the 1661 book
              Eighteen Books of the Secrets of Art & Nature, various methods of
              coloring hair black, gold, green, red, yellow, and white are
              explained. The development of synthetic dyes for hair is traced to
              the 1860s discovery of the reactivity of para-phenylenediamine
              (PPD) with air. Eugène Schueller, the founder of L’Oréal, is
              recognized for creating the first synthetic hair dye in 1907. In
              1947 the German cosmetics firm Schwarzkopf launched the first home
              color product, “Poly Color”. Hair dyeing is now a
              multibillion-dollar industry that involves the use of both
              plant-derived and synthetic dyes.
            </p>

            <hr />
            <div className="mb-10 flex lg:justify-end lg:mt-5 ">
              <Link to="/latestblogpostMassage">
                <div className="">
                  <button className="text-[12px] text-gray-400 md:text-[16px]">
                    Previous
                  </button>
                </div>
                <a
                  href="#"
                  className="text-pink-500 hover:underline decoration-pink-500 md:text-[20px]"
                >
                  The main professionals that provide therapeutic
                </a>
              </Link>
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

export default HairTreatment;
