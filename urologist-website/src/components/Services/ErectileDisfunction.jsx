import React from 'react';
import { Link } from 'react-router-dom';

const ErectileDysfunction = () => {
  return (
    <div className="erectile-dysfunction-page bg-white text-gray-800">
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
      <h1 className="text-4xl font-bold leading-tight mb-4">
        Erectile Dysfunction Treatment in Delhi
      </h1>
      <p className="text-lg mb-6">
        Expert care and advanced treatment options for erectile dysfunction.
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
      <div className="max-w-5xl mx-auto px-6 py-12 text-left">
        <p>
          A type of sexual dysfunction in which an erection of the penis cannot be maintained or achieved during sexual activity is known as erectile dysfunction (ED).
        </p>

        <h2 className="text-2xl font-semibold my-6">Causes of Erectile Dysfunction</h2>
        <p>
          Erectile dysfunction occurs due to obesity and metabolic syndrome. Blood pressure, body composition, and cholesterol can be altered by obesity and metabolic dysfunction that may lead to erectile dysfunction. Erectile dysfunction can also occur due to Parkinson’s disease, alcoholism, Peyronie’s disease, multiple sclerosis disease, sleep disorders, and drug abuse.
        </p>

        <h2 className="text-2xl font-semibold my-6">Symptoms</h2>
        <p>
          A man’s inability during sexual intercourse to get a firm erection is the main symptom of erectile dysfunction. The early symptoms of erectile dysfunction are trouble keeping an erection, trouble getting an erection, and decreased sexual desire. If erectile dysfunction is affecting a man’s relationship, it should be treated immediately. Dr. Niren Rao is known for performing the erectile dysfunction treatment in Saket, Delhi. Consult the expert urologist to avail the treatment benefits.
        </p>

        <h2 className="text-2xl font-semibold my-6">Preventing Erectile Dysfunction</h2>
        <p>
          Certain factors increase the chances of erectile dysfunction. Avoiding these factors and maintaining good overall health can help in preventing erectile dysfunction. Following are some of the common recommendations:
        </p>
        <ul className="list-disc pl-8">
          <li>Quit smoking</li>
          <li>Avoid drinking alcohol</li>
          <li>Eat a balanced diet</li>
          <li>Maintain ideal weight</li>
          <li>Go for regular health check-ups</li>
          <li>Stress and anxiety must not be ignored, get professional help</li>
          <li>Exercise daily or involve yourself in physical activities frequently</li>
          <li>Some medications such as tranquilizers and immunomodulators can also lead to erectile dysfunction</li>
        </ul>

        <h2 className="text-2xl font-semibold my-6">Diagnosis</h2>
        <p>
          The first evaluation for erectile dysfunction should be any underlying psychological and physical conditions of the patient. If treatment for an underlying condition is not helpful for the patient, then medication and assistive devices like pumps can be used. Dr. Niren Rao is an erectile dysfunction specialist in Delhi.
        </p>

        <h2 className="text-2xl font-semibold my-6">Treatment</h2>
        <p>
          The most common erectile dysfunction treatments in Delhi are as below:
        </p>

        <h3 className="text-xl font-semibold mt-8">1. Medication</h3>
        <p>
          Oral medications or injectables can be suggested, which help in stimulating the body’s natural erectile mechanism. These may not be equally effective for all.
        </p>

        <h3 className="text-xl font-semibold mt-8">2. Hormone Replacement Therapy</h3>
        <p>
          Hypogonadism is a condition that develops over time and can be defined as a diminished production of sex hormones. Certain medications and medical conditions can lead to this condition. Topical gels and injections can be used to improve the count of male sex hormones.
        </p>

        <h3 className="text-xl font-semibold mt-8">3. Lifestyle Modifications</h3>
        <p>
          As mentioned earlier, lifestyle habits such as smoking and drinking alcohol are some of the most common reasons for erectile dysfunction. Similarly, chronic stress or depression can also cause this problem. Living an active and healthy lifestyle can help in reversing this condition in many cases.
        </p>

        <h3 className="text-xl font-semibold mt-8">4. Surgical Treatment</h3>
        <p>
          A penile prosthesis is an effective solution for erectile dysfunction if medical therapy fails to show results. The majority of patients get satisfactory results with this treatment.
        </p>

        <h2 className="text-2xl font-semibold my-6">Why Choose Dr. Niren Rao?</h2>
        <ul className="list-disc pl-8">
          <li>Experienced and renowned urologist in Delhi.</li>
          <li>Specializes in erectile dysfunction treatment with high success rates.</li>
          <li>Uses advanced diagnostic tools and treatment methods.</li>
          <li>Provides personalized care and comprehensive post-treatment support.</li>
        </ul>

        <p>
          Avail the benefits of erectile dysfunction treatment in Saket, Delhi. Book a consultation with Dr. Niren Rao.
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

export default ErectileDysfunction;