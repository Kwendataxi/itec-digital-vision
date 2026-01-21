import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import kwendaCampaign from "@/assets/kwenda-campaign.png";

const Projects = () => {
  const otherProjects = [
    {
      title: "Infrastructure Routière Nationale",
      category: "Génie Civil",
      description: "Construction et réhabilitation de 150km de routes",
      metrics: "150+ km • 2 ans",
      color: "from-blue-500 to-primary",
    },
    {
      title: "Complexe Électrique Industriel",
      category: "Électricité",
      description: "Installation complète d'un réseau électrique haute tension",
      metrics: "50 MW • 18 mois",
      color: "from-primary to-primary-light",
    },
    {
      title: "Système de Surveillance Urbain",
      category: "Technologie",
      description: "Déploiement de 200+ caméras intelligentes",
      metrics: "200+ caméras • Smart City",
      color: "from-accent to-blue-500",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 mesh-gradient opacity-30 pointer-events-none" />
      
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
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos réalisations et projets d'envergure
          </p>
        </motion.div>

        {/* Featured Project: Kwenda Taxi */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <Card className="overflow-hidden shadow-elegant border-0 bg-card relative group">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <motion.img
                  src={kwendaCampaign}
                  alt="Kwenda Taxi - Simplifiez vos trajets"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:hidden" />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center relative">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Kwenda Taxi
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Simplifiez vos trajets, profitez de chaque instant. Plateforme de transport et livraison en RD Congo.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Application Mobile", "Gestion Opérationnelle", "Tech Management"].map((tag) => (
                      <span 
                        key={tag}
                        className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to="/kwenda">
                    <Button className="gradient-primary text-primary-foreground font-semibold shadow-elegant group/btn w-full sm:w-auto px-8 py-6 rounded-xl">
                      Découvrir Kwenda
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-elegant transition-all duration-500 group border-border/50 hover:border-primary/30 gradient-border bg-card overflow-hidden">
                {/* Top accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />
                
                <CardContent className="p-6 md:p-8">
                  <div className="mb-4">
                    <span className={`text-sm font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                    <TrendingUp className="w-4 h-4 text-primary" />
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
