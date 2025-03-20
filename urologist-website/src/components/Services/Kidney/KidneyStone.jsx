import React from "react";
import { Link } from "react-router-dom";

const KidneyStone = () => {
  return (
    <div className="kidney-stone-page bg-white text-gray-800">
      {/* Banner Section */}
      <div className="relative bg-blue-600 text-white h-96 flex items-center justify-start px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/world-kidney-day-minimalist-kidney-line-art-design-white-background-concept-health-awareness-kidney-health-world-kidney-day-minimalist-design-line-art_864588-218126.jpg?ga=GA1.1.943868341.1721631842&semt=ais_hybrid')",
          }}
        ></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl text-blue-900 font-bold leading-tight mb-4">
            Kidney Stone Specialist in Patna
          </h1>
          <p className="text-lg text-black mb-6">
            Effective treatments for kidney stones from expert urologists.
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
        <h2 className="text-2xl font-semibold my-6">What are Kidney Stones?</h2>
        <p className="text-lg mb-6">
          Kidney stones are one of the most common health problems. The symptoms
          show up as flank pain, blood in urine, and fever. Though there is no
          definite cause of stone formation, the commonest cause is decreased
          water intake. If stones are left untreated, they can potentially
          damage the kidneys. Make an appointment with your stone specialist
          doctor for Kidney Stone Treatment in Saket, Patna, if you have any
          signs and symptoms of kidney stones. Seek immediate attention if you
          suffer and experience pain while passing urine, blood in urine,
          nausea, vomiting, experiencing pain in your abdomen and groin area,
          cloudy and foul-smelling urine, and persistent urge to urinate.
        </p>

        <h3 className="text-xl font-semibold my-6">
          How much does kidney stone surgery cost in Patna?
        </h3>
        <p>
          The Kidney stone surgery cost in Patna, on average, ranges from Rs.
          35,000 to Rs. 60,000.
        </p>

        <h3 className="text-xl font-semibold mt-8">Treatments</h3>

        {/* Treatment Details */}
        <div>
          <h4 className="text-lg font-semibold mt-6">
            PCNL (Percutaneous Nephrolithotomy)
          </h4>
          <p>
            Percutaneous nephrolithotomy is the most commonly employed minimally
            invasive kidney stone treatment in Patna. Typically it is used for
            stones more than 2 cm and can be done under spinal or general
            anesthesia. A small incision less than 1 cm is made on the
            back/flank through which a nephroscope is passed to remove the
            stone. PCNL surgery cost in Patna ranges between Rs. 35,000-40,000.
          </p>

          <h4 className="text-lg font-semibold mt-6">Mini PCNL</h4>
          <p>
            Mini and ultra-mini PCNL is a key-hole surgery to remove stones as
            small as 7-8 mm using smaller probes and lasers. The post-operative
            recovery is quick, with less blood loss and shorter hospital stays.
          </p>

          <h4 className="text-lg font-semibold mt-6">
            RIRS (Retrograde Intra-Renal Surgery)
          </h4>
          <p>
            In this technique, a flexible ureteroscope is passed through the
            urinary passage to directly break the kidney stones with a Holmium
            laser. There is minimal bleeding and early recovery. RIRS surgery at
            Dr. Kunjan’s Urology Practice starts at Rs. 60,000.
          </p>

          <h4 className="text-lg font-semibold mt-6">
            URS (Uretero-Renoscopy)
          </h4>
          <p>
            Stones stuck in the ureters are treated using a rigid ureteroscope.
            The stones are fragmented and removed using lasers, followed by a
            stent insertion.
          </p>
        </div>

        {/* Article Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold my-6">
            Kidney Stones: Causes, Symptoms, and Treatment Options
          </h3>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold">What are Kidney Stones?</h4>
            <p className="mt-4">
              Kidney stones are hard, crystalline mineral deposits that form in
              the kidneys. They can range in size from small grains to large
              stones that may require surgical intervention. They often cause
              severe pain, especially when they move or obstruct the urinary
              tract.
            </p>
            <h4 className="text-xl font-semibold mt-6">
              Causes of Kidney Stones
            </h4>
            <p className="mt-4">
              The primary cause of kidney stones is dehydration, which leads to
              an increase in the concentration of substances like calcium,
              oxalate, and uric acid in the urine. These substances can
              crystallize and form stones. Other risk factors include poor diet,
              family history, obesity, and certain medical conditions like gout
              or hyperparathyroidism.
            </p>
            <h4 className="text-xl font-semibold mt-6">
              Symptoms of Kidney Stones
            </h4>
            <p className="mt-4">Common symptoms include:</p>
            <ul className="list-disc pl-8 mt-4">
              <li>
                Severe pain in the back or side, often radiating to the abdomen
                and groin
              </li>
              <li>Blood in urine</li>
              <li>Frequent urge to urinate</li>
              <li>Cloudy or foul-smelling urine</li>
              <li>Fever and chills if an infection is present</li>
            </ul>
            <h4 className="text-xl font-semibold mt-6">
              Treatment for Kidney Stones
            </h4>
            <p className="mt-4">
              Treatment options vary based on the size and type of kidney
              stones. For smaller stones, medications and increased water intake
              can help pass them. Larger stones may require more advanced
              procedures like lithotripsy or surgery. Consult an expert for
              personalized treatment options.
            </p>
            <h4 className="text-xl font-semibold mt-6">Prevention Tips</h4>
            <p className="mt-4">
              To reduce the risk of developing kidney stones, ensure you stay
              hydrated by drinking plenty of water. It's also important to
              reduce your intake of salt and animal proteins, as they can
              contribute to stone formation. A balanced diet rich in fruits and
              vegetables is beneficial for kidney health.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <h3 className="text-2xl font-semibold my-6">
          Why Choose Dr. Kunjan for Kidney Stone Treatment in Patna?
        </h3>
        <ul className="list-disc pl-8">
          <li>Expert in the latest minimally invasive techniques</li>
          <li>State-of-the-art medical equipment and facilities</li>
          <li>Personalized care and treatment plans for each patient</li>
          <li>Comprehensive post-treatment care to ensure full recovery</li>
        </ul>

        <Link
          to="/appointment"
          className="btn-appointment bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-full shadow-lg mt-8 inline-block"
        >
          Book Appointment
        </Link>
      </div>

      {/* Blog Section */}
      {/* Blog Section */}
      <div className="blog-section mt-12 mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Latest Articles on Kidney Stone
        </h2>

        <div className="max-w-5xl mx-auto px-6">
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

export default KidneyStone;
