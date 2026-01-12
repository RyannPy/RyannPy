import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const HangingCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  // Konfigurasi untuk customization
  const config = {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=500&fit=crop", // Ganti dengan URL gambar kamu
    name: "Ryan", // Ganti dengan nama kamu
  };
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const dragY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), {
    stiffness: 150,
    damping: 20
  });
  
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), {
    stiffness: 150,
    damping: 20
  });
  
  const ropeRotate = useSpring(useTransform(dragY, [0, 100], [0, 15]), {
    stiffness: 200,
    damping: 15
  });
  
  const handleMouseMove = (e) => {
    if (isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };
  
  const handleMouseLeave = () => {
    if (isDragging) return;
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div className="flex items-center justify-center p-8 min-h-screen">
      <div className="relative flex flex-col items-center gap-6" style={{ perspective: '1000px' }}>
        {/* Rope and hook */}
        <motion.div
          style={{
            rotate: ropeRotate,
          }}
          animate={{
            rotate: isHovered && !isDragging ? [0, 2, -2, 0] : 0
          }}
          transition={{
            duration: 2,
            repeat: isHovered && !isDragging ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center origin-top"
        >
          {/* Hook */}
          <motion.div
            animate={{
              y: isHovered && !isDragging ? [0, -5, 0] : 0
            }}
            transition={{
              duration: 2,
              repeat: isHovered && !isDragging ? Infinity : 0
            }}
            className="w-8 h-8 border-4 border-gray-600 rounded-t-full border-b-0 mb-2"
          />
          
          {/* Rope */}
          <motion.div
            className="w-1 h-24 bg-linear-to-b from-gray-600 to-gray-700 shadow-lg relative"
          >
            <div className="absolute inset-0 w-full bg-gray-800/30" />
          </motion.div>
        </motion.div>

        {/* Card */}
        <motion.div
          style={{
            rotateX: isDragging ? 0 : rotateX,
            rotateY: isDragging ? 0 : rotateY,
            y: dragY,
          }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 200 }}
          dragElastic={0.2}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={(e, info) => {
            setIsDragging(false);
            // Jika ditarik cukup jauh, mental ke atas
            if (info.offset.y > 100) {
              dragY.set(0);
            }
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          whileHover={!isDragging ? { y: -10, scale: 1.02 } : {}}
          whileTap={{ scale: 0.98 }}
          className="relative cursor-grab active:cursor-grabbing"
        >
          {/* Hole at top */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-900 rounded-full border-4 border-gray-600 z-10 shadow-inner" />
          
          {/* Main card */}
          <motion.div
            className="bg-gray-900 rounded-3xl shadow-2xl w-72 h-96 relative overflow-hidden border border-gray-800"
            whileHover={!isDragging ? { boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)" } : {}}
          >
            {/* Shine effect */}
            <motion.div
              animate={{
                x: isHovered && !isDragging ? ["-100%", "200%"] : "-100%",
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12 z-20 pointer-events-none"
            />
            
            {/* Image */}
            <div className="relative w-full h-full">
              <img
                src={config.image}
                alt={config.name}
                className="w-full h-full object-cover"
                draggable="false"
              />
              
              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent pointer-events-none" />
              
              {/* Name tag at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 pointer-events-none"
              >
                <div className="bg-gray-900/80 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-700">
                  <div className="text-2xl font-bold text-white">{config.name}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HangingCard;