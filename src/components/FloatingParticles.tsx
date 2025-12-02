import { motion } from "framer-motion";

const FloatingParticles = () => {
  const particles = [
    { size: 100, x: "10%", y: "20%", duration: 20, delay: 0 },
    { size: 150, x: "80%", y: "60%", duration: 25, delay: 2 },
    { size: 80, x: "70%", y: "30%", duration: 18, delay: 4 },
    { size: 120, x: "20%", y: "70%", duration: 22, delay: 1 },
    { size: 60, x: "50%", y: "50%", duration: 15, delay: 3 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
            background: `radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
