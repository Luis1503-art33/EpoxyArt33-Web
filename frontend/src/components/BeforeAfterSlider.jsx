import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';

const BeforeAfterSlider = ({ beforeImage, afterImage, altText = "Before and After Comparison" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

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
    <Card className="overflow-hidden cursor-ew-resize">
      <CardContent className="p-0">
        <div
          className="relative w-full h-96 select-none"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {/* After Image (full) */}
          <img
            src={afterImage}
            alt={`${altText} - After`}
            className="absolute top-0 left-0 w-full h-full object-cover"
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

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Slider Handle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-yellow-500">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-yellow-500"></div>
                <div className="w-1 h-4 bg-yellow-500"></div>
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm font-bold">
            BEFORE
          </div>
          <div className="absolute top-4 right-4 bg-yellow-500 bg-opacity-90 text-black px-3 py-1 rounded text-sm font-bold">
            AFTER
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BeforeAfterSlider;
