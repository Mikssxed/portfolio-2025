"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and Tailwind CSS, featuring product filtering, cart functionality, and payment integration.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Vercel"],
    link: "#",
  },
  {
    title: "Dashboard UI",
    description:
      "A responsive admin dashboard with dark mode, data visualization, and real-time updates using React and D3.js.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "D3.js", "TypeScript", "Firebase"],
    link: "#",
  },
  {
    title: "Travel App",
    description:
      "A travel planning application with interactive maps, itinerary builder, and social sharing features.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue.js", "Mapbox", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Portfolio Template",
    description:
      "A customizable portfolio template for developers and designers with smooth animations and responsive design.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Framer Motion", "GSAP", "Netlify"],
    link: "#",
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-20 md:py-32 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#E31C79]/5 via-[#7928CA]/5 to-[#4C1D95]/5" />

      {/* Animated background elements */}
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
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

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#E31C79] to-[#7928CA]">
            Featured Projects
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="flex-1 flex flex-col p-6 relative">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#E31C79] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs bg-white/10 text-white/80"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-gradient-to-r from-[#E31C79] to-[#7928CA] hover:from-[#D31C79] hover:to-[#6928CA] text-white transition-all duration-300"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
