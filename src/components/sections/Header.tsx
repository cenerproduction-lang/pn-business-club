"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="font-bold text-xl md:text-2xl font-serif tracking-tight group-hover:text-primary transition-colors">
            PN <span className="text-gold">Business</span> Club
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8" aria-label="Glavna navigacija">
          <button
            onClick={() => scrollToSection("value")}
            className="text-sm font-medium hover:text-primary transition-colors relative group"
          >
            <span className="relative z-10">Vrijednosti</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection("tiers")}
            className="text-sm font-medium hover:text-primary transition-colors relative group"
          >
            <span className="relative z-10">Članarine</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection("how")}
            className="text-sm font-medium hover:text-primary transition-colors relative group"
          >
            <span className="relative z-10">Kako funkcioniše</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection("featured")}
            className="text-sm font-medium hover:text-primary transition-colors relative group"
          >
            <span className="relative z-10">Članovi</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection("partners")}
            className="text-sm font-medium hover:text-primary transition-colors relative group"
          >
            <span className="relative z-10">Partneri</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
          </button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mr-2"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Link href="/apply">
            <Button className="bg-gold text-primary hover:bg-gold/90 font-semibold">
              Prijavi se
            </Button>
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Otvori meni"
            aria-expanded={mobileMenuOpen}
            className="p-2"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden border-t bg-background/95 backdrop-blur-xl p-6 space-y-4 shadow-lg" aria-label="Mobilna navigacija">
          <button
            onClick={() => scrollToSection("value")}
            className="block w-full text-left text-sm font-medium hover:text-primary transition-colors py-2"
          >
            Vrijednosti
          </button>
          <button
            onClick={() => scrollToSection("tiers")}
            className="block w-full text-left text-sm font-medium hover:text-primary transition-colors py-2"
          >
            Članarine
          </button>
          <button
            onClick={() => scrollToSection("how")}
            className="block w-full text-left text-sm font-medium hover:text-primary transition-colors py-2"
          >
            Kako funkcioniše
          </button>
          <button
            onClick={() => scrollToSection("featured")}
            className="block w-full text-left text-sm font-medium hover:text-primary transition-colors py-2"
          >
            Članovi
          </button>
          <button
            onClick={() => scrollToSection("partners")}
            className="block w-full text-left text-sm font-medium hover:text-primary transition-colors py-2"
          >
            Partneri
          </button>
          <Link href="/apply">
            <Button className="w-full bg-gold text-primary hover:bg-gold/90 font-semibold mt-4">
              Prijavi se
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
}
