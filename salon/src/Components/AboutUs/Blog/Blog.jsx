import React, { useState } from "react";
import All from "./All";
import HairCare from './HairCare'
import MakeupTips from './MakeupTips'
import SpaTreatments from "./SpaTreatments";
import Footer from '../../Footer'

const Blog = () => {
  const [openTab, setOpenTab] = useState(1);


  const activeClasses = " text-black";
  const inactiveClasses = "text-gray-400";

  return (
    <div className="lg:w-[73vw]">
      <div className="px-3 py-8 lg:p-12 lg:w-[75vw]">
        <h1 className="text-4xl font-bold" >Blog</h1>
        <div className="my-8">
          <ul className="flex gap-3 flex-wrap leading-3">
            <li
              onClick={() => setOpenTab(1)}
            >
              <a
                href="#"
                className={`bg-white font-semibold ${
                  openTab === 1 ? activeClasses : inactiveClasses
                }`}
              >
                All
              </a>
            </li>
            <li
              onClick={() => setOpenTab(2)}
            >
              <a
                href="#"
                className={`bg-white font-semibold ${
                  openTab === 2 ? activeClasses : inactiveClasses
                }`}
              >
                Hair Care
              </a>
            </li>
            <li
              onClick={() => setOpenTab(3)}
            >
              <a
                href="#"
                className={`bg-white font-semibold ${
                  openTab === 3 ? activeClasses : inactiveClasses
                }`}
              >
                Makeup Tips
              </a>
            </li>
            <li
              onClick={() => setOpenTab(4)}
            >
              <a
                href="#"
                className={`bg-white font-semibold ${
                  openTab === 4 ? activeClasses : inactiveClasses
                }`}
              >
                Spa Treatments
              </a>
            </li>
          </ul>
          <div className="w-full my-6">
            <div style={{ display: openTab === 1 ? "block" : "none" }}>
              <All />
            </div>
            <div style={{ display: openTab === 2 ? "block" : "none" }}>
              <HairCare />
            </div>
            <div style={{ display: openTab === 3 ? "block" : "none" }}>
              <MakeupTips />
            </div>
            <div style={{ display: openTab === 4 ? "block" : "none" }}>
              <SpaTreatments />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
