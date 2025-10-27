import { Card, CardContent } from "@/components/ui/card";
import { Store, Plane, Utensils, Laptop, Heart, Car } from "lucide-react";

export default function Partners() {
  const partners = [
    {
      icon: Store,
      name: "Premium Retail",
      discount: "20% popusta",
      category: "Shopping",
    },
    {
      icon: Plane,
      name: "Travel Elite",
      discount: "15% popusta",
      category: "Putovanja",
    },
    {
      icon: Utensils,
      name: "Fine Dining",
      discount: "25% popusta",
      category: "Restorani",
    },
    {
      icon: Laptop,
      name: "Tech Hub",
      discount: "30% popusta",
      category: "Tehnologija",
    },
    {
      icon: Heart,
      name: "Wellness Spa",
      discount: "20% popusta",
      category: "Zdravlje",
    },
    {
      icon: Car,
      name: "Auto Premium",
      discount: "15% popusta",
      category: "Automobili",
    },
  ];

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Naši partneri</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ekskluzivni popusti i beneficije kod vodećih brendova i provajdera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <Card
                key={index}
                className="rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {partner.category}
                    </p>
                    <p className="text-sm font-medium text-primary mt-1">
                      {partner.discount}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
