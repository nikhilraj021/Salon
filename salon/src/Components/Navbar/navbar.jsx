import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";
import { IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const styles = {
  navbarWrapper: {
    height: "calc(100% - 261px)",
  },
};

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearchInput, setOpenSearchInput] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dropDown1, setDropDown1] = useState(false);
  const [arrow, setArrow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const setMenuBasedOnWidth = () => {
      if (window.outerWidth >= 1024) {
        setOpenMenu(true);
      }
      if (window.outerWidth < 1024) {
        setOpenMenu(openMenu);
      }
    };
    window.addEventListener("resize", setMenuBasedOnWidth);
    setMenuBasedOnWidth();

    return () => {
      window.removeEventListener("resize", setMenuBasedOnWidth);
    };
  }, []);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleSearch = () => {
    setOpenSearchInput(!openSearchInput);
  };

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleDropDown1 = () => {
    setDropDown1(!dropDown1);
  };

  const handleArrow = () => {
    setArrow(!arrow);
  };

  return (
    <header className=" relative bg-[url(/images/nav-bg-image.jpg)] bg-cover bg-center lg:w-1/4">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-600  to-cyan-500 opacity-90 "></div>
      <div className="relative z-10 lg:h-screen ">
        <div className="flex flex-col items-center">
          <div className="flex self-end lg:hidden border-[3px] m-3 p-[5px] rounded-full text-white ">
            {openMenu ? (
              <RxCross1 onClick={handleMenu} />
            ) : (
              <GiHamburgerMenu onClick={handleMenu} />
            )}
          </div>
          <div className="flex self-end max-lg:hidden m-3 items-center ">
            {openSearchInput ? (
              <input
                type="search"
                className=" p-[5px] rounded-xl outline-none pl-5"
                placeholder="Search..."
              />
            ) : (
              <></>
            )}
            <IoSearch
              className="ml-2 text-[40px] border-[3px] p-[5px] rounded-full text-white"
              onClick={handleSearch}
            />
          </div>
          <Link to={"/"}>
            <img src="/images/nav_img.jpg" className=" w-[80px] rounded-full" />
          </Link>
          <Link to={"/"}>
            <h1 className="text-white text-2xl font-bold hover:underline">
              BeautySpot
            </h1>
          </Link>
          <p className="text-white">WordPress Theme for</p>
          <p className="text-white">Beauty Salons</p>
        </div>
        {openMenu ? (
          <div
            className="p-5 lg:flex flex-col justify-between"
            style={styles.navbarWrapper}
          >
            <nav className="mb-5">
              <ul className="text-white text-lg flex flex-col items-start gap-2 mt-8">
                <li className=" w-full  hover:border-2 rounded-lg hover:px-3 flex items-center cursor-pointer font-semibold text-white text-[16px] ">
                  <Link to="/">HOME</Link>
                </li>
                <li className=" w-full  hover:border-2 rounded-lg hover:px-3 flex items-center cursor-pointer font-semibold text-white text-[16px] ">
                  <Link to="/ourServices/all">OUR SERVICES</Link>
                </li>
                <li className=" w-full  hover:border-2 rounded-lg hover:px-3 flex justify-between items-center cursor-pointer font-semibold text-white text-[16px] ">
                  <span>
                    <Link to="/aboutUs/blog">ABOUT US</Link>
                  </span>
                  {dropDown ? (
                    <IoIosArrowDropup
                      className="text-xl"
                      onClick={handleDropDown}
                    />
                  ) : (
                    <IoIosArrowDropdown
                      className="text-xl"
                      onClick={handleDropDown}
                    />
                  )}
                </li>
                {dropDown ? (
                  <div className=" w-full flex flex-col items-center gap-2 font-semibold text-[16px]">
                    <Link to="/aboutUs/blog">
                      <button>Blog</button>
                    </Link>
                    <Link to="/aboutUs/galleries">
                      <button>Galleries</button>
                    </Link>
                    <Link to="/aboutUs/ourteam">
                      <button>Our Team</button>
                    </Link>
                    <Link to="/aboutUs/testimonials">
                      <button>Testimonials</button>
                    </Link>
                    <Link to="/aboutUs/faq">
                      <button>FAQ</button>
                    </Link>
                  </div>
                ) : (
                  <></>
                )}

                <li className=" w-full hover:bg-transparent hover:border-2 rounded-lg hover:px-3 flex items-center cursor-pointer font-semibold text-white text-[16px] ">
                  <Link to="/contact">CONTACT</Link>
                </li>

                <li className=" w-full hover:bg-transparent hover:border-2 rounded-lg hover:px-3 flex justify-between items-center cursor-pointer font-semibold text-white text-[16px] ">
                  <span>
                    <Link to="/more/typography">MORE</Link>
                  </span>
                  {dropDown1 ? (
                    <IoIosArrowDropup
                      className="text-xl"
                      onClick={handleDropDown1}
                    />
                  ) : (
                    <IoIosArrowDropdown
                      className="text-xl"
                      onClick={handleDropDown1}
                    />
                  )}
                </li>
                {dropDown1 ? (
                  <div className=" w-full flex flex-col items-center gap-2 font-semibold text-[16px] ">
                    <Link to="/more/typography">
                      <button>Topography</button>
                    </Link>
                    <Link to="/more/elements">
                      <button>Elements</button>
                    </Link>
                    <Link to="/more/leftsidebar">
                      <button>Left Sidebar</button>
                    </Link>
                    <Link to="/more/rightsidebar">
                      <button>Right Sidebar</button>
                    </Link>
                  </div>
                ) : (
                  <></>
                )}
              </ul>
            </nav>

            <div className="flex items-center bg-white p-2 mb-5 rounded-full lg:hidden">
              <input
                type="search"
                className="w-full outline-none pl-4"
                placeholder="Search..."
              />
              <IoSearch className="text-gray-800 text-xl" />
            </div>

            <div className="relative">
              <div
                className={`navbar-popup lg:absolute text-center lg:right-0 ${
                  arrow ? "open" : "close"
                }`}
              >
                <div className="max-lg:hidden text-end">
                  {arrow ? (
                    <button
                      className="text-2xl bg-white rounded-full border-none"
                      onClick={handleArrow}
                    >
                      <IoIosArrowDropdownCircle className="text-pink-600 text-4xl " />
                    </button>
                  ) : (
                    <button
                      className="text-2xl bg-white rounded-full border-none"
                      onClick={handleArrow}
                    >
                      <IoIosArrowDropupCircle className="text-pink-600 text-4xl " />
                    </button>
                  )}
                </div>

                {arrow ? (
                  <div className="backdrop-blur-sm">
                    <button
                      onClick={() => navigate("/contact")}
                      className=" bg-yellow-400 rounded-full py-2 px-6 font-semibold text-gray-600 text-[16px]"
                    >
                      MAKE AN APPOINTMENT
                    </button>

                    <span className="flex my-5 justify-center w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>

                    <div className="flex gap-3 flex-col text-[14px] lg:flex-row lg:flex-wrap lg:gap-4 ">
                      <div className="flex items-center gap-2 text-white">
                        <IoCall className="text-xl" />
                        <p className="ml-1">(123) 456 789</p>
                      </div>
                      <div className="flex gap-3  justify-start items-center text-white">
                        <CiMail className="text-xl" />
                        <p>example@example.com</p>
                      </div>
                      <div className="flex gap-3 text-white">
                        <FaMapMarkerAlt className="text-xl" />
                        <p className=" text-start -mt-1 ">
                          BeautySpot <br />
                          9015 Sunset Boulevard <br /> Ca 90069
                        </p>
                      </div>
                      <div className="flex gap-2 text-white">
                        <FaRegClock className="text-xl" />
                        <div className="flex gap-5 ml-1">
                          <div className="flex flex-col">
                            <p className="self-start">Mo.-Fr.:</p>
                            <p className="self-start">Sa.:</p>
                            <p className="self-start">Su.:</p>
                          </div>
                          <div className="flex flex-col">
                            <p className="self-start">10am - 4pm</p>
                            <p className="self-start">9am - 2pm</p>
                            <p className="self-start">Closed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="lg:hidden">
                    <div>
                      <button className=" bg-yellow-400 rounded-full py-2 px-6 font-semibold text-gray-600 text-[16px]">
                        MAKE AN APPOINTMENT
                      </button>

                      <span className="flex my-5 justify-center w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>

                      <div className="flex gap-3 flex-col text-[14px] lg:flex-row lg:flex-wrap lg:gap-4 ">
                        <div className="flex items-center gap-2 text-white">
                          <IoCall className="text-xl" />
                          <p className="ml-1">(123) 456 789</p>
                        </div>
                        <div className="flex gap-3 justify-start items-center text-white">
                          <CiMail className="text-xl" />
                          <p>example@example.com</p>
                        </div>
                        <div className="flex gap-3 text-white">
                          <FaMapMarkerAlt className="text-xl" />
                          <p className=" text-start -mt-1 ">
                            BeautySpot <br />
                            9015 Sunset Boulevard <br /> Ca 90069
                          </p>
                        </div>
                        <div className="flex gap-2 text-white">
                          <FaRegClock className="text-xl" />
                          <div className="flex gap-5 ml-1">
                            <div className="flex flex-col">
                              <p className="self-start">Mo.-Fr.:</p>
                              <p className="self-start">Sa.:</p>
                              <p className="self-start">Su.:</p>
                            </div>
                            <div className="flex flex-col">
                              <p className="self-start">10am - 4pm</p>
                              <p className="self-start">9am - 2pm</p>
                              <p className="self-start">Closed</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="flex my-5 justify-center w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>

                <ul className="flex justify-center text-[18px] text-white gap-2 ">
                  <a href="https://www.facebook.com/">
                    <li className="p-2 rounded-full bg-opacity-20 bg-white cursor-pointer">
                      <FaFacebookF />
                    </li>
                  </a>
                  <a href="https://www.instagram.com/accounts/login/">
                    <li className="p-2 rounded-full bg-opacity-20 bg-white cursor-pointer">
                      <FaInstagram />
                    </li>
                  </a>
                  <a href="https://x.com/">
                    <li className="p-2 rounded-full bg-opacity-20 bg-white cursor-pointer">
                      <FaTwitter />
                    </li>
                  </a>
                  <a href="https://www.youtube.com/">
                    <li className="p-2 rounded-full bg-opacity-20 bg-white cursor-pointer">
                      <TfiYoutube />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Navbar;
