import React from "react";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

const images = [
  "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_06-700x467.jpg",
  "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_01-700x467.jpg",
  "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_07-700x467.jpg",
  "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_05-700x467.jpg",
  "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_08-700x467.jpg",
  "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_06-700x467.jpg",
];

const Gallery4 = () => {
  return (
    <div className="lg:w-[73vw]">
      <div className="py-8 px-3 md:p-12 lg:py-16 ">
        <h2 className="text-[52px] font-bold leading-tight my-5">
          Massage for the body is a popular beauty treatment
        </h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Gallery Image ${index + 1}`} />
          ))}
        </div>
        <hr className="mt-10 mb-5" />
        <div className="md:flex justify-between">
          
          <div className="mb-10 flex md:justify-end ">
            <Link to="/aboutUs/galleries/gallery3">
              <div className="">
                <button className="text-[12px] text-gray-400 md:text-[16px]">Previous</button>
              </div>
              <a
                href="#"
                className="text-pink-500 hover:underline decoration-pink-500 md:text-[20px]"
              >
                Some beauty salons style hair
              </a>
            </Link>
          </div>

          <div className="mb-10 flex md:justify-end ">
            <Link to="/aboutUs/galleries/gallery5">
              <div className="flex md:justify-end">
                <button className="text-[12px] text-gray-400 md:text-[16px]">Next</button>
              </div>
              <a
                href="#"
                className="text-pink-500 hover:underline decoration-pink-500 md:text-[20px]"
              >
                Many small businesses do offer both sets
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery4;
