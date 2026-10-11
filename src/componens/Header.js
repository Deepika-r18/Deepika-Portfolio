import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const closeMenu = () => setToggleMenu(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100
      bg-white/95 backdrop-blur-md font-hero-font">

      <div className="relative mx-auto flex max-w-7xl
        items-center justify-center px-5 py-5 md:px-12">

        {/* Centered Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center justify-center gap-8
            lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative py-2 text-sm font-medium
                    transition duration-300
                    after:absolute after:bottom-0 after:left-0
                    after:h-0.5 after:w-0 after:bg-pink-500
                    after:transition-all after:duration-300
                    hover:text-pink-600 hover:after:w-full
                    ${
                      link.href === "#contact"
                        ? "rounded-full border border-pink-500 px-5 py-2.5 text-pink-600 after:hidden hover:bg-pink-500 hover:text-white"
                        : "text-gray-700"
                    }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="absolute right-5 rounded-lg p-2 text-gray-700
            transition hover:bg-pink-50 hover:text-pink-600 md:hidden"
          aria-label={
            toggleMenu ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={toggleMenu}
        >
          {toggleMenu ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {toggleMenu && (
          <nav className="absolute left-0 top-full w-full
            border-t border-gray-100 bg-white px-6 py-5
            shadow-lg md:hidden">
            <ul className="flex flex-col items-center gap-5
              text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`transition duration-300 hover:text-pink-600 ${
                      link.href === "#contact"
                        ? "font-semibold text-pink-600"
                        : "text-gray-700"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
