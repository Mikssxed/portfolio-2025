"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          to_name: "Wojtek",
          from_email: data.email,
          to_email: "wojtek.maslowski00@gmail.com",
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result.text);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="contact"
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

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#E31C79] to-[#7928CA]">
            Get In Touch
          </h2>
          <p className="text-lg text-white/60">
            Interested in working together? Feel free to reach out to me
            directly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-white/80"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      {...register("name")}
                      className={`bg-white/10 border-white/20 text-white ${
                        errors.name ? "border-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-white/80"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={`bg-white/10 border-white/20 text-white ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-white/80"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    {...register("subject")}
                    className={`bg-white/10 border-white/20 text-white ${
                      errors.subject ? "border-red-500" : ""
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-white/80"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    className={`bg-white/10 border-white/20 text-white ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#E31C79] to-[#7928CA] hover:from-[#D31C79] hover:to-[#6928CA] text-white transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {submitSuccess && (
                  <p className="mt-2 text-green-400 text-center">
                    Your message has been sent successfully!
                  </p>
                )}
                {submitError && (
                  <p className="mt-2 text-red-500 text-center">{submitError}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60">Prefer to connect on social media?</p>
          <div className="flex justify-center gap-4 mt-4">
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
              <a href="mailto:wojtek.maslowski00@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
