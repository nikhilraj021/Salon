import React from "react";
import { Link } from "react-router-dom";

const ForHer = () => {
  const cards = [
    
    {
      title: "Cosmetics",
      description:
        "Cosmetics are substances or products used to enhance or alter the appearance of the face or fragrance and texture of the body.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoc-lU9E24bLNV-rM3xVW0K538NVJQBOTHqw&s",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXET8Sa-gQjWk41OYTA7lHYF7OxL3w9EjV0w&s",
      link: "/ourServices/cosmetics",
    },
    
    
    {
      title: "Massages",
      description:
        "Massage is the manipulating of soft tissues in the body. Massage techniques are commonly applied with hands, fingers, elbows",
      image:
        "https://t3.ftcdn.net/jpg/02/66/17/92/360_F_266179228_SmiE8fD8MOkcckPPBLWuYwvOtf6DA1XT.jpg",
      icon: "https://static.vecteezy.com/system/resources/previews/016/470/369/original/body-massage-spa-logo-body-relaxing-massage-therapy-logo-pink-color-gradient-free-vector.jpg",
      link: "/ourServices/massages",
    },
    {
      title: "Body Treatment",
      description:
        "A manicure is a cosmetic beauty treatment for the fingernails and hands performed at home or in a nail salon",
      image:
        "https://lirp.cdn-website.com/md/dmip/dms3rep/multi/opt/facial-treatment-spa-beauty-salon-1920w.jpg",
      icon: "https://c8.alamy.com/comp/2KA0WGN/body-treatment-face-oil-illustration-or-icon-vector-on-white-background-2KA0WGN.jpg",
      link: "/ourServices/bodyTreatments",
    },
    {
      title: "Hairdressing",
      description:
        "Hairdressing as an occupation dates back thousands of years. Ancient art drawings and paintings have been discovered.",
      image:
        "https://media.istockphoto.com/id/482679574/photo/making-a-change-of-look.jpg?s=612x612&w=0&k=20&c=Tr20-tCvPHLKh_W5pNUCymEGRUD_OfOJht97x35i8-o=",
      icon: "https://media.istockphoto.com/id/530503076/vector/hair-dryer.jpg?s=612x612&w=0&k=20&c=iWiDoRjc9WtU7SRqVuoHIi-oFJO7FoqOXdSr7ROO0dM=",
      link: "/ourServices/hairdressing",
    },
    {
      title: "Aromatherapy",
      description:
        "Aromatherapy uses aromatic materials, including essential oils, and other aroma compounds, with claims for improving",
      image:
        "https://st.depositphotos.com/1001944/4954/i/450/depositphotos_49540571-stock-photo-essential-oils-and-medical-flowers.jpg",
      icon: "https://cdn-icons-png.flaticon.com/512/11619/11619390.png",
      link: "/ourServices/aromatherapy",
    },
  ];

  return (
    <div className=" md:grid grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <div key={index} className=" border my-8 md:my-2">
          <div className="">
            <img className="w-full " src={card.image} alt={card.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-5 flex items-center">
                <img
                  src={card.icon}
                  alt={`${card.title} icon`}
                  className="h-6 w-6 mr-2"
                />
                {card.title}
              </div>
              <p className="text-gray-700 text-base">{card.description}</p>
            </div>
            <div className="px-6 pb-8">
              <Link
                to={card.link}
                className="text-pink-500 hover:text-pink-700"
              >
                More Info
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForHer;
