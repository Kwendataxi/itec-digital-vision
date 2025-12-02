import { motion } from "framer-motion";
import { 
  Calendar, 
  Users2, 
  Shield, 
  Wrench, 
  HeadphonesIcon, 
  Globe 
} from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Calendar,
      title: "15+ ans d'expérience",
      description: "Une expertise éprouvée dans tous nos domaines",
    },
    {
      icon: Users2,
      title: "Équipe multidisciplinaire",
      description: "Des experts qualifiés pour chaque projet",
    },
    {
      icon: Shield,
      title: "Haute fiabilité",
      description: "Respect des normes et standards internationaux",
    },
    {
      icon: Wrench,
      title: "Solutions sur mesure",
      description: "Adaptées à vos besoins spécifiques",
    },
    {
      icon: HeadphonesIcon,
      title: "Support permanent",
      description: "Assistance technique 24/7",
    },
    {
      icon: Globe,
      title: "Couverture nationale & internationale",
      description: "Présents où vous avez besoin de nous",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pourquoi choisir <span className="text-gradient">ITEC</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Les raisons qui font de nous votre partenaire de confiance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all h-full border border-border hover:border-primary/50">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-primary rounded-3xl p-12"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Années d'expérience" },
              { number: "200+", label: "Projets réalisés" },
              { number: "50+", label: "Clients satisfaits" },
              { number: "100+", label: "Experts qualifiés" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
