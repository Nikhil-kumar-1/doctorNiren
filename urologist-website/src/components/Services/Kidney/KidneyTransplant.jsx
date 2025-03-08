import React from 'react';
import { Link } from 'react-router-dom';

const KidneyTransplant = () => {
  return (
    <div className="kidney-transplant-page bg-white text-gray-800">
      {/* Banner Section */}
      <div className="relative bg-blue-600 text-white h-96 flex items-center justify-start px-6">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/anatomy-human-kidney-with-polycystic-disease-cysts-white-background-concept-anatomy-human-kidney-polycystic-disease-cysts-white-background_864588-220708.jpg?ga=GA1.1.943868341.1721631842&semt=ais_hybrid')" }}></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl text-blue-900 font-bold leading-tight mb-4">Kidney Transplant in Delhi</h1>
          <p className="text-lg text-black mb-6">A life-saving procedure for patients with end-stage renal disease or severe kidney<br></br> failure.</p>
          <Link to="/appointment" className="btn-appointment bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-full shadow-lg">Book Appointment</Link>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p>
          Kidney transplant is a life-saving procedure that offers patients with end-stage renal disease or severe kidney failure a chance to regain a better quality of life. As the demand for this critical surgery grows, kidney transplants in Delhi have become an essential service offered by top-tier hospitals with highly skilled professionals. For those struggling with chronic kidney conditions, a successful transplant can mean a return to normalcy and an extended, healthier life.
        </p>

        <p className="font-bold my-4">With Dr. Niren Rao, known for his extensive experience and compassionate care, patients can feel confident that they are in capable hands throughout their kidney transplant journey, from the initial consultation to post-operative recovery.</p>

        <h2 className="text-2xl font-semibold my-6">What is a Kidney Transplant?</h2>
        <p>
          A kidney transplant involves replacing a diseased or failing kidney with a healthy one from a donor. This procedure is often the best option for patients with kidney failure, as it eliminates the need for dialysis and allows the patient to live a more typical lifestyle. Kidneys for transplants come from either living donors or deceased donors.
        </p>

        <h3 className="text-xl font-semibold mt-8">Living Donors</h3>
        <p>Often a close relative or friend, living donors provide a healthy kidney, allowing for a quicker and more efficient transplant process.</p>

        <h3 className="text-xl font-semibold mt-8">Deceased Donors</h3>
        <p>Organs from deceased donors are matched with recipients through a waiting list system based on urgency and compatibility.</p>

        <h2 className="text-2xl font-semibold my-6">Eligibility for Kidney Transplants</h2>
        <p>Not all patients with kidney failure are automatically eligible for a transplant. Certain medical conditions, lifestyle factors, and compatibility issues must be considered before moving forward with the procedure. Here's a brief overview of what doctors assess when determining eligibility for kidney transplant surgery in Delhi:</p>

        <ul className="list-disc pl-8">
          <li><strong>End-Stage Renal Disease (ESRD):</strong> The most common reason for a kidney transplant is ESRD, where the kidneys have lost the majority of their function.</li>
          <li><strong>Age and Overall Health:</strong> Candidates are typically under 70 years old, but overall health and the ability to withstand major surgery are crucial factors.</li>
          <li><strong>Compatibility:</strong> Blood type and tissue matching tests are conducted to minimize the risk of rejection.</li>
          <li><strong>Infections and Cancers:</strong> Candidates must be free of any active infections or untreated cancers.</li>
        </ul>

        <h2 className="text-2xl font-semibold my-6">Kidney Transplant Process</h2>
        <p>Once a patient is deemed eligible for a transplant, the actual procedure involves multiple stages that take place over several months. The transplant journey is a comprehensive one, requiring detailed planning, testing, and post-operative care to ensure a successful outcome.</p>

        <h3 className="text-xl font-semibold mt-8">Pre-Surgery Evaluation</h3>
        <p>Before the surgery, candidates undergo a thorough evaluation that includes blood tests, imaging studies, and consultations with various specialists.</p>

        <h3 className="text-xl font-semibold mt-8">The Surgery</h3>
        <p>The actual kidney transplant surgery in Delhi generally takes about 3 to 4 hours. The surgeon places the new kidney in the lower abdomen, connecting it to the patient’s blood vessels and bladder.</p>

        <h3 className="text-xl font-semibold mt-8">Post-Surgery Care</h3>
        <p>Post-operative care is one of the most critical aspects of kidney transplants. Following kidney transplant surgery in Delhi, patients are closely monitored for signs of complications, such as infection or rejection of the new organ.</p>

        <h2 className="text-2xl font-semibold my-6">Potential Risks and Complications</h2>
        <p>As with any major surgery, there are risks associated with kidney transplant surgery in Delhi. While modern surgical techniques have minimized the chances of complications, patients should be aware of the following:</p>

        <ul className="list-disc pl-8">
          <li><strong>Organ Rejection:</strong> Even with immunosuppressive drugs, there’s a risk that the body may reject the new kidney.</li>
          <li><strong>Infections:</strong> Due to the weakened immune system, patients are more susceptible to infections post-transplant.</li>
          <li><strong>Medication Side Effects:</strong> Immunosuppressive drugs can lead to side effects such as high blood pressure, weight gain, and increased susceptibility to infections.</li>
        </ul>

        <h2 className="text-2xl font-semibold my-6">Benefits of Kidney Transplants</h2>
        <p>For patients with kidney failure, a transplant offers a range of benefits that significantly improve both quality of life and longevity.</p>

        <ul className="list-disc pl-8">
          <li>Improved quality of life without the constraints of dialysis.</li>
          <li>Longer life expectancy compared to dialysis patients.</li>
          <li>Freedom from time-consuming dialysis sessions.</li>
        </ul>

        <h2 className="text-2xl font-semibold my-6">Finding the Right Kidney Transplant Doctor in Delhi</h2>
        <p>Selecting the right kidney transplant doctor in Delhi is a vital step in ensuring a successful procedure. Patients should look for a doctor with extensive experience in both the surgical and post-operative aspects of kidney transplants.</p>

        <p>Dr. Niren Rao is a renowned expert in kidney transplant surgery in Delhi, offering patients the expertise and personalized care they need for a successful transplant journey.</p>

        <Link to="/appointment" className="btn-appointment bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-full shadow-lg mt-8 inline-block">Book Appointment</Link>

        {/* Blog Section */}
        <div className="blog-section mt-12">
          <h2 className="text-2xl font-semibold mb-6">Latest Articles on Kidney Transplants</h2>

          <div className="blog-posts grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="blog-post bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">How to Prepare for a Kidney Transplant</h3>
              <p className="text-gray-600 mb-4">Learn about the steps you need to take to prepare for a successful kidney transplant.</p>
              <Link to="/blog/kidney-transplant-preparation" className="text-yellow-500 hover:underline">Read More</Link>
            </div>

            <div className="blog-post bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Post-Transplant Care Tips</h3>
              <p className="text-gray-600 mb-4">Discover essential tips for post-transplant care to ensure a smooth recovery.</p>
              <Link to="/blog/post-transplant-care" className="text-yellow-500 hover:underline">Read More</Link>
            </div>

            <div className="blog-post bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Understanding Kidney Transplant Costs</h3>
              <p className="text-gray-600 mb-4">A comprehensive guide to understanding the cost of kidney transplant surgery in Delhi.</p>
              <Link to="/blog/kidney-transplant-cost" className="text-yellow-500 hover:underline">Read More</Link>
            </div>

            <div className="blog-post bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Living Donor vs. Deceased Donor Transplants</h3>
              <p className="text-gray-600 mb-4">Explore the differences between living donor and deceased donor kidney transplants.</p>
              <Link to="/blog/living-vs-deceased-donor" className="text-yellow-500 hover:underline">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidneyTransplant;