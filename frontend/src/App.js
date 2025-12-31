
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './i18n';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Accommodation from "./pages/Accommodation";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import TempleEntrance from "./components/TempleEntrance";
import { Toaster } from "./components/ui/sonner";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [showEntrance, setShowEntrance] = useState(true);

  return (
    <>
      {showEntrance && <TempleEntrance onEnter={() => setShowEntrance(false)} />}
      
      <div className={`bg-[#2b0a0a] min-h-screen ${showEntrance ? 'h-screen overflow-hidden filter blur-[1px]' : ''} transition-all duration-1000`}>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen text-foreground font-sans antialiased">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/accommodation" element={<Accommodation />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} />
              </Routes>
            </main>
            <Footer />
            <Toaster position="top-center" theme="dark" />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
