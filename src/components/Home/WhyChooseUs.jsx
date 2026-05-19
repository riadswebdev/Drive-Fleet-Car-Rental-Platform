

import { Icon } from "@iconify/react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Luxury Fleet",
      description:
        "Drive premium vehicles from world-class brands with unmatched comfort and performance.",
      icon: "solar:star-bold",
    },
    {
      id: 2,
      title: "Trusted Experience",
      description:
        "Thousands of successful bookings with verified dealers and secure rental service.",
      icon: "solar:shield-check-bold",
    },
    {
      id: 3,
      title: "24/7 Support",
      description:
        "Dedicated customer support team ready to assist anytime, anywhere.",
      icon: "solar:headphones-round-bold",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
      <div className="text-center mb-14">
        <p className="text-blue-600 font-semibold mb-2">Why Choose Us</p>

        <h2 className="text-3xl md:text-4xl font-black text-zinc-900">
          Premium Car Rental Experience
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white border border-zinc-200/70 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="size-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
              <Icon icon={feature.icon} className="text-3xl text-blue-600" />
            </div>

            <h3 className="text-xl font-bold text-zinc-900 mb-3">
              {feature.title}
            </h3>

            <p className="text-zinc-600 leading-7 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
