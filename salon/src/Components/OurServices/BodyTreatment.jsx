import React from "react";
import Footer from "../Footer";
import { IoBrush } from "react-icons/io5";
import { PiHairDryerBold } from "react-icons/pi";
import { GiBarbarian } from "react-icons/gi";
import { TbMassage } from "react-icons/tb";
import { PiFlowerTulipBold } from "react-icons/pi";
import { TbBrandBandlab } from "react-icons/tb";
import { GiAmpleDress } from "react-icons/gi";
import { Link } from "react-router-dom";

function BodyTreatmentPage() {
  return (
    <div className="lg:w-[73vw]">
      <div className="px-4 py-8 md:p-12 lg:px-16 ">
        <h1 className="text-[40px] lg:text-[55px] font-bold">BodyTreatment</h1>
        <div className="md:flex gap-14 lg:mt-8">
          <div className="lg:w-[70%]">
            <p className="my-3 text-[18px] lg:text-[22px]">
              A manicure is a cosmetic beauty treatment for the fingernails and
              hands performed at home or in a nail salon. A manicure consists of
              filing and shaping the free edge, pushing and clipping (with a
              cuticle pusher and cuticle nippers) any nonliving tissue (but
              limited to the cuticle and hangnails), treatments with various
              liquids, massage of the hand, and the application of fingernail
              polish. When the same is applied to the toenails and feet, the
              treatment is referred to as a pedicure.
            </p>
            <table className="my-8 border w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">SERVICE</th>
                  <th className="p-2">PRICE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3">Wash</td>
                  <td className="p-2">$10.50</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-2">Cut and Finish</td>
                  <td className="p-2">$19.99</td>
                </tr>
                <tr>
                  <td className="p-2">Blow Dries</td>
                  <td className="p-2">$14</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-2">Hair Colouring</td>
                  <td className="p-2">$12.50</td>
                </tr>
                <tr>
                  <td className="p-2">Evening Hairdressing</td>
                  <td className="p-2">$18.99</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-3xl font-bold mb-10 ">Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <img
                src="https://us.123rf.com/450wm/jackf/jackf2302/jackf230201347/198184845-two-makeup-artists-applying-decorative-cosmetics-to-young-female-client.jpg?ver=6"
                alt="Gallery Image 2"
                className="w-full h-auto"
              />
              <img
                src="https://www.shutterstock.com/image-photo/women-redhear-makeup-artist-hairdresser-260nw-1635237817.jpg"
                alt="Gallery Image 3"
                className="w-full h-auto"
              />
              <img
                src="https://img.freepik.com/premium-photo/stylist-putting-face-cosmetics-woman-horizontal-indoors-shot_382934-2881.jpg"
                alt="Gallery Image 4"
                className="w-full h-auto"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrTSdKbxvJI0ipSmPMZLmGqT68DjF5owP4X8biNMkvJWzBMioIHZ_4yAHmzJ4fz9ZRUY&usqp=CAU"
                alt="Gallery Image 5"
                className="w-full h-auto"
              />
              <img
                src="https://thumbs.dreamstime.com/b/face-skin-care-facial-hydro-microdermabrasion-peeling-treatment-close-up-woman-getting-cosmetic-beauty-spa-clinic-hydra-63738624.jpg"
                alt="Gallery Image 6"
                className="w-full h-auto"
              />
              <img
                src="https://thumbs.dreamstime.com/b/female-seller-beauty-store-smiling-mature-near-display-cosmetics-86033091.jpg"
                alt="Gallery Image 7"
                className="w-full h-auto"
              />
              <img
                src="https://thumbs.dreamstime.com/b/young-pretty-woman-beauty-consultant-shop-women-chosing-color-cosmetic-salon-98502046.jpg"
                alt="Gallery Image 8"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="my-6 md:-mt-[1px]">
            <h1 className="text-[16px] text-gray-400 font-bold my-2">
              Services
            </h1>
            <hr />
            <div className="my-3 lg:text-[22px]">
              <div className="flex items-center gap-3 my-2 p-2">
                < IoBrush className="text-pink-500" />
                <Link to="/ourServices/cosmetics">
                  <p className="text-gray-600 hover:underline decoration-2 underline-offset-4 decoration-pink-500">
                    Cosmetics
                  </p>
                </Link>
              </div>
              <div className="flex items-center gap-3 my-2 p-2">
                <PiHairDryerBold className="text-pink-500" />
                <Link to="/ourServices/hairdressing">
                  <p className="text-gray-600 hover:underline decoration-2 underline-offset-4 decoration-pink-500">
                    Hairdressing
                  </p>
                </Link>
              </div>
              <div className="flex items-center gap-3 my-2 p-2">
                <GiBarbarian className="text-pink-500" />
                <Link to="/ourServices/barber">
                  <p className="text-gray-600 hover:underline decoration-2 underline-offset-4 decoration-pink-500">
                    Barber
                  </p>
                </Link>
              </div>
              <div className="flex items-center gap-3 my-2 p-2">
                <TbMassage className="text-pink-500" />
                <Link to="/ourServices/massages">
                  <p className="text-gray-600 hover:underline decoration-2 underline-offset-4 decoration-pink-500">
                    Massages
                  </p>
                </Link>
              </div>
              <div className="flex items-center gap-3 bg-pink-500 p-2 text-white my-2">
                <PiFlowerTulipBold />
                <Link to="/ourServices/bodyTreatments">
                  <p className="text-white hover:underline decoration-2 underline-offset-4 decoration-white">
                    Body Treatments
                  </p>
                </Link>
              </div>
              <div className="flex items-center gap-3 my-2 p-2">
                <TbBrandBandlab className="text-pink-500" />
                <Link to="/ourServices/aromatherapy">
                  <p className="text-gray-600 hover:underline decoration-2 underline-offset-4 decoration-pink-500">
                    Aromatherapy
                  </p>
                </Link>
              </div>
              <div className="flex items-center gap-3 my-2 p-2">
                <GiAmpleDress className="text-pink-500" />
                <Link to="/ourServices/bridal">
                  <p className="text-gray-600 hover:underline decoration-2 underline-offset-4 decoration-pink-500">
                    Bridal Makeup
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BodyTreatmentPage;
