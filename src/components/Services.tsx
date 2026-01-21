import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Hammer, Cpu, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import { useRef } from "react";
import constructionImg from "@/assets/construction.jpg";
import technologyImg from "@/assets/technology.jpg";
import electricalImg from "@/assets/electrical.jpg";

// Sub-component for parallax image effect
const ServiceImageWithParallax = ({ 
  image, 
  title, 
  color, 
  scrollYProgress 
}: { 
  image: string; 
  title: string; 
  color: string;
  scrollYProgress: any;
}) => {
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  
  return (
    <div className="relative h-48 md:h-56 overflow-hidden">
      <motion.img
        src={image}
        alt={title}
        className="w-full h-[120%] object-cover"
        style={{ y: imageY }}
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-50 group-hover:opacity-40 transition-opacity duration-500`} />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const services = [
    {
      icon: Users,
      title: "Gestion des Ressources Humaines",
      description: "Solutions complètes pour vos besoins en personnel",
      slug: "rh",
      features: [
        "Recrutement et placement de personnel",
        "Gestion de la paie et administration",
        "Suivi quotidien du personnel",
        "Déclarations fiscales et sociales",
        "Prise en charge médicale",
        "Visas & permis de travail",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Hammer,
      title: "Génie Civil & Construction",
      description: "Expertise en construction et infrastructures",
      slug: "genie-civil",
      features: [
        "Construction de routes et bâtiments",
        "Ponts et ouvrages d'art",
        "Canalisation et curage",
        "Maintenance technique",
        "Housekeeping & espaces verts",
      ],
      image: constructionImg,
      color: "from-primary to-primary-light",
    },
    {
      icon: Cpu,
      title: "Nouvelles Technologies & Topographie",
      description: "Solutions technologiques avancées",
      slug: "technologies",
      features: [
        "Cubage des remblais",
        "Levés topographiques",
        "Implantation et alignement",
        "Alarmes anti-intrusion / anti-feu",
        "Vidéosurveillance",
        "Contrôle intelligent d'accès",
      ],
      image: technologyImg,
      color: "from-accent to-primary",
    },
    {
      icon: Zap,
      title: "Électricité & Fournitures",
      description: "Solutions énergétiques complètes",
      slug: "electricite",
      features: [
        "Production, transport, distribution",
        "Installation électrique",
        "Maintenance électrique",
        "Fourniture de matériaux",
        "Produits alimentaires et de bureau",
      ],
      image: electricalImg,
      color: "from-primary-light to-accent",
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos expertises
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos Domaines d'<span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions complètes et personnalisées pour répondre à tous vos besoins
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-elegant transition-all duration-500 overflow-hidden h-full border-border/50 hover:border-primary/30 gradient-border bg-card">
                {service.image && (
                  <ServiceImageWithParallax 
                    image={service.image} 
                    title={service.title} 
                    color={service.color}
                    scrollYProgress={scrollYProgress}
                  />
                )}
                <CardContent className="p-6 md:p-8">
                  <motion.div 
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 + featureIndex * 0.05 }}
                        className="flex items-start gap-3 text-sm text-muted-foreground group/item"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform`} />
                        <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.div 
                    className="mt-6 pt-6 border-t border-border/50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link 
                      to={`/services/${service.slug}`}
                      className="text-primary font-semibold text-sm flex items-center gap-2 group/btn hover:gap-3 transition-all"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
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