import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">PN Business Club</h3>
            <p className="text-sm text-muted-foreground">
              Ekskluzivna zajednica poslovnih lidera posvećena rastu i razvoju.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Brzi linkovi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("value")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Vrijednosti
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("tiers")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Članarine
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("featured")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Članovi
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Kontakt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@pnbusiness.club</li>
              <li>+382 67 123 456</li>
              <li>Podgorica, Crna Gora</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Pratite nas</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@pnbusiness.club"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 PN Business Club. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}
