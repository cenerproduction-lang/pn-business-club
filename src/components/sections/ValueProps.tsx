"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Handshake,
  GraduationCap,
  Briefcase,
  Calendar,
  Shield,
  Sparkles,
} from "lucide-react";

export default function ValueProps() {
  const values = [
    {
      icon: Handshake,
      title: "Networking events",
      description:
        "Mjesečni ekskluzivni događaji za upoznavanje i razmjenu iskustava sa vodećim poslovnim ljudima.",
    },
    {
      icon: GraduationCap,
      title: "Edukacije i mentorstvo",
      description:
        "Pristup workshopovima, predavanjima i mentorima iz različitih poslovnih oblasti.",
    },
    {
      icon: Briefcase,
      title: "Poslovne prilike",
      description:
        "Ekskluzivne B2B mogućnosti, partnerstava i investicija unutar zajednice.",
    },
    {
      icon: Calendar,
      title: "VIP događaji",
      description:
        "Prioritetan pristup konferencijama, seminarima i kulturnim dešavanjima.",
    },
    {
      icon: Shield,
      title: "Premium usluge",
      description:
        "Popusti kod partnera, concierge usluge i personalizovana podrška.",
    },
    {
      icon: Sparkles,
      title: "Ekskluzivna zajednica",
      description:
        "Pažljivo odabrani članovi, visoki standardi i profesionalno okruženje.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="value" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center space-y-4 mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-balance">
            Šta dobijate članstvom?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Sve što vam je potrebno za rast i razvoj vašeg biznisa na jednom mjestu
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border-2 hover:border-primary/20 group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
