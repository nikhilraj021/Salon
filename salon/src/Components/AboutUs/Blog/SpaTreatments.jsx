import React from 'react'

const SpaTreatments = () => {
  return (
    <div className='md:grid grid-cols-2 lg:grid-cols-3 gap-3'>
        <div class="rounded overflow-hidden border mb-4">
          <img src="/images/Spa-1.jpg" alt="Spa-image" class="w-full h-[300px]" />
          <div class="p-8">
            <h1 class="font-bold text-2xl text-gray-700 ">
              A spa is a location where mineral-rich spring water
            </h1>
            <p class="py-3 text-gray-400">May 23, 2021 in Spa Treatments</p>
            <p class="py-4 text-[17px] text-gray-600">
              The term is derived from the name of the town of Spa, Belgium,
              whose name is known back from Roman times, when the location was
              called Aquae Spadanae, sometimes incorrectly.
            </p>
            <li class="text-pink-500 list-none underline font-bold">
              Read More
            </li>
          </div>
        </div>

        <div class="rounded overflow-hidden border mb-4">
          <img src="/images/Spa-2.jpg" alt="haire-cut-image" class="w-full h-[300px]" />
          <div class="p-8 ">
            <h1 class="font-bold text-2xl text-gray-700">
              The main professionals that provide therapeutic
            </h1>
            <p class="py-3 text-gray-400">May 22, 2021 in Spa Treatments</p>
            <p class="py-4 text-[17px] text-gray-600">
              Many types of practices are associated with massage and include
              bodywork, manual therapy, energy medicine, neural mobilization and
              breathwork. Other names for massage.
            </p>
            <li class="text-pink-500 list-none underline font-bold">
              Read More
            </li>
          </div>
        </div>

        <div class="rounded overflow-hidden mb-4 border">
          <img
            src="/images/aromatics.jpg"
            alt="cosmetics-image"
            class="w-full h-[300px]"
          />
          <div class=" p-8 ">
            <h1 class="font-bold text-2xl text-gray-700 ">
              Aromatherapists, people who specialize in the practice
            </h1>
            <p class="py-3 text-gray-400">May 18, 2021 in Spa Treatments</p>
            <p class="py-4 text-[17px] text-gray-600">
              Oils are described by Dioscorides, along with beliefs of the time
              regarding their healing properties, in his De Materia Medica,
              written in the first century. Distilled essential oils have been
              employed.
            </p>

            <li class="text-pink-500 list-none underline font-bold">
              Read More
            </li>
          </div>
        </div>
    </div>
  )
}

export default SpaTreatments