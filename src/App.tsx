import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hola } from "./components/hola";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-black">
        <div className="min-h-screen mx-10 text-white">
          <Navbar />

          <Routes>
            <Route path="/" element={<h1>Proyecto</h1>} />
            <Route path="/Inicio" element={<Hola />} />
            <Route
              path="/Cronologia"
              element={<h1 className="text-7xl">Cronologias</h1>}
            />
            <Route
              path="/Personajes"
              element={<h1 className="text-7xl">Personajes</h1>}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
