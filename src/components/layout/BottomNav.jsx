import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "@/data/navItems";

function BottomNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop / tablet: full pill navigation */}
      <nav className="hidden sm:block fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pill-nav px-3 py-2 max-w-[calc(100vw-1rem)]">
        <ul className="flex items-center gap-1 text-white text-sm md:text-[15px] font-semibold overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <li key={item.label} className="shrink-0">
              <NavLink
                to={item.to}
                end
                className={({ isActive }) =>
                  `block px-3 md:px-5 py-2 rounded-full hover:bg-white/10 transition-colors whitespace-nowrap ${
                    isActive ? "bg-white/15" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile: single menu button, same fixed bottom-center position */}
      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        aria-expanded={menuOpen}
        className="sm:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 h-14 w-14 rounded-full pill-nav flex items-center justify-center text-white"
      >
        <FiMenu className="h-6 w-6" />
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="sm:hidden fixed inset-0 z-[60] bg-dark/95 backdrop-blur-md flex flex-col">
          <div className="flex justify-end px-5 pt-5">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center text-white"
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex-1 flex flex-col items-center justify-center gap-6 text-white text-2xl font-black">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  end
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => (isActive ? "teal-text" : "")}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default BottomNav;
