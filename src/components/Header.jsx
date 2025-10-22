// src/components/Header.jsx
import { NavLink } from "react-router-dom";

export default function Header() {
  const link =
    "px-3 py-2 rounded-md text-sm font-medium text-neutral-200 hover:bg-neutral-800";
  const active = "bg-neutral-800 text-white";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-800 bg-neutral-900/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <NavLink to="/" className="text-xl font-semibold text-white">
          Miya’s Portfolio
        </NavLink>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={({isActive}) => `${link} ${isActive ? active : ""}`}>Home</NavLink>
          <NavLink to="/data-analytics" className={({isActive}) => `${link} ${isActive ? active : ""}`}>Data Analytics</NavLink>
          <NavLink to="/biology-research" className={({isActive}) => `${link} ${isActive ? active : ""}`}>Biology Research</NavLink>
          <NavLink to="/event-planning" className={({isActive}) => `${link} ${isActive ? active : ""}`}>Event Planning</NavLink>
          <NavLink to="/art" className={({isActive}) => `${link} ${isActive ? active : ""}`}>Art</NavLink>
        </nav>

        <NavLink
          to="/contact"
          className="rounded-lg bg-rose-600 px-4 py-2 font-semibold text-white hover:bg-rose-500"
        >
          Let’s Talk
        </NavLink>
      </div>
    </header>
  );
}
