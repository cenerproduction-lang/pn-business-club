import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Handshake,
  GraduationCap,
  Briefcase,
  Calendar,
  Shield,
  Sparkles,
} from "lucide-react";

export default function ValueProps() {
  const values = [
    {
      icon: Handshake,
      title: "Networking events",
      description:
        "Mjesečni ekskluzivni događaji za upoznavanje i razmjenu iskustava sa vodećim poslovnim ljudima.",
    },
    {
      icon: GraduationCap,
      title: "Edukacije i mentorstvo",
      description:
        "Pristup workshopovima, predavanjima i mentorima iz različitih poslovnih oblasti.",
    },
    {
      icon: Briefcase,
      title: "Poslovne prilike",
      description:
        "Ekskluzivne B2B mogućnosti, partnerstava i investicija unutar zajednice.",
    },
    {
      icon: Calendar,
      title: "VIP događaji",
      description:
        "Prioritetan pristup konferencijama, seminarima i kulturnim dešavanjima.",
    },
    {
      icon: Shield,
      title: "Premium usluge",
      description:
        "Popusti kod partnera, concierge usluge i personalizovana podrška.",
    },
    {
      icon: Sparkles,
      title: "Ekskluzivna zajednica",
      description:
        "Pažljivo odabrani članovi, visoki standardi i profesionalno okruženje.",
    },
  ];

  return (
    <section id="value" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Šta dobijate članstvom?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sve što vam je potrebno za rast i razvoj vašeg biznisa na jednom mjestu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <Icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
