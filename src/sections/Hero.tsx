import { useState, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion, type Variants } from 'framer-motion';
import FlipProfileCard from '../components/FlipProfileCard';
import DataVisualizationBackground from '../components/DataVisualizationBackground';

const Hero = () => {
  const [name, setName] = useState(portfolioData.personalInfo.name);
  const timeoutRef = useRef<number | null>(null);
  
  const container: Variants = { 
    hidden: { opacity: 0 }, 
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } 
  };
  const item: Variants = { 
    hidden: { opacity: 0, y: 20 }, 
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } 
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
    }
    setName("SARACHI");
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
        setName(portfolioData.personalInfo.name);
    }, 3000);
  };

  const handleViewWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}OBASI_SARAH_CV.docx`;
    link.download = 'OBASI_SARAH_CV.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-charcoal-bg px-6 py-20 md:py-32 transition-colors relative overflow-hidden">
      <DataVisualizationBackground />
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="md:w-1/2">
          <motion.span variants={item} className="text-muted-rose font-medium tracking-widest text-sm uppercase block mb-4">Available for new opportunities</motion.span>
          <motion.h1 
              className={`text-5xl md:text-7xl font-light text-off-white leading-tight cursor-pointer drop-shadow-[0_0_10px_rgba(214,161,161,0.3)] transition-all duration-300 ${name === "SARACHI" ? "italic tracking-widest" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.02 }}
            >
              {name}
            </motion.h1>
          <motion.span variants={item} className="text-off-white/70 font-medium tracking-widest text-lg block mt-2">{portfolioData.personalInfo.title}</motion.span>
          <motion.p variants={item} className="mt-8 text-xl text-text-muted max-w-lg italic">"Turning financial and business data into clear insights that support better decisions."</motion.p>
          <motion.div variants={item} className="mt-10 flex gap-4">
            <motion.button onClick={handleViewWork} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-muted-rose text-charcoal-bg hover:bg-soft-blush px-8 py-3 rounded font-semibold transition">View My Work</motion.button>
            <motion.button onClick={handleDownloadCV} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-muted-rose text-muted-rose hover:bg-muted-rose/10 px-8 py-3 rounded font-semibold transition">Download My CV</motion.button>
          </motion.div>
        </div>
        <motion.div variants={item} className="md:w-5/12 relative">
            <FlipProfileCard />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
