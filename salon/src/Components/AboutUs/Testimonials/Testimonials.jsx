import React, { useState } from "react";
import Footer from "../../Footer";

const Testimonials = () => {
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
    {
      description:
        "Foundation is used to smooth out the face by covering spots, acne, blemishes, or uneven skin tone. These are sold in a liquid, cream, or powder, or more recently in a mousse. Foundation provides sheer, matte, dewy or full coverage.",
      imageSrc:
        "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_04.jpg",
      name: "Ashley Perrin",
      title: "Psychologist",
    },
    {
      description:
        "Primer is used to set the face before makeup is applied. This creates another layer between the skin to prevent acne and makeup clogging up pores. Primer creates an even tone throughout the skin and makes makeup last longer. Primer is applied throughout the face including eyes, lips, and lashes.",
      imageSrc:
        "https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_06.jpg",
      name: "Patricia Bolster",
      title: "Art historian",
    },
  ];

  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

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
      <div className="flex flex-col p-6">
        {selectedTestimonial !== null ? (
          <div className="flex flex-col p-2 md:p-12">
            <h2 className="text-4xl font-bold  text-gray-700 mb-3">
              Testimonials by {data[selectedTestimonial].name}
            </h2>
            <div className="flex justify-start mb-6">
              <button
                className="text-gray-500 font-thin px-2"
                onClick={handleCloseDetail}
              >
                Home
              </button>
              <span className="text-gray-500 font-thin px-2">&gt;</span>
              <button
                className="text-gray-500 font-thin px-2"
                onClick={handleCloseDetail}
              >
                Testimonials
              </button>
            </div>
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
                        (selectedTestimonial - 1 + data.length) % data.length
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
            <h1 className="text-4xl font-bold  text-gray-700 mb-3">
              Testimonials
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
      <Footer />
    </div>
  );
};

export default Testimonials;
