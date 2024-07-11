import React from "react";

const MakeupTips = () => {
  return (
    <div className='md:grid grid-cols-2 lg:grid-cols-3 gap-3'>
      <div class="rounded border mb-4">
        <img src="/images/makeup.jpg" alt="make-up-image" class="w-full h-[300px]" />
        <div class="p-8 ">
          <h1 class="font-bold text-2xl text-gray-700 ">
            Beauty salons have proven to be a recession-proof industry
          </h1>
          <p class="py-3 text-gray-400">May 20, 2021 in Makeup Tips</p>
          <p class="py-4 text-[17px] text-gray-600">
            Although sales had declined from 2008 highs due to the Great
            Recession, they remain robust with long term positive forecast. Even
            though during recessions, consumers tend.
          </p>
          <li class="text-pink-500 list-none underline font-bold">Read More</li>
        </div>
      </div>

      <div class="rounded overflow-hidden mb-4 border">
        <img src="/images/cosmetics.jpg" alt="cosmetics-image" class="w-full h-[300px]" />
        <div class=" p-8 ">
          <h1 class="font-bold text-2xl text-gray-700 ">
            Cosmetics that are meant to be used on the face and eye
          </h1>
          <p class="py-3 text-gray-400">May 19, 2021 in Makeup Tips</p>
          <p class="py-4 text-[17px] text-gray-600">
            Abrasive exfoliants include gels, creams or lotions, as well as
            physical objects. Loofahs, microfiber cloths, natural sponges, or
            brushes may be used to exfoliate skin simply by rubbing them over
            the face.
          </p>
          <li class="text-pink-500 list-none underline font-bold">Read More</li>
        </div>
      </div>
    </div>
  );
};

export default MakeupTips;
