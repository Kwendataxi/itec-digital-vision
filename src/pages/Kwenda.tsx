import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, DollarSign, Shield, Zap, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import kwendaMockup from "@/assets/kwenda-mockup.jpg";

const Kwenda = () => {
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
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Kwenda Eco",
      description: "Solution économique pour vos déplacements",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Kwenda Premium",
      description: "Confort et luxe pour vos trajets",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Kwenda Flash",
      description: "Service express pour les urgences",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Link to="/">
              <Button variant="ghost" className="mb-8 group">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Retour aux projets
              </Button>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6">
                  Kwenda Taxi
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Solution digitale complète de mobilité, taxi et livraison
                  déployée en République Démocratique du Congo. ITEC assure la
                  gestion technique et opérationnelle complète du projet.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full">
                    Application Mobile
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full">
                    Gestion Opérationnelle
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full">
                    Support Technique
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-elegant">
                  <img
                    src={kwendaMockup}
                    alt="Kwenda Taxi App"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Fonctionnalités <span className="text-gradient">Kwenda</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Une plateforme complète pensée pour votre mobilité
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Types */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-24 bg-gradient-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Impact du Projet
              </h2>
              <p className="text-xl text-white/90 mb-16 max-w-3xl mx-auto leading-relaxed">
                Kwenda Taxi révolutionne le secteur du transport en RDC en
                offrant une solution moderne, sécurisée et accessible à tous.
                ITEC gère l'intégralité des aspects techniques et opérationnels.
              </p>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div>
                  <div className="text-5xl font-black mb-2">10K+</div>
                  <div className="text-white/90">Courses réalisées</div>
                </div>
                <div>
                  <div className="text-5xl font-black mb-2">500+</div>
                  <div className="text-white/90">Chauffeurs actifs</div>
                </div>
                <div>
                  <div className="text-5xl font-black mb-2">98%</div>
                  <div className="text-white/90">Satisfaction client</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-3xl p-12 shadow-elegant text-center max-w-4xl mx-auto border border-border"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Intéressé par une solution similaire ?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                ITEC peut développer et gérer votre projet digital de A à Z
              </p>
              <Link to="/#contact">
                <Button
                  size="lg"
                  className="gradient-primary text-primary-foreground font-semibold text-lg px-8 py-6 shadow-elegant"
                >
                  Discutons de votre projet
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kwenda;
