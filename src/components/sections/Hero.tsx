"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  const scrollToValue = () => {
    const el = document.getElementById("value");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-[70vh] grid place-items-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Business Club"
        fill
        priority
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 -z-10" />
      <div className="text-center text-white px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold">Poslovne novine Business Club</h1>
        <p className="mt-4 opacity-90">
          Mreža članova, benefita i prilika — na jednom mjestu.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/apply"><Button size="lg">Become a member</Button></Link>
          <Button size="lg" variant="outline" onClick={scrollToValue}>See benefits</Button>
        </div>
      </div>
    </section>
  );
}
