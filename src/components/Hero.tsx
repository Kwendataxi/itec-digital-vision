import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-itec.jpg";
import FloatingParticles from "./FloatingParticles";

const Hero = () => {
  const title = "Expertise – Innovation – Performance";
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary-light/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary-light)/0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--primary)/0.3),transparent_50%)]" />
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-28 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-white font-semibold text-sm tracking-wide">ITEC Excellence</span>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 pb-32 md:pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-tight soft-glow">
              {title.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.03,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mb-10"
          >
            <div className="glass-strong mx-auto max-w-3xl p-6 rounded-2xl">
              <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                ITEC accompagne entreprises et institutions à travers des solutions
                fiables en Ressources Humaines, Ingénierie, Électricité, Génie Civil
                et Nouvelles Technologies.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/95 font-bold text-lg px-10 py-7 shadow-elegant group relative overflow-hidden rounded-2xl"
              >
                <span className="relative z-10 flex items-center">
                  Nos Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white to-gray-100"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="glass-strong border-2 border-white/30 text-white hover:bg-white/20 font-bold text-lg px-10 py-7 backdrop-blur-md rounded-2xl group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Découvrir ITEC
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex"
      >
        <div className="flex flex-col items-center gap-2 text-white/90">
          <span className="text-sm font-medium tracking-wide">Défiler</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
          >
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
