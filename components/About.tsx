"use client";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-32 px-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div className="absolute inset-0 " style={{ y, opacity }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto md:ml-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#E31C79]/20 to-[#4C1D95]/20 -z-10 transform rotate-3" />
              <div className="absolute inset-0 rounded-2xl border border-[#7928CA]/10 transform -rotate-3" />
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/photo.jpg"
                  alt="wojtek maslowski"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#E31C79] to-[#7928CA]">
              About Me
            </h2>
            <p className="text-lg text-white/80 mb-6">
              I'm a passionate frontend developer with 2+ years of experience
              creating beautiful, responsive, and user-friendly web applications
              with Next.js, React Native, and TypeScript. I thrive in fast-paced
              environments, collaborating daily with clients, designers, PMs,
              and QA teams in English. Currently, I’m expanding my skill set
              with Node.js and SQL to transition into a full-stack role.
            </p>
            <p className="text-lg text-white/80 mb-8">
              When I'm not coding, I enjoy indoor climbing, gaming, and
              exploring new technologies.
            </p>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <a
                  href="https://github.com/Mikssxed"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <a
                  href="https://www.linkedin.com/in/wojciech-maslowski-wm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <a
                  href="mailto:wojtek.maslowski00@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
