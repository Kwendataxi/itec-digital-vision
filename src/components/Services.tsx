import { motion } from "framer-motion";
import { Users, Hammer, Cpu, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import constructionImg from "@/assets/construction.jpg";
import technologyImg from "@/assets/technology.jpg";
import electricalImg from "@/assets/electrical.jpg";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Gestion des Ressources Humaines",
      description: "Solutions complètes pour vos besoins en personnel",
      features: [
        "Recrutement et placement de personnel",
        "Gestion de la paie et administration",
        "Suivi quotidien du personnel",
        "Déclarations fiscales et sociales",
        "Prise en charge médicale",
        "Visas & permis de travail",
      ],
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Hammer,
      title: "Génie Civil & Construction",
      description: "Expertise en construction et infrastructures",
      features: [
        "Construction de routes et bâtiments",
        "Ponts et ouvrages d'art",
        "Canalisation et curage",
        "Maintenance technique",
        "Housekeeping & espaces verts",
      ],
      image: constructionImg,
      gradient: "from-primary to-primary-light",
    },
    {
      icon: Cpu,
      title: "Nouvelles Technologies & Topographie",
      description: "Solutions technologiques avancées",
      features: [
        "Cubage des remblais",
        "Levés topographiques",
        "Implantation et alignement",
        "Alarmes anti-intrusion / anti-feu",
        "Vidéosurveillance",
        "Contrôle intelligent d'accès",
      ],
      image: technologyImg,
      gradient: "from-accent to-primary",
    },
    {
      icon: Zap,
      title: "Électricité & Fournitures",
      description: "Solutions énergétiques complètes",
      features: [
        "Production, transport, distribution",
        "Installation électrique",
        "Maintenance électrique",
        "Fourniture de matériaux",
        "Produits alimentaires et de bureau",
      ],
      image: electricalImg,
      gradient: "from-primary-light to-accent",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos Domaines d'<span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions complètes et personnalisées pour répondre à tous vos besoins
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-elegant transition-all duration-300 overflow-hidden h-full">
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60`} />
                  </div>
                )}
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
