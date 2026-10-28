import React, { useState, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  
  const scrollToAnchor = useCallback((hash) => {
    const id = hash.replace(/^#/, "");
    const target = document.getElementById(id);
    if (!target) return false;

    let elementToScroll = target;
    if (id === "features") {
      const row = target.querySelector(".feature-row");
      if (row) elementToScroll = row;
    }

    const rect = elementToScroll.getBoundingClientRect();
    const targetY = window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const finalScroll = Math.max(0, Math.min(targetY, maxScroll));

    window.scrollTo({ top: finalScroll, behavior: "smooth" });
    if (window.history?.replaceState) {
      window.history.replaceState(null, "", `#${id}`);
    }
    return true;
  }, []);

  useEffect(() => {
    if (!isHome || !location.hash) return;
    const timer = setTimeout(() => scrollToAnchor(location.hash), 50);
    return () => clearTimeout(timer);
  }, [isHome, location.hash, scrollToAnchor]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 backdrop-blur-md bg-bg-primary/80 border-b border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/hourglass-bg.svg" alt="Logo" className="w-6 h-6 opacity-85 group-hover:opacity-100 transition-opacity" />
          <span className="font-semibold text-lg tracking-tight text-white">timewarp</span>
        </Link>

        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <Link to="/" className="hover:text-white transition-colors">home</Link>
          <Link to="/modules" className="hover:text-white transition-colors">modules</Link>
          <Link to="/faq" className="hover:text-white transition-colors">faq</Link>
          <a
            href="https://discord.com/invite/shW3eNaEMz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            discord
          </a>
        </nav>

        
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-medium text-text-muted hover:text-white transition-colors"
          >
            login
          </Link>
          <Link
            to="/purchase"
            className="cta-pill px-4 py-1.5 rounded-xl text-sm font-medium text-accent-pink hover:text-[#1e1e1e] transition-colors duration-500"
          >
            <span className="relative z-[1]">get timewarp</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;