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
      <div className="header">
        <div className="logo">
          Bashar Tech
        </div>
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-links">
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
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={handleToggle}
        >
          <div className="bar">☰</div>
        </div>
      </div>
    </div>
  );
}
