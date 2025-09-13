import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import GameSearchBar from "@/components/GameSearchBar";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-300 bg-gray-100 px-10 py-5">
        <Link to="/">
          <img src={logo} alt="Ryc Games Logo" className="h-10 w-10" />
        </Link>
        <GameSearchBar />
      </nav>
    </>
  );
}
