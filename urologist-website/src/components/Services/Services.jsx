import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  // List of services with their respective routes
  const services = [
    {
      icon: "💎",
      title: "Kidney Stone Treatment",
      description: "Advanced treatments for kidney stones, including laser and minimally invasive surgeries.",
      path: "/services/kidneyStone",
    },
    {
      icon: "🔬",
      title: "Kidney Cancer Treatment",
      description: "Comprehensive care for kidney cancer, including surgery and immunotherapy.",
      path: "/services/kidney-cancer",
    },
    {
      icon: "💉",
      title: "Kidney Transplant",
      description: "Expert diagnosis and treatment for kidney failure, including transplant surgery.",
      path: "/services/kidney-transplant",
    },
    {
      icon: "🩺",
      title: "Bladder Tumor Treatment",
      description: "Specialized treatments for bladder tumors, including surgery and laser therapy.",
      path: "/services/bladder-tumor",
    },
    {
      icon: "🚑",
      title: "Bladder Cancer Treatment",
      description: "Advanced care for bladder cancer, including chemotherapy and radiation therapy.",
      path: "/services/bladder-cancer",
    },
    {
      icon: "🧬",
      title: "Prostate Cancer Treatment",
      description: "State-of-the-art treatments for prostate cancer, including robotic surgery.",
      path: "/services/prostate-cancer",
    },
    {
      icon: "🩹",
      title: "Prostate Treatment",
      description: "Effective treatments for prostate disorders, including TURP and laser surgery.",
      path: "/services/prostate-treatment",
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Blue Banner Section */}
      <div className="bg-blue-700 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 text-lg">
          Comprehensive urological care with advanced technology and compassionate expertise.
        </p>
      </div>

      {/* Services Grid Section */}
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-bold text-blue-700">{service.title}</h2>
              <p className="mt-2 text-gray-700">{service.description}</p>
              <button
                onClick={() => navigate(service.path)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition cursor-pointer"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            If you're looking for expert consultation and world-class treatment, book an appointment today.
          </p>
          <a
            href="/appointment"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;