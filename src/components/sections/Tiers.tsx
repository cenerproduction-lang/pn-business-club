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
import { Check } from "lucide-react";
import Link from "next/link";

export default function Tiers() {
  const tiers = [
    {
      name: "Silver",
      plan: "silver",
      price: "150",
      description: "Idealno za početnike",
      badge: null,
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

  return (
    <section id="tiers" className="py-20 bg-secondary/20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Odaberite paket</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fleksibilni planovi prilagođeni vašim potrebama i ambicijama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`rounded-2xl shadow-lg ${
                tier.badge ? "border-primary border-2" : ""
              }`}
            >
              <CardHeader>
                {tier.badge && (
                  <Badge className="w-fit mb-2">{tier.badge}</Badge>
                )}
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">€{tier.price}</span>
                  <span className="text-muted-foreground">/mjesec</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Link href={`/apply?plan=${tier.plan}`} className="w-full">
                  <Button
                    className="w-full"
                    variant={tier.badge ? "default" : "outline"}
                  >
                    Odaberi {tier.name}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
