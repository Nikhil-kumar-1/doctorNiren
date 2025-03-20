import { useState } from "react";
import { Link } from "react-router-dom";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md ">
      {/* 🔹 Top Bar */}
      <div className="bg-blue-700 text-white text-sm py-2 px-4 flex flex-col lg:flex-row lg:justify-between items-center text-center">
        <Link to="/appointment" className="text-xs md:text-sm">
          Schedule a Consultation
        </Link>
        <div className="flex text-[10px] flex-row justify-center space-x-4 mt-1 lg:mt-0">
          <a href="tel:+919811144680" className="hover:underline">
            📞 +91 9811144680
          </a>
          <a href="tel:+918595432923" className="hover:underline">
            📞 +91 8595432923
          </a>
          <a href="mailto:drnirenrao@gmail.com" className="hover:underline">
            ✉️ drkunjankumar@gmail.com
          </a>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">
        <img src="logo2.png" alt="Logo" className="w-70 h-15" />

        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">
              HOME
            </Link>
          </li>
          <Dropdown
            title="ABOUT US"
            items={[
              { name: "About Doctor", path: "/aboutDoctor" },
              { name: "About Clinic", path: "/aboutClinic" },
            ]}
          />
          <Dropdown
            title="SERVICES"
            items={[
              {
                name: "Kidney",
                subItems: [
                  { name: "Kidney Stone", path: "/services/kidneyStone" },
                  { name: "Kidney Cancer", path: "/services/kidney-cancer" },
                  {
                    name: "Kidney Transplant",
                    path: "/services/kidney-transplant",
                  },
                ],
              },
              {
                name: "Prostate",
                subItems: [
                  {
                    name: "Prostate Treatment",
                    path: "/services/prostate-treatment",
                  },
                  {
                    name: "Prostate Cancer",
                    path: "/services/prostate-cancer",
                  },
                ],
              },
              {
                name: "Bladder",
                subItems: [
                  { name: "Bladder Tumor", path: "/services/bladder-tumor" },
                  { name: "Bladder Cancer", path: "/services/bladder-cancer" },
                ],
              },
              {
                name: "Infertility",
                path: "/services/infertility", // Direct path without subItems
              },
              {
                name: "Erectile Dysfunction",
                path: "/services/erectileDysfunction", // Direct path without subItems
              },
              {
                name: "Circumcision Surgery",
                path: "/services/circumcision", // Direct path without subItems
              },
            ]}
          />
          <li>
            <Link to="/videos" className="hover:text-blue-600">
              VIDEOS
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-blue-600">
              GALLERY
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-blue-600">
              BLOGS
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">
              CONTACT US
            </Link>
          </li>
        </ul>

        {/* Appointment Button */}
        <Link
          to="/appointment"
          className="hidden lg:block bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700"
        >
          BOOK AN APPOINTMENT
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md flex flex-col items-center py-4 space-y-3 w-full">
          <Link
            to="/"
            className="text-gray-700 font-medium text-center w-full py-2"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <MobileDropdown
            title="ABOUT US"
            items={[
              { name: "About Doctor", path: "/aboutDoctor" },
              { name: "About Clinic", path: "/aboutClinic" },
            ]}
          />
          <MobileDropdown
            title="SERVICES"
            items={[
              {
                name: "Kidney",
                subItems: [
                  { name: "Kidney Stone", path: "/services/kidneyStone" },
                  { name: "Kidney Cancer", path: "/services/kidney-cancer" },
                  {
                    name: "Kidney Transplant",
                    path: "/services/kidney-transplant",
                  },
                ],
              },
              {
                name: "Prostate",
                subItems: [
                  {
                    name: "Prostate Treatment",
                    path: "/services/prostate-treatment",
                  },
                  {
                    name: "Prostate Cancer",
                    path: "/services/prostate-cancer",
                  },
                ],
              },
              {
                name: "Bladder",
                subItems: [
                  { name: "Bladder Tumor", path: "/services/bladder-tumor" },
                  { name: "Bladder Cancer", path: "/services/bladder-cancer" },
                ],
              },
              {
                name: "Infertility",
                path: "/services/infertility", // Direct path without subItems
              },
              {
                name: "Erectile Disfunction",
                path: "/services/erectileDysfunction", // Direct path without subItems
              },
              {
                name: "Circumcision Surgery",
                path: "/services/circumcision", // Direct path without subItems
              },
            ]}
          />
          <Link
            to="/videos"
            className="text-gray-700 font-medium text-center w-full py-2"
            onClick={() => setIsOpen(false)}
          >
            VIDEOS
          </Link>
          <Link
            to="/gallery"
            className="text-gray-700 font-medium text-center w-full py-2"
            onClick={() => setIsOpen(false)}
          >
            GALLERY
          </Link>
          <Link
            to="/blogs"
            className="text-gray-700 font-medium text-center w-full py-2"
            onClick={() => setIsOpen(false)}
          >
            BLOGS
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 font-medium text-center w-full py-2"
            onClick={() => setIsOpen(false)}
          >
            CONTACT US
          </Link>
          <Link
            to="/appointment"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700"
          >
            BOOK AN APPOINTMENT
          </Link>
        </div>
      )}
    </nav>
  );
}

// 🔹 Desktop Dropdown
function Dropdown({ title, items }) {
  return (
    <div className="relative group">
      {/* Button to open dropdown */}
      <button className="hover:text-blue-600 cursor-pointer">{title}</button>

      {/* Dropdown Menu */}
      <div className="absolute p-1 left-0 mt-2 w-48 bg-white shadow-md rounded-md transition-all duration-200 z-1000 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
        {items.map((item, index) => (
          <div key={index} className="relative group">
            {item.subItems ? (
              <NestedDropdown title={item.name} items={item.subItems} />
            ) : (
              <Link
                to={item.path}
                className="block  py-2  text-gray-700 hover:bg-blue-100"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// 🔹 Nested Desktop Dropdown
function NestedDropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="w-full text-left  py-2 text-gray-700 hover:bg-blue-100 flex justify-between items-center">
        {title} <span>▶</span>
      </button>
      <div
        className={`absolute left-full top-0 ml-[1px] w-48 bg-white shadow-md rounded-md transition-opacity duration-200 z-10 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

// 🔹 Mobile Dropdown
function MobileDropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full text-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 w-full py-2 flex justify-center items-center gap-2 hover:bg-gray-200"
      >
        {title} <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="bg-gray-100 w-full">
          {items.map((item, index) => (
            <div key={index}>
              {item.subItems ? (
                <MobileNestedDropdown title={item.name} items={item.subItems} />
              ) : (
                <Link
                  to={item.path}
                  className="block py-2 text-gray-700 hover:bg-blue-100 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// 🔹 Nested Mobile Dropdown
function MobileNestedDropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full text-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 w-full py-2 flex justify-center items-center gap-2 hover:bg-gray-200"
      >
        {title} <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="bg-gray-200 w-full">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block py-2 text-gray-700 hover:bg-blue-100 text-center"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
