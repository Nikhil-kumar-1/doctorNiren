import React from 'react';

const Video = () => {
  return (
    <div className="video-page bg-white text-gray-800">
      {/* Banner Section */}
      <div className="relative bg-blue-600 text-white h-96 flex items-center justify-start px-6">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/businessman-pressing-hold-play-button-sign-start-initiate-projects-video-play-presentation-idea-business-technology-media-player-button-play-icon-go_150455-16976.jpg?ga=GA1.1.943868341.1721631842&semt=ais_hybrid')" }}></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl text-blue-300 font-bold leading-tight mb-4">Videos</h1>
          <p className="text-lg text-white mb-6">Explore our collection of informative and educational videos on urology and related treatments.</p>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Videos</h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Video 1 */}
          <div className="video-card bg-gray-100 p-4 rounded-lg shadow-lg">
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.youtube.com/embed/_-2Nr6JXVYs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mt-4">Understanding Kidney Stones</h3>
            <p className="text-gray-600 mt-2">Learn about the causes, symptoms, and treatment options for kidney stones.</p>
          </div>

          {/* Video 2 */}
          <div className="video-card bg-gray-100 p-4 rounded-lg shadow-lg">
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.youtube.com/embed/B38FOda_ShY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mt-4">PCNL Explained</h3>
            <p className="text-gray-600 mt-2">All you need to know about PCNL | Dr. Kunjan Kumar - Urologist.</p>
          </div>

          {/* Video 3 */}
          <div className="video-card bg-gray-100 p-4 rounded-lg shadow-lg">
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.youtube.com/embed/aIm57HibOsQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mt-4">Prostat Treatment</h3>
            <p className="text-gray-600 mt-2">Are you suffering from Prostate Cancer? | Dr. Kunjan Kumar - Urologist.</p>
          </div>

          {/* Video 4 */}
          <div className="video-card bg-gray-100 p-4 rounded-lg shadow-lg">
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.youtube.com/embed/J1JxynCUI9M"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mt-4">Learn Prostate Cnacer</h3>
            <p className="text-gray-600 mt-2">Learn about the Prostat Cnacer.</p>
          </div>

          {/* Video 5 */}
          <div className="video-card bg-gray-100 p-4 rounded-lg shadow-lg">
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.youtube.com/embed/q3fH3iOi7LI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mt-4">Patients Testimonials</h3>
            <p className="text-gray-600 mt-2">Patients Testimonials.</p>
          </div>

          {/* Video 6 */}
          <div className="video-card bg-gray-100 p-4 rounded-lg shadow-lg">
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.youtube.com/embed/gHiMeZhBhOE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mt-4">Urine Infection</h3>
            <p className="text-gray-600 mt-2">Urine Infection ?? ????, ????? ?? ???? | Urinary Tract Infection (UTI) in Women.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;