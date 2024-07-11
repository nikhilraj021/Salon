import React from "react";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

const images = [
  "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_02-700x467.jpg",
  "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_01-700x467.jpg",
  "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_07-700x467.jpg",
  "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_05-700x467.jpg",
  "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_08-700x467.jpg",
  "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_06-700x467.jpg",
];

const Gallery1 = () => {
  return (
    <div className="lg:w-[73vw]">
      <div className="py-8 px-3 md:p-12 lg:py-16 ">
        <h1 className="text-[52px] font-bold leading-tight my-5">
          There is also a growing trend in boutique salons
        </h1>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 ">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Gallery Image ${index + 1}`} />
          ))}
        </div>
        <hr className="mt-10 mb-5" />
        <div className="mb-10 flex md:justify-end ">
          <Link to="/aboutUs/galleries/gallery2">
            <div className="flex md:justify-end">
              <button className="text-[12px] text-gray-400 md:text-[16px]">Next</button>
            </div>
            <a
              href="#"
              className="text-pink-500 hover:underline decoration-pink-500 md:text-[20px]"
            >
              A manicure is a treatment for the hands
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery1;
