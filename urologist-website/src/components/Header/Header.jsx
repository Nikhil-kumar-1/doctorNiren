import { useState } from "react";

const slides = [
  {
    image: "https://www.drnirenrao.com/images/banner_image1.jpg",
    title: (
      <>
        <span className="text-blue-600 font-extrabold">EXPERT </span>
        <span className="text-black font-extrabold">UROLOGIST</span>
      </>
    ),
    description:
      "Dr. Niren Rao has been in practice since 18+ years and has performed more than 5000 surgeries.",
  },
  {
    image: "https://www.drnirenrao.com/images/banner_image3.jpg",
    title: (
      <>
        <span className="text-blue-600 font-extrabold">ROBOTIC </span>
        <span className="text-black font-extrabold">TREATMENT</span>
      </>
    ),
    description:
      "Advanced robotic-assisted surgeries for precision and faster recovery.",
  },
  {
    image: "https://www.drnirenrao.com/images/banner_image2.jpg",
    title: (
      <>
        <span className="text-blue-600 font-extrabold">UROLOGY </span>
        <span className="text-black font-extrabold">TREATMENT</span>
      </>
    ),
    description:
      "Comprehensive urology treatments for kidney, bladder, and prostate health.",
  },
];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Image Slider */}
      <div className="w-full h-full relative">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
        <div className="bg-white p-6 md:p-8 rounded-md max-w-lg shadow-lg">
          <h2 className="text-2xl md:text-4xl font-bold">{slides[currentIndex].title}</h2>
          <p className="mt-2 text-gray-700 text-sm md:text-base">
            {slides[currentIndex].description}
          </p>
          <a
            href="/appointment"
            className="mt-4 inline-block bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-900 transition"
          >
            BOOK AN APPOINTMENT
          </a>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-blue-700 text-white p-3 rounded-full hover:bg-blue-900 transition cursor-pointer"
        onClick={prevSlide}
      >
        ←
      </button>
      <button
        className="cursor-pointer absolute top-1/2 right-1 transform -translate-y-1/2 bg-blue-700 text-white p-3 rounded-full hover:bg-blue-900 transition"
        onClick={nextSlide}
      >
        →
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
