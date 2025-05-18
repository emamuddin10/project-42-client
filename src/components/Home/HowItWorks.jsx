import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "1. Create Your Profile",
      description:
        "Sign up and create a detailed biodata to showcase your background, interests, and expectations from your life partner.",
      icon: "📝",
    },
    {
      title: "2. Find Suitable Matches",
      description:
        "Browse through verified biodatas and use filters based on age, religion, education, and location to find your ideal match.",
      icon: "🔍",
    },
    {
      title: "3. Connect & Communicate",
      description:
        "Send interest requests, chat securely, and get to know your potential partner better before taking the next step.",
      icon: "💬",
    },
    {
      title: "4. Take the Next Step",
      description:
        "When you're ready, involve your families and take the first step toward your happily ever after.",
      icon: "💍",
    },
  ];

  return (
    <section className="bg-green-100 py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          How It Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our platform makes your matrimonial journey easy, safe, and
          meaningful. Here’s how you can find your perfect match in just a few steps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
