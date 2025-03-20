import React from "react";
import { Link } from "react-router-dom";

const KidneyCancer = () => {
  return (
    <div className="kidney-cancer-page bg-white text-gray-800">
      {/* Banner Section */}
      <div className="relative bg-blue-600 text-white h-96 flex items-center justify-start px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/human-kidneys-decorative-model-pastel-blue-background-chronic-kidney-disease-kidn-generative-ai_874904-50249.jpg?ga=GA1.1.943868341.1721631842&semt=ais_hybrid')",
          }}
        ></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl text-blue-900 font-bold leading-tight mb-4">
            Kidney Cancer Treatment in Patna
          </h1>
          <p className="text-lg text-black mb-6">
            Comprehensive treatment options from top specialists in Patna.
          </p>
          <Link
            to="/appointment"
            className="btn-appointment bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-full shadow-lg"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p>
          Kidney cancer, also known as renal cell carcinoma, is a
          life-threatening condition that affects the kidneys, organs crucial
          for filtering waste from the body. Early detection and appropriate
          treatment are key to managing the disease effectively, and patients
          seeking Kidney Cancer Treatment in Patna have access to some of the
          most advanced treatment options in the country.
        </p>

        <p className="font-bold my-4">
          “Kidney Cancer Treatment Cost in Patna Starting at Rs. 75,000*.”
        </p>

        <h2 className="text-2xl font-semibold my-6">What is Kidney Cancer?</h2>
        <p>
          Kidney cancer typically begins in the lining of tiny tubes inside the
          kidneys. The most common type is renal cell carcinoma (RCC),
          accounting for over 90% of cases. Other types include transitional
          cell carcinoma, Wilms' tumor (often found in children), and renal
          sarcoma.
        </p>

        <h3 className="text-xl font-semibold mt-8">Risk Factors</h3>
        <ul className="list-disc pl-8">
          <li>Smoking</li>
          <li>Obesity</li>
          <li>High blood pressure</li>
          <li>Family history of kidney cancer</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">Common Symptoms</h3>
        <ul className="list-disc pl-8">
          <li>Blood in the urine (hematuria)</li>
          <li>Persistent pain in the lower back or side</li>
          <li>Unexplained weight loss</li>
          <li>Fatigue and fever</li>
          <li>Anemia or low red blood cell count</li>
        </ul>

        <p>
          If any of these symptoms arise, it’s important to seek an evaluation
          from kidney cancer doctors in Patna, like Dr. Kunjan Kumar, who can
          diagnose the condition and recommend the most appropriate treatment
          plan.
        </p>

        <h2 className="text-2xl font-semibold my-6">
          What is the cost of kidney cancer surgery in Patna?
        </h2>
        <p>
          The cost of kidney cancer surgery at Dr. Kunjan Kumar’s Urology
          Practice starts at Rs. 75,000*.
        </p>

        <h2 className="text-2xl font-semibold my-6">
          Kidney Cancer Treatment Options in Patna
        </h2>
        <p>
          Dr. Kunjan Kumar offers a wide range of treatment options for kidney
          cancer. The choice of treatment depends on several factors, including
          the size and stage of the tumor, the patient’s overall health, and the
          specific type of kidney cancer.
        </p>

        <h3 className="text-xl font-semibold mt-8">
          1. Surgery for Kidney Cancer
        </h3>
        <p>
          Surgery is the most common and effective treatment for kidney cancer,
          particularly when the cancer is detected at an early stage. Dr. Kunjan
          Kumar specializes in both traditional and minimally invasive surgical
          techniques, ensuring that patients receive the most appropriate and
          advanced care.
        </p>

        <h4 className="font-semibold mt-6">Types of Surgery</h4>
        <ul className="list-disc pl-8">
          <li>
            <strong>Partial Nephrectomy:</strong> Removal of only the cancerous
            portion of the kidney, preserving healthy tissue.
          </li>
          <li>
            <strong>Radical Nephrectomy:</strong> Removal of the entire kidney,
            nearby lymph nodes, and surrounding tissue for large or spreading
            tumors.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">2. Targeted Therapy</h3>
        <p>
          Targeted therapy is a treatment that uses drugs to specifically attack
          cancer cells. Dr. Kunjan Kumar collaborates with oncologists to
          provide patients with the latest targeted therapies like Tyrosine
          kinase inhibitors and mTOR inhibitors.
        </p>

        <h3 className="text-xl font-semibold mt-8">3. Immunotherapy</h3>
        <p>
          Immunotherapy boosts the body’s natural immune system to fight cancer.
          It is particularly effective for advanced kidney cancer cases and
          those who cannot undergo surgery.
        </p>

        <h3 className="text-xl font-semibold mt-8">4. Radiation Therapy</h3>
        <p>
          Radiation therapy is used when surgery is not an option, especially
          for tumors that have spread. Advanced techniques like SBRT are
          available to precisely target cancer cells.
        </p>

        <h3 className="text-xl font-semibold mt-8">5. Active Surveillance</h3>
        <p>
          In some cases, especially for small, slow-growing tumors, Dr. Rao
          recommends active surveillance, where the tumor is monitored with
          imaging and physical exams.
        </p>

        <h2 className="text-2xl font-semibold my-6">
          Kidney Cancer Treatment Cost in Patna
        </h2>
        <p>
          The cost of kidney cancer treatment can range from INR 2,50,000 to INR
          6,00,000, depending on factors like the type of surgery, use of
          advanced technologies, and length of hospital stay. Dr. Kunjan Kumar
          provides transparent pricing for all treatment options.
        </p>

        <h2 className="text-2xl font-semibold my-6">
          Why Choose Dr. Kunjan Kumar for Kidney Cancer Treatment in Patna?
        </h2>
        <ul className="list-disc pl-8">
          <li>Expertise in both open and minimally invasive surgeries</li>
          <li>
            Access to the latest treatments like targeted therapies and
            immunotherapy
          </li>
          <li>State-of-the-art medical facilities and equipment</li>
          <li>Comprehensive post-operative care and monitoring</li>
        </ul>

        <p>
          If you or a loved one is facing kidney cancer, consult with Dr. Kunjan
          Kumar for expert care and treatment options tailored to your needs.
        </p>

        <Link
          to="/appointment"
          className="btn-appointment bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-full shadow-lg mt-8 inline-block"
        >
          Book Appointment
        </Link>

        <h2 className="text-2xl font-semibold my-6">Treatments</h2>
        <ul className="list-disc pl-8">
          <li>
            <strong>Radical Nephrectomy:</strong> Removal of the entire kidney
            using open or laparoscopic methods.
          </li>
          <li>
            <strong>Partial Nephrectomy:</strong> Removal of the tumor while
            preserving kidney function.
          </li>
        </ul>

        {/* Blog Section */}
        <div className="blog-section mt-12">
          <h2 className="text-2xl font-semibold mb-6">
            Latest Articles on Kidney Cancer
          </h2>

          <div className="blog-posts grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="blog-post bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                How to Manage Kidney Cancer Symptoms
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about effective ways to manage the symptoms of kidney
                cancer and improve quality of life for patients.
              </p>
              <Link
                to="/blog/kidney-cancer-symptoms"
                className="text-yellow-500 hover:underline"
              >
                Read More
              </Link>
            </div>

            <div className="blog-post bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Latest Advances in Kidney Cancer Treatment
              </h3>
              <p className="text-gray-600 mb-4">
                Stay updated with the latest research and innovations in kidney
                cancer treatment options available today.
              </p>
              <Link
                to="/blog/latest-kidney-cancer-advances"
                className="text-yellow-500 hover:underline"
              >
                Read More
              </Link>
            </div>

            <div className="blog-post bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                How to Choose the Right Treatment for Kidney Cancer
              </h3>
              <p className="text-gray-600 mb-4">
                Explore the factors that affect the choice of treatment for
                kidney cancer and how to make an informed decision.
              </p>
              <Link
                to="/blog/choosing-right-treatment"
                className="text-yellow-500 hover:underline"
              >
                Read More
              </Link>
            </div>

            <div className="blog-post bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Understanding the Cost of Kidney Cancer Treatment
              </h3>
              <p className="text-gray-600 mb-4">
                A comprehensive guide to understanding the cost of kidney cancer
                treatment and how to plan for it.
              </p>
              <Link
                to="/blog/cost-of-kidney-cancer-treatment"
                className="text-yellow-500 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidneyCancer;
