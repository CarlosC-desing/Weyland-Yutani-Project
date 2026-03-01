import Typewriter from "typewriter-effect";
import Predator from "../assets/images/predator_presentacion.png";

export const Title = () => (
  <div
    data-aos="fade-up"
    className="w-full flex flex-col items-center gap-8 md:gap-12 py-6 md:py-10 px-2"
  >
    <h1 className="text-center text-xl md:text-2xl font-bold text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] tracking-widest">
      BIENVENIDO A LOS ARCHIVOS WEYLAND-YUTANI
    </h1>

    <div
      className="relative min-h-[50vh] md:min-h-75 w-full max-w-[100%] md:max-w-275 border border-green-900/50 bg-green-950/5 p-6 md:p-12 rounded-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] overflow-hidden"
      style={{ fontFamily: "'fauna-one', sans-serif" }}
    >
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500"></div>

      <div className="relative z-10 flex flex-col gap-4 md:gap-6 w-full md:max-w-[60%]">
        <h2
          className="text-lg md:text-2xl text-green-400 border-b border-green-900 pb-2 inline-block break-words"
          style={{ fontFamily: "'fauna', sans-serif" }}
        >
          &gt; IDENTIFICANDO PROYECTO...
        </h2>

        <div className="text-base md:text-xl leading-relaxed text-green-500/90 first-letter:uppercase font-mono">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<span class="text-white font-bold">ESTADO:</span> ACCESO CONCEDIDO.',
                )
                .pauseFor(1000)
                .typeString(
                  "<br/><br/>Este archivo centraliza los registros biológicos y eventos cronológicos de las colonias exteriores.",
                )
                .start();
            }}
            options={{ delay: 20, cursor: "▊" }}
          />
        </div>
      </div>

      <img
        className="absolute -right-8 top-10 md:-right-12.5 md:-top-5 w-64 md:w-125 opacity-20 md:opacity-40 mix-blend-screen grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-700 pointer-events-none object-contain"
        src={Predator}
        alt="Asset-01"
      />

      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,3px_100%]"></div>
    </div>
  </div>
);
