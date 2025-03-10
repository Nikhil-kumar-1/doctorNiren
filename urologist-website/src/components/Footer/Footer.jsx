import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Footer() {
  // List of services (matching the routes in App.jsx)
  const services = [
    { name: "Kidney Stone Treatment", path: "/services/kidneyStone" },
    { name: "Kidney Cancer Treatment", path: "/services/kidney-cancer" },
    { name: "Kidney Transplant", path: "/services/kidney-transplant" },
    { name: "Bladder Stone Treatment", path: "/services/bladder-tumor" },
    { name: "Bladder Cancer Treatment", path: "/services/bladder-cancer" },
    { name: "Prostate Cancer Treatment", path: "/services/prostate-cancer" },
    { name: "Prostate Treatment", path: "/services/prostate-treatment" },
    { name: "Infertility", path: "/services/infertility" },
    {name: "Erectile Dysfunction",path: "/services/erectileDysfunction", // Direct path without subItems
    },
    { name: "Circumcision", path: "/services/circumcision" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-10 px-5 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section - Clinic Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-3 bg-white p-4 rounded-xl">
            <img
              src="https://www.drnirenrao.com/images/logo.png"
              alt="Dr. Niren Rao Logo"
            />
          </h2>
          <p className="text-sm text-gray-300">
            Multidisciplinary care for male & female including kidney stones,
            bladder treatment, incontinence, prostate surgery, uro-oncology and
            Urinary Tract Infections by using advanced technologies.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/delhiurologyhospital"
              className="text-gray-300 hover:text-blue-400"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCZmomvac0iaDqytiIhXxRtg"
              className="text-gray-300 hover:text-red-500"
            >
              <FaYoutube size={22} />
            </a>
            <a
              href="https://www.instagram.com/delhiurologyhospital/"
              className="text-gray-300 hover:text-pink-500"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>

        {/* Middle Section - Clinic Address */}
        <div>
          <h3 className="text-lg font-bold mb-3">
            DR. NIREN RAO UROLOGY CLINIC
          </h3>
          <p className="flex items-start text-sm">
            <FaMapMarkerAlt className="mr-2 mt-1 text-blue-400" />E 33,
            Paryavaran Complex, IGNOU Road, Z Morh, Near Labour Chowk, Near
            Saket Metro Station, New Delhi - 110068
          </p>
          <p className="flex items-center mt-2 text-sm">
            <FaPhoneAlt className="mr-2 text-green-400" />
            +91 9811144680, +91 8595432923
          </p>
          <p className="flex items-center mt-2 text-sm">
            <FaEnvelope className="mr-2 text-red-400" />
            drnirenrao@gmail.com
          </p>
          <p className="flex items-center mt-2 text-sm">
            <FaClock className="mr-2 text-yellow-400" />
            Clinic Timing: 10:00 AM TO 7:30 PM
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">SERVICES</h3>
          <ul className="text-sm space-y-1">
            {services.map((service, index) => (
              <li key={index}>
                <Link to={service.path} className="hover:text-blue-400">
                  ✔ {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Reviews Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">TOP REVIEWS</h3>
          <button className=" cursor-pointer   border border-blue-400 text-blue-400 py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition">
            VIEW ALL →
          </button>
        </div>
      </div>
      <div>
        {/* Admin Panel Link with Icon */}
        <Link
          to="/admin"
          className="flex items-center gap-2 px-4 py-2 rounded-lg"
        >
        <span>Admin</span>
        </Link>
      </div>

      {/* Bottom Navigation Links */}
      <div className="border-t border-gray-700  mt-8  pt-4 text-sm text-gray-300 text-center flex flex-wrap justify-center space-x-2">
        <Link to="/" className="hover:text-blue-400">
          Home, 
        </Link>
        <Link to="/aboutDoctor" className="hover:text-blue-400">
          About Doctor,
        </Link>
        <Link to="/infertility" className="hover:text-blue-400">
          Infertility,
        </Link>
        <Link to="/circumcision" className="hover:text-blue-400">
         Circumcision,
        </Link>
        <Link to="/services/erectileDisfunction" className="hover:text-blue-400">
          ErectileDysfunction,
        </Link>
        <Link to="/aboutClinic" className="hover:text-blue-400">
          About Clinic,
        </Link>
        <Link to="/services" className="hover:text-blue-400">
          Services,
        </Link>
        <Link to="/gallery" className="hover:text-blue-400">
          Gallery,
        </Link>
        <Link to="/blogs" className="hover:text-blue-400">
          Blog,
        </Link>
        <Link to="/contact" className="hover:text-blue-400">
          Contact,
        </Link>
        <Link to="/privacy-policy" className="hover:text-blue-400">
          Privacy Policy,
        </Link>
        <Link to="/terms-conditions" className="hover:text-blue-400">
          Terms & Conditions,
        </Link>
        <Link to="/legal-disclaimer" className="hover:text-blue-400">
          Legal Disclaimer
        </Link>
      </div>

      {/* Location Links */}
      <div className="text-sm text-gray-300 text-center mt-4 space-x-2 bg-black p-2 ">
        <span>Saket |</span>
        <span>Malviya Nagar |</span>
        <span>Green Park |</span>
        <span>Greater Kailash |</span>
        <span>Govind Puri |</span>
        <span>South Delhi |</span>
        <span>West Delhi |</span>
        <span>Gurgaon |</span>
        <span>Noida |</span>
        <span>Faridabad |</span>
        <span>East Delhi |</span>
        <span>Hauz Khas</span>
      </div>

      {/* Disclaimer Section */}
      <div className="text-xs text-gray-400 text-center mt-4 px-5 md:px-20">
        *Disclaimer: The content on this website (www.drnirenrao.com) is purely
        for the purpose of educating and creating awareness about various health
        concerns. However, any information published here shall not be
        considered as a prescription from a professional urologist. The results
        displayed or mentioned with any treatment/service would vary from person
        to person and no two individuals shall expect the same results.
      </div>

      <div className="text-xs text-gray-400 text-center mt-4 px-5 md:px-20">
      Copyright © 2025-, Dr. Niren Rao's Urology Practice. All rights reserved | Powered by Adonomics
        </div>
    </footer>
  );
}
