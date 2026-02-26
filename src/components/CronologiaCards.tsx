import type { MovieRecord } from "../types/Record";

interface Props {
  timeline: MovieRecord;
}

export const CronologiaCard = ({ timeline }: Props) => {
  return (
    <div className="group relative w-full bg-black border-l-4 border-green-900 hover:border-lime-400 transition-all duration-500 overflow-hidden mb-10 shadow-2xl shadow-green-900/10">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,52,18,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(18,52,18,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="relative flex flex-col md:flex-row gap-0">
        <div className="relative w-full md:w-64 lg:w-72 shrink-0 aspect-video md:aspect-auto overflow-hidden">
          <img
            className="w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
            src={timeline.image}
            alt={timeline.title}
          />
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]" />

          <div className="absolute top-4 left-4 bg-black/80 border border-green-900 px-3 py-1 text-[10px] font-mono text-lime-500 tracking-[0.3em] uppercase">
            {timeline.category}
          </div>
        </div>

        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center bg-gradient-to-r from-black to-green-950/10">
          <div className="flex items-center gap-4 mb-3">
            <span className="h-[1px] w-8 bg-green-900 group-hover:w-12 group-hover:bg-lime-400 transition-all" />
            <span className="font-mono text-xs text-green-700 tracking-tighter uppercase">
              Record ID: #00{timeline.id} // SEC: {timeline.year}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-fauna text-white group-hover:text-lime-400 transition-colors duration-300 mb-4 uppercase tracking-wider">
            {timeline.title}
          </h2>

          <p className="text-gray-400 font-fauna-one text-sm md:text-base leading-relaxed max-w-2xl border-l border-green-900/30 pl-4">
            {timeline.plot}
          </p>

          <div className="mt-6 pt-6 border-t border-green-900/20 flex justify-between items-center">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-green-900 group-hover:animate-pulse group-hover:bg-lime-500" />
              <div className="w-2 h-2 bg-green-900 group-hover:bg-lime-500 delay-75" />
              <div className="w-2 h-2 bg-green-900 group-hover:bg-lime-500 delay-150" />
            </div>
            <span className="text-[10px] font-mono text-green-900 group-hover:text-lime-700">
              [ AUTH_REQUIRED_LEVEL_4 ]
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-900 group-hover:border-lime-400 transition-colors" />
    </div>
  );
};
