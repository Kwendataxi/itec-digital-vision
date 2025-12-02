import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/#about" },
    { name: "Services", path: "/#services" },
    { name: "Projets", path: "/#projects" },
    { name: "Contact", path: "/#contact" },
  ];

  const services = [
    "Ressources Humaines",
    "Génie Civil",
    "Nouvelles Technologies",
    "Électricité",
  ];

  return (
    <footer className="bg-anthracite text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">I</span>
              </div>
              <span className="text-2xl font-bold">ITEC</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Expertise, Innovation et Performance pour tous vos projets
              d'ingénierie et de construction.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gradient-primary flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gradient-primary flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gradient-primary flex items-center justify-center transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@itec-rdc.com"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  contact@itec-rdc.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+243XXXXXXXXX"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  +243 XXX XXX XXX
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  Kinshasa, RD Congo
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} ITEC. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="#" className="text-white/60 hover:text-primary transition-colors">
                Mentions légales
              </Link>
              <Link to="#" className="text-white/60 hover:text-primary transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
