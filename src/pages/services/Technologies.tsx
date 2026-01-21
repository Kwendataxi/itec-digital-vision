import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Cpu, 
  Mountain, 
  Map, 
  Target, 
  ShieldAlert, 
  Camera,
  Fingerprint,
  ChevronRight,
  ArrowRight,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import technologyImg from "@/assets/technology.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Technologies = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const prestations = [
    {
      icon: Mountain,
      title: "Cubage des remblais",
      description: "Calcul précis des volumes de terrassement pour vos projets de construction."
    },
    {
      icon: Map,
      title: "Levés topographiques",
      description: "Relevés topographiques de haute précision pour vos études et projets."
    },
    {
      icon: Target,
      title: "Implantation et alignement",
      description: "Mise en place et alignement précis des structures selon les plans."
    },
    {
      icon: ShieldAlert,
      title: "Alarmes anti-intrusion / anti-feu",
      description: "Installation de systèmes d'alarme performants pour la sécurité de vos locaux."
    },
    {
      icon: Camera,
      title: "Vidéosurveillance",
      description: "Solutions de vidéosurveillance intelligentes avec stockage et monitoring."
    },
    {
      icon: Fingerprint,
      title: "Contrôle intelligent d'accès",
      description: "Systèmes de contrôle d'accès biométriques et par badge pour une sécurité optimale."
    },
  ];

  const processSteps = [
    { step: "01", title: "Audit & analyse", description: "Évaluation de vos besoins et de l'existant" },
    { step: "02", title: "Conception technique", description: "Élaboration de solutions sur mesure" },
    { step: "03", title: "Installation", description: "Déploiement par nos techniciens experts" },
    { step: "04", title: "Formation & support", description: "Formation des utilisateurs et maintenance" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${technologyImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/95 via-primary/85 to-primary-light/80" />
        </motion.div>
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 aurora opacity-20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-white/70 hover:text-white">Accueil</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/#services" className="text-white/70 hover:text-white">Services</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white font-medium">Technologies</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Cpu className="w-5 h-5 text-white" />
              <span className="text-white/90 font-medium text-sm">Innovation & Sécurité</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Technologies &<br />
              <span className="text-white/90">Topographie</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              Solutions technologiques avancées pour la topographie et la sécurité. 
              Précision et innovation au service de vos projets.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-accent hover:bg-white/90 font-bold px-8 py-6 rounded-xl shadow-elegant group"
                asChild
              >
                <a href="#contact">
                  Demander un devis
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Prestations Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Nos prestations
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Solutions <span className="text-gradient">technologiques</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des technologies de pointe pour la topographie et la sécurité de vos installations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prestations.map((prestation, index) => (
              <motion.div
                key={prestation.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-8 h-full border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-elegant">
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <prestation.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {prestation.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {prestation.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-secondary/50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Notre approche
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Méthodologie <span className="text-gradient">éprouvée</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-8 h-full border border-border/50 hover:border-accent/30 transition-all duration-300">
                  <div className="text-5xl font-black text-accent/20 mb-4">{step.step}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-accent/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-primary-light" />
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Innovons ensemble
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Découvrez comment nos solutions technologiques peuvent optimiser vos opérations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="bg-white text-accent hover:bg-white/90 font-bold px-8 py-6 rounded-xl shadow-elegant group"
                  asChild
                >
                  <Link to="/#contact">
                    Nous contacter
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 font-bold px-8 py-6 rounded-xl group"
                  asChild
                >
                  <a href="tel:+243858040400">
                    <Phone className="mr-2 w-5 h-5" />
                    Appeler maintenant
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Technologies;
