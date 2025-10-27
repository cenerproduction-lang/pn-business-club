import { Card, CardContent } from "@/components/ui/card";
import { FileText, UserCheck, CreditCard, Sparkles } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: "1. Prijavite se",
      description:
        "Popunite formular sa osnovnim podacima o vama i vašem biznisu.",
    },
    {
      icon: UserCheck,
      title: "2. Verifikacija",
      description:
        "Naš tim će pregledati vašu prijavu i kontaktirati vas u roku od 48h.",
    },
    {
      icon: CreditCard,
      title: "3. Odaberite plan",
      description:
        "Izaberite članstvo koje najbolje odgovara vašim potrebama i ciljevima.",
    },
    {
      icon: Sparkles,
      title: "4. Postanite član",
      description:
        "Dobijte pristup svim beneficijama i počnite da gradite vašu mrežu odmah!",
    },
  ];

  return (
    <section id="how" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Kako postati član?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jednostavan proces u četiri koraka do ekskluzivnog članstva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
