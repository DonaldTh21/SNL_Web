import React from "react";
import { LifeBuoy, CheckCircle, Briefcase } from "lucide-react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const WhatWeDo = () => {
  return (
    <section id="whatwedo" className="py-12 bg-gray-50 rounded-t-2xl mt-8 p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <h3 className="text-2xl font-sans font-semibold text-green-600 max-w-3xl mx-auto mb-4 text-center">
          Energy for Health & Livelihood
        </h3>
      </div>
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="mb-6 hidden md:flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <LifeBuoy className="h-8 w-8" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-green-800 text-center md:text-left">
              <span className="hidden md:inline-block mr-2">🩺</span> Renewable
              Energy for Health
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>Solar power for PHCs, CHCs & health sub-centers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>
                  Reliable electricity for vaccine refrigeration, nighttime
                  care, maternity wards
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>
                  Monitoring and Annual Maintenance Contracts (AMCs) to ensure
                  system reliability
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 hover:underline"
              >
                Learn more about our healthcare solutions
                <ChevronRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="mb-6 hidden md:flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Briefcase className="h-8 w-8" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-green-800 text-center md:text-left">
              <span className="hidden md:inline-block mr-2">🛠️</span> Energy for
              Livelihood
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>
                  Solar-powered Egg Incubator, micro-enterprise machinery, Solar
                  powered loom, Sewing Machines, Pottery wheel, Petty shop &
                  Refrigerator
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>
                  Training programs for green skilling & entrepreneurship
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>
                  Supporting women and youth to build climate-resilient
                  livelihoods
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 hover:underline"
              >
                Learn more about our livelihood solutions
                <ChevronRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Next: "Add project details modal popup" */}
    </section>
  );
};

export default WhatWeDo;
