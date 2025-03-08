import React from 'react';
import { Link } from 'react-router-dom';

const Infertility = () => {
  return (
    <div className="infertility-page bg-white text-gray-800">
    {/* Banner Section */}
    <div 
      className="relative bg-cover bg-center h-[300px] md:h-[400px] flex items-center px-6"
      style={{
        backgroundImage: "url('https://img.freepik.com/premium-photo/world-kidney-day-minimalist-kidney-line-art-design-white-background-concept-health-awareness-kidney-health-world-kidney-day-minimalist-design-line-art_864588-218126.jpg?ga=GA1.1.943868341.1721631842&semt=ais_hybrid')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="text-left">
        <h1 className="text-4xl  text-white font-bold leading-tight mb-4">
          Male Infertility Treatment in Delhi
        </h1>
        <p className="text-lg text-white mb-6">
          Expert care and advanced treatment options for male infertility.
        </p>
        <Link
          to="/appointment"
          className="bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-full shadow-lg"
        >
          Book Appointment
        </Link>
      </div>
    </div>
 
  

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p>
          Male factor contributes around 50% to infertility cases, though unfortunately, in the Indian scenario, it is uncommon for males to accept it. A proper evaluation of the male partner is necessary for all couples facing infertility problems. Male Infertility Treatment in Delhi begins with a simple physical examination followed by semen analysis and hormonal analysis. Depending upon the examination and reports, a diagnosis can be made of obstructive or non-obstructive azoospermia.
        </p>

        <h2 className="text-2xl font-semibold my-6">Treatment Options in Delhi</h2>
        <p>
          Depending on the diagnosis, the following treatment options are available for male infertility:
        </p>

        <h3 className="text-xl font-semibold mt-8">1. Obstructive Azoospermia</h3>
        <ul className="list-disc pl-8">
          <li>
            <strong>VEA (Vaso-Epididymal Anastomosis):</strong> A surgical procedure to bypass blockages in the male reproductive tract, allowing sperm to be present in the ejaculate.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">2. Non-Obstructive Azoospermia</h3>
        <ul className="list-disc pl-8">
          <li>
            <strong>PESA (Percutaneous Epididymal Sperm Aspiration):</strong> A minimally invasive procedure to retrieve sperm directly from the epididymis.
          </li>
          <li>
            <strong>TESA (Testicular Sperm Aspiration):</strong> A procedure to extract sperm directly from the testicular tissue.
          </li>
          <li>
            <strong>Micro-TESE (Microscopic Testicular Sperm Extraction):</strong> An advanced surgical technique to identify and extract viable sperm from the testicles under a microscope.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold my-6">Why Choose Us for Male Infertility Treatment?</h2>
        <ul className="list-disc pl-8">
          <li>Experienced specialists in male infertility treatment.</li>
          <li>State-of-the-art diagnostic and treatment facilities.</li>
          <li>Personalized treatment plans tailored to individual needs.</li>
          <li>Comprehensive post-treatment care and support.</li>
        </ul>

        <p>
          If you or your partner are facing challenges with infertility, consult our experts for a detailed evaluation and the most effective treatment options.
        </p>

        <Link
          to="/appointment"
          className="bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-full shadow-lg mt-8 inline-block"
        >
          Book Appointment
        </Link>

       
      
      </div>
    </div>
  );
};

export default Infertility;