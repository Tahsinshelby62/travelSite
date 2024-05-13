"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      {/* Desktop Links */}
      <ul className="hidden lg:flex h-full gap-12">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="regular-16 text-gray-50 cursor-pointer flexCenter pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full right-0 bg-white shadow-md rounded-lg lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 p-4">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="w-full text-center">
              <Link
                href={link.href}
                className="regular-16 text-gray-700 cursor-pointer transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Desktop Button */}
      <div className="lg:flex hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      {/* Mobile Menu Button */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
        <Image src="/menu.svg" alt="menu" width={32} height={32} />
      </button>
    </nav>
  );
};

export default Navbar;
