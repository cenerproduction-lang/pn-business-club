"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (hash: string) => {
    // Ako smo na /, scrollaj; inače otvori /
    if (pathname === "/") {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = `/${hash}`;
    }
  };

  return (
    <header className={`sticky top-0 z-40 backdrop-blur ${scrolled ? "bg-white/60 dark:bg-neutral-900/60 shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">Business Club</Link>
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => go("#value")} className="hover:underline">Value</button>
          <button onClick={() => go("#tiers")} className="hover:underline">Tiers</button>
          <button onClick={() => go("#how")} className="hover:underline">How it works</button>
          <button onClick={() => go("#members")} className="hover:underline">Members</button>
          <button onClick={() => go("#partners")} className="hover:underline">Partners</button>
        </nav>
        <Link href="/apply">
          <Button>Apply</Button>
        </Link>
      </div>
    </header>
  );
}
