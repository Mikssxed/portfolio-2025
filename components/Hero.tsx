"use client";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  if (typeof window === "undefined") return null;

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E31C79] via-[#7928CA] to-[#4C1D95] opacity-20" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random(),
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Animated geometric shapes */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#E31C79] mix-blend-multiply filter blur-[128px] opacity-50"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-[#7928CA] mix-blend-multiply filter blur-[128px] opacity-50"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Animated grid with gradient overlay */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              className="border-[0.5px] border-white/5 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.01 }}
            />
          ))}
        </div>

        {/* Gradient lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"
              style={{ top: `${(i + 1) * 20}%` }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scaleX: [0.95, 1, 0.95],
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium"
        >
          Frontend Developer & Future Fullstack
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="inline-block">
            Hi, I'm{" "}
            <span className="bg-clip-text block text-transparent bg-gradient-to-r from-[#E31C79] via-[#7928CA] to-[#4C1D95] relative">
              Wojtek Masłowski
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E31C79] via-[#7928CA] to-[#4C1D95]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/80 max-w-2xl mx-auto"
        >
          I build{" "}
          <span className="text-[#E31C79] font-semibold">beautiful</span>,{" "}
          <span className="text-[#7928CA] font-semibold">responsive</span>, and{" "}
          <span className="text-[#4C1D95] font-semibold">user-friendly</span>{" "}
          web experiences
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#E31C79] to-[#7928CA] hover:from-[#D31C79] hover:to-[#6928CA] border-0 text-white shadow-lg shadow-primary/25 relative overflow-hidden group"
          >
            <Link href="#contact" className="flex items-center">
              Get in Touch
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="ml-2"
              >
                →
              </motion.div>
            </Link>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 relative overflow-hidden group"
          >
            <Link href="#projects">View Projects</Link>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-white/60 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/20 rounded-full relative"
          >
            <div className="absolute top-2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/20 z-0" />
    </section>
  );
}
