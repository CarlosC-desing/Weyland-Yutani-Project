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
    <div className="relative w-full bg-black/90 border border-green-900/50 p-6 lg:p-10 shadow-[0_0_40px_rgba(20,83,45,0.15)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,52,18,0.2)_1px,transparent_1px)] bg-[size:100%_4px]" />

      <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 z-10">
        <div className="w-full lg:w-1/3 flex flex-col gap-4 shrink-0">
          <div className="relative aspect-[3/4] border border-green-900/50 overflow-hidden group">
            <img
              src={personaje.imageUrl}
              alt={personaje.name}
              className="w-full h-full object-cover transition-all duration-700 lg:grayscale lg:brightness-75 lg:contrast-125 group-hover:lg:grayscale-0 group-hover:lg:brightness-100"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/90 border-t border-green-900 p-3 backdrop-blur-sm">
              <p className="text-[10px] font-mono text-green-500 tracking-[0.3em] uppercase">
                ID_SEQ: {personaje.id}
              </p>
            </div>
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-lime-500 m-2 opacity-50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-lime-500 m-2 opacity-50" />
          </div>

          <div className="border border-green-900/40 p-4 bg-green-950/10">
            <p className="text-[10px] font-mono text-green-600 uppercase tracking-widest mb-3">
              Threat_Level_Assessment
            </p>
            <div className="flex gap-1.5 h-2">
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-green-900/30 pb-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-fauna-one text-white uppercase tracking-wider">
                {personaje.name}
              </h2>
              <p className="text-lime-500 font-mono text-xs tracking-[0.3em] mt-3">
                CLASSIFICATION: {personaje.species}
              </p>
            </div>
            <span
              className={`px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] border ${statusColors[personaje.status]}`}
            >
              {personaje.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 font-mono text-xs">
            <div className="p-4 bg-green-950/20 border-l-2 border-green-900/50">
              <span className="text-green-700 block mb-2 tracking-widest text-[10px]">
                AFFILIATION
              </span>
              <span className="text-gray-300 uppercase tracking-wider">
                {personaje.affiliation}
              </span>
            </div>
            <div className="p-4 bg-green-950/20 border-l-2 border-green-900/50">
              <span className="text-green-700 block mb-2 tracking-widest text-[10px]">
                POINT_OF_ORIGIN
              </span>
              <span className="text-gray-300 uppercase tracking-wider">
                {personaje.origin}
              </span>
            </div>
            {personaje.metadata?.modelNumber && (
              <div className="p-4 bg-green-950/20 border-l-2 border-green-900/50">
                <span className="text-green-700 block mb-2 tracking-widest text-[10px]">
                  MODEL_DESIGNATION
                </span>
                <span className="text-lime-400 uppercase tracking-wider">
                  {personaje.metadata.modelNumber}
                </span>
              </div>
            )}
            {personaje.metadata?.firstAppearance && (
              <div className="p-4 bg-green-950/20 border-l-2 border-green-900/50">
                <span className="text-green-700 block mb-2 tracking-widest text-[10px]">
                  FIRST_ENCOUNTER_LOG
                </span>
                <span className="text-gray-300 uppercase tracking-wider">
                  {personaje.metadata.firstAppearance}
                </span>
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-green-800" />
              <span className="text-green-700 font-mono text-[10px] uppercase tracking-widest">
                Subject_Detailed_Analysis
              </span>
            </div>
            <p className="text-gray-400 font-fauna leading-relaxed text-sm md:text-base pl-6 border-l border-green-900/30">
              {personaje.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
