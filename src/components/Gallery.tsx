import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";
import painting4 from "@/assets/painting-4.jpg";
import painting5 from "@/assets/painting-5.jpg";
import painting6 from "@/assets/painting-6.jpg";

const paintings = [
  { id: 1, title: "Coucher de Soleil Marocain", category: "Paysage", image: painting1 },
  { id: 2, title: "L’âme de l’architecture marocaine", category: "Monument", image: painting2 },
  { id: 3, title: "Art et émotion de la lettre", category: "Calligraphi arabe", image: painting3 },
  { id: 4, title: "Plumes vivantes", category: "Animaux", image: painting4 },
  { id: 5, title: "Harmonie en Blue", category: "Abstrait", image: painting5 },
  { id: 6, title: "Luffy | Gear 5", category: "Anime", image: painting6 },
];

const GalleryItem = ({ painting, index }: { painting: typeof paintings[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      className="gallery-card group aspect-[4/5]"
    >
      <img
        src={painting.image}
        alt={painting.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="gallery-card-overlay flex flex-col justify-end p-6">
        <span className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
          {painting.category}
        </span>
        <h3 className="text-display text-2xl text-cream">{painting.title}</h3>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="galerie" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent mb-4 block">
            Portfolio
          </span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Mes Œuvres
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chaque toile raconte une histoire, chaque coup de pinceau capture un instant d'émotion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {paintings.map((painting, index) => (
            <GalleryItem key={painting.id} painting={painting} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
