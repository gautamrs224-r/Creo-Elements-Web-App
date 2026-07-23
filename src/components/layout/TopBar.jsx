import { Link } from "react-router-dom";
import { FiLinkedin, FiInstagram } from "react-icons/fi";
import logo from "@/assets/logo.webp";

function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-5">
      <Link to="/" className="flex items-center gap-2">
        <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden p-1.5">
          <img src={logo} alt="Creo Elements" className="h-full w-full object-contain" />
        </div>
      </Link>

      <div className="flex items-center gap-2">
        <a
          href="#"
          aria-label="LinkedIn"
          className="h-9 w-9 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition"
        >
          <FiLinkedin className="h-4 w-4 text-ink" />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="h-9 w-9 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition"
        >
          <FiInstagram className="h-4 w-4 text-ink" />
        </a>
      </div>
    </header>
  );
}

export default TopBar;