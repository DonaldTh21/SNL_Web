import React from "react";
import { LifeBuoy, CheckCircle, Briefcase } from "lucide-react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const cardData = [
  {
    id: 1,
    icon: <LifeBuoy className="h-8 w-8" />,
    emoji: "🩺",
    title: "Renewable Energy for Health",
    points: [
      "Solar power for PHCs, CHCs & health sub-centers",
      "Reliable electricity for vaccine refrigeration, nighttime care, maternity wards",
      "Monitoring and Annual Maintenance Contracts (AMCs) to ensure system reliability",
    ],
    link: {
      text: "Learn more about our healthcare solutions",
      href: "#",
    },
  },
  {
    id: 2,
    icon: <Briefcase className="h-8 w-8" />,
    emoji: "🛠️",
    title: "Energy for Livelihood",
    points: [
      "Solar-powered Egg Incubator, micro-enterprise machinery, Solar powered loom, Sewing Machines, Pottery wheel, Petty shop & Refrigerator",
      "Training programs for green skilling & entrepreneurship",
      "Supporting women and youth to build climate-resilient livelihoods",
    ],
    link: {
      text: "Learn more about our livelihood solutions",
      href: "#",
    },
  },
];

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
          {cardData.map((card) => (
            <div className="rounded-xl bg-white p-8 shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="mb-6 hidden md:flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                {card.icon}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-green-800 text-center md:text-left">
                <span className="hidden md:inline-block mr-2">
                  {card.emoji}
                </span>
                {card.title}
              </h3>
              <ul className="space-y-3">
                {card.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href={card.link.href}
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 hover:underline"
                >
                  {card.link.text}
                  <ChevronRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Next: "Add project details modal popup" */}
    </section>
  );
};

export default WhatWeDo;
