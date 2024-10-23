"use client"; // Ensures this component is treated as a client-side component

import { useState } from "react";
import Link from "next/link";
import cssStyle from "./header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={cssStyle.navbar}>
      <div className={cssStyle.header}>
        <div className={cssStyle.logo}>
          Bashar Tech
        </div>
        <nav className={`${cssStyle.nav} ${isMenuOpen ? cssStyle.active : ""}`}>
          <ul className={cssStyle.navLinks}>
            <Link href={"/"}>
              <li id="home">Home</li>
            </Link>
            <Link href={"/about"}>
              <li id="about">About</li>
            </Link>
            <Link href={"/services"}>
              <li id="services">Services</li>
            </Link>
            <Link href={"/contact"}>
              <li id="contact">Contact</li>
            </Link>
            <Link href={"/services/web-development"}>
              <li id="contact">Web Development</li>
            </Link>
          </ul>
        </nav>
        {/* Menu Toggle Button */}
        <div
          className={`${cssStyle.menuToggle} ${isMenuOpen ? "active" : ""}`}
          onClick={handleToggle}
        >
          <div className="bar">☰</div>
        </div>
      </div>
    </div>
  );
}

