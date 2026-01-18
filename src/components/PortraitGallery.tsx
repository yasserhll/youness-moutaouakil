import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

import portraitOriginal1 from "@/assets/portrait-original-1.jpg";
import portraitOriginal2 from "@/assets/portrait-original-2.jpg";
import portraitOriginal3 from "@/assets/portrait-original-3.jpg";
import portraitDrawing1 from "@/assets/portrait-drawing-1.jpg";
import portraitDrawing2 from "@/assets/portrait-drawing-2.jpg";
import portraitDrawing3 from "@/assets/portrait-drawing-3.jpg";
import logoRassam from "@/assets/logo-rassam.png";

const portraits = [
  { 
    id: 1, 
    title: "Portrait Jeune Femme", 
    original: portraitOriginal1, 
    drawing: portraitDrawing1 
  },
  { 
    id: 2, 
    title: "Portrait Homme Âgé", 
    original: portraitOriginal2, 
    drawing: portraitDrawing2 
  },
  { 
    id: 3, 
    title: "Portrait Enfant", 
    original: portraitOriginal3, 
    drawing: portraitDrawing3 
  },
];

const WHATSAPP_NUMBER = "+212606116335";

const PortraitCompareCard = ({ 
  portrait, 
  index 
}: { 
  portrait: typeof portraits[0]; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      className="flex flex-col"
    >
      {/* Image Container with Switch */}
      <div 
        className="relative aspect-[3/4] overflow-hidden rounded-lg bg-white shadow-lg cursor-pointer group"
        onClick={() => setShowOriginal(!showOriginal)}
      >
        {/* Drawing Image */}
        <motion.img
          src={portrait.drawing}
          alt={`${portrait.title} - Dessin`}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ opacity: showOriginal ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Original Image */}
        <motion.img
          src={portrait.original}
          alt={`${portrait.title} - Original`}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ opacity: showOriginal ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Logo Rassam */}
        <img 
          src={logoRassam} 
          alt="Rassam" 
          className="absolute bottom-3 left-3 w-8 h-8 object-contain opacity-60"
        />

        {/* Switch Indicator */}
        <div className="absolute top-3 right-3 bg-charcoal/80 text-cream px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
          {showOriginal ? "Photo Originale" : "Dessin"}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300 flex items-center justify-center">
          <motion.div 
            className="bg-cream/90 text-charcoal px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Cliquez pour {showOriginal ? "voir le dessin" : "voir l'original"}
          </motion.div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-display text-lg text-cream mt-4 text-center">
        {portrait.title}
      </h3>
    </motion.div>
  );
};

const PortraitGallery = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const handleOrderPortrait = () => {
    const message = encodeURIComponent(
      "Bonjour ! Je souhaite commander un portrait personnalisé. Pouvez-vous me donner plus d'informations sur les tarifs et les délais ?"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="portraits" className="section-padding bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Sur Commande
          </span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6 text-cream">
            Portraits Personnalisés
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto mb-8">
            Transformez vos photos en œuvres d'art uniques. Cliquez sur chaque portrait pour voir la transformation.
          </p>
          <Button
            onClick={handleOrderPortrait}
            size="lg"
            className="bg-gold hover:bg-gold/90 text-charcoal font-medium gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Commander un Portrait
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portraits.map((portrait, index) => (
            <PortraitCompareCard 
              key={portrait.id} 
              portrait={portrait} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortraitGallery;
