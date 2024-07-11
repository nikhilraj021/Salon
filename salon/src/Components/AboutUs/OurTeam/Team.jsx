import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import Footer from "../../Footer";

const teamMembers = [
  {
    name: "Vivien Hawkins",
    title: "Makeup stylist",
    imageUrl:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/person_01-300x300.jpg",
    description:
      "Cosmetics that are meant to be used on the face and eye area are usually applied with a brush, a makeup sponge.",
    profilePath: "/aboutUs/ourteam/vivien",
  },
  {
    name: "Rudy Martinez",
    title: "Body Treatments",
    imageUrl:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/person_02-300x300.jpg",
    description:
      "The European spas provided various other diversions for guests after the bath, including gambling, horse racing.",
    profilePath: "/aboutUs/ourteam/rudy",
  },
  {
    name: "Matthew Hernandez",
    title: "Barber and Hairdresser",
    imageUrl:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/person_03-300x300.jpg",
    description:
      "The barber pole, featuring red and white spiraling stripes, symbolized different aspects of the craft.",
    profilePath: "/aboutUs/ourteam/matthew",
  },
];

const Team = () => {
  return (
    <div className="lg:w-[73vw]">
      <Link to={"/aboutUs/ourteam"}>
        <section className="py-16 px-5">
          <div className="">
            <h2 className="text-4xl font-bold mb-8">Our Teams</h2>
            <div className="md:grid grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div className="my-5 ">
                  <div>
                    <Link
                      key={index}
                      to={member.profilePath}
                      className="bg-white text-center"
                    >
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-32 h-32 border-4 border-pink-500 rounded-full mx-auto mb-4"
                      />
                      <h3 className="text-xl hover:underline hover:decoration-pink-700 font-semibold">
                        {member.name}
                      </h3>
                    
                    <p className="text-gray-400 italic">{member.title}</p>
                    <p className="text-gray-500 m-2 text-[14px]">
                      {member.description}
                    </p>
                    </Link>
                    <div className="flex justify-center gap-2">
                      <a href="https://x.com/">
                        <FaTwitter className="bg-gray-300 text-4xl p-2 rounded-full text-white" />
                      </a>
                      <a href="https://www.facebook.com/">
                        <CgFacebook className="bg-gray-300 text-4xl p-2 rounded-full text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </Link>
    </div>
  );
};

export default Team;
