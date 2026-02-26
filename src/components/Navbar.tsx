import { Link } from "react-router-dom";
import { LogoWY } from "./ui/logo";

export const Navbar = () => {
  return (
    <nav className="py-5 text-green-500">
      <div className="flex justify-between items-center px-4">
        <div>
          <Link to="/">
            <LogoWY className="w-30 h-auto transition-colors duration-300 hover:text-lime-400 cursor-pointer" />
          </Link>
        </div>
        <div>
          <ul className="flex gap-12 text-sm tracking-widest uppercase">
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
