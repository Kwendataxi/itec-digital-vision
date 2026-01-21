import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logoItec from "@/assets/logo-itec.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const increment = (interval / duration) * 100;
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, duration + 500);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const letters = "ITEC".split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Animated circles */}
      <motion.div
        className="absolute w-[600px] h-[600px] border border-white/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[450px] h-[450px] border border-white/5 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center z-10">
        {/* Logo with glow effect */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mb-8"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 blur-2xl bg-white/20 rounded-full scale-150"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1.4, 1.6, 1.4],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.img
            src={logoItec}
            alt="ITEC Logo"
            className="relative w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Animated text */}
        <div className="flex gap-1 mb-8">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.5 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl md:text-5xl font-black text-white tracking-wide"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "200px" }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative h-1 bg-white/20 rounded-full overflow-hidden"
        >
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-white via-orange to-white rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-6 text-white/70 text-sm font-medium tracking-widest uppercase"
        >
          Expertise • Innovation • Performance
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
