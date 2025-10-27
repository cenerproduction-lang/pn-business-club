"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingUp, Award } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center space-y-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Eksluzivna zajednica{" "}
            <span className="text-primary">biznismena</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Povežite se sa najboljima, razvijte svoj biznis i ostvarite
            vrhunske rezultate kroz pristup ekskluzivnoj mreži lidera.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/apply">
              <Button size="lg" className="gap-2">
                Postani član <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("tiers")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Pogledaj članarine
            </Button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <motion.div variants={itemVariants}>
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="font-bold text-lg">Premium Networking</h3>
                  <p className="text-sm text-muted-foreground">
                    Ekskluzivni pristup mreži poslovnih lidera
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                  <TrendingUp className="h-12 w-12 text-primary" />
                  <h3 className="font-bold text-lg">Biznis razvoj</h3>
                  <p className="text-sm text-muted-foreground">
                    Edukacije, mentorinzi i poslovne prilike
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                  <Award className="h-12 w-12 text-primary" />
                  <h3 className="font-bold text-lg">VIP beneficije</h3>
                  <p className="text-sm text-muted-foreground">
                    Popusti, prioritet i ekskluzivni događaji
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
