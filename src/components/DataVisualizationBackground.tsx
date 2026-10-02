import { motion } from 'framer-motion';
import { useMemo } from 'react';

const PARTICLE_COUNT = 15;

const DataVisualizationBackground = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, () => ({
        startX: Math.random() * 100 + '%',
        startY: Math.random() * 100 + '%',
        endX: Math.random() * 100 + '%',
        endY: Math.random() * 100 + '%',
        scale: Math.random() * 0.5 + 0.5,
        size: Math.random() * 4 + 2 + 'px',
        duration: Math.random() * 20 + 20,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-muted-rose rounded-full"
          initial={{
            x: p.startX,
            y: p.startY,
            scale: p.scale,
          }}
          animate={{
            x: [p.startX, p.endX],
            y: [p.startY, p.endY],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
};

export default DataVisualizationBackground;
