import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Preloader from './components/Preloader';
import { AnimatePresence, motion } from 'framer-motion';

function MainLayout() {
  const location = useLocation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
    >
      <Navbar />
      <main>
        <AnimatePresence mode="wait"> 
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Home />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />

              <Route path="*" element={
                <div className="text-center py-40 min-h-screen">
                  <h1 className="text-5xl font-bold">404</h1>
                  <p>Halaman tidak ditemukan</p>
                </div>
              } />
            </Route>
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </motion.div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader key="preloader" /> 
      ) : (
        <MainLayout key="main-layout" /> 
      )}
    </AnimatePresence>
  );
}
export default App;