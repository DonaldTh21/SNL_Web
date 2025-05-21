import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MapPin } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const testimonialsData = [
  {
    id: 1,
    title: "Healthcare Impact",
    location: "Tamenglong, Manipur",
    quote:
      "Before solar, our health center couldn't deliver babies safely at night. Now we never turn patients away.",
    author: "Nurse, Tamenglong",
  },
  {
    id: 2,
    title: "Poultry Farmer",
    location: "Yairipok Khoirom, Manipur",
    quote:
      "Before the solar incubator, I had to rely on traditional hatching methods which were slow and uncertain. With the solar-powered system installed by SNL Energy Solutions, I can now hatch over 100 eggs at a time, consistently. It's saving me money, increasing my income, and I no longer worry about power cuts. This one change has transformed my poultry business.",
    author: "Tomba",
  },
  {
    id: 3,
    title: "Poultry Farm",
    location: "Yairipok Khoirom, Manipur",
    quote:
      "Before the solar incubator, I had to rely on traditional hatching methods which were slow and uncertain. With the solar-powered system installed by SNL Energy Solutions, I can now hatch over 100 eggs at a time, consistently. It's saving me money, increasing my income, and I no longer worry about power cuts. This one change has transformed my poultry business.",
    author: "Bhomendra Laishram",
  },
  {
    id: 4,
    title: "",
    location: "Poultry Farmer | Yairipok Khoirom, Manipur",
    quote:
      "Before the solar incubator, I had to rely on traditional hatching methods which were slow and uncertain. With the solar-powered system installed by SNL Energy Solutions, I can now hatch over 100 eggs at a time, consistently. It's saving me money, increasing my income, and I no longer worry about power cuts. This one change has transformed my poultry business.",
    author: "Bhomendra Laishram",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-12 my-6 p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Stories from the Ground</h2>
        <h3 className="text-2xl font-semibold text-green-600">
          📖 Voices of Impact
        </h3>
      </div>

      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonialsData.map(
          ({ id, title, location, quote, author, place }) => (
            <SwiperSlide key={id}>
              <div className="bg-white p-6 rounded-xl hover:shadow-md transition-all border border-gray-100 h-full flex flex-col justify-between mb-1">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                      <span className="material-symbols-outlined">person</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{title}</h4>
                      <p className="text-gray-500 text-sm">{location}</p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 material-symbols-outlined text-lg"
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic border-l-4 border-green-500 pl-4 mb-4">
                    {quote}
                  </blockquote>
                </div>

                <div className="mt-auto">
                  {author && (
                    <p className="text-right text-sm font-medium text-gray-600">
                      — {author}
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default Testimonial;
