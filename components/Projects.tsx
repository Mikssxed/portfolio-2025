"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    title: "Shoe shop",
    description:
      "A modern shoe shop built with Next.js and Tailwind CSS, featuring product filtering, cart functionality, authentiaction and payment integration.",
    image: "/shoe-shop.png",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Vercel", "Next Auth"],
    demoLink: "https://shoes-shop-t1.vercel.app/",
    codeLink: "https://github.com/Mikssxed/shoe-shop",
    position: "left",
  },
  {
    title: "AI Summarizer",
    description:
      "Summarize articles with this AI-powered text summarizer built with React and the OpenAI API.",
    image: "/ai-summ.png",
    tags: ["React", "Redux", "JavaScript", "RapidAPI"],
    demoLink: "https://ai-summarizer-wm.netlify.app/",
    codeLink: "https://github.com/Mikssxed/ai-summarizer",
  },
  {
    title: "Minecraft Web",
    description:
      "Very basic minecraft created with Three.js and React. You can move around and build blocks.",
    image: "/minecraft.png",
    tags: ["React", "Three.js", "JavaScript", "Vite"],
    demoLink: "https://minecrafttestwmwm.netlify.app/",
    codeLink: "https://github.com/Mikssxed/minecraft-success",
  },
  {
    title: "Self Grind [IN PROGRESS]",
    description:
      "Self development app that helps you to track your progress and set goals. While you are doing your tasks you can earn stats for your character.",
    image: "/self-grind.png",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
    demoLink: "https://self-grind.vercel.app",
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
                    className={cn(
                      "object-cover object-center transition-transform duration-500 group-hover:scale-105 h-full",
                      project.position === "left" && "object-left"
                    )}
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
                  <div className="flex gap-2 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-white/5 hover:bg-white/10 transition-colors duration-300"
                      asChild
                    >
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={cn(
                        "flex-1 bg-white/5 hover:bg-white/10 transition-colors duration-300",
                        !project.codeLink && "opacity-50 cursor-not-allowed"
                      )}
                      asChild
                    >
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code <Github className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
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
              href="https://github.com/Mikssxed?tab=repositories"
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
