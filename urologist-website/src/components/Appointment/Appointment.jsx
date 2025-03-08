import { useEffect, useState } from "react";
import { backendUrl } from "../../config/config";
export default function AppointmentSection() {
  const testimonials = [
    {
      name: "Sparsh Jain",
      review: "Dr. Niren attended me well on time for urine infection and abdominal pain. I am very much satisfied with the diagnosis.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Anjali Verma",
      review: "Best experience! The doctor was very professional and guided me throughout the treatment.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Rahul Sharma",
      review: "Very well-equipped clinic and great diagnosis. I highly recommend Dr. Niren for any urology concerns.",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Appointment booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          message: "",
        });
      } else {
        alert("Failed to book appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed p-10">
      {/* Light Transparent Overlay */}
      <div className="absolute inset-0 bg-blue-500 bg-opacity-40 backdrop-blur-sm"></div>

      {/* Main Container */}
      <div className="relative flex flex-col md:flex-row items-center w-full max-w-6xl">
        {/* Left - Form Section */}
        <div className="bg-white bg-opacity-90 backdrop-blur-md text-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md md:w-1/2">
          <h2 className="text-2xl font-bold text-center mb-4 tracking-wide text-blue-700">BOOK AN APPOINTMENT</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button type="submit" className="cursor-pointer w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              SUBMIT MESSAGE
            </button>
          </form>
        </div>

        {/* Right - Testimonials Section */}
        <div className="md:w-1/2 text-white md:pl-10 mt-8 md:mt-0 ml-9">
          <h3 className="text-xl font-bold mb-2 tracking-wide">WHAT OUR PATIENTS SAY</h3>
          <p className="text-sm mb-4 opacity-80">Read what our happy patients have to say about us.</p>

          <div className="relative">
            {/* Testimonial Text */}
            <p className="italic text-lg max-w-lg opacity-90 transition-opacity duration-700">
              "{testimonials[index].review}"
            </p>

            {/* User Info */}
            <div className="flex items-center mt-4">
              <img src={testimonials[index].image} alt="User" className="w-12 h-12 rounded-full border-2 border-white mr-3" />
              <p className="font-semibold text-lg">{testimonials[index].name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}