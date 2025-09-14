import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import GameSearchBar from "@/components/GameSearchBar";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-300 bg-gray-100 px-20 py-5 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100 dark:border-b-gray-700">
        <Link to="/">
          <img src={logo} alt="Ryc Games Logo" className="h-10 w-10" />
        </Link>
        <div className="flex items-center justify-center gap-4">
          <GameSearchBar />
          <DarkModeToggle />
        </div>
      </nav>
    </>
  );
}
