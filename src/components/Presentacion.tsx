import Typewriter from "typewriter-effect";
import Predator from "../assets/images/predator_presentacion.png";

export const Title = () => (
  <div
    data-aos="fade-up"
    className="w-full flex flex-col items-center gap-12 py-10"
  >
    <h1 className="text-center text-2xl font-bold text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] tracking-widest">
      BIENVENIDO A LOS ARCHIVOS WEYLAND-YUTANI
    </h1>

    <div
      className="relative min-h-[300px] w-full max-w-[1100px] border border-green-900/50 bg-green-950/5 p-12 rounded-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] overflow-hidden"
      style={{ fontFamily: "'fauna-one', sans-serif" }}
    >
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500"></div>

      <div className="relative z-10 flex flex-col gap-6 max-w-[60%]">
        <h2
          className="text-2xl text-green-400 border-b border-green-900 pb-2 inline-block"
          style={{ fontFamily: "'fauna', sans-serif" }}
        >
          &gt; IDENTIFICANDO PROYECTO...
        </h2>

        <div className="text-xl leading-relaxed text-green-500/90 first-letter:uppercase font-mono">
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
        className="absolute right-[-50px] top-[-20px] w-[500px] opacity-40 mix-blend-screen grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-700 pointer-events-none"
        src={Predator}
        alt="Asset-01"
      />

      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]"></div>
    </div>
  </div>
);
