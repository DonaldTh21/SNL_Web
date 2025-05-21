import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Partner logos with URLs
const partners = [
  {
    name: "Atal",
    logo: "/images/partners/Atal.jpg",
    url: "https://aicselco.org/",
  },
  {
    name: "Bharataya Vikas Trust",
    logo: "/images/partners/Bharataya Vikas Trust.jpg",
    url: "https://bvtmanipal.org/",
  },
  {
    name: "Customized Energy",
    logo: "images/partners/Customized Energy.png",
    url: "https://ces-ltd.com/",
  },
  {
    name: "From the People of Japan",
    logo: "/images/partners/From the peope of Japan.jpg",
    url: "#",
  },
  {
    name: "Selco",
    logo: "/images/partners/Selco.png",
    url: "https://selcofoundation.org/",
  },
  {
    name: "UNDP",
    logo: "/images/partners/UNDP.png",
    url: "https://www.undp.org/",
  },
  {
    name: "Unltd India",
    logo: "/images/partners/Unltd_India.png",
    url: "https://unltdindia.org/",
  },
  // Add more partners as needed
];

const Partner = () => {
  return (
    <section id="partner" className="py-10 bg-gray-50 rounded-2xl my-8 p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Our Partners</h2>
        <p className="text-gray-600 max-w-3xl mx-auto h-16 flex items-center justify-center gap-x-2 mb-2">
          <i className="fas fa-handshake-angle text-yellow-500 text-2xl"></i>
          With Support, We Go Further
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        loop={true}
        allowSlidePrev={false}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="px-6"
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-32">
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-32 transition-shadow duration-300 hover:shadow-md"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Partner;
