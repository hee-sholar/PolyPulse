import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Events", href: "#events" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Community", href: "#community" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0f3d25]/90 backdrop-blur-md shadow-lg" : "bg-[#0f3d25]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_15px_#22c55e]">
              <span className="font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-extrabold text-green-300">
              ButanolCoin
            </span>
          </a>

          {/* Center Menu (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center space-x-8 font-semibold text-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right CTA Button (Desktop) */}
          <div className="hidden md:flex">
            <a
              href="#buy"
              className="ml-4 px-4 py-2 rounded-full border border-green-400 text-green-400 hover:bg-green-500 hover:text-white transition"
            >
              BUY $BUTA
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-green-300 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0f3d25]/95 px-4 pb-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg font-semibold hover:text-green-400 transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#buy"
            className="block text-center px-4 py-2 rounded-full border border-green-400 text-green-400 hover:bg-green-500 hover:text-white transition"
          >
            BUY $BUTA
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
