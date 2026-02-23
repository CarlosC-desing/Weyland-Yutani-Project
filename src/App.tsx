import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // El CSS de las animaciones

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      once: true, // Si quieres que la animación solo ocurra una vez
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <h1 data-aos="fade-up">Weyland-Yutani Archives</h1>
      {/* Aquí irá tu mapeo de personajes */}
    </div>
  );
}
