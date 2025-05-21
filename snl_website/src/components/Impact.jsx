import React from "react";
import { LifeBuoy, Briefcase, Users, Sun } from "lucide-react";

const statsData = [
  {
    id: 1,
    icon: <LifeBuoy className="h-8 w-8" />,
    number: "50+",
    label: "Health Centers Powered",
  },
  {
    id: 2,
    icon: <Briefcase className="h-8 w-8" />,
    number: "100+",
    label: "Livelihood Projects",
  },
  {
    id: 3,
    icon: <Users className="h-8 w-8" />,
    number: "30,000+",
    label: "Lives Impacted",
  },
  {
    id: 4,
    icon: <Sun className="h-8 w-8" />,
    number: "500kW+",
    label: "Clean Energy Installed",
  },
];

const Impact = () => {
  return (
    <section id="impact" className="bg-green-50 rounded-b-2xl py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Our Impact
        </h2>
        <h3 className="mb-12 text-center text-2xl font-medium text-green-600">
          📊 Real Impact, Real Change
        </h3>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
          {statsData.map(({ id, icon, number, label }) => (
            <div
              key={id}
              className="rounded-lg p-6 text-center shadow-md bg-white transition-transform hover:scale-105"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-green-600">
                {icon}
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-green-600">
                {number}
              </h3>
              <p className="mt-2 text-gray-700">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
