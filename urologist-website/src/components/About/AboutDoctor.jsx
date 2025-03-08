import { Link } from 'react-router-dom';
export default function AboutDoctor() {
  return (
    <div className="bg-gray-100">
      {/* Blue Banner Section */}
      <div className="bg-blue-700 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">About Dr. Niren Rao</h1>
        <p className="mt-4 text-lg">
          Renowned Urologist & Kidney Specialist with 18+ Years of Experience
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-5 py-10">
        {/* 🔹 Hero Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-x-10">
          <img
            src="https://www.drnirenrao.com/images/Dr_niren_rao.jpg"
            alt="Dr. Niren Rao"
            className="w-60 h-60 md:w-80 md:h-80 rounded-lg shadow-lg object-cover"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700">Dr. Niren Rao</h1>
            <p className="text-lg text-gray-600 mt-2">Leading Urologist & Kidney Specialist</p>
            <p className="mt-4 text-gray-700">
              With over <span className="font-semibold text-blue-600">18+ years of experience</span>, 
              Dr. Niren Rao is a highly skilled urologist specializing in kidney treatments, prostate disorders, 
              bladder issues, and infertility treatments. He has successfully performed 
              <span className="font-semibold text-blue-600"> 5000+ surgeries</span>, helping patients regain their health.
              After graduation, he did his specialization in General Surgery at Safdarjung Hospital and associated Vardhman Mahavir Medical College. He was fortunate to have an extensive hands-on surgical training at Safdarjung Hospital performing nearly 3,500 surgeries during 3 years of his training. After completing his Masters in Surgery he joined M.Ch in Urology at the coveted All India Institute of Medical Sciences. Here he was trained in endourological procedures, laparoscopic complex cases and robotic surgeries by a distinguished world-class faculty. Dr. Niren Rao’s Clinic provides the best urology treatments in Delhi with a blend of research and surgical expertise.
            </p>
          </div>
        </div>

        {/* 🔹 Biography & Experience */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">About Dr. Niren Rao</h2>
          <p className="mt-4 text-gray-700">
            Dr. Niren Rao completed his medical studies at one of the top universities, earning his specialization 
            in Urology. He is well-known for his expertise in minimally invasive urological surgeries and has 
            contributed significantly to research in this field.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li><strong>Degrees:</strong> MBBS, MS (General Surgery), M.Ch (Urology)</li>
            <li><strong>Experience:</strong> 18+ Years in Urology & Kidney Care</li>
            <li><strong>Specialization:</strong> Kidney Stone Treatment, Prostate Surgery, Urological Cancers</li>
            <li><strong>Surgeries:</strong> 5000+ Successful Procedures</li>
          </ul>
        </div>

        {/* 🔹 Specializations */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {[
              "Kidney Stone Treatment",
              "Laparoscopic Urology Surgery",
              "Prostate Enlargement Treatment",
              "Bladder Cancer Treatment",
              "Male Infertility Solutions",
              "Stricture Urethra Treatment"
            ].map((specialty, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg shadow">
                <p className="text-blue-700 font-semibold">{specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Achievements */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">Achievements</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Awarded "Best Urologist of the Year" in 2023</li>
            <li>Performed one of the first robotic urology surgeries in India</li>
            <li>Published multiple research papers in international journals</li>
            <li>Invited as a speaker at leading medical conferences worldwide</li>
          </ul>
        </div>

        {/* 🔹 Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            If you're looking for expert consultation and world-class treatment, book an appointment today.
          </p>
          <Link
            to="/appointment"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}