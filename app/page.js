"use client";
import { useEffect } from 'react';
import Hero from "./pages/hero";
import About from "./pages/about";
import Skills from "./pages/skills";
import Education from "./pages/education";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="w-full bg-[#060518] py-12">
        <About />
      </section>
      <section id="education" className="w-full bg-[#060518] py-12">
        <Education />
      </section>
      <section id="skills" className="w-full bg-[#060518] py-12">
        <Skills />
      </section>
      <section
        id="projects"
        className="w-full py-12 bg-[#060518] relative"
      >
        <Projects />
      </section>
      <section id="contact" className="w-full py-12 bg-[#060518] relative">
        <Contact />
      </section>
    </main>
  );
}