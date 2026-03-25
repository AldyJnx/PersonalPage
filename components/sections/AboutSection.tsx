"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG, TECH_STACK } from "@/lib/constants";

export function AboutSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {SITE_CONFIG.author.bio}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <motion.h3
              variants={item}
              className="text-xl font-semibold mb-4 text-center"
            >
              Technologies I work with
            </motion.h3>
            <motion.div
              variants={container}
              className="flex flex-wrap gap-2 justify-center"
            >
              {TECH_STACK.map((tech) => (
                <motion.div key={tech.name} variants={item}>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    {tech.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
