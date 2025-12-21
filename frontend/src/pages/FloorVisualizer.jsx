import React, { useState, useRef, Suspense, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  Upload, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Palette, 
  Camera,
  Download,
  ChevronRight,
  Search,
  X,
  Sparkles,
  Eye
} from 'lucide-react';

// Torginol Color Catalog - Complete Collection
const torginolColors = {
  garage: [
    { id: 'domino', name: 'Domino', colors: ['#1a1a1a', '#ffffff', '#4a4a4a'], type: 'blend' },
    { id: 'saddle-tan', name: 'Saddle Tan', colors: ['#8B7355', '#D4A574', '#5C4033'], type: 'blend' },
    { id: 'graphite', name: 'Graphite', colors: ['#4a4a4a', '#2d2d2d', '#666666'], type: 'blend' },
    { id: 'mocha', name: 'Mocha', colors: ['#6B4423', '#8B6914', '#4A3728'], type: 'blend' },
    { id: 'outback', name: 'Outback', colors: ['#C4A35A', '#8B7355', '#D4A574'], type: 'blend' },
    { id: 'nightfall', name: 'Nightfall', colors: ['#1a1a2e', '#16213e', '#0f3460'], type: 'blend' },
  ],
  greystone: [
    { id: 'greystone-1', name: 'Silver Storm', colors: ['#A8A8A8', '#787878', '#D8D8D8'], type: 'blend' },
    { id: 'greystone-2', name: 'Pewter', colors: ['#8E9196', '#5C5D60', '#B4B5B7'], type: 'blend' },
    { id: 'greystone-3', name: 'Charcoal Mist', colors: ['#5C5C5C', '#3D3D3D', '#7A7A7A'], type: 'blend' },
    { id: 'greystone-4', name: 'Granite', colors: ['#676767', '#9E9E9E', '#4A4A4A'], type: 'blend' },
    { id: 'greystone-5', name: 'Slate', colors: ['#708090', '#4A5568', '#94A3B8'], type: 'blend' },
    { id: 'greystone-6', name: 'Dove', colors: ['#D6D6D6', '#B8B8B8', '#F0F0F0'], type: 'blend' },
  ],
  brownstone: [
    { id: 'brownstone-1', name: 'Autumn', colors: ['#8B4513', '#A0522D', '#D2691E'], type: 'blend' },
    { id: 'brownstone-2', name: 'Caramel', colors: ['#C68E17', '#8B6914', '#DAA520'], type: 'blend' },
    { id: 'brownstone-3', name: 'Espresso', colors: ['#3C2415', '#5C4033', '#2D1810'], type: 'blend' },
    { id: 'brownstone-4', name: 'Terra Cotta', colors: ['#E2725B', '#C4A35A', '#8B4513'], type: 'blend' },
    { id: 'brownstone-5', name: 'Sahara', colors: ['#C2B280', '#8B7355', '#D4A574'], type: 'blend' },
    { id: 'brownstone-6', name: 'Chestnut', colors: ['#954535', '#6B4423', '#B87333'], type: 'blend' },
  ],
  marble: [
    { id: 'marble-1', name: 'Carrara White', colors: ['#FAFAFA', '#E8E8E8', '#D0D0D0'], type: 'blend' },
    { id: 'marble-2', name: 'Calacatta Gold', colors: ['#F5F5DC', '#DAA520', '#FFFFF0'], type: 'blend' },
    { id: 'marble-3', name: 'Emperador Dark', colors: ['#3D2914', '#5C4033', '#8B6914'], type: 'blend' },
    { id: 'marble-4', name: 'Crema Marfil', colors: ['#FFFDD0', '#F5DEB3', '#DEB887'], type: 'blend' },
    { id: 'marble-5', name: 'Nero Marquina', colors: ['#1A1A1A', '#FFFFFF', '#2D2D2D'], type: 'blend' },
    { id: 'marble-6', name: 'Statuario', colors: ['#F8F8FF', '#C0C0C0', '#DCDCDC'], type: 'blend' },
  ],
  terrazzo: [
    { id: 'terrazzo-1', name: 'Venice', colors: ['#F5F5DC', '#CD853F', '#8B4513', '#2F4F4F'], type: 'terrazzo' },
    { id: 'terrazzo-2', name: 'Milano', colors: ['#DCDCDC', '#696969', '#A9A9A9', '#1C1C1C'], type: 'terrazzo' },
    { id: 'terrazzo-3', name: 'Roma', colors: ['#FFF8DC', '#DAA520', '#B8860B', '#8B7355'], type: 'terrazzo' },
    { id: 'terrazzo-4', name: 'Firenze', colors: ['#FAF0E6', '#D2691E', '#8B4513', '#5C4033'], type: 'terrazzo' },
    { id: 'terrazzo-5', name: 'Napoli', colors: ['#F0F0F0', '#4682B4', '#5F9EA0', '#708090'], type: 'terrazzo' },
    { id: 'terrazzo-6', name: 'Palermo', colors: ['#FFFAF0', '#BC8F8F', '#CD5C5C', '#8B0000'], type: 'terrazzo' },
  ],
  solid: [
    { id: 'black', name: 'Black', colors: ['#1A1A1A'], type: 'solid' },
    { id: 'white', name: 'White', colors: ['#FAFAFA'], type: 'solid' },
    { id: 'dark-grey', name: 'Dark Grey', colors: ['#4A4A4A'], type: 'solid' },
    { id: 'medium-grey', name: 'Medium Grey', colors: ['#808080'], type: 'solid' },
    { id: 'light-grey', name: 'Light Grey', colors: ['#C0C0C0'], type: 'solid' },
    { id: 'beige', name: 'Beige', colors: ['#D4A574'], type: 'solid' },
    { id: 'tan', name: 'Tan', colors: ['#C4A35A'], type: 'solid' },
    { id: 'brown', name: 'Brown', colors: ['#6B4423'], type: 'solid' },
    { id: 'red', name: 'Safety Red', colors: ['#CC0000'], type: 'solid' },
    { id: 'blue', name: 'Royal Blue', colors: ['#4169E1'], type: 'solid' },
    { id: 'green', name: 'Forest Green', colors: ['#228B22'], type: 'solid' },
    { id: 'yellow', name: 'Safety Yellow', colors: ['#FFD700'], type: 'solid' },
  ],
  quartz: [
    { id: 'quartz-tan', name: 'Tan Quartz', colors: ['#C4A35A', '#8B7355'], type: 'quartz' },
    { id: 'quartz-grey', name: 'Grey Quartz', colors: ['#808080', '#A9A9A9'], type: 'quartz' },
    { id: 'quartz-brown', name: 'Brown Quartz', colors: ['#6B4423', '#8B6914'], type: 'quartz' },
    { id: 'quartz-black', name: 'Black Quartz', colors: ['#2D2D2D', '#4A4A4A'], type: 'quartz' },
    { id: 'quartz-white', name: 'White Quartz', colors: ['#F0F0F0', '#DCDCDC'], type: 'quartz' },
    { id: 'quartz-blend', name: 'Natural Blend', colors: ['#C4A35A', '#808080', '#6B4423'], type: 'quartz' },
  ],
};

