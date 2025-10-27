"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingUp, Award, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="PN Business Club"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_50%)]" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto text-center space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-flex">
            <Badge className="bg-gold/20 text-gold border-gold/30 px-4 py-1.5 text-sm font-medium">
              <Sparkles className="h-3 w-3 mr-2" />
              Premium Business Network
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance"
          >
            Ekskluzivna zajednica{" "}
            <span className="text-gold">poslovnih lidera</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Povežite se sa najboljima, razvijte svoj biznis i ostvarite
            vrhunske rezultate kroz pristup ekskluzivnoj mreži lidera
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link href="/apply">
              <Button
                size="lg"
                className="gap-2 bg-gold text-primary hover:bg-gold/90 font-semibold px-8 py-6 text-lg shadow-xl shadow-gold/20"
              >
                Postanite član <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-6 text-lg"
              onClick={() =>
                document
                  .getElementById("value")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Saznajte više
            </Button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16"
          >
            <motion.div variants={cardVariants}>
              <Card className="rounded-2xl shadow-2xl bg-white/95 dark:bg-card/95 backdrop-blur-sm border-white/20 hover:shadow-gold/20 hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl">Premium Networking</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ekskluzivni pristup mreži poslovnih lidera i vizionara
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="rounded-2xl shadow-2xl bg-white/95 dark:bg-card/95 backdrop-blur-sm border-white/20 hover:shadow-gold/20 hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl">Biznis razvoj</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Edukacije, mentorstvo i ekskluzivne poslovne prilike
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="rounded-2xl shadow-2xl bg-white/95 dark:bg-card/95 backdrop-blur-sm border-white/20 hover:shadow-gold/20 hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl">VIP beneficije</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Popusti kod partnera, prioritet i ekskluzivni događaji
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
