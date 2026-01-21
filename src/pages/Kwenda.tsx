import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, DollarSign, Shield, Zap, Users, MapPin, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import kwendaMockup from "@/assets/kwenda-mockup.jpg";
import { useCountUp } from "@/hooks/useCountUp";

const Kwenda = () => {
  const coursesCount = useCountUp({ end: 10000, suffix: "+", duration: 2500 });
  const driversCount = useCountUp({ end: 500, suffix: "+", duration: 2000 });
  const satisfactionCount = useCountUp({ end: 98, suffix: "%", duration: 2000 });

  const features = [
    {
      icon: Smartphone,
      title: "Application Mobile Intuitive",
      description: "Interface moderne et facile d'utilisation pour tous",
    },
    {
      icon: MapPin,
      title: "Géolocalisation en Temps Réel",
      description: "Suivi précis de votre course à chaque instant",
    },
    {
      icon: Zap,
      title: "Service Flash",
      description: "Réservation instantanée pour vos déplacements urgents",
    },
    {
      icon: DollarSign,
      title: "Kwenda Pay - Wallet Intégré",
      description: "Paiement sécurisé et gestion de votre portefeuille",
    },
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description: "Chauffeurs vérifiés et courses sécurisées",
    },
    {
      icon: Users,
      title: "Multiple Services",
      description: "Taxi, livraison et options premium disponibles",
    },
  ];

  const services = [
    {
      name: "Kwenda Booking",
      description: "Réservez votre course à l'avance",
      icon: "📅",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      name: "Kwenda Eco",
      description: "Solution économique pour vos déplacements",
      icon: "🌿",
      gradient: "from-green-500/20 to-green-500/5",
    },
    {
      name: "Kwenda Premium",
      description: "Confort et luxe pour vos trajets",
      icon: "✨",
      gradient: "from-purple-500/20 to-purple-500/5",
    },
    {
      name: "Kwenda Flash",
      description: "Service express pour les urgences",
      icon: "⚡",
      gradient: "from-orange-500/20 to-orange-500/5",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 mesh-gradient opacity-60" />
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Link to="/">
              <Button variant="ghost" className="mb-8 group hover:bg-secondary/80">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Retour aux projets
              </Button>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                >
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Projet Phare ITEC</span>
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
                  Kwenda <span className="text-gradient">Taxi</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                  Solution digitale complète de mobilité, taxi et livraison
                  déployée en République Démocratique du Congo. ITEC assure la
                  gestion technique et opérationnelle complète du projet.
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {["Application Mobile", "Gestion Opérationnelle", "Support Technique"].map((tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="px-4 py-2 glass-card text-sm font-medium text-foreground rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-elegant gradient-border">
                  <motion.img
                    src={kwendaMockup}
                    alt="Kwenda Taxi App"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                </div>
                
                {/* Floating stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 glass-card px-5 py-4 rounded-2xl shadow-elegant"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Actif depuis</p>
                      <p className="font-semibold text-foreground">2023</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-30" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Fonctionnalités <span className="text-gradient">Kwenda</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Une plateforme complète pensée pour votre mobilité
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass-card rounded-2xl p-6 lg:p-8 gradient-border group"
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Types */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-40" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Types de <span className="text-gradient">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Plusieurs options adaptées à tous vos besoins
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl glass-card p-6 lg:p-8 gradient-border group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50 group-hover:opacity-70 transition-opacity`} />
                  <div className="relative z-10">
                    <span className="text-3xl mb-4 block">{service.icon}</span>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 animated-gradient opacity-90" />
          <div className="absolute inset-0 mesh-gradient opacity-30" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-primary-foreground"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Impact du Projet
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-16 max-w-3xl mx-auto leading-relaxed">
                Kwenda Taxi révolutionne le secteur du transport en RDC en
                offrant une solution moderne, sécurisée et accessible à tous.
              </p>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <motion.div
                  ref={coursesCount.ref}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="glass-strong rounded-2xl p-8"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{coursesCount.formattedValue}</div>
                  <div className="text-primary-foreground/80">Courses réalisées</div>
                </motion.div>
                
                <motion.div
                  ref={driversCount.ref}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="glass-strong rounded-2xl p-8"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{driversCount.formattedValue}</div>
                  <div className="text-primary-foreground/80">Chauffeurs actifs</div>
                </motion.div>
                
                <motion.div
                  ref={satisfactionCount.ref}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="glass-strong rounded-2xl p-8"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{satisfactionCount.formattedValue}</div>
                  <div className="text-primary-foreground/80">Satisfaction client</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-50" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-10 lg:p-16 text-center max-w-4xl mx-auto gradient-border"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Intéressé par une solution similaire ?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                ITEC peut développer et gérer votre projet digital de A à Z
              </p>
              <Link to="/#contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="gradient-primary text-primary-foreground font-semibold text-lg px-8 py-6 shadow-elegant rounded-xl"
                  >
                    Discutons de votre projet
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Kwenda;
