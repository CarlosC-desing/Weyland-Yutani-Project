import { useState } from "react";
import { archiveData } from "../data/database";
import { SideBar } from "./SiberBar";
import { CardPersonaje } from "./CardPersonajes";
import type { Character } from "../types/Record";

export const Personajes = () => {
  const [personajeActual, setPersonajeActual] = useState<Character>(
    archiveData[0],
  );

  return (
    <div className="flex flex-col md:flex-row w-full items-start relative border-t border-green-900/30">
      <div className="w-full md:w-auto md:sticky md:top-[88px] md:h-[calc(100vh-88px)] shrink-0 z-20 border-b md:border-b-0 md:border-r border-green-900/40">
        <SideBar
          characters={archiveData}
          onSelectCharacter={setPersonajeActual}
        />
      </div>

      <main className="flex-1 p-2 md:p-8 relative min-h-screen w-full">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(rgba(18,52,18,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(18,52,18,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative z-10 w-full max-w-4xl mx-auto pt-6 md:pt-10">
          {personajeActual ? (
            <CardPersonaje personaje={personajeActual} />
          ) : (
            <h1 className="text-lime-400 font-fauna-one text-2xl md:text-4xl uppercase tracking-widest mt-10 md:mt-20 text-center">
              Seleccione un sujeto
            </h1>
          )}
        </div>
      </main>
    </div>
  );
};
