import React from "react";
import Footer from "../Footer";

const Typography = () => {
  const largeLanguageOceans = [
    "The Big Oxmox advised her",
    "Not to do so, because there were",
    "Thousands of bad Commas",
    "Wild Question Marks",
  ];
  const theBigOxmoxAdvised = [
    "She packed her seven versalia",
    "Put her initial into the belt",
    "And made herself on the way",
    "When she reached the first hill",
  ];

  return (
    <div className="lg:w-[73vw]">
      <div className="flex flex-col gap-3 p-3 px-5 md:px-16 lg:px-20 pb-10 lg:py-8">
        <h1 className="text-[50px] font-bold"> Typography</h1>
        <h1 className="text-[30px] font-bold mt-10">Narrow Page Template</h1>
        <p className=" text-gray-500 my-5">
          This is a narrow page template. Ideal for text-heavy pages without
          sidebar.
        </p>
        <h1 className="text-[25px] font-bold">Duden flows by their place</h1>
        <p className=" text-gray-500 my-5">
          Far far away,{" "}
          <span className="font-bold text-gray-700">
            behind the word mountains
          </span>
          , far from the countries Vokalia and Consonantia, there live the blind
          texts. Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean. A small river named Duden flows by
          their place and supplies it &nbsp;
          <a href="#" className="text-pink-600 underline">
            with the necessary regelialia
          </a>
          .
        </p>
        <div>
          <h1 className="text-[20px] font-bold">Large language ocean</h1>
          <ul className="list-disc pl-5 my-8 ">
            {largeLanguageOceans.map((item, index) => (
              <li key={index} className="mb-2 text-gray-500">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-[20px] font-bold mb-4">The Big Oxmox advised</h1>
          <ol className=" list-decimal pl-5 my-8">
            {theBigOxmoxAdvised.map((each, index) => (
              <li key={index} className="p-1 text-gray-500">
                {each}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Typography;
