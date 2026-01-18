import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappNumber = "+212606116335";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;
  const whatsappMessage = encodeURIComponent(
    "Bonjour Youness, je suis intéressé(e) par votre travail artistique et j'aimerais en savoir plus sur vos œuvres."
  );

  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Contact
          </span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Commandons Votre
            <span className="block text-elegant text-gold">Chef-d'œuvre</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-12">
            Vous souhaitez acquérir une œuvre ou commander une création personnalisée ? 
            N'hésitez pas à me contacter via WhatsApp pour discuter de votre projet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          <a
            href={`${whatsappLink}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex animate-pulse-gold"
          >
            <MessageCircle className="w-5 h-5" />
            Contacter sur WhatsApp
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-primary-foreground/10">
            <a 
              href={`tel:${whatsappNumber}`}
              className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors"
            >
              <Phone className="w-5 h-5 text-gold" />
              <span>{whatsappNumber}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="https://www.instagram.com/rassam_dialkum/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61561470997065&locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors"
            >
              <Facebook className="w-6 h-6" />
              <span>Facebook</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
