import { motion } from 'framer-motion';
import frontPhoto from '../assets/IMG-20260906-WA0029.jpg';
import backPhoto from '../assets/photo_2026-08-29_10-51-16.jpg';

const FlipProfileCard = () => {
  return (
    <div className="relative w-full aspect-square group [perspective:1000px]">
      <motion.div 
        className="w-full h-full relative duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform-style:preserve-3d] rounded-2xl overflow-hidden border border-white/5 shadow-xl">
          <img src={frontPhoto} alt="Obasi Sarah" className="w-full h-full object-cover" />
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform-style:preserve-3d] rounded-2xl overflow-hidden border border-white/5 shadow-xl [transform:rotateY(180deg)]">
          <img src={backPhoto} alt="Obasi Sarah" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </div>
  );
};

export default FlipProfileCard;
