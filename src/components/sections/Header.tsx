"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">PN Business Club</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" aria-label="Glavna navigacija">
          <button
            onClick={() => scrollToSection("value")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Vrijednosti
          </button>
          <button
            onClick={() => scrollToSection("tiers")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Članarine
          </button>
          <button
            onClick={() => scrollToSection("how")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Kako funkcioniše
          </button>
          <button
            onClick={() => scrollToSection("featured")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Članovi
          </button>
          <button
            onClick={() => scrollToSection("partners")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Partneri
          </button>
          <Link href="/apply">
            <Button>Prijavi se</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Otvori meni"
          aria-expanded={mobileMenuOpen}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t bg-background p-4 space-y-4" aria-label="Mobilna navigacija">
          <button
            onClick={() => scrollToSection("value")}
            className="block w-full text-left text-sm font-medium hover:text-primary transition-colors"
          >
            Vrijednosti
          </button>
          <button
            onClick={() => scrollToSection("tiers")}
            className="block w-full text-left text-sm font-medium hover:text-primary transition-colors"
          >
            Članarine
          </button>
          <button
            onClick={() => scrollToSection("how")}
            className="block w-full text-left text-sm font-medium hover:text-primary transition-colors"
          >
            Kako funkcioniše
          </button>
          <button
            onClick={() => scrollToSection("featured")}
            className="block w-full text-left text-sm font-medium hover:text-primary transition-colors"
          >
            Članovi
          </button>
          <button
            onClick={() => scrollToSection("partners")}
            className="block w-full text-left text-sm font-medium hover:text-primary transition-colors"
          >
            Partneri
          </button>
          <Link href="/apply">
            <Button className="w-full">Prijavi se</Button>
          </Link>
        </nav>
      )}
    </header>
  );
}
