import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import kwendaMockup from "@/assets/kwenda-mockup.jpg";

const Projects = () => {
  const otherProjects = [
    {
      title: "Infrastructure Routière Nationale",
      category: "Génie Civil",
      description: "Construction et réhabilitation de 150km de routes",
      metrics: "150+ km • 2 ans",
    },
    {
      title: "Complexe Électrique Industriel",
      category: "Électricité",
      description: "Installation complète d'un réseau électrique haute tension",
      metrics: "50 MW • 18 mois",
    },
    {
      title: "Système de Surveillance Urbain",
      category: "Technologie",
      description: "Déploiement de 200+ caméras intelligentes",
      metrics: "200+ caméras • Smart City",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos réalisations et projets d'envergure
          </p>
        </motion.div>

        {/* Featured Project: Kwenda Taxi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="overflow-hidden shadow-elegant border-2 border-primary/20">
            <div className="relative">
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 font-semibold">
                  <Star className="w-4 h-4 fill-current" />
                  Projet Majeur
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={kwendaMockup}
                  alt="Kwenda Taxi Application"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Kwenda Taxi
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  ITEC assure la gestion, l'administration technique et
                  opérationnelle de <strong>Kwenda Taxi</strong>, une solution
                  digitale complète de mobilité, taxi et livraison déployée en
                  République Démocratique du Congo.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    Application Mobile
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    Gestion Opérationnelle
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    Tech Management
                  </span>
                </div>
                <Link to="/kwenda">
                  <Button className="gradient-primary text-primary-foreground font-semibold shadow-elegant group w-full sm:w-auto">
                    Découvrir Kwenda
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-elegant transition-all group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-primary">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="text-sm text-muted-foreground font-medium">
                    {project.metrics}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
