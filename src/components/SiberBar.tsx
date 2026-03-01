import type { Character } from "../types/Record";
import { CardBar } from "./CardBar";

interface Props {
  characters: Character[];
  onSelectCharacter: (character: Character) => void;
}

export const SideBar = ({ characters, onSelectCharacter }: Props) => {
  return (
    <aside className="w-64 md:w-72 h-[calc(100vh-120px)] bg-black border-r border-green-900/40 overflow-y-auto overflow-x-hidden">
      <div className="sticky top-0 bg-black/95 backdrop-blur-md border-b border-green-900/50 p-4 z-10">
        <h2 className="text-lime-500 font-mono text-xs tracking-[0.3em] uppercase animate-pulse">
          Subject_Index //
        </h2>
      </div>
      <div className="flex flex-col p-2 gap-1">
        {characters.map((personaje) => (
          <div key={personaje.id} onClick={() => onSelectCharacter(personaje)}>
            <CardBar personaje={personaje} />
          </div>
        ))}
      </div>
    </aside>
  );
};
