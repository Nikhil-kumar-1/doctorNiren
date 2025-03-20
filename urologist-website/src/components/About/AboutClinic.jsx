import { Link } from "react-router-dom";
export default function AboutClinic() {
  return (
    <div className="bg-gray-100">
      {/* Blue Banner Section */}
      <div className="bg-blue-700 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to Kunjan Kumar’s Urology Practice
        </h1>
        <p className="mt-4 text-lg">
          Providing world-class urological care with advanced technology and
          compassionate expertise.
        </p>
      </div>

      {/* Clinic Details Section */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10 mb-10">
        {/* Clinic Introduction */}
        <h2 className="text-3xl font-bold text-blue-700 text-center">
          About Our Clinic
        </h2>
        <p className="mt-4 text-gray-700 text-lg text-left">
          Dr. Kunjan’s Kumar Urology Practice is based on the motive to provide
          world-class treatments for all the urological problems including
          diseases that affects the genitourinary tract. Well-equipped clinic
          with modern technologies offers conventional treatments and robotic
          techniques to treat prostate cancer and stones. Dr. Kunjan Kumar is a
          renowned Urologist located in Patna with an experience of 18+ years
          and offering avant-garde services for all the urology problems with
          his team of skilled and well-trained surgeons. The mission is to blend
          the research, surgical expertise and medical technology to ensure
          patient’s well-being and effective healing. We are focused to provide
          our patients with the best possible treatment, facilities, services
          and quality health care. Our services include the treatment of urology
          problems like Kidney Transplant, Laparoscopic and Robotic surgery,
          Endourology, Uro-oncology and Infertile & Erectile Disorders. We
          ensure that our patients live longer and healthier life. We take care
          of other significant factors related to our services i.e. maintaining
          high standards of hygiene, extensive patient care, privacy and
          confidentiality of personal information.
        </p>

        {/* Clinic Details */}
        <div className="mt-8 grid md:grid-cols-2 gap-10">
          {/* Image Section */}
          <div>
            <img
              src="https://www.drnirenrao.com/images/clinic/dnr-clinic-img-1.jpg"
              alt="Clinic"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600">
              Why Choose Us?
            </h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start">
                ✅{" "}
                <span className="ml-2">
                  Advanced urology treatments with cutting-edge technology
                </span>
              </li>
              <li className="flex items-start">
                ✅{" "}
                <span className="ml-2">
                  Highly experienced and skilled medical team
                </span>
              </li>
              <li className="flex items-start">
                ✅{" "}
                <span className="ml-2">
                  Compassionate and patient-centered care
                </span>
              </li>
              <li className="flex items-start">
                ✅{" "}
                <span className="ml-2">
                  Modern, well-equipped facility ensuring maximum comfort
                </span>
              </li>
              <li className="flex items-start">
                ✅{" "}
                <span className="ml-2">
                  Dedicated focus on minimally invasive and robotic surgeries
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <Link
            to="/appointment"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
