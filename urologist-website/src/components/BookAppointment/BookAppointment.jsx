export default function BookAppointment() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Book an Appointment</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name*" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" required />
            <input type="email" placeholder="Email*" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" required />
            <input type="tel" placeholder="Phone*" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" required />
            <input type="date" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" required />
            <textarea placeholder="Message" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Submit</button>
          </form>
        </div>
      </div>
    );
  }
  