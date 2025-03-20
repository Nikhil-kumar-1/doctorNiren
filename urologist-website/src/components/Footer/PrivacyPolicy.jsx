import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page bg-white text-gray-800">
      {/* Banner Section */}
      <div className="relative bg-blue-600 text-white h-64 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-tight mb-4">Privacy Policy</h1>
          <p className="text-lg">Your privacy is important to us.</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-left">
        <p className="text-gray-600 mb-4">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link> / Privacy Policy
        </p>

        <h2 className="text-2xl font-semibold my-6">Personal Identification Information</h2>
        <p className="text-gray-600 mb-6">
          When a person visits our website, we may track and collect data which will be saved to our website’s server. Our website provides you the facility to request the information online. To process the request, we require your personal information; if you voluntarily submit such details they will be saved in our records and will be secured. Visitors can always decline to reveal their personal information if they want to but it may prevent them to engage or use information related to certain site-related activities or services offered by us.
        </p>

        <h2 className="text-2xl font-semibold my-6">Non-Personal Identification Information</h2>
        <p className="text-gray-600 mb-6">
          Some information doesn’t come under the personal identification information gathering process. We may gather non-personal identification information about users or visitors whenever they interact and visit our website. Non-personal identification information may include the how long you spend time on our website, the pages you visit, your browser name, the type of computer and technical information about user’s mode of connection to our website, operating system types and the information about your Internet service provider.
        </p>

        <h2 className="text-2xl font-semibold my-6">Web Browser Cookies</h2>
        <p className="text-gray-600 mb-6">
          We use temporary, session-specific cookies to ensure more visits to our website that should be smooth and customized for the visitors. Our site uses ‘cookies’ to personalize and improve the user experience. Such cookies allow us to track the information about their preferences and needs. If you do want the web browser to accept cookies, you can turn off the acceptance option of cookies in the browser’s settings.
        </p>

        <h2 className="text-2xl font-semibold my-6">How We Use the Information We Gather</h2>
        <p className="text-gray-600 mb-6">
          We may use and gather user’s personal information for the following purposes:
        </p>
        <ol className="list-decimal pl-8 text-gray-600 mb-6">
          <li>
            <strong>To upgrade customer service:</strong> Whatever the information we gather from our users helps us respond to our customer service requests, and better content gathering.
          </li>
          <li>
            <strong>To illustrate user’s experience:</strong> We may use the information by accumulating the facts to understand the pattern how our users or visitors, as a group, are using the information about our services and resources provided on our site.
          </li>
          <li>
            <strong>To boost our Site:</strong> We may use feedback of the users visiting our website and gathering information that helps us to improve our services and the content available on the website.
          </li>
          <li>
            <strong>Reminder by sending periodic emails to our visitors:</strong> We may use the email address and other contact details of our users to send news and updates related to their preferences/requirements. It may also be used to answer your queries, and/or any other requests.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold my-6">How We Protect Your Information</h2>
        <p className="text-gray-600 mb-6">
          We adopt relevant data collection, data storage, and data processing practices and safety measures to protect against unauthorized access, disclosure or destruction of the personal information, username, password, transaction information and data stored on our site.
        </p>

        <h2 className="text-2xl font-semibold my-6">Your Acceptance of These Terms</h2>
        <p className="text-gray-600 mb-6">
          By visiting this site and spending time on the website for the information, you signify your acceptance for our privacy policy.
        </p>

        <h2 className="text-2xl font-semibold my-6">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions about our privacy policy or the information available on our website, please write into us at{" "}
          <a href="mailto:info@drkunjankumar.com" className="text-blue-500 hover:underline">
            info@drnirenrao.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;