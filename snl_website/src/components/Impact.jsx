import React, { useEffect, useRef } from "react";
import { LifeBuoy, Briefcase, Users, Sun } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  {
    id: 1,
    icon: <LifeBuoy className="h-8 w-8" />,
    number: 50,
    suffix: "+",
    label: "Health Centers Powered",
  },
  {
    id: 2,
    icon: <Briefcase className="h-8 w-8" />,
    number: 100,
    suffix: "+",
    label: "Livelihood Projects",
  },
  {
    id: 3,
    icon: <Users className="h-8 w-8" />,
    number: 30000,
    suffix: "+",
    label: "Lives Impacted",
  },
  {
    id: 4,
    icon: <Sun className="h-8 w-8" />,
    number: 500,
    suffix: "kW+",
    label: "Clean Energy Installed",
  },
];

const Impact = () => {
  const numberRefs = useRef([]);
  useEffect(() => {
    numberRefs.current.forEach((ref, index) => {
      const targetValue = statsData[index].number;

      gsap.fromTo(
        ref,
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            end: "center bottom",
            toggleActions: "play none none reverse",
          },
          onUpdate: function () {
            ref.textContent = `${Math.floor(this.targets()[0].innerText)}${
              statsData[index].suffix
            }`;
          },
        }
      );
    });
  }, []);

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
          {statsData.map(({ id, icon, label }, index) => (
            <div
              key={id}
              className="rounded-lg p-6 text-center shadow-md bg-white transition-transform hover:scale-105"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-green-600">
                {icon}
              </div>
              <h3
                className="text-2xl sm:text-4xl font-bold text-green-600"
                ref={(el) => (numberRefs.current[index] = el)}
              >
                0
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
