import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, Award } from "lucide-react";
import teamImage from "@/assets/team-itec.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Savoir-faire & Qualité",
      description: "Excellence technique dans chaque projet",
    },
    {
      icon: Users,
      title: "Disponibilité",
      description: "À l'écoute de vos besoins 24/7",
    },
    {
      icon: Target,
      title: "Engagement",
      description: "Respect de nos engagements et délais",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            À propos de <span className="text-gradient">ITEC</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un partenaire de confiance pour vos projets d'ingénierie et de construction
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={teamImage}
                alt="Équipe ITEC"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Notre Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Accompagner nos clients dans un marché en constante évolution
                technologique, en garantissant des prestations fiables et adaptées.
                Nous nous engageons à offrir des solutions innovantes qui répondent
                aux défis du monde moderne.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">15+ ans d'expertise</h4>
                  <p className="text-sm text-muted-foreground">
                    Une expérience solide dans tous nos domaines d'intervention
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Solutions sur mesure</h4>
                  <p className="text-sm text-muted-foreground">
                    Adaptées aux besoins spécifiques de chaque client
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all group"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
