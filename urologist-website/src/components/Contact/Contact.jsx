import { useState } from "react";
import { backendUrl } from "../../config/config";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear form data after successful submission
        setFormData({ name: "", email: "", phone: "", message: "" });
        alert("Message Sent Successfully!"); // Replaced toast with alert
      } else {
        alert("Something went wrong!"); // Replaced toast with alert
      }
    } catch (error) {
      alert("Something went wrong!"); // Replaced toast with alert
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full bg-blue-700 text-white py-12 text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="mt-4 text-lg">Get in touch with us for any inquiries.</p>
      </div>

      <div className="w-full max-w-4xl bg-white p-6 md:p-10 rounded-lg shadow-lg flex flex-col md:flex-row mt-8 mb-8">
        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Get in Touch
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone*"
              className="w-full p-3 border rounded"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-3 border rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 p-4 text-gray-700">
          <h3 className="text-xl font-semibold mb-4">Clinic Details</h3>
          <p>
            <strong>📍 Address:</strong> E 33, Paryavaran Complex, IGNOU Road, Z
            Morh, Near Labour Chowk, Near Saket Metro Station, New Patna -
            110068
          </p>
          <p>
            <strong>📞 Phone:</strong> +91 9811144680
          </p>
          <p>
            <strong>✉️ Email:</strong> example@gmail.com
          </p>
          {/* Google Map Embed */}
          <div className="mt-4">
            <iframe
              className="w-full h-40 md:h-50 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7011.172269501278!2d77.216523!3d28.522097000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1e6761396fd%3A0xa275eb89e1e57ddb!2sDr.%20Niren%20Rao%20-%20Best%20Urologist%20in%20Patna%20%7C%20Kidney%20Stone%2C%20Bladder%20%26%20Prostate%20Cancer%20Treatment%2C%20Urethroplasty%20Surgery%20In%20Patna!5e0!3m2!1sen!2sus!4v1741255117187!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
