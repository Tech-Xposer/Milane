"use client";
import Hero from "@/components/Hero";

import Services from "@/components/Services";
import About from "@/components/About";
import Dishes from "@/components/Dishes";
import StaticMenu from "@/components/StaticMenu";
import Testinomials from "@/components/Testinomials";
import Reservation from "@/components/Reservation";
import Event from "@/components/Event";
import { useState } from "react";
import Menu from "@/components/Menu";
import Features from "@/components/Features";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    document.body.style.overflowY = menuOpen ? "auto" : "hidden";
    setMenuOpen(!menuOpen);
  };
  return (
    <main>
      <article>
        <Hero toggleMenu={handleToggleMenu} />
        <Services toggleMenu={handleToggleMenu} />
        <About />
        <Dishes toggleMenu={handleToggleMenu} />
        <StaticMenu toggleMenu={handleToggleMenu} />
        <Testinomials />
        <Reservation />
        <Features />
        <Event />
      </article>
      {menuOpen && <Menu toggleMenu={handleToggleMenu} />}
    </main>
  );
}
