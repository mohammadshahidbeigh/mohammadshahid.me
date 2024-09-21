import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {FaReact, FaNodeJs, FaPython, FaDatabase, FaCloud} from "react-icons/fa";

const icons = [FaReact, FaNodeJs, FaPython, FaDatabase, FaCloud];

export default function ParticlesBg(): JSX.Element {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newParticles = Array.from({length: 50}, (_, i) => {
      const Icon = icons[Math.floor(Math.random() * icons.length)];
      return (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            position: "absolute",
            fontSize: `${Math.random() * 20 + 10}px`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
        >
          <Icon />
        </motion.div>
      );
    });
    setParticles(newParticles);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
        backgroundColor: "#030018",
      }}
    >
      {particles}
    </div>
  );
}
