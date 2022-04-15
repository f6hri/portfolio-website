import Brand from "./brand";
import Navs from "./navs";
import Menu from "./menu";
import Button from "../Button";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Header({ brand, routes, darkMode, toggle }) {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm">
      <div className="max-w-lg mx-auto flex flex-row items-center justify-between p-3">
        <Brand brand={brand} />
        <div className="flex items-center gap-5">
          <Navs routes={routes} />
          <button
            onClick={() => toggle(!darkMode)}
            className="text-xl bg-yellow-500 text-white p-3 rounded-lg md:bg-transparent md:text-yellow-500 md:p-0"
          >
            {darkMode === false ? <FiSun /> : <FiMoon />}
          </button>
          <Menu routes={routes} />
        </div>
      </div>
    </header>
  );
}
