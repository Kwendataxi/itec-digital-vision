import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle2, Target, Users, Award } from "lucide-react";
import teamImage from "@/assets/team-itec.jpg";

const useCountUp = (end: number, duration: number = 2, start: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);
  
  return count;
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const yearsCount = useCountUp(15, 2, isInView);
  const projectsCount = useCountUp(200, 2.5, isInView);

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
    <section id="about" className="py-24 md:py-32 bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full mesh-gradient opacity-30 pointer-events-none" />
      
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
            Qui sommes-nous
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            À propos de <span className="text-gradient">ITEC</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un partenaire de confiance pour vos projets d'ingénierie et de construction
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={teamImage}
                alt="Équipe ITEC professionnelle"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:right-6 glass-card rounded-2xl p-4 md:p-6 shadow-elegant"
            >
              <div className="text-3xl md:text-4xl font-black text-primary">{yearsCount}+</div>
              <div className="text-sm text-muted-foreground font-medium">Années d'expertise</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-6 -left-6 md:left-6 glass-card rounded-2xl p-4 md:p-6 shadow-elegant"
            >
              <div className="text-3xl md:text-4xl font-black text-primary">{projectsCount}+</div>
              <div className="text-sm text-muted-foreground font-medium">Projets réalisés</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Notre Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Accompagner nos clients dans un marché en constante évolution
                technologique, en garantissant des prestations fiables et adaptées.
                Nous nous engageons à offrir des solutions innovantes qui répondent
                aux défis du monde moderne.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">15+ ans d'expertise</h4>
                  <p className="text-sm text-muted-foreground">
                    Une expérience solide dans tous nos domaines d'intervention
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Solutions sur mesure</h4>
                  <p className="text-sm text-muted-foreground">
                    Adaptées aux besoins spécifiques de chaque client
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 h-full border border-border/50 hover:border-primary/30 gradient-border">
                <motion.div 
                  className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;