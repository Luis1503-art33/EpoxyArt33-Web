import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { 
  Search,
  ChevronRight,
  Eye,
  Palette,
  X,
  Check
} from 'lucide-react';

// Most Popular Torginol Flake Blends - Top 12 Best Sellers
const torginolBlends = [
  // Most Popular for Garages
  { id: 'FB-4105', name: 'Slate', image: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/blends/FB-4105.webp', category: 'popular', colors: ['grey', 'dark'], description: 'Classic dark grey blend - #1 seller' },
  { id: 'FB-4102', name: 'Quartzite', image: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/blends/FB-4102.webp', category: 'popular', colors: ['grey', 'brown'], description: 'Natural stone look - Best seller' },
  { id: 'FB-4108', name: 'Sandstone', image: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/blends/FB-4108.webp', category: 'popular', colors: ['brown', 'neutral'], description: 'Warm earth tones - Popular choice' },
  { id: 'FB-4112', name: 'Blacktop', image: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/blends/FB-4112.webp', category: 'popular', colors: ['black', 'dark'], description: 'Bold black blend - Modern look' },
  { id: 'FB-4106', name: 'Shale', image: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/blends/FB-4106.webp', category: 'popular', colors: ['grey', 'brown'], description: 'Neutral grey-brown - Versatile' },
  { id: 'FB-4103', name: 'Travertine', image: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/blends/FB-4103.webp', category: 'popular', colors: ['brown', 'light'], description: 'Light tan blend - Bright spaces' },
  { id: 'FB-4110', name: 'Claystone', image: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/blends/FB-4110.webp', category: 'popular', colors: ['brown', 'neutral'], description: 'Rich brown tones - Elegant' },
  { id: 'FB-4107', name: 'Agate', image: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/blends/FB-4107.webp', category: 'popular', colors: ['brown', 'neutral'], description: 'Multi-tone brown - Natural' },
  { id: 'FB-4101', name: 'Blue Granite', image: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/blends/FB-4101.webp', category: 'popular', colors: ['blue', 'grey'], description: 'Blue accent - Unique style' },
  { id: 'FB-4211', name: 'Husky', image: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/blends/FB-4211.webp', category: 'popular', colors: ['grey', 'dark'], description: 'Charcoal grey - Industrial' },
  { id: 'FB-4214', name: 'Denali', image: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/blends/FB-4214.webp', category: 'popular', colors: ['grey', 'white'], description: 'Light grey-white - Clean look' },
  { id: 'FB-4212', name: 'Yukon', image: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/blends/FB-4212.webp', category: 'popular', colors: ['grey', 'brown'], description: 'Grey-brown mix - All-around' },
];

// Demo scene images
const sceneImages = [
  { id: 'garage-01', name: 'Garage 01', thumb: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/static/torginol/RESIDENTIAL_GARAGE_SCENE_01/thumb.jpg', full: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/envs/garage.jpg' },
  { id: 'garage-03', name: 'Garage 03', thumb: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/static/torginol/RESIDENTIAL_GARAGE_SCENE_03/thumb.jpg', full: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/envs/garage.jpg' },
  { id: 'garage-06', name: 'Garage 06', thumb: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/static/torginol/RESIDENTIAL_GARAGE_SCENE_06/thumb.jpg', full: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/envs/garage.jpg' },
  { id: 'warehouse', name: 'Warehouse', thumb: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/envs/warehouse.jpg', full: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/envs/warehouse.jpg' },
  { id: 'automotive', name: 'Auto Shop', thumb: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/static/torginol/COMMERCIAL_AUTOMOTIVE_GARAGE/thumb.jpg', full: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/static/torginol/COMMERCIAL_AUTOMOTIVE_GARAGE/thumb.jpg' },
  { id: 'kitchen', name: 'Kitchen', thumb: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/static/torginol/COMMERCIAL_KITCHEN_01/thumb.jpg', full: 'https://cdn.floor-wiz.com/shared_assets/core/latest/assets/images/static/torginol/COMMERCIAL_KITCHEN_01/thumb.jpg' },
];

// Color filter options - Simplified
const colorFilters = [
  { id: 'all', name: 'All' },
  { id: 'grey', name: 'Grey' },
  { id: 'brown', name: 'Brown' },
  { id: 'dark', name: 'Dark' },
  { id: 'light', name: 'Light' },
];

// Flake Swatch Component
const FlakeSwatch = ({ blend, isSelected, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`relative rounded-lg overflow-hidden border-2 transition-all group ${
      isSelected 
        ? 'border-yellow-500 ring-2 ring-yellow-500 ring-offset-2 scale-105' 
        : 'border-gray-200 hover:border-yellow-400'
    }`}
    whileHover={{ scale: isSelected ? 1.05 : 1.03 }}
    whileTap={{ scale: 0.98 }}
  >
    <img 
      src={blend.image} 
      alt={blend.name}
      className="w-full h-16 object-cover"
      loading="lazy"
    />
    <div className="bg-white px-2 py-1.5 text-left">
      <p className="text-xs font-semibold text-gray-900 truncate">{blend.name}</p>
      <p className="text-[10px] text-gray-500">{blend.id}</p>
    </div>
    {isSelected && (
      <div className="absolute top-1 right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
        <Check className="w-3 h-3 text-black" />
      </div>
    )}
  </motion.button>
);

// Scene Selector Component
const SceneSelector = ({ scenes, selectedScene, onSelect }) => (
  <div className="grid grid-cols-3 gap-2">
    {scenes.map(scene => (
      <motion.button
        key={scene.id}
        onClick={() => onSelect(scene)}
        className={`relative rounded-lg overflow-hidden border-2 transition-all ${
          selectedScene?.id === scene.id
            ? 'border-yellow-500'
            : 'border-gray-200 hover:border-gray-400'
        }`}
        whileHover={{ scale: 1.02 }}
      >
        <img 
          src={scene.thumb} 
          alt={scene.name}
          className="w-full h-16 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <span className="text-white text-xs font-medium">{scene.name}</span>
        </div>
      </motion.button>
    ))}
  </div>
);

// Main Visualizer Page
const FloorVisualizer = () => {
  const [selectedBlend, setSelectedBlend] = useState(torginolBlends[0]);
  const [selectedScene, setSelectedScene] = useState(sceneImages[0]);
  const [colorFilter, setColorFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFullscreen, setShowFullscreen] = useState(false);

  // Filter blends
  const filteredBlends = torginolBlends.filter(blend => {
    const matchesSearch = blend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blend.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesColor = colorFilter === 'all' || blend.colors.includes(colorFilter);
    return matchesSearch && matchesColor;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <SEO 
        title="Floor Visualizer Naples FL | See Torginol Flakes | EpoxyArt33"
        description="Visualize Torginol flake colors on your garage floor. Browse real flake samples and see them in realistic garage scenes. Free visualizer tool from EpoxyArt33 Naples FL."
        keywords="Torginol floor visualizer, epoxy flake colors, garage floor preview, flake color selector, epoxy design tool Naples, floor coating visualizer SWFL"
        url="/visualizer"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-6 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center">
              <Badge className="mb-3 bg-yellow-500 text-black">
                <Eye className="w-4 h-4 mr-2 inline" />
                Floor Design Tool
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Torginol <span className="text-yellow-500">Floor Visualizer</span>
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Browse real Torginol flake samples and visualize how they'll look in your space
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Visualizer */}
      <section className="flex-1 py-6 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Preview Area */}
            <div className="lg:col-span-8 space-y-4">
              {/* Main Preview */}
              <Card className="overflow-hidden">
                <div className="relative">
                  {/* Scene Image */}
                  <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                    <img 
                      src={selectedScene.thumb}
                      alt={selectedScene.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Floor Overlay with Blend Pattern */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.3) 100%)`,
                      }}
                    />
                    {/* Floor texture overlay */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-[60%]"
                      style={{
                        backgroundImage: `url(${selectedBlend.image})`,
                        backgroundSize: '400px',
                        backgroundRepeat: 'repeat',
                        opacity: 0.85,
                        mixBlendMode: 'multiply',
                        maskImage: 'linear-gradient(to top, black 0%, black 70%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, black 0%, black 70%, transparent 100%)',
                      }}
                    />
                  </div>
                  
                  {/* Selected Blend Info Overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-3">
                      <img 
                        src={selectedBlend.image} 
                        alt={selectedBlend.name}
                        className="w-12 h-12 rounded-lg object-cover border-2 border-yellow-500"
                      />
                      <div>
                        <p className="font-bold text-gray-900">{selectedBlend.name}</p>
                        <p className="text-xs text-gray-500">{selectedBlend.id}</p>
                      </div>
                    </div>
                  </div>

                  {/* Fullscreen Button */}
                  <button 
                    onClick={() => setShowFullscreen(true)}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-lg shadow-lg transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </Card>

              {/* Scene Selector */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    Select Scene
                  </h3>
                  <SceneSelector 
                    scenes={sceneImages}
                    selectedScene={selectedScene}
                    onSelect={setSelectedScene}
                  />
                </CardContent>
              </Card>

              {/* Selected Blend Details */}
              <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img 
                        src={selectedBlend.image} 
                        alt={selectedBlend.name}
                        className="w-20 h-20 rounded-xl object-cover border-4 border-white shadow-lg"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{selectedBlend.name}</h3>
                        <p className="text-sm text-gray-600">Torginol {selectedBlend.id}</p>
                        <div className="flex gap-1 mt-1">
                          {selectedBlend.colors.map(color => (
                            <Badge key={color} variant="outline" className="text-xs capitalize">
                              {color}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button 
                      className="bg-amber-600 hover:bg-amber-700 text-white"
                      onClick={() => window.location.href = `/contact?blend=${selectedBlend.id}`}
                    >
                      Get Quote for This Color
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Flake Selector */}
            <div className="lg:col-span-4 space-y-4">
              {/* Search & Filter */}
              <Card>
                <CardContent className="p-4 space-y-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search blends..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  {/* Color Filter */}
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-2">Filter by Color:</p>
                    <div className="flex flex-wrap gap-1">
                      {colorFilters.map(filter => (
                        <button
                          key={filter.id}
                          onClick={() => setColorFilter(filter.id)}
                          className={`px-2 py-1 text-xs rounded-full transition-colors ${
                            colorFilter === filter.id
                              ? 'bg-yellow-500 text-black font-medium'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {filter.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Flake Grid */}
              <Card className="max-h-[600px] overflow-hidden flex flex-col">
                <CardContent className="p-4 flex-1 overflow-y-auto">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">Most Popular Blends</h3>
                    <Badge variant="outline">{filteredBlends.length} options</Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {filteredBlends.map(blend => (
                      <FlakeSwatch
                        key={blend.id}
                        blend={blend}
                        isSelected={selectedBlend.id === blend.id}
                        onClick={() => setSelectedBlend(blend)}
                      />
                    ))}
                  </div>

                  {filteredBlends.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <p>No blends match your search</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg mb-2">Love What You See?</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Get a free quote for your project with this exact Torginol blend.
                  </p>
                  <Button 
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Request Free Quote
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-xs text-gray-400 mt-3 text-center">
                    Or call us: (239) 276-1462
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Preview Modal */}
      <AnimatePresence>
        {showFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            onClick={() => setShowFullscreen(false)}
          >
            <button 
              className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 p-2 rounded-full z-10"
              onClick={() => setShowFullscreen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative w-full h-full">
              <img 
                src={selectedScene.thumb}
                alt={selectedScene.name}
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute bottom-0 left-0 right-0 h-[60%]"
                style={{
                  backgroundImage: `url(${selectedBlend.image})`,
                  backgroundSize: '500px',
                  backgroundRepeat: 'repeat',
                  opacity: 0.85,
                  mixBlendMode: 'multiply',
                  maskImage: 'linear-gradient(to top, black 0%, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to top, black 0%, black 70%, transparent 100%)',
                }}
              />
              
              {/* Info Overlay */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-4">
                  <img 
                    src={selectedBlend.image} 
                    alt={selectedBlend.name}
                    className="w-16 h-16 rounded-lg object-cover border-2 border-yellow-500"
                  />
                  <div>
                    <p className="font-bold text-xl text-gray-900">{selectedBlend.name}</p>
                    <p className="text-sm text-gray-500">Torginol {selectedBlend.id}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default FloorVisualizer;
