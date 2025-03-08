import { useNavigate } from "react-router-dom";
export default function Specializations() {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F8FAFC] text-gray-800 py-16 px-6 md:px-20 w-full">
      <h2 className="text-center text-blue-600 text-3xl font-bold mb-12 relative">
        SPECIALIZATIONS
        <span className="absolute left-1/2 -translate-x-1/2 top-8 opacity-20">
          <img
            src="https://cdn-icons-png.flaticon.com/128/17068/17068229.png"
            alt="decor"
            className="w-16"
          />
        </span>
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Infertility Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/17068/17068229.png"
            alt="Infertility"
            className="w-48 md:w-60 opacity-80"
          />
        </div>

        {/* Right Side: Specializations */}
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start">
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 mb-6">
            {/* Specialization Cards */}
            {[
              {
                img: "https://cdn-icons-png.flaticon.com/128/17068/17068229.png",
                title: "Infertility",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/128/7350/7350857.png",
                title: "Kidney Stone",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/128/7005/7005944.png",
                title: "Bladder Tumor",
              },
            ].map((spec, index) => (
              <div
                key={index}
                className="border-2 border-blue-400 p-6 rounded-lg text-center w-56 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={spec.img}
                  alt={spec.title}
                  className="mx-auto mb-4 w-16 h-16 opacity-70"
                />
                <h3 className="font-semibold text-gray-700">{spec.title}</h3>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-lg leading-relaxed text-center md:text-left">
            Male factor contributes around 50% to the infertility cases, though
            unfortunately in Indian scenario it is uncommon for males to accept
            it. A proper evaluation of the male partner is necessary in all
            couples facing infertility. It begins with a simple physical
            examination followed by semen and hormonal analysis...
            <button
              onClick={() => navigate("/services")}
              className="text-blue-600 font-semibold cursor-pointer"
            >
              READ MORE
            </button>
          </p>

          {/* See All Services Button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <button
              onClick={() => navigate("/services")}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-700 transition-all cursor-pointer"
            >
              See All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
