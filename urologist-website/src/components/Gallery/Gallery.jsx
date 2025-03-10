import { useState } from "react";

const images = [
  "https://www.drnirenrao.com/images/gallery/dr-gallery-img1.jpg",
  "https://www.drnirenrao.com/images/gallery/dr-gallery-img2.jpg",
  "https://www.drnirenrao.com/images/gallery/gallery1.jpg",
  "https://www.drnirenrao.com/images/gallery/gallery2.jpg",
  "https://www.drnirenrao.com/images/gallery/gallery4.jpg",
  "https://www.drnirenrao.com/images/gallery/gallery5.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Gallery</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-80 transition"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-700"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-[80vh]" />
          </div>
        </div>
      )}
       <div className="mt-10 text-center">
          
          <Link to="/appointment"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Book an Appointment
          </Link>
        </div>
    </div>
  );
}
