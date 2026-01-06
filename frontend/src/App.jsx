import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import VolunteerDashboard from "./components/VolunteerDashboard";
import VolunteerForm from "./components/VolunteerForm"; // Register

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 container my-4">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/volunteer" element={<VolunteerForm />} />{" "}
          {/* Register */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<VolunteerDashboard />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