// 3D Garage Floor Component
function GarageFloor({ color, pattern }) {
  const floorRef = useRef();
  
  // Create gradient/pattern based on color selection
  const getFloorColor = () => {
    if (color.colors.length === 1) {
      return color.colors[0];
    }
    return color.colors[0]; // Primary color for 3D
  };

  return (
    <mesh ref={floorRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[10, 8]} />
      <meshStandardMaterial 
        color={getFloorColor()} 
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  );
}

// 3D Garage Walls
function GarageWalls() {
  return (
    <group>
      {/* Back Wall */}
      <mesh position={[0, 2, -4]} receiveShadow>
        <boxGeometry args={[10, 4, 0.2]} />
        <meshStandardMaterial color="#E8E8E8" />
      </mesh>
      {/* Left Wall */}
      <mesh position={[-5, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[8, 4, 0.2]} />
        <meshStandardMaterial color="#F0F0F0" />
      </mesh>
      {/* Right Wall */}
      <mesh position={[5, 2, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[8, 4, 0.2]} />
        <meshStandardMaterial color="#F0F0F0" />
      </mesh>
      {/* Ceiling */}
      <mesh position={[0, 4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
    </group>
  );
}

// Garage Door
function GarageDoor() {
  return (
    <group position={[0, 1.75, 4]}>
      {/* Door Frame */}
      <mesh>
        <boxGeometry args={[8, 3.5, 0.1]} />
        <meshStandardMaterial color="#D0D0D0" />
      </mesh>
      {/* Door Panels */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0, 1.3 - i * 0.85, 0.06]}>
          <boxGeometry args={[7.8, 0.8, 0.05]} />
          <meshStandardMaterial color="#B8B8B8" />
        </mesh>
      ))}
    </group>
  );
}

