"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground overflow-hidden"
    >
      {/* Animated background */}
      <div className="fixed inset-0 z-[-1]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-background to-background"
          style={{ y: backgroundY }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/grid.svg')",
            backgroundSize: "50px 50px",
            y: textY,
          }}
        />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Wojtek Masłowski. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with ❤️ using Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
