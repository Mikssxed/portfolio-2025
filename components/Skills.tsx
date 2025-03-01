"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Database, Layers, PenTool } from "lucide-react";
import { useRef } from "react";

const skillCategories = [
  {
    icon: <Code className="h-10 w-10 text-[#E31C79]" />,
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Zustand",
      "Redux",
      "Tanstack Query",
      "Detox",
    ],
  },
  {
    icon: <Layers className="h-10 w-10 text-[#7928CA]" />,
    title: "UI/UX Design",
    skills: [
      "Figma",
      "Tailwind CSS",
      "Framer Motion",
      "CSS/SCSS",
      "Material-UI",
      "LESS",
      "Ant Design",
      "Responsive Design",
    ],
  },
  {
    icon: <Database className="h-10 w-10 text-[#4C1D95]" />,
    title: "Backend Integration",
    skills: [
      "RESTful APIs",
      "Supabase",
      "Postman",
      "Node.js - learning",
      "SQL - learning",
    ],
  },
  {
    icon: <PenTool className="h-10 w-10 text-[#E31C79]" />,
    title: "Tools & Others",
    skills: [
      "Git",
      "Webpack",
      "Jest",
      "Storybook",
      "Docker",
      "SEO",
      "Expo/EAS",
      "Agile-Scrum",
      "Vercel",
    ],
  },
];

export default function Skills() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="skills"
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
            My Skills
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks to create
            exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <Card className="h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group">
                <CardContent className="pt-6 relative overflow-hidden h-full">
                  <div className="text-center mb-4 relative z-10">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mt-4 mb-3">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center relative z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm py-1 bg-white/10 hover:bg-white/20 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E31C79]/10 to-[#4C1D95]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
