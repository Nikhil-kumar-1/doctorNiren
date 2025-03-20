import React from "react";
import { Link } from "react-router-dom";

const ProstateTreatment = () => {
  return (
    <div className="prostate-treatment-page bg-white text-gray-800">
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
            Prostate Laser Treatment in Patna
          </h1>
          <p className="text-lg text-black mb-6">
            Advanced and minimally invasive prostate treatment options by
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
        <h2 className="text-2xl font-semibold my-6">Treatments</h2>

        <h3 className="text-xl font-semibold mt-8">
          TURP (Trans Urethral Resection of Prostate)
        </h3>
        <p>
          Patients who have difficulty in passing urine or have retention of
          urine due to an enlarged prostate are treated by transurethral
          resection of the prostate. This advanced prostate surgery in Patna,
          done at Dr. Kunjan Kumar’s Urology Practice, can be done under spinal
          or general anesthesia. There is no cut involved on the skin. Using a
          cystoscope, the prostate is directly visualized, and then, using a
          resectoscope and electric current, prostate tissue is scooped out. At
          the end of the surgery, a urinary catheter is placed for 2 to 4 days.
          Post-removal of the catheter, patients will find that their urine flow
          has improved remarkably, and the feeling of some urine remaining in
          the bladder after voiding has gone. Usually, the patient stays in the
          hospital for 1 to 2 days. This surgery is the gold standard for the
          treatment of benign prostatic hyperplasia.
        </p>
        <p className="font-bold my-4">
          The TURP Prostate treatment cost at Dr. Kunjan Kumar’s Urology
          Practice begins at Rs. 40,000*.
        </p>

        <h3 className="text-xl font-semibold mt-8">
          PVP (Green Laser Photo Vapourization of Prostate)
        </h3>
        <p>
          This is the latest technological refinement in prostate surgery in
          Saket, Patna. Patients with BPH are treated using a green laser
          through a cystoscope. The prostate tissue is evaporated using the
          green laser. This technique is especially useful for patients with
          heart disease who are on blood thinners such as aspirin or have a
          pacemaker. Prostate surgery can be done in these patients without
          stopping blood thinners or changing pacemaker settings. There is no to
          minimal bleeding in this surgery. In fact, it can even be done on a
          day-care basis, meaning that the patient need not be admitted to the
          hospital overnight.
        </p>
        <p className="font-bold my-4">
          The cost for Green Laser Photo Vapourization of Prostate treatment
          starts at Rs. 1,75,000.
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

export default ProstateTreatment;
