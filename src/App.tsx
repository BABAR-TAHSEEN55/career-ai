//Always remeber about Min-h-screen
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import LogoTicker from "./Components/LogoTicker";
import Navbar from "./Components/Navbar";
import Testimonials from "./Components/Testimonials";
import Resume from "./Components/Resume";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HeroSection />
                <LogoTicker />
                <Features />
                <Testimonials />
                <Footer />
              </>
            }
          />
          <Route
            path="/resume"
            element={
              <>
                <Resume />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
