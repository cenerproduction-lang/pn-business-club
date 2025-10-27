"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Spremni da postanete dio elite?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Pridružite se stotinama uspješnih preduzetnika i lidera koji su već
          dio PN Business Club zajednice. Vaša biznis transformacija počinje ovdje.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/apply">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 text-primary"
            >
              Započnite prijavu <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() =>
              document
                .getElementById("tiers")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Uporedi planove
          </Button>
        </div>
      </div>
    </section>
  );
}
