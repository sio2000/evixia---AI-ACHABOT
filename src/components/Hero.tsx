import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/images/fon.jpeg';
import botImage from '../../assets/images/bot.jpg';
import symbolImage from '../../assets/images/symbol.jpg';
import rosewoodImage from '../../assets/images/rosewood.png';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      title: t('hero.slide1Title'),
      subtitle: t('hero.slide1Subtitle'),
      bgImage: backgroundImage,
      showButtons: true,
      bgPosition: 'center'
    },
    {
      title: t('hero.slide2Title'),
      subtitle: t('hero.slide2Subtitle'),
      bgImage: rosewoodImage,
      showButtons: false,
      bgPosition: 'center',
      specialButtons: true
    },
    {
      title: t('hero.slide3Title'),
      subtitle: t('hero.slide3Subtitle'),
      bgImage: botImage,
      showButtons: true,
      bgPosition: 'center'
    },
    {
      title: t('hero.slide4Title'),
      subtitle: t('hero.slide4Subtitle'),
      bgImage: symbolImage,
      showButtons: true,
      bgPosition: 'center'
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };
  
  return (
    <div className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[activeSlide].bgImage})`,
          backgroundSize: activeSlide === 1 ? '110%' : 'cover',
          backgroundPosition: slides[activeSlide].bgPosition,
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide} 
        className="absolute left-6 z-20 bg-black/20 hover:bg-black/40 p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-10 h-10 text-white/80" />
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute right-6 z-20 bg-black/20 hover:bg-black/40 p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-10 h-10 text-white/80" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="min-h-[300px] flex items-center justify-center">
          <div className="transition-all duration-500" 
              style={{ 
                opacity: 1,
                transform: 'translateY(0)'
              }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              {slides[activeSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-24 max-w-3xl mx-auto">
              {slides[activeSlide].subtitle}
            </p>
          </div>
        </div>
        
        {/* Regular buttons for most slides */}
        {slides[activeSlide].showButtons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 mt-24">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-[#D89084] hover:bg-[#c27e72] text-white rounded-full font-semibold transition-colors duration-300 transform hover:scale-105"
            >
              {t('hero.contactUs')}
            </button>
            <button 
              onClick={() => navigate('/products')}
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {t('hero.ourProducts')}
            </button>
          </div>
        )}

        {/* Special buttons for Health & Environmental Benefits slide */}
        {slides[activeSlide].specialButtons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 mt-24">
            <button 
              onClick={() => navigate('/humans')}
              className="px-8 py-3 bg-[#D89084] hover:bg-[#c27e72] text-white rounded-full font-semibold transition-colors duration-300 transform hover:scale-105"
            >
              {t('hero.humans')}
            </button>
            <button 
              onClick={() => navigate('/animals')}
              className="px-8 py-3 bg-[#D89084] hover:bg-[#c27e72] text-white rounded-full font-semibold transition-colors duration-300 transform hover:scale-105"
            >
              {t('hero.animals')}
            </button>
            <button 
              onClick={() => navigate('/plants')}
              className="px-8 py-3 bg-[#D89084] hover:bg-[#c27e72] text-white rounded-full font-semibold transition-colors duration-300 transform hover:scale-105"
            >
              {t('hero.plants')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;