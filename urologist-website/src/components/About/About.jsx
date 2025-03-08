import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20 flex flex-col md:flex-row items-center">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 space-y-4 text-left">
        <h2 className="text-blue-700 text-3xl font-bold">DR. NIREN RAO</h2>
        <h3 className="text-2xl font-extrabold">BEST UROLOGIST IN DELHI</h3>
        <p className="text-lg font-medium text-gray-600">
          <span className="font-bold">
            MBBS, MS - General Surgery, MCH – Urology
          </span>
        </p>
        <p className="text-gray-600">
        Dr. Niren Rao is one of the best urologist in Delhi he did his MBBS
            from the prestigious Maulana Azad Medical College and associated Lok
            Nayak and G B Pant hospitals. After graduation, he did his
            specialization in General Surgery at Safdarjung Hospital and
            associated Vardhman Mahavir Medical College. He was fortunate to have
            an extensive hands-on surgical training at Safdarjung Hospital
            performing nearly 3,500 surgeries during 3 years of his training.
            After completing his Masters in Surgery he joined M.Ch in Urology at
            the coveted All India Institute of Medical Sciences. Here he was
            trained in endourological procedures, laparoscopic complex cases and
            robotic surgeries by a distinguished world-class faculty. Dr. Niren
            Rao’s Clinic provides the best urology treatments in Delhi with a
            blend of research and surgical expertise...
        </p>

        <button
          onClick={() => navigate("/aboutDoctor")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 cursor-pointer transition duration-300"
        >
          READ MORE
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src="https://www.drnirenrao.com/images/Dr_niren_rao.jpg"
          alt="Dr. Niren Rao"
          className="w-3/4 rounded-lg shadow-lg border-4 border-white"
        />
      </div>
    </section>
  );
}
