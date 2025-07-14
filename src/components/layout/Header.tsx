"use client";

import React, { useState } from "react";

interface HeaderProps {
  onBookDemo?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookDemo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-transparent backdrop-blur-md border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-white text-xl font-bold tracking-tight">
              Horizxon
            </div>
          </div>

          {/* Desktop Navigation - clean spacing */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/70 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button - minimal glass design */}
          <div className="hidden md:flex">
            <button
              onClick={onBookDemo}
              className="bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-lg font-medium border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wide"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button - clean design */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/70 hover:text-white focus:outline-none transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - glassmorphism style */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0C0B12]/90 backdrop-blur-xl border-b border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-white/70 hover:text-white transition-colors duration-300 font-medium text-sm tracking-wide py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    onBookDemo?.();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-lg font-medium border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wide"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
