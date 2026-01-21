import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-itec.jpg";
import { useRef } from "react";

const Hero = () => {
  const words = ["Expertise", "–", "Innovation", "–", "Performance"];
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.85, 0.95]);
  
  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            y: backgroundY,
            scale: 1.1
          }}
        />
        {/* Premium gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary-light/80"
          style={{ opacity: overlayOpacity }}
        />
        
        {/* Mesh gradient effects */}
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        
        {/* Aurora effect */}
        <div className="absolute inset-0 aurora" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-white/5 blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[15%] w-96 h-96 rounded-full bg-primary-light/10 blur-3xl"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border border-white/5" />
          <div className="absolute inset-8 rounded-full border border-white/5" />
          <div className="absolute inset-16 rounded-full border border-white/5" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 pb-32 md:pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-orange/20 backdrop-blur-sm border border-orange/30 px-6 py-3 rounded-full">
              <div className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span className="text-white font-semibold text-sm tracking-wide">5+ ans d'excellence</span>
            </div>
          </motion.div>

          {/* Animated Title - Word by Word */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight soft-glow text-balance">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block mr-2 sm:mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-12"
          >
            <div className="glass-strong mx-auto max-w-3xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl">
              <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed">
                ITEC accompagne entreprises et institutions à travers des solutions
                fiables en <span className="font-semibold">Ressources Humaines</span>, <span className="font-semibold">Ingénierie</span>, <span className="font-semibold">Électricité</span>, <span className="font-semibold">Génie Civil</span>
                {" "}et <span className="font-semibold">Nouvelles Technologies</span>.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/95 font-bold text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 shadow-elegant group relative overflow-hidden rounded-2xl w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center">
                  Nos Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-orange hover:bg-orange-light text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-2xl group w-full sm:w-auto shadow-lg"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Découvrir ITEC
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex"
      >
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-xs font-medium tracking-widest uppercase">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2"
          >
            <motion.div 
              className="w-1 h-2 bg-white/80 rounded-full"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;