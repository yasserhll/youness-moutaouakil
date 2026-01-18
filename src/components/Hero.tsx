import { motion } from "framer-motion";
import heroPainting from "@/assets/hero-painting.jpg";
const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById("galerie")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroPainting} alt="Œuvre artistique" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        ease: "easeOut"
      }}>
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-white/80 mb-6 hero-subtitle">
            Artiste Peintre
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl hero-title">
            <motion.span
              className="inline-block text-white"
              style={{
                backgroundImage: "linear-gradient(90deg, white 50%, transparent 50%)",
                backgroundSize: "200% 100%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              initial={{ backgroundPosition: "100% 0" }}
              animate={{ backgroundPosition: "0% 0" }}
              transition={{ duration: 2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Youness
            </motion.span>
          </h1>
          <h1 className="text-elegant text-4xl md:text-6xl lg:text-7xl xl:text-8xl mt-2">
            <motion.span
              className="inline-block text-amber-400"
              style={{
                backgroundImage: "linear-gradient(90deg, #fbbf24 50%, transparent 50%)",
                backgroundSize: "200% 100%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              initial={{ backgroundPosition: "100% 0" }}
              animate={{ backgroundPosition: "0% 0" }}
              transition={{ duration: 2.5, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Moutaouakil
            </motion.span>
          </h1>
        </motion.div>

        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 0.6
      }} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 hero-subtitle">
          Créateur d'émotions sur toile, capturant l'essence de la lumière et des couleurs
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={scrollToGallery} className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest uppercase transition-all duration-500 bg-white text-black hover:bg-amber-400 hover:text-black border-2 border-white hover:border-amber-400">
            Découvrir mes œuvres
          </button>
          <a href="https://wa.me/212762179663" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest uppercase transition-all duration-500 bg-transparent text-white border-2 border-white/70 hover:border-amber-400 hover:text-amber-400">
            Commander une œuvre
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 1
    }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        
      </motion.div>
    </section>;
};
export default Hero;