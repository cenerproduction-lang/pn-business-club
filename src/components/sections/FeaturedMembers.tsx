import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";

export default function FeaturedMembers() {
  const members = [
    {
      name: "Marko Petrović",
      company: "TechVision d.o.o.",
      industry: "IT & Tech",
      tier: "Platinum",
    },
    {
      name: "Ana Jovanović",
      company: "Green Solutions",
      industry: "Održiva energija",
      tier: "Gold",
    },
    {
      name: "Stefan Nikolić",
      company: "Capital Ventures",
      industry: "Investicije",
      tier: "Platinum",
    },
    {
      name: "Jelena Dimitrijević",
      company: "Creative Studio",
      industry: "Marketing",
      tier: "Gold",
    },
    {
      name: "Nikola Stojanović",
      company: "Real Estate Pro",
      industry: "Nekretnine",
      tier: "Silver",
    },
    {
      name: "Milica Pavlović",
      company: "Fashion House",
      industry: "Moda & Dizajn",
      tier: "Gold",
    },
  ];

  return (
    <section id="featured" className="py-20 bg-secondary/20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Naši članovi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upoznajte neke od lidera koji su dio PN Business Club zajednice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <Card key={index} className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary">{member.tier}</Badge>
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {member.company}
                </p>
                <p className="text-xs text-muted-foreground">
                  {member.industry}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
