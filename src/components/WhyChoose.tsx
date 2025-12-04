import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Calendar, 
  Users2, 
  Shield, 
  Wrench, 
  HeadphonesIcon, 
  Globe 
} from "lucide-react";

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

const WhyChoose = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  
  const years = useCountUp(15, 2, isStatsInView);
  const projects = useCountUp(200, 2.5, isStatsInView);
  const clients = useCountUp(50, 2, isStatsInView);
  const experts = useCountUp(100, 2.5, isStatsInView);

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

  const stats = [
    { number: years, suffix: "+", label: "Années d'expérience" },
    { number: projects, suffix: "+", label: "Projets réalisés" },
    { number: clients, suffix: "+", label: "Clients satisfaits" },
    { number: experts, suffix: "+", label: "Experts qualifiés" },
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] mesh-gradient opacity-20 pointer-events-none rounded-full blur-3xl" />
      
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
            Nos avantages
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pourquoi choisir <span className="text-gradient">ITEC</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Les raisons qui font de nous votre partenaire de confiance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant">
                <motion.div 
                  className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <reason.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 animated-gradient" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-light/90" />
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-white/80 font-medium text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;