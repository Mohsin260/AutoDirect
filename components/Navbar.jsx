"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

// Menu items for the navbar
const menuItems = [
  { name: "Home", href: "/" },
  { name: "Inventory", href: "/cars" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  // State to control mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);
  // Get current route for active link styling
  const pathname = usePathname();

  // Helper to determine if a link is active
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="w-full flex justify-center items-center relative">
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-base font-medium">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={clsx(
                "relative transition-colors duration-200 px-2 py-1",
                isActive(item.href) ? "text-red-600" : "text-gray-800",
                "hover:text-blue-600"
              )}
            >
              {item.name}
              {/* Red underline for active/hover state */}
              <span
                className={clsx(
                  "absolute left-0 -bottom-1 w-full h-0.5 transition-all duration-200",
                  isActive(item.href)
                    ? "bg-red-600 block"
                    : "bg-transparent hidden group-hover:block"
                )}
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon for Mobile */}
      <button
        className={clsx(
          "md:hidden p-2 focus:outline-none absolute right-0",
          menuOpen && "hidden"
        )}
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
          <div className="w-64 h-full flex flex-col my-3">
            <button
              className="self-end mb-6 p-2"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={28} />
            </button>
            <ul className="flex flex-col space-y-8 py-5 text-lg font-medium bg-black/40">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "relative block px-2 py-1 transition-colors duration-200",
                      isActive(item.href) ? "text-blue-600" : "text-white",
                      "hover:text-red-600"
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                    <span
                      className={clsx(
                        "absolute left-0 -bottom-1 w-full h-0.5 transition-all duration-200",
                        isActive(item.href)
                          ? "bg-red-600 block"
                          : "bg-transparent"
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
