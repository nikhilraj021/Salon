import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer";

const Galleries = () => {
  return (
    <div className="lg:w-[73vw]">
      <Link to="/aboutUs/galleries">
        <div className="px-4 py-10 md:p-10 ">
          <h1 className="text-5xl font-bold">Galleries</h1>
          <div className="grid gap-5 my-6 md:grid-cols-2 md:my-12 lg:grid-cols-3">
            <Link to={"/aboutUs/galleries/gallery1"}>
              <div className="relative hover:opacity-70">
                <img
                  src="https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_02-700x467.jpg"
                  alt="Gallery"
                  className=" rounded-lg shadow-lg"
                />
                <span className="absolute hover:underline hover:decoration-pink-700 bottom-14 left-2 text-white text-xl font-extrabold bg-opacity-40 px-3 py-1 rounded">
                  There is also a growing trend in boutique salon
                </span>
                <span className="absolute bottom-6 left-2 text-white text-sm text-bold bg-opacity-70 px-3 py-1 rounded">
                  July 26,2024
                </span>
                <span className="absolute bottom-2 left-2 text-white text-sm bg-opacity-70 px-3 py-1 rounded">
                  6 images
                </span>
              </div>
            </Link>
            <Link to={"/aboutUs/galleries/gallery2"}>
              <div className="relative hover:opacity-70">
                <img
                  src="https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_04-700x467.jpg"
                  alt="Gallery"
                  className=" rounded-lg shadow-lg"
                />
                <span className="absolute hover:underline hover:decoration-pink-700 bottom-14 left-2 text-white text-xl font-extrabold bg-opacity-40 px-3 py-1 rounded">
                  A manicure is a treatment for the hands
                </span>
                <span className="absolute bottom-6 left-2 text-white text-sm text-bold bg-opacity-70 px-3 py-1 rounded">
                  July 26,2024
                </span>
                <span className="absolute bottom-2 left-2 text-white text-sm bg-opacity-70 px-3 py-1 rounded">
                  6 images
                </span>
              </div>
            </Link>
            <Link to={"/aboutUs/galleries/gallery3"}>
              <div className="relative hover:opacity-70">
                <img
                  src="https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_05-700x467.jpg"
                  alt="Gallery"
                  className=" rounded-lg shadow-lg"
                />
                <span className="absolute hover:underline hover:decoration-pink-700 bottom-14 left-2 text-white text-xl font-extrabold bg-opacity-40 px-3 py-1 rounded">
                  Some beauty salons style hair
                </span>
                <span className="absolute bottom-6 left-2 text-white text-sm text-bold bg-opacity-70 px-3 py-1 rounded">
                  July 26,2024
                </span>
                <span className="absolute bottom-2 left-2 text-white text-sm bg-opacity-70 px-3 py-1 rounded">
                  6 images
                </span>
              </div>
            </Link>
            <Link to={"/aboutUs/galleries/gallery4"}>
              <div className="relative hover:opacity-70">
                <img
                  src="https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_06-700x467.jpg"
                  alt="Gallery"
                  className=" rounded-lg shadow-lg"
                />
                <span className="absolute hover:underline hover:decoration-pink-700 bottom-14 left-2 text-white text-xl font-extrabold bg-opacity-40 px-3 py-1 rounded">
                  Massage for the body is a popular beauty treatment
                </span>
                <span className="absolute bottom-6 left-2 text-white text-sm text-bold bg-opacity-70 px-3 py-1 rounded">
                  July 26,2024
                </span>
                <span className="absolute bottom-2 left-2 text-white text-sm bg-opacity-70 px-3 py-1 rounded">
                  6 images
                </span>
              </div>
            </Link>
            <Link to={"/aboutUs/galleries/gallery5"}>
              <div className="relative hover:opacity-70">
                <img
                  src="https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_07-700x467.jpg"
                  alt="Gallery"
                  className=" rounded-lg shadow-lg"
                />
                <span className="absolute hover:underline hover:decoration-pink-700 bottom-14 left-2 text-white text-xl font-extrabold bg-opacity-40 px-3 py-1 rounded">
                  Many small businesses do offer both sets
                </span>
                <span className="absolute bottom-6 left-2 text-white text-sm text-bold bg-opacity-70 px-3 py-1 rounded">
                  July 26,2024
                </span>
                <span className="absolute bottom-2 left-2 text-white text-sm bg-opacity-70 px-3 py-1 rounded">
                  6 images
                </span>
              </div>
            </Link>
            <Link to={"/aboutUs/galleries/gallery6"}>
              <div className="relative hover:opacity-70">
                <img
                  src="https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_08-700x467.jpg"
                  alt="Gallery"
                  className=" rounded-lg shadow-lg"
                />
                <span className="absolute hover:underline hover:decoration-pink-700 bottom-14 left-2 text-white text-xl font-extrabold bg-opacity-40 px-3 py-1 rounded">
                  Establishment dealing with cosmetic treatments
                </span>
                <span className="absolute bottom-6 left-2 text-white text-sm text-bold bg-opacity-70 px-3 py-1 rounded">
                  July 26,2024
                </span>
                <span className="absolute bottom-2 left-2 text-white text-sm bg-opacity-70 px-3 py-1 rounded">
                  6 images
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Link>
      <Footer />
    </div>
  );
};

export default Galleries;
