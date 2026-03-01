import type { Character } from "../types/Record";

interface Props {
  personaje: Character;
}

export const CardBar = ({ personaje }: Props) => {
  return (
    <div className="group flex items-center gap-3 p-2 cursor-pointer border-l-2 border-transparent hover:border-lime-400 hover:bg-green-950/20 transition-all duration-300">
      <div className="relative w-10 h-10 shrink-0 border border-green-900/50 overflow-hidden">
        <img
          src={personaje.imageUrl}
          alt={personaje.name}
          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
        />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,52,18,0.2)_1px,transparent_1px)] bg-size-[100%_2px] opacity-30" />
      </div>

      <div className="flex-1 overflow-hidden">
        <h3 className="text-xs font-fauna-one text-gray-400 group-hover:text-lime-400 truncate transition-colors uppercase tracking-widest">
          {personaje.name}
        </h3>
      </div>
    </div>
  );
};
