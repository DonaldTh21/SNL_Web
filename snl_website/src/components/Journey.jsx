import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";

const Journey = () => {
  return (
    <section id="journey" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Our <span className="text-green-600">Journey</span>
        </h2>
        <h3 className="text-2xl font-sans font-semibold text-gray-700 max-w-3xl mx-auto mb-4 text-center">
          From Humble Beginnings to Impactful Change
        </h3>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="/images/journey/Team_Installing.jpg"
            alt="Team members installing solar panels in Manipur"
            className="absolute inset-0 w-full h-full object-cover object-[0%] sm:object-left"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <p className="text-gray-700">
            Born from a deep-rooted commitment to serve the underserved, SNL
            Energy Solutions began its journey in the remote landscapes of
            Manipur with a simple mission: to bridge the energy access gap in
            last-mile communities.
          </p>
          <p className="text-gray-700">
            What started as a small initiative by a passionate local team,
            equipped with grassroots knowledge and a vision for change, has now
            grown into a dedicated organization championing Decentralized
            Renewable Energy (DRE) for healthcare and livelihood across
            Northeast India.
          </p>
        </div>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="order-2 flex flex-col justify-center space-y-4 md:order-1">
          <p className="text-gray-700">
            Over the years, we've faced rugged terrain, logistical challenges,
            and infrastructural limitations—but our resolve never wavered. With
            each health center we energized and every livelihood tool we
            powered, we saw not just infrastructure lighting up, but hopes
            rising, lives transforming, and communities thriving.
          </p>
          <p className="text-gray-700">
            Today, we continue our work with the same authenticity, humility,
            and purpose that defined our early days—now strengthened by
            experience, partnerships, and the trust of the people we serve.
          </p>
        </div>
        <div className="order-1 relative h-[400px] overflow-hidden rounded-lg shadow-lg md:order-2 transform transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="/images/journey/health.jpg"
            alt="Solar-powered health center in a remote village"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Next: "Add service request form" */}
    </section>
  );
};

export default Journey;
