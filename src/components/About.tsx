import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Heart, Award } from "lucide-react";
import logoRassam from "@/assets/logo-rassam.png";

const features = [
  {
    icon: Palette,
    title: "Style Unique",
    description: "Une fusion harmonieuse entre tradition et modernité, inspirée par les paysages du Maroc et la lumière méditerranéenne.",
  },
  {
    icon: Heart,
    title: "Passion Authentique",
    description: "Chaque œuvre est créée avec amour et dévotion, transmettant des émotions profondes à travers les couleurs.",
  },
  {
    icon: Award,
    title: "Excellence Artistique",
    description: "Des années d'expérience et de perfectionnement pour offrir des créations d'une qualité exceptionnelle.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="a-propos" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent mb-4 block">
            À Propos
          </span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-8">
            L'Artiste
          </h2>
          
          {/* Logo + Description */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <motion.img
              src={logoRassam}
              alt="Rassam Dialkum Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed text-left">
              Youness Moutaouakil est un artiste peintre passionné, dont le travail célèbre 
              la beauté de la nature, l'architecture traditionnelle et l'abstraction contemporaine. 
              Ses toiles invitent le spectateur à un voyage visuel où les couleurs dansent 
              et les émotions s'expriment librement.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-display text-2xl mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
