import React, { useState } from "react";

const services = [
  {
    title: "Comprehensive Financial Review",
    description:
      "A complete analysis of your income, expenses, assets, and liabilities to determine financial health.",
  },
  {
    title: "Portfolio Health Check",
    description:
      "We evaluate your current investments to ensure alignment with your goals and risk profile.",
  },
  {
    title: "Risk Assessment & Profiling",
    description:
      "Understand your risk appetite through a structured assessment to guide your investment strategy.",
  },
  {
    title: "Gap Analysis & Optimization",
    description:
      "Identifying gaps in your current financial plan and providing optimized solutions.",
  },
  {
    title: "Goal-Oriented Investment Planning",
    description:
      "Structured investment planning customized to achieve specific financial goals like education, retirement, or home buying.",
  },
];

const Service = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-10">
          Tailored solutions designed to elevate your financial journey.
        </p>

        <ul className="space-y-4 text-left sm:text-center">
          {services.map((service, index) => (
            <li
              key={index}
              onClick={() => toggleDescription(index)}
              className="bg-white shadow-sm rounded p-4 cursor-pointer hover:bg-gray-100 transition"
            >
              <div className="font-medium text-gray-800">{service.title}</div>
              {openIndex === index && (
                <p className="text-gray-600 mt-2 text-sm sm:text-base transition-all duration-300 ease-in-out">
                  {service.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
