import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';

const BeforeAfterSlider = ({ beforeImage, afterImage, altText = "Before and After Comparison" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMove = (clientX, rect) => {
    if (rect) {
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(percent);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card 
        className="overflow-hidden cursor-ew-resize shadow-2xl hover:shadow-3xl transition-shadow duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          <motion.div
            className="relative w-full h-96 select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            animate={{ scale: isHovered ? 1.02 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* After Image (full) */}
            <motion.img
              src={afterImage}
              alt={`${altText} - After`}
              className="absolute top-0 left-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Before Image (clipped) */}
            <div
              className="absolute top-0 left-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={beforeImage}
                alt={`${altText} - Before`}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>

            {/* Animated Slider Line */}
            <motion.div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
              animate={{ 
                boxShadow: isDragging 
                  ? "0 0 20px rgba(245, 158, 11, 0.8)" 
                  : "0 0 10px rgba(255, 255, 255, 0.5)" 
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Slider Handle with Pulse Animation */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-yellow-500"
                animate={{ 
                  scale: isDragging ? 1.2 : isHovered ? [1, 1.1, 1] : 1,
                  rotate: isDragging ? 0 : 0
                }}
                transition={{ 
                  scale: { 
                    duration: isHovered && !isDragging ? 1.5 : 0.2, 
                    repeat: isHovered && !isDragging ? Infinity : 0 
                  }
                }}
              >
                <div className="flex gap-1">
                  <motion.div 
                    className="w-1 h-4 bg-yellow-500"
                    animate={{ x: isDragging ? -2 : 0 }}
                  />
                  <motion.div 
                    className="w-1 h-4 bg-yellow-500"
                    animate={{ x: isDragging ? 2 : 0 }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Animated Labels */}
            <motion.div 
              className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm font-bold"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              BEFORE
            </motion.div>
            <motion.div 
              className="absolute top-4 right-4 bg-yellow-500 bg-opacity-90 text-black px-3 py-1 rounded text-sm font-bold"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              AFTER
            </motion.div>

            {/* Instruction Hint */}
            {!isDragging && isHovered && (
              <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
              >
                ← Drag to compare →
              </motion.div>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BeforeAfterSlider;
