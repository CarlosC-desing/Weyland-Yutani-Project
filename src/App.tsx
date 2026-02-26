import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Title } from "./components/Presentacion";
import { Cronologias } from "./components/Cronologia";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black overflow-hidden">
        <video
          src="/videos/Loading.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-10 text-center">
          <p className="text-lime-400 font-mono tracking-[0.2em] animate-pulse">
            ESTABLECIENDO ENLACE... WEYLAND-YUTANI CORP
          </p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="bg-black" style={{ fontFamily: "'fauna', sans-serif" }}>
        <div className="nav min-h-screen mx-10 text-white">
          <Navbar />

          <div className="content-all flex flex-col items-center">
            <Routes>
              <Route path="/" element={<Title />} />
              <Route path="/Cronologia" element={<Cronologias />} />
              <Route
                path="/Personajes"
                element={<h1 className="text-5xl">PERSONAJES</h1>}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
