import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import saloonImage from "../../assets/saloon.png";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";

const images = [
  {
    src: saloonImage,
    heading: "Welcome to the beautyspot",
    description:
      "WordPress theme for Beauty Salons, Hairdressers, Wellness or Spa",
    buttonText: "See our services",
  },
  {
    src: "https://t4.ftcdn.net/jpg/03/54/26/59/360_F_354265947_XNNugDW8vyMbCg62bqCz8vhMqQDWj9J7.webp",
    heading: "Read Professional Beauty Tips",
    description:
      "Get inspired by our beauty tips on cosmetics, hair and body treatments",
    buttonText: "See our blog",
  },
  {
    src: "https://t4.ftcdn.net/jpg/03/64/37/19/240_F_364371943_drvHQS9ITogcGJ0PaQxwyGVcip8RGSFk.jpg",
    heading: "Hundreds of Happy Clients",
    description:
      "Read what some of our customers are saying about our beauty salon",
    buttonText: "See our Testimonials",
  },
];

const services = [
  {
    title: "Cosmetics",
    link: "/ourServices/cosmetics",
    image:
      "https://images.unsplash.com/photo-1531646317777-0619c7c5d1d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
    description:
      "Cosmetics are substances or products used to enhance or alter the appearance of the face or fragrance and texture of the body.",
  },
  {
    title: "Hairdressing",
    link: "/ourServices/hairdressing",
    image:
      "https://plus.unsplash.com/premium_photo-1676677513676-d2add148a9fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
    description:
      "Professional hair care and styling services to keep your hair looking its best.",
  },
  {
    title: "Barber",
    link: "/ourServices/barber",
    image:
      "https://plus.unsplash.com/premium_photo-1661645788141-8196a45fb483?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
    description: "Expert barber services for men's grooming and haircuts.",
  },
  {
    title: "Massages",
    link: "/ourServices/massages",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
    description:
      "Relaxing massage treatments to relieve stress and improve well-being.",
  },
  {
    title: "Body Treatments",
    link: "/ourServices/bodyTreatments",
    image:
      "https://images.unsplash.com/photo-1523832083691-c772f31be296?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
    description:
      "Comprehensive body treatments to rejuvenate and revitalize your skin.",
  },
  {
    title: "Aromatherapy",
    link: "/ourServices/aromatherapy",
    image:
      "https://images.unsplash.com/photo-1611073615848-d6ff6215931f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
    description:
      "Therapeutic aromatherapy sessions using essential oils to enhance your health and mood.",
  },
];

