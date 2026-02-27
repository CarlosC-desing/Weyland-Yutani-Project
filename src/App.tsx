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
      offset: 100,
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen text-white relative font-fauna">
        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000">
            <video
              src="/videos/Loading.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-80"
              preload="metadata"
            />
            <div className="absolute bottom-10 w-full text-center">
              <p className="text-lime-400 font-mono text-sm tracking-[0.2em] animate-pulse">
                ESTABLECIENDO ENLACE... WEYLAND-YUTANI CORP
              </p>
            </div>
          </div>
        )}

        <div
          className={`nav mx-10 flex flex-col items-center ${loading ? "opacity-0 h-0 overflow-hidden" : "opacity-100 transition-opacity duration-1000 delay-500"}`}
        >
          <Navbar />
          <main className="w-full">
            <Routes>
              <Route path="/" element={<Title />} />
              <Route path="/Cronologia" element={<Cronologias />} />
              <Route
                path="/Personajes"
                element={
                  <h1 className="text-5xl mt-20 text-center">PERSONAJES</h1>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
