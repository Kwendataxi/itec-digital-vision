import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "infos@itec-sarlu.com",
      href: "mailto:infos@itec-sarlu.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+243 XXX XXX XXX",
      href: "tel:+243XXXXXXXXX",
    },
    {
      icon: MapPin,
      label: "Adresses",
      value: "Kinshasa & Lubumbashi, RD Congo",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full mesh-gradient opacity-30 pointer-events-none" />
      
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
            Nous contacter
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contactez-<span className="text-gradient">nous</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discutons de votre projet ensemble
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="shadow-elegant border-0 bg-card overflow-hidden">
              <CardContent className="p-6 md:p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Nom complet *
                      </label>
                      <Input
                        required
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="h-12 rounded-xl border-border/50 focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Téléphone
                      </label>
                      <Input
                        type="tel"
                        placeholder="+243 XXX XXX XXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="h-12 rounded-xl border-border/50 focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="h-12 rounded-xl border-border/50 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      required
                      placeholder="Décrivez votre projet..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="min-h-[150px] rounded-xl border-border/50 focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-primary-foreground font-semibold shadow-elegant group h-14 rounded-xl text-base"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
              >
                <Card className="shadow-card hover:shadow-elegant transition-all duration-500 group border-border/50 hover:border-primary/30">
                  <CardContent className="p-6 flex items-center gap-5">
                    <motion.div 
                      className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.label}
                      </h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group/link"
                        >
                          {info.value}
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Map placeholder with abstract design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="shadow-card overflow-hidden border-0">
                <div className="h-64 relative gradient-primary">
                  {/* Abstract geometric design */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-full" />
                    <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-white/15 rounded-full" />
                    <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border border-white/10 rounded-full" />
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                    <p className="text-white font-medium text-sm">ITEC - Kinshasa & Lubumbashi, RDC</p>
                    <p className="text-white/70 text-xs mt-1">itec-sarlu.com</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;