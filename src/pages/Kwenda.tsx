import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, DollarSign, Shield, MapPin, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import kwendaCampaign from "@/assets/kwenda-campaign.png";
import { useCountUp } from "@/hooks/useCountUp";

const Kwenda = () => {
  const coursesCount = useCountUp({ end: 10000, suffix: "+", duration: 2500 });
  const driversCount = useCountUp({ end: 500, suffix: "+", duration: 2000 });
  const satisfactionCount = useCountUp({ end: 98, suffix: "%", duration: 2000 });

  const features = [
    {
      icon: Smartphone,
      title: "Application Mobile",
      description: "Interface intuitive et facile d'utilisation",
    },
    {
      icon: MapPin,
      title: "Géolocalisation",
      description: "Suivi de votre course en temps réel",
    },
    {
      icon: DollarSign,
      title: "Kwenda Pay",
      description: "Wallet intégré pour paiements sécurisés",
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "Chauffeurs vérifiés et courses sécurisées",
    },
  ];

  const services = [
    {
      name: "Transport",
      description: "Taxi et VTC pour tous vos déplacements en ville",
      icon: "🚗",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      name: "Livraison",
      description: "Service de livraison rapide par nos partenaires",
      icon: "📦",
      gradient: "from-green-500/20 to-green-500/5",
    },
    {
      name: "Kwenda Pay",
      description: "Wallet intégré pour paiements sécurisés",
      icon: "💳",
      gradient: "from-purple-500/20 to-purple-500/5",
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
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

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
                  Kwenda <span className="text-gradient">Taxi</span>
                </h1>
                <p className="text-xl font-medium text-primary mb-2">
                  Simplifiez vos trajets, profitez de chaque instant.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-lg">
                  Plateforme de transport et livraison gérée par des partenaires tiers en RD Congo. Trajets à partir de 2500 CDF.
                </p>
                
                {/* Contact Info */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <a 
                    href="tel:#0858040400" 
                    className="flex items-center gap-2 glass-card px-4 py-2 rounded-full hover:bg-secondary/50 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground">#085 80 40 400</span>
                  </a>
                  <span className="text-primary font-semibold">#TrajetSimplifié</span>
                </div>

                {/* Download Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=cd.kwenda.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-foreground text-background px-5 py-3 rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path d="M3.609 1.814L13.793 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.991l-2.302 2.302-8.634-8.635z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-80">Télécharger sur</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </a>
                  
                  <a
                    href="#"
                    className="flex items-center gap-3 bg-foreground text-background px-5 py-3 rounded-xl hover:opacity-90 transition-opacity opacity-60 cursor-not-allowed"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-80">Bientôt sur</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </a>
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
                    src={kwendaCampaign}
                    alt="Kwenda Taxi - Simplifiez vos trajets"
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
                      <p className="font-semibold text-foreground">2026</p>
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

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
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

            <div className="grid md:grid-cols-3 gap-6">
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
