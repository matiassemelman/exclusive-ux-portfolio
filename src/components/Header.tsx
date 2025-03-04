import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Clock } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Evitar scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+5491130332808";
    const message = encodeURIComponent("Hola! Vi tu página y queria hacerte una consulta");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-2 md:py-4' : 'bg-transparent py-3 md:py-6'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-bold text-dark transition-all duration-300 flex items-center">
          <span>DIGITAL</span><span className="text-primary">20</span>
          <Clock className="h-4 w-4 md:h-5 md:w-5 ml-1 text-primary" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {['Inicio', 'Sobre mí', 'Servicios', 'Portafolio', 'Proceso', 'Testimonios', 'Contacto'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            variant="default"
            className="rounded-full px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base hover:translate"
            onClick={handleWhatsAppRedirect}
          >
            ¡Digitalizate ya!
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 relative"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex flex-col md:hidden overflow-y-auto"
          style={{ top: 0, height: '100vh' }}
        >
          <div className="container mx-auto mt-20 px-4">
            <nav className="flex flex-col space-y-3">
              {['Inicio', 'Sobre mí', 'Servicios', 'Portafolio', 'Proceso', 'Testimonios', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                  className="text-lg font-medium py-2.5 border-b border-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4">
                <Button
                  variant="default"
                  className="rounded-full w-full py-5 text-sm"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleWhatsAppRedirect();
                  }}
                >
                  ¡Digitalizate ya!
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
