"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const NavBar = () => {
  const navLinks = [
    { id: 1, title: "Cocktails" },
    { id: 2, title: "About Us" },
    { id: 3, title: "The Art" },
    { id: 4, title: "Contact Us" },
  ];
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        end: "top top",
      },
    });
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
    
  });
  return (
    <nav className="">
      <div>
        <Link href="#home" className="flex items-center gap-2">
          <Image src={logo} alt="logo" />
          <p>Velvet Pour</p>
        </Link>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
