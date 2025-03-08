import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Specializations from "./components/Specialization/Specialization";
import AppointmentSection from "./components/Appointment/Appointment";
import AboutDoctor from "./components/About/AboutDoctor";
import AboutClinic from "./components/About/AboutClinic";
import Gallery from "./components/Gallery/Gallery";
import ContactUs from "./components/Contact/Contact";
import KidneyStone from "./components/Services/Kidney/KidneyStone";
import KidneyCancer from "./components/Services/Kidney/KidneyCancer";
import KidneyTransplant from "./components/Services/Kidney/KidneyTransplant";
import BladderStone from "./components/Services/Bladder/BladderStone";
import BladderCancer from "./components/Services/Bladder/BladderCancer";
import ProstateCancer from "./components/Services/Prostate/ProstateCancer";
import ProstateTreatment from "./components/Services/Prostate/ProstateTreatment";
import Video from "./components/Video/Video";
import Services from "./components/Services/Services";
import Blog from "./components/Blogs/Blog";
import BlogDetails from "./components/Blogs/BlogDetails";
import Infertility from "./components/Services/Infertility";
import ErectileDysfunction from "./components/Services/ErectileDisfunction";
import Circumcision from "./components/Services/Circumcision";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import AdminDashboard from "./components/AdminDasboard";
import Login from "./components/Login"; // Add Login component
import ProtectedRoute from "./components/ProtectedRoute"; // Add ProtectedRoute component

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]);

  return null; // This component doesn't render anything
};

function App() {
  return (
    <Router>
      {/* Navbar is always visible */}
      <Navbar />

      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Main Content */}
      <Routes>
        {/* Home Page (Header appears only on Home) */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Specializations />
              <AppointmentSection />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/specialization" element={<Specializations />} />
        <Route path="/appointment" element={<AppointmentSection />} />
        <Route path="/aboutDoctor" element={<AboutDoctor />} />
        <Route path="/aboutClinic" element={<AboutClinic />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services/kidneyStone" element={<KidneyStone />} />
        <Route path="/services/kidney-cancer" element={<KidneyCancer />} />
        <Route path="/services/kidney-transplant" element={<KidneyTransplant />} />
        <Route path="/services/bladder-tumor" element={<BladderStone />} />
        <Route path="/services/bladder-cancer" element={<BladderCancer />} />
        <Route path="/services/prostate-cancer" element={<ProstateCancer />} />
        <Route path="/services/prostate-treatment" element={<ProstateTreatment />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/services/infertility" element={<Infertility />} />
        <Route path="/services/erectileDysfunction" element={<ErectileDysfunction />} />
        <Route path="/services/circumcision" element={<Circumcision />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Admin Routes */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Footer is always visible */}
      <Footer />
    </Router>
  );
}

export default App;