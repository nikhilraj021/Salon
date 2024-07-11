import React from 'react'

const HairCare = () => {
  return (
    <div className='md:grid grid-cols-2 lg:grid-cols-3'>
        <div class="rounded border mb-4">
          <img
            src="/images/haire-cut.jpg"
            alt="haire-cut-image"
            class="w-full h-[300px]"
          />
          <div class="p-8">
            <h1 class="font-bold text-2xl text-gray-700 ">
              The dyeing of hair is an ancient art that involves
            </h1>
            <p class="py-3 text-gray-400">May 21, 2021 in Hair Care</p>
            <p class="py-4 text-[17px] text-gray-600">
              In ancient times, the dyes were obtained from plants. Some of the
              most well known are henna (Lawsonia inermis), indigo, Cassia
              obovata, senna, turmeric and amla.
            </p>
            <li class="text-pink-500 list-none underline font-bold">
              Read More
            </li>
          </div>
        </div>
    </div>
  )
}

export default HairCare