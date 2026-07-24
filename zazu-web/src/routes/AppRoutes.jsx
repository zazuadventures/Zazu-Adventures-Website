import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage";
import Destinations from "../pages/Destinations";
import DestinationDetails from "../pages/DestinationDetails";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import Experiences from "../pages/Experiences";
import ExperienceRedirect from "../pages/ExperienceRedirect";
import Blog from "../pages/Blog";
import TravelServices from "../pages/TravelServices";
import About from "../pages/About";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetails />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:slug" element={<TourDetails />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/experiences/:slug" element={<ExperienceRedirect />} />
        <Route path="/travel-guide" element={<Blog />} />
        <Route path="/travel-services" element={<TravelServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
}

export default AppRoutes;