const data = [
  {
    description:
      "Eye shadow is a pigmented powder/cream or substance used to accentuate the eye area, traditionally on, above, and under the eyelids. Many colours may be used at once and blended together to create different effects using a blending brush.",
    imageSrc:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_01.jpg",
    name: "Sandra Olson",
    title: "Pharmacist",
  },
  {
    description:
      "Bronzer gives skin a bit of color and contours the face for a sharper definition or creates a tan-look. Bronzer is considered to be more of a natural look and can be used for everyday wear. Bronzer enhances the color of the face. It comes in either matte, semi-matte/satin, or shimmer finishes.",
    imageSrc:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_03.jpg",
    name: "Donna Kittrell",
    title: "Receptionist",
  },
  {
    description:
      "Face powder sets the foundation and under eye concealer, giving it a matte finish while also concealing small flaws or blemishes. It can also be used to bake the foundation, so that it stays on longer and create a matte finish.",
    imageSrc:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_02.jpg",
    name: "Angela Chambers",
    title: "Computer analyst",
  },
  {
    description:
      "Most modern barbershops have special barber chairs, and special equipment for rinsing and washing hair. In some barbershops, people can read magazines or watch TV while the barber works.",
    imageSrc:
      "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_05.jpg",
    name: "Thomas Wadsworth",
    title: "Librarian",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate()
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleClick = (service) => {
    setSelectedService(service);
  };

  const handleSelectTestimonial = (index) => {
    setSelectedTestimonial(index);
  };

  const handleCloseDetail = () => {
    setSelectedTestimonial(null);
  };

  const handlePrevious = () => {
    setSelectedTestimonial(
      (selectedTestimonial - 1 + data.length) % data.length
    );
  };

  const handleNext = () => {
    setSelectedTestimonial((selectedTestimonial + 1) % data.length);
  };

  return (
    <div className="lg:w-[73vw]">
      <div className="relative col-12 col-md-4 py-5 bg-gray-200">
        {/* Carosel */}
        <div className="overflow-hidden relative mx-5 h-[70vh] ">
          <div
            className="flex transition-transform ease-out duration-500 h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0 relative h-full">
                <img
                  src={image.src}
                  className="w-full h-full object-cover"
                  alt={`Slide ${index + 1}`}
                />
                <div
                  className={`absolute left-0 bottom-10 bg-white bg-opacity-75 px-8 py-3 lg:p-10 rounded-r-lg shadow-lg transition-opacity duration-1000 ${
                    currentIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h2 className="text-2xl lg:text-3xl mx-5 lg:m-5 font-bold">{image.heading}</h2>
                  <p className="text-lg m-5">{image.description}</p>
                  <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg ml-5">
                    {image.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full"
            onClick={prevSlide}
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full"
            onClick={nextSlide}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Services */}
        <div className=" py-12 px-5 lg:p-14">
          <div className="">
            <div className="flex my-8">
              <span className="bg-gradient-to-b from-pink-500 via-orange-400 to-blue-400 w-2"></span>
              <div className="mx-4">
                <h1 className="text-3xl font-bold">Our Services</h1>
                <p className=" italic my-3">
                  Our salon offers a wide variety of beauty services
                </p>
              </div>
            </div>
            <div className=" md:grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => navigate(service.link)}
                  className={`relative shadow-md rounded-lg overflow-hidden bg-white cursor-pointer card w-full h-72 my-2 ${
                    selectedService?.title === service.title
                      ? "animate-fadeIn"
                      : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-black opacity-50 z-10 overlay"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-4">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-lg text-center">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest blogs  */}
        <div className="bg-white my-5 p-5 lg:p-16 ">
          <div className="flex my-8">
            <span className="bg-gradient-to-b from-pink-500 via-orange-400 to-blue-400 w-2"></span>
            <div className="mx-4">
              <h1 className="text-3xl font-bold">Latest Blog Posts</h1>
              <p className=" italic my-3">
                Read our tips about makeup, hairdressing and body treatments
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3 lg:grid-cols-3">
            <div className="rounded overflow-hidden mb-4">
              <Link to="/latestblogpostSpa">
                <img
                  src="/images/Spa-1.jpg"
                  alt="Spa-image"
                  className="w-full h-[300px]"
                />
                <div className="my-3">
                  <h1 className="font-bold text-2xl text-gray-700 hover:underline decoration-2 decoration-pink-600 ">
                    A spa is a location where mineral-rich spring water
                  </h1>
                  <p className="py-3 text-gray-400">
                    May 23, 2021 in Spa Treatments
                  </p>
                  <li className="text-pink-500 list-none hover:underline decoration-2 decoration-pink-600 font-bold">
                    Read More
                  </li>
                </div>
              </Link>
            </div>
            <div className="rounded overflow-hidden mb-4">
              <Link to="/latestblogpostMassage">
                <img
                  src="/images/Spa-2.jpg"
                  alt="haire-cut-image"
                  className="w-full h-[300px]"
                />
                <div className="my-3">
                  <h1 className="font-bold text-2xl text-gray-700 hover:underline decoration-2 decoration-pink-600">
                    The main professionals that provide therapeutic
                  </h1>
                  <p className="py-3 text-gray-400">
                    May 22, 2021 in Spa Treatments
                  </p>
                  <li className="text-pink-500 list-none hover:underline decoration-2 decoration-pink-600 font-bold">
                    Read More
                  </li>
                </div>
              </Link>
            </div>
            <div className="rounded overflow-hidden mb-4">
              <Link to="/latestblogpostHair">
                <img
                  src="/images/haire-cut.jpg"
                  alt="haire-cut-image"
                  className="w-full h-[300px]"
                />
                <div className="my-3">
                  <h1 className="font-bold text-2xl text-gray-700 hover:underline decoration-2 decoration-pink-600 ">
                    The dyeing of hair is an ancient art that involves
                  </h1>
                  <p className="py-3 text-gray-400">
                    May 21, 2021 in Hair Care
                  </p>
                  <li className="text-pink-500 list-none font-bold hover:underline decoration-2 decoration-pink-600">
                    Read More
                  </li>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Our Client Testimonials */}
        <div className="my-5 p-5 lg:p-12">
          <div className="flex my-8">
            <span className="bg-gradient-to-b from-pink-500 via-orange-400 to-blue-400 w-2"></span>
            <div className="mx-4">
              <h1 className="text-3xl font-bold">Our Clients Testimonials</h1>
              <p className=" italic my-3">
                What our customers are saying about us
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            {selectedTestimonial !== null ? (
              <div className="flex flex-col p-2 md:p-12">
                <h2 className="text-4xl font-bold  text-gray-700 mb-3">
                  Testimonials by {data[selectedTestimonial].name}
                </h2>

                <div className="border-b text-wrap pt-6 mb-8 p-4 ">
                  <i className="text-gray-600 pt-2 ">
                    {data[selectedTestimonial].description}
                  </i>
                  <div className="flex items-center pt-6 mb-3">
                    <img
                      src={data[selectedTestimonial].imageSrc}
                      alt={data[selectedTestimonial].name}
                      className="w-16 h-16 rounded-full border-4  border-pink-500"
                    />
                    <div className="ml-4">
                      <div className="relative group">
                        <p className="text-lg  text-gray-700 font-semibold">
                          {data[selectedTestimonial].name}
                        </p>
                        <div className="absolute left-0 bottom-0 w-full h-1 bg-transparent group-hover:bg-pink-500 transition-all duration-300"></div>
                      </div>
                      <p className="text-sm text-gray-500">
                        {data[selectedTestimonial].title}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between font-thin w-full px-10">
                  {selectedTestimonial > 0 && (
                    <button
                      className="px-4 py-2 text-sm text-gray-400 rounded-lg text-justify"
                      onClick={handlePrevious}
                    >
                      Previous
                      <p className="text-pink-500 text-xl">
                        {
                          data[
                            (selectedTestimonial - 1 + data.length) %
                              data.length
                          ].name
                        }
                      </p>
                    </button>
                  )}
                  {/* This div ensures the "Next" button is always on the right */}
                  <div className="flex justify-end flex-grow">
                    {selectedTestimonial < data.length - 1 && (
                      <button
                        className="px-4 py-2 font-thin text-gray-400 text-sm rounded-lg text-end"
                        onClick={handleNext}
                      >
                        Next
                        <p className="text-pink-500 text-xl">
                          {data[(selectedTestimonial + 1) % data.length].name}
                        </p>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="md:grid grid-cols-2 gap-8">
                  {data.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white p-5 rounded-lg shadow-md relative cursor-pointer"
                      onClick={() => handleSelectTestimonial(index)}
                    >
                      <p className="text-gray-700 mb-3">
                        {testimonial.description}
                      </p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.imageSrc}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full border-4 border-pink-500"
                        />
                        <div className="ml-4">
                          <div className="relative group">
                            <p className="text-lg font-semibold">
                              {testimonial.name}
                            </p>
                            <div className="absolute left-0 bottom-0 w-full h-1 bg-transparent group-hover:bg-pink-500 transition-all duration-300"></div>
                          </div>
                          <p className="text-sm text-gray-500">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
