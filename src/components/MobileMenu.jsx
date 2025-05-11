"use client";

import { useState } from "react";

export default function MobileMenu({ navbarItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden flex focus:outline-none"
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
        <div className="lg:hidden fixed tra inset-0 top-20 bg-primary z-50  p-4 overflow-y-auto mx-4 border border-primary rounded-4xl h-fit drop-shadow-[0_5px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col space-y-4">
            {navbarItems.map((item) => (
              <p
                key={item.name}
                className="block px-4 py-3 text-lg font-space-grotesk hover:bg-gray-100 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </p>
            ))}
            <button className="w-full border py-3 px-6 rounded-lg text-lg font-space-grotesk  hover:text-secondary border-secondary duration-300 ease-linear  mt-4">
              Request a quote
            </button>
          </div>
        </div>
      )}
    </>
  );
}