// Simple Car Silhouette
function CarSilhouette() {
  return (
    <group position={[0, 0.4, 0]}>
      {/* Car Body */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[2, 0.6, 4]} />
        <meshStandardMaterial color="#2D2D2D" transparent opacity={0.3} />
      </mesh>
      {/* Car Top */}
      <mesh position={[0, 0.7, -0.3]} castShadow>
        <boxGeometry args={[1.8, 0.5, 2]} />
        <meshStandardMaterial color="#2D2D2D" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

// Workbench
function Workbench() {
  return (
    <group position={[-4, 0, -3]}>
      <mesh position={[0, 0.45, 0]} castShadow>
        <boxGeometry args={[1.5, 0.9, 0.6]} />
        <meshStandardMaterial color="#4A4A4A" />
      </mesh>
      <mesh position={[0, 0.95, 0]}>
        <boxGeometry args={[1.6, 0.05, 0.7]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
    </group>
  );
}

// Tool Cabinet
function ToolCabinet() {
  return (
    <group position={[4, 0, -3]}>
      <mesh position={[0, 0.75, 0]} castShadow>
        <boxGeometry args={[1, 1.5, 0.5]} />
        <meshStandardMaterial color="#CC0000" />
      </mesh>
    </group>
  );
}

// Floor Pattern Overlay for Flake Effect
function FlakePattern({ color }) {
  const patternRef = useRef();
  
  useFrame(() => {
    if (patternRef.current) {
      // Subtle animation for visual interest
    }
  });

  if (color.colors.length <= 1) return null;

  return (
    <group ref={patternRef}>
      {color.colors.slice(1).map((c, i) => (
        Array.from({ length: 50 }).map((_, j) => (
          <mesh 
            key={`${i}-${j}`}
            position={[
              (Math.random() - 0.5) * 9,
              0.01 + i * 0.001,
              (Math.random() - 0.5) * 7
            ]}
            rotation={[-Math.PI / 2, 0, Math.random() * Math.PI]}
          >
            <planeGeometry args={[0.1 + Math.random() * 0.1, 0.05 + Math.random() * 0.05]} />
            <meshStandardMaterial color={c} transparent opacity={0.8} />
          </mesh>
        ))
      ))}
    </group>
  );
}

// Main 3D Scene
function GarageScene({ selectedColor, showCar }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[5, 10, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <pointLight position={[0, 3, 0]} intensity={0.5} />
      
      <GarageFloor color={selectedColor} />
      <FlakePattern color={selectedColor} />
      <GarageWalls />
      <GarageDoor />
      {showCar && <CarSilhouette />}
      <Workbench />
      <ToolCabinet />
      
      <ContactShadows 
        position={[0, 0, 0]} 
        opacity={0.4} 
        scale={15} 
        blur={2} 
        far={10} 
      />
      
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minPolarAngle={0.2}
        maxPolarAngle={Math.PI / 2 - 0.1}
        minDistance={5}
        maxDistance={20}
      />
      
      <Environment preset="apartment" />
    </>
  );
}

// Color Swatch Component
function ColorSwatch({ color, isSelected, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative rounded-lg overflow-hidden border-2 transition-all ${
        isSelected ? 'border-yellow-500 ring-2 ring-yellow-500 ring-offset-2' : 'border-gray-200 hover:border-gray-400'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-16 h-16 flex">
        {color.colors.map((c, i) => (
          <div 
            key={i} 
            className="flex-1 h-full" 
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
    </motion.button>
  );
}

// Photo Upload Component with Floor Detection
function PhotoUploader({ onImageSelect }) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => onImageSelect(e.target.result);
      reader.readAsDataURL(file);
    }
  }, [onImageSelect]);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => onImageSelect(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
        isDragging ? 'border-yellow-500 bg-yellow-50' : 'border-gray-300 hover:border-gray-400'
      }`}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
      <p className="text-gray-600 mb-2">Drag & drop your garage photo here</p>
      <p className="text-sm text-gray-400 mb-4">or</p>
      <Button 
        variant="outline" 
        onClick={() => fileInputRef.current?.click()}
      >
        Browse Files
      </Button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileSelect}
      />
    </div>
  );
}

// Photo Visualizer with Color Overlay
function PhotoVisualizer({ image, selectedColor, onClose }) {
  const canvasRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="text-lg font-bold">Your Space with {selectedColor.name}</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        <div className="p-4">
          <div className="relative">
            <img 
              src={image} 
              alt="Your space" 
              className="w-full h-auto rounded-lg"
              style={{ 
                filter: `sepia(20%) saturate(80%)`,
              }}
            />
            <div 
              className="absolute inset-0 rounded-lg mix-blend-overlay"
              style={{ 
                background: `linear-gradient(to bottom, transparent 40%, ${selectedColor.colors[0]}80 100%)`,
              }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            * This is an approximation. Actual results may vary. Contact us for a free on-site consultation.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Main Visualizer Page
const FloorVisualizer = () => {
  const [selectedColor, setSelectedColor] = useState(torginolColors.garage[0]);
  const [activeCategory, setActiveCategory] = useState('garage');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCar, setShowCar] = useState(true);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showPhotoVisualizer, setShowPhotoVisualizer] = useState(false);

  const categories = [
    { id: 'garage', name: 'Garage Collection' },
    { id: 'greystone', name: 'Greystone' },
    { id: 'brownstone', name: 'Brownstone' },
    { id: 'marble', name: 'Marble' },
    { id: 'terrazzo', name: 'Terrazzo' },
    { id: 'solid', name: 'Solid Colors' },
    { id: 'quartz', name: 'Quartz' },
  ];

  const filteredColors = torginolColors[activeCategory]?.filter(
    color => color.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const allColors = Object.values(torginolColors).flat();
  const searchResults = searchQuery 
    ? allColors.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SEO 
        title="3D Floor Visualizer Naples FL | See Your Epoxy Floor | EpoxyArt33"
        description="Visualize your new epoxy floor before installation! Try Torginol flakes and quartz colors in our 3D garage visualizer. Upload your own photo. Free tool from EpoxyArt33 Naples FL."
        keywords="epoxy floor visualizer, garage floor preview, Torginol color selector, 3D floor viewer, epoxy color picker Naples, floor design tool SWFL"
        url="/visualizer"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center">
              <Badge className="mb-4 bg-yellow-500 text-black">
                <Eye className="w-4 h-4 mr-2 inline" />
                Interactive Tool
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                3D Floor <span className="text-yellow-500">Visualizer</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                See exactly how your new epoxy floor will look. Choose from our complete Torginol catalog 
                and visualize it in a realistic 3D garage environment.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Visualizer */}
      <section className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 3D Viewer */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                      {selectedColor.name}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setShowCar(!showCar)}
                      >
                        {showCar ? 'Hide Car' : 'Show Car'}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-[500px] bg-gray-100 relative">
                    <Canvas
                      shadows
                      camera={{ position: [8, 6, 8], fov: 50 }}
                      gl={{ preserveDrawingBuffer: true }}
                    >
                      <Suspense fallback={
                        <Html center>
                          <div className="text-gray-500">Loading 3D Scene...</div>
                        </Html>
                      }>
                        <GarageScene selectedColor={selectedColor} showCar={showCar} />
                      </Suspense>
                    </Canvas>
                    
                    {/* Controls Overlay */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg p-3 text-sm text-gray-600">
                      <p className="font-medium mb-1">Controls:</p>
                      <p>🖱️ Left click + drag: Rotate</p>
                      <p>🖱️ Right click + drag: Pan</p>
                      <p>🖱️ Scroll: Zoom</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Color Preview Bar */}
              <Card className="mt-4">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-600">Selected Color:</span>
                    <div className="flex items-center gap-2">
                      <div className="flex rounded-lg overflow-hidden border-2 border-gray-200">
                        {selectedColor.colors.map((c, i) => (
                          <div 
                            key={i} 
                            className="w-8 h-8" 
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                      <span className="font-bold">{selectedColor.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {selectedColor.type}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Upload Your Photo */}
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Camera className="w-5 h-5" />
                    Visualize Your Own Space
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!uploadedImage ? (
                    <PhotoUploader onImageSelect={setUploadedImage} />
                  ) : (
                    <div className="space-y-4">
                      <div className="relative rounded-lg overflow-hidden">
                        <img 
                          src={uploadedImage} 
                          alt="Your space" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <Button 
                          size="sm"
                          className="absolute bottom-3 right-3 bg-yellow-500 hover:bg-yellow-600 text-black"
                          onClick={() => setShowPhotoVisualizer(true)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Preview with {selectedColor.name}
                        </Button>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setUploadedImage(null)}
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Upload Different Photo
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Color Selector Sidebar */}
            <div className="space-y-4">
              {/* Search */}
              <Card>
                <CardContent className="p-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search colors..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  {searchQuery && searchResults.length > 0 && (
                    <div className="mt-3 max-h-48 overflow-y-auto">
                      <p className="text-xs text-gray-500 mb-2">Search Results:</p>
                      <div className="grid grid-cols-4 gap-2">
                        {searchResults.slice(0, 8).map(color => (
                          <ColorSwatch
                            key={color.id}
                            color={color}
                            isSelected={selectedColor.id === color.id}
                            onClick={() => {
                              setSelectedColor(color);
                              setSearchQuery('');
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Category Tabs */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    Torginol Colors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeCategory} onValueChange={setActiveCategory}>
                    <TabsList className="flex flex-wrap h-auto gap-1 bg-transparent p-0 mb-4">
                      {categories.map(cat => (
                        <TabsTrigger
                          key={cat.id}
                          value={cat.id}
                          className="text-xs px-2 py-1 data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
                        >
                          {cat.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {categories.map(cat => (
                      <TabsContent key={cat.id} value={cat.id} className="mt-0">
                        <div className="grid grid-cols-3 gap-2">
                          {torginolColors[cat.id]?.map(color => (
                            <div key={color.id} className="text-center">
                              <ColorSwatch
                                color={color}
                                isSelected={selectedColor.id === color.id}
                                onClick={() => setSelectedColor(color)}
                              />
                              <p className="text-xs mt-1 text-gray-600 truncate">{color.name}</p>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-br from-amber-600 to-amber-700 text-white">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Love This Color?</h3>
                  <p className="text-amber-100 text-sm mb-4">
                    Get a free quote for your garage floor with this exact color and finish.
                  </p>
                  <Button 
                    className="w-full bg-white text-amber-700 hover:bg-gray-100"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Free Quote
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Visualizer Modal */}
      <AnimatePresence>
        {showPhotoVisualizer && uploadedImage && (
          <PhotoVisualizer 
            image={uploadedImage}
            selectedColor={selectedColor}
            onClose={() => setShowPhotoVisualizer(false)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default FloorVisualizer;
