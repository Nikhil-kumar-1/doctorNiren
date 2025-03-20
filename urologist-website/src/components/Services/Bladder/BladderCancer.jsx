import React from "react";
import { Link } from "react-router-dom";

const BladderCancer = () => {
  return (
    <div className="bladder-cancer-page bg-white text-gray-800">
      {/* Banner Section */}
      <div className="relative bg-blue-600 text-white h-96 flex items-center justify-start px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/kidneys-bladder-organ-diagnostic-health-care-concept_361816-8030.jpg?ga=GA1.1.943868341.1721631842')",
          }}
        ></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl text-blue-900 font-bold leading-tight mb-4">
            Bladder Cancer Treatment in Patna
          </h1>
          <p className="text-lg text-black mb-6">
            Comprehensive and advanced treatment options for bladder cancer by
            leading specialists in Patna.
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
          The presence of blood in urine is the most common way in which bladder
          cancer presents. Some patients may also present with pain or burning
          during urination without any evidence of infection. Ultrasound or a CT
          scan along with urine cytology will confirm the presence of cancer.
          Unusually, small cancers can only be diagnosed by doing a cystoscopic
          evaluation of the bladder. Dr. Kunjan Kumar’s Urology Clinic offers
          the following bladder cancer treatment in Patna:
        </p>

        <p className="font-bold my-4">
          Bladder Cancer Surgery Cost in Patna at Dr. Kunjan Kumar’s Urology
          Practice starts at Rs. 40,000*.
        </p>

        <h2 className="text-2xl font-semibold my-6">
          How much does TURBT surgery cost in Patna?
        </h2>
        <p>
          Patients are treated at Dr. Kunjan Kumar's Urology Practice at the
          most affordable bladder cancer surgery cost in Patna. The price of
          TURBT surgery begins at Rs. 40,000*.
        </p>

        <h2 className="text-2xl font-semibold my-6">Treatments</h2>
        <h3 className="text-xl font-semibold mt-8">
          TURBT (Trans Urethral Resection of Bladder Tumor)
        </h3>
        <p>
          The initial treatment of bladder cancer is trans-urethral resection of
          the bladder tumor. Under general or spinal anesthesia, a thin tube
          called a cystoscope is passed through the urine passage into the
          bladder. The tumor is directly visualized and cut out and sent for
          biopsy. For small tumors that are not muscle-invasive, this is all
          that needs to be done. The patient, however, has to remain on strict
          follow-up, which involves ultrasound, urine cytology, and cystoscopy
          every three months.
        </p>

        <h3 className="text-xl font-semibold mt-8">Radical Cystectomy</h3>
        <p>
          For muscle-invasive bladder tumors or extensive bladder tumors, the
          whole bladder is removed, and a urinary diversion is created in the
          form of an ileal conduit or a neo-bladder using the patient’s own
          intestines. This is a major bladder cancer surgery in Saket, Patna,
          requiring 7 to 10 days of hospitalization.
        </p>

        <h3 className="text-xl font-semibold mt-8">
          Radiation and Chemotherapy
        </h3>
        <p>
          In advanced and metastatic diseases, radiotherapy and chemotherapy are
          used in conjunction with surgery to achieve maximum control of the
          disease.
        </p>

        <Link
          to="/appointment"
          className="btn-appointment bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-full shadow-lg mt-8 inline-block"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default BladderCancer;
