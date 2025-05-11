"use client";

import { useState } from "react";

export default function MobileMenu({ navbarItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden visible focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 mt-16 p-4 overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {navbarItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-lg font-space-grotesk hover:bg-gray-100 rounded transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full border py-3 px-6 rounded-lg text-lg font-space-grotesk hover:bg-primary hover:text-secondary border-secondary duration-300 ease-linear hover:border-tertiary mt-4">
              Request a quote
            </button>
          </div>
        </div>
      )}
    </>
  );
}
