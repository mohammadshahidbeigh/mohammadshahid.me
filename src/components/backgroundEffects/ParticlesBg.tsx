import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaCloud,
  FaBrain,
  FaRobot,
  FaCode,
} from "react-icons/fa";
import {SiTensorflow, SiOpenai} from "react-icons/si";

const icons = [
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaCloud,
  FaBrain,
  FaRobot,
  FaCode,
  SiTensorflow,
  SiOpenai,
];

const colors = [
  "#61DAFB", // React blue
  "#68A063", // Node.js green
  "#3776AB", // Python blue
  "#00758F", // Database blue
  "#4285F4", // Cloud blue
  "#FF6B6B", // Brain red
  "#00B0D8", // Robot blue
  "#F0DB4F", // JavaScript yellow
  "#FF6F00", // TensorFlow orange
  "#412991", // OpenAI purple
];

export default function ParticlesBg(): JSX.Element {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newParticles = Array.from({length: 50}, (_, i) => {
      const iconIndex = Math.floor(Math.random() * icons.length);
      const Icon = icons[iconIndex];
      const color = colors[iconIndex];
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
            color: color,
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
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      ></div>
    </div>
  );
}
