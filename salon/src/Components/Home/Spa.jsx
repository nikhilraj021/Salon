import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Spa = () => {
  return (
    <div className="lg:w-[73vw]">
      <div className="px-3 py-6 md:p-12 lg:flex gap-5 ">
        <div className="lg:w-[70vw]">
          <h1 className="text-5xl font-bold my-[40px] lg:text-[70px]">
            A spa is a location where mineral-rich spring water
          </h1>
          <div>
            <img src="/images/Spa-1.jpg" alt="Spa-image" class="" />
            <p className="my-5 text-[18px]">
              The term is derived from the name of the town of Spa, Belgium,
              whose name is known back from Roman times, when the location was
              called Aquae Spadanae, sometimes incorrectly connected to the
              Latin word spargere meaning to scatter, sprinkle or moisten.
            </p>
            <p className="my-5 text-[18px]">
              Since medieval times, illnesses caused by iron deficiency were
              treated by drinking chalybeate (iron-bearing) spring water (in
              1326, the iron-master Collin le Loup claimed a cure, when the
              spring was called Espa, a Walloon word for “fountain”).
            </p>
            <hr />
            <div className="my-10 flex md:justify-end ">
              <Link to="/latestblogpostMassage">
                <div className="flex md:justify-end">
                  <button className="text-[12px] text-gray-400 md:text-[16px]">
                    Next
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

export default Spa;
