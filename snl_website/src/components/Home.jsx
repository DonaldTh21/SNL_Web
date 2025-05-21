import React from "react";
import Hero from "../assets/Hero.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  return (
    <section id="home" className="py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Empowering Communities through{" "}
            <span className="text-green-500">Clean Energy Solutions</span>{" "}
          </h1>
          <p className="text-gray-600 mb-8 ">
            Bringing light, power, and opportunity to Northeast India’s
            underserved communities. We integrate clean, decentralized energy
            into healthcare and livelihoods unlocking dignity, resilience, and a
            brighter future from the grassroots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105">
              <span className="material-symbols-outlined mr-2">
                play_circle
              </span>
              Watch Video
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative w-full aspect-[16/9]">
            <img
              src={Hero}
              alt="Solar panels on modern home roof"
              className="rounded-xl shadow-lg w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-300"
              keywords="solar panels, home solar installation, renewable energy, green energy"
            />
          </div>
        </div>
      </div>
      {/* Next: "Add animated statistics counter section" */}
    </section>
  );
};

export default Home;
