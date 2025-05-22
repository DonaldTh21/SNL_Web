import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const missionData = [
  {
    id: 1,
    background: " bg-yellow-100",
    iconsbg: "text-yellow-500",
    icons: "emoji_objects",
    title: "Sustainable Livelihoods",
    body: "Enabling economic opportunities through reliable energy access for local businesses and artisans.",
  },
  {
    id: 2,
    background: " bg-green-100",
    iconsbg: "text-green-500",
    icons: "ecg_heart",
    title: "Healthcare Access",
    body: "Powering rural health centers to ensure essential medical services are available 24/7.",
  },
  {
    id: 3,
    background: " bg-blue-100",
    iconsbg: "text-blue-500",
    icons: "eco",
    title: "Clean Energy",
    body: "Implementing decentralized renewable energy solutions that are sustainable and environmentally friendly.",
  },
];

const Mission = () => {
  return (
    <section id="mission" className="py-12 bg-gray-50 rounded-2xl my-8 p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Our <span className="text-green-600">Mission</span>
        </h2>
        <p className="text-gray-600 font-semibold max-w-3xl mx-auto">
          At SNL Energy Solutions, we empower underserved communities in
          Northeast India by integrating clean, decentralized renewable energy
          into essential services. From powering rural health centers to
          enabling sustainable livelihoods, we co-create long-lasting impact by
          placing people, resilience, and local innovation at the heart of our
          solutions.
        </p>
      </div>

      {/* Mobile View - Swiper with Pagination */}
      <div className="block md:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          className="!pb-7 myCustomSwiper"
        >
          {missionData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-6 rounded-xl shadow-sm m-1 md:m-0">
                <div
                  className={`w-16 h-16 ${item.background} rounded-full flex items-center justify-center mb-4`}
                >
                  <span
                    className={`material-symbols-outlined ${item.iconsbg} text-2xl`}
                  >
                    {item.icons}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.body}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
        {missionData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
          >
            <div
              className={`w-16 h-16 ${item.background} rounded-full flex items-center justify-center mb-4`}
            >
              <span
                className={`material-symbols-outlined ${item.iconsbg} text-2xl`}
              >
                {item.icons}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
