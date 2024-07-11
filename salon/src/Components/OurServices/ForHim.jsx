import React from "react";
import { Link } from "react-router-dom";

const ForHim = () => {
  const cards = [
    {
      title: "Barber",
      description:
        "A barber is a person whose occupation is mainly to cut, dress, groom, style and shave men’s and boys’ hair. Most barbers now specialize.",
      image:
        "https://www.shutterstock.com/image-photo/attractive-happy-man-smiling-while-600nw-2267242719.jpg",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymX-QV0BWyf5yDuLSoJlXpR8S5Rj6goGNnA&s",
      link: "/ourServices/barber",
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
      title: "Aromatherapy",
      description:
        "Aromatherapy uses aromatic materials, including essential oils, and other aroma compounds, with claims for improving",
      image:
        "https://st.depositphotos.com/1001944/4954/i/450/depositphotos_49540571-stock-photo-essential-oils-and-medical-flowers.jpg",
      icon: "https://cdn-icons-png.flaticon.com/512/11619/11619390.png",
      link: "/ourServices /aromatherapy",
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

export default ForHim;
