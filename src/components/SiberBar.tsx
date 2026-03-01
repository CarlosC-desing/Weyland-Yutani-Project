import type { Character } from "../types/Record";
import { CardBar } from "./CardBar";

interface Props {
  characters: Character[];
  onSelectCharacter: (character: Character) => void;
}

export const SideBar = ({ characters, onSelectCharacter }: Props) => {
  return (
    <aside className="w-full md:w-64 lg:w-72 h-52 md:h-full bg-black flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,52,18,0.2)_1px,transparent_1px)] bg-[size:100%_3px] z-0" />

      <div className="sticky top-0 bg-black border-b border-green-900/60 p-3 md:p-4 z-20 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-lime-500 animate-pulse rounded-full shadow-[0_0_5px_rgba(132,204,22,0.8)]" />
          <h2 className="text-lime-500 font-mono text-[10px] tracking-[0.3em] uppercase">
            Terminal_Subj_Index
          </h2>
        </div>
        <div className="mt-1 h-[1px] w-full bg-gradient-to-r from-green-900 via-green-600/50 to-transparent" />
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 flex flex-col gap-1 relative z-10 scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-black">
        {characters.map((personaje) => (
          <div key={personaje.id} onClick={() => onSelectCharacter(personaje)}>
            <CardBar personaje={personaje} />
          </div>
        ))}
      </div>

      <div className="p-2 border-t border-green-900/30 bg-green-950/5 hidden md:block">
        <p className="text-[8px] font-mono text-green-800 text-center tracking-[0.2em]">
          WEYLAND-YUTANI // ACCESS_RESTRICTED
        </p>
      </div>
    </aside>
  );
};
