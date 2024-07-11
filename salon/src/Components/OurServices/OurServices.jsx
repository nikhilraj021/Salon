import React, { useState } from "react";
import Footer from "../Footer";
import All from "./All";
import ForHer from './ForHer'
import ForHim from "./ForHim";
const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  const activeClasses = " text-black";
  const inactiveClasses = "text-gray-500 hover:underline decoration-pink-600";

  return (
    <div className="lg:w-[73vw]">
      <div className="px-4 py-10 md:mx-8">
        <h1 className="text-[50px] font-bold leading-tight mb-8">Our Services</h1>
        <ul className="flex gap-3 mb-4">
          <li
            onClick={() => setOpenTab(1)}
          >
            <a
              href="#"
              className={`bg-white inline-block py-2  font-semibold ${
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
              className={`bg-white inline-block py-2  font-semibold ${
                openTab === 2 ? activeClasses : inactiveClasses
              }`}
            >
              For Her
            </a>
          </li>
          <li
            onClick={() => setOpenTab(3)}
          >
            <a
              href="#"
              className={`bg-white inline-block py-2  font-semibold ${
                openTab === 3 ? activeClasses : inactiveClasses
              }`}
            >
              For Him
            </a>
          </li>
        </ul>
        <div className="w-full">
          <div style={{ display: openTab === 1 ? "block" : "none" }}>
            <All />
          </div>
          <div style={{ display: openTab === 2 ? "block" : "none" }}>
            <ForHer />
          </div>
          <div style={{ display: openTab === 3 ? "block" : "none" }}>
            <ForHim />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tabs;
