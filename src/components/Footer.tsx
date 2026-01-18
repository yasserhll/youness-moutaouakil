import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 Youness Moutaouakil. Tous droits réservés.</p>
          <p className="text-elegant">
            L'art est la lumière de l'âme
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.instagram.com/rassam_dialkum/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-amber-500 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61561470997065&locale=fr_FR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-amber-500 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        {/* Developer Credit */}
        <div className="text-center text-xs text-muted-foreground">
          Développé par{" "}
          <a
            href="https://hallajiyassir.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:text-amber-400 transition-colors font-medium"
          >
            Yassir.H
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
