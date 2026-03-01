import { Link } from "react-router-dom";
import { LogoWY } from "./ui/logo";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md py-4 md:py-5 text-green-500 border-b border-green-900/30">
      <div className="flex justify-between items-center px-2 md:px-4">
        <div>
          <Link to="/">
            <LogoWY className="w-20 md:w-30 h-auto transition-colors duration-300 hover:text-lime-400 cursor-pointer" />
          </Link>
        </div>
        <div>
          <ul className="flex gap-4 md:gap-12 text-[10px] md:text-sm tracking-widest uppercase items-center">
            <li>
              <Link
                to="/Cronologia"
                className="transition-all duration-300 hover:border-b-2 hover:border-lime-400 pb-1 hover:text-lime-400"
              >
                Cronología
              </Link>
            </li>
            <li>
              <Link
                to="/Personajes"
                className="transition-all duration-300 hover:border-b-2 hover:border-lime-400 pb-1 hover:text-lime-400"
              >
                Personajes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
