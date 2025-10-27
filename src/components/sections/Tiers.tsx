"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Crown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Tiers() {
  const tiers = [
    {
      name: "Silver",
      plan: "silver",
      price: "150",
      description: "Idealno za početnike",
      badge: null,
      image: "/images/tiers/basic.jpg",
      features: [
        "Pristup mjesečnim networking eventima",
        "Online edukativni sadržaji",
        "Member directory",
        "Popusti kod partnera (10%)",
        "Email podrška",
      ],
    },
    {
      name: "Gold",
      plan: "gold",
      price: "300",
      description: "Najpopularniji paket",
      badge: "Najpopularnije",
      image: "/images/tiers/pro.jpg",
      features: [
        "Sve iz Silver paketa",
        "VIP pristup svim događajima",
        "Individualno mentorstvo (2h/mj)",
        "Popusti kod partnera (20%)",
        "Prioritet za nove poslovne prilike",
        "Concierge usluge",
      ],
    },
    {
      name: "Platinum",
      plan: "platinum",
      price: "500",
      description: "Za lidere koji žele najbolje",
      badge: "Premium",
      image: "/images/tiers/elite.jpg",
      features: [
        "Sve iz Gold paketa",
        "Personalizovani razvojni plan",
        "Neograničeno mentorstvo",
        "Popusti kod partnera (30%)",
        "Ekskluzivni CEO roundtable",
        "Prednost kod investicija i partnerstava",
        "24/7 premium podrška",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="tiers" className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Odaberite paket</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Fleksibilni planovi prilagođeni vašim potrebama i ambicijama
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {tiers.map((tier, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card
                className={`rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col ${
                  tier.badge ? "border-gold border-2 ring-2 ring-gold/20 scale-105" : "border-2"
                }`}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={tier.image}
                    alt={tier.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  {tier.badge && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gold text-primary border-0 px-3 py-1">
                        <Crown className="h-3 w-3 mr-1" />
                        {tier.badge}
                      </Badge>
                    </div>
                  )}
                </div>
              <CardHeader className="flex-grow">
                <CardTitle className="text-3xl">{tier.name}</CardTitle>
                <CardDescription className="text-base">{tier.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-primary">€{tier.price}</span>
                  <span className="text-muted-foreground text-lg">/mjesec</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Link href={`/apply?plan=${tier.plan}`} className="w-full">
                  <Button
                    className={`w-full py-6 text-base font-semibold ${
                      tier.badge ? "bg-gold text-primary hover:bg-gold/90" : ""
                    }`}
                    variant={tier.badge ? "default" : "outline"}
                  >
                    Odaberi {tier.name}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
