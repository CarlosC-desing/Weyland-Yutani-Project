import type { Character } from "../types/Record";

interface Props {
  personaje: Character;
}

export const CardPersonaje = ({ personaje }: Props) => {
  const statusColors = {
    Alive: "text-lime-400 border-lime-400/30 bg-lime-400/10",
    Deceased: "text-red-500 border-red-500/30 bg-red-500/10",
    Destroyed: "text-orange-500 border-orange-500/30 bg-orange-500/10",
    Unknown: "text-gray-500 border-gray-500/30 bg-gray-500/10",
  };

  return (
    <div className="relative w-full bg-black/90 border border-green-900/50 p-5 lg:p-8 shadow-[0_0_40px_rgba(20,83,45,0.15)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,52,18,0.2)_1px,transparent_1px)] bg-size-[100%_4px]" />

      <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-8 z-10">
        <div className="w-full lg:w-1/3 flex flex-col gap-4 shrink-0">
          <div className="relative aspect-3/4 border border-green-900/50 overflow-hidden group">
            <img
              src={personaje.imageUrl}
              alt={personaje.name}
              className="w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/90 border-t border-green-900 p-2 backdrop-blur-sm">
              <p className="text-[10px] font-mono text-green-500 tracking-[0.3em] uppercase">
                ID_SEQ: {personaje.id}
              </p>
            </div>
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-lime-500 m-2 opacity-50" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-lime-500 m-2 opacity-50" />
          </div>

          <div className="border border-green-900/40 p-3 bg-green-950/10">
            <p className="text-[9px] font-mono text-green-600 uppercase tracking-widest mb-2">
              Threat_Level_Assessment
            </p>
            <div className="flex gap-1 h-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 ${i < personaje.dangerLevel ? (personaje.dangerLevel >= 4 ? "bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]" : "bg-lime-500") : "bg-green-950"}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-green-900/30 pb-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-fauna text-white uppercase tracking-wider">
                {personaje.name}
              </h2>
              <p className="text-lime-500 font-mono text-[10px] tracking-[0.3em] mt-2">
                CLASSIFICATION: {personaje.species}
              </p>
            </div>
            <span
              className={`px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] border ${statusColors[personaje.status]}`}
            >
              {personaje.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 font-mono text-[10px]">
            <div className="p-3 bg-green-950/20 border-l-2 border-green-900/50">
              <span className="text-green-700 block mb-1 tracking-widest text-[9px]">
                AFFILIATION
              </span>
              <span className="text-gray-300 uppercase tracking-wider">
                {personaje.affiliation}
              </span>
            </div>
            <div className="p-3 bg-green-950/20 border-l-2 border-green-900/50">
              <span className="text-green-700 block mb-1 tracking-widest text-[9px]">
                POINT_OF_ORIGIN
              </span>
              <span className="text-gray-300 uppercase tracking-wider">
                {personaje.origin}
              </span>
            </div>
            {personaje.metadata?.modelNumber && (
              <div className="p-3 bg-green-950/20 border-l-2 border-green-900/50">
                <span className="text-green-700 block mb-1 tracking-widest text-[9px]">
                  MODEL_DESIGNATION
                </span>
                <span className="text-lime-400 uppercase tracking-wider">
                  {personaje.metadata.modelNumber}
                </span>
              </div>
            )}
            {personaje.metadata?.firstAppearance && (
              <div className="p-3 bg-green-950/20 border-l-2 border-green-900/50">
                <span className="text-green-700 block mb-1 tracking-widest text-[9px]">
                  FIRST_ENCOUNTER_LOG
                </span>
                <span className="text-gray-300 uppercase tracking-wider">
                  {personaje.metadata.firstAppearance}
                </span>
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-green-800" />
              <span className="text-green-700 font-mono text-[9px] uppercase tracking-widest">
                Subject_Detailed_Analysis
              </span>
            </div>
            <p className="text-gray-400 font-fauna leading-relaxed text-xs md:text-sm pl-4 border-l border-green-900/30">
              {personaje.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
