import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, CheckCircle, BarChart } from 'lucide-react';
import LazyImage from './ui/LazyImage';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Usar IntersectionObserver en lugar de múltiples setTimeout
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+5491130332808";
    const message = encodeURIComponent("Hola! Vi tu página y queria hacerte una consulta");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="inicio" ref={sectionRef} className="pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <div className="badge badge-cta inline-block mb-2 md:mb-4 animate-on-scroll text-xs md:text-sm">
                Soluciones digitales para PyMEs argentinas
              </div>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-on-scroll"
              >
                Tu negocio <span className="text-accent">digitalizado</span> <br className="hidden sm:block"/>
                en menos de 20 días
              </h1>
              <p
                className="text-base md:text-lg text-muted-foreground mt-3 md:mt-6 max-w-lg animate-on-scroll"
              >
                Ayudo a PyMEs y emprendedores argentinos a digitalizarse rápido con webs y apps funcionales en tiempo récord. Sin excusas, sin demoras.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4 animate-on-scroll">
              <Button
                variant="outline"
                className="rounded-full px-6 py-5 md:px-8 md:py-6 text-sm md:text-base border-primary"
                onClick={handleWhatsAppRedirect}
              >
                Charlemos
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-4 md:pt-8 border-t border-border">
              <div className="text-center">
                <h3 className="text-xl md:text-3xl font-bold text-primary">-70%</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Tiempo de desarrollo</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-3xl font-bold text-primary">+80%</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Conversión digital</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-3xl font-bold text-primary">100%</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Clientes satisfechos</p>
              </div>
            </div>
          </div>

          <div
            className="relative animate-on-scroll lg:block mt-6 md:mt-0"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <LazyImage
                src="/images/hero-image.webp"
                alt="Emprendedor argentino trabajando en su negocio"
                fallbackSrc="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                width="800"
                height="600"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-6 -bottom-6 w-40 md:w-64 h-40 md:h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -left-16 -top-16 w-40 md:w-64 h-40 md:h-64 bg-primary/5 rounded-full filter blur-3xl"></div>

            {/* Floating features - simplificados para mejor rendimiento */}
            <div className="absolute -left-4 md:-left-12 top-1/3 glass-card p-2 md:p-4 rounded-xl shadow-xl">
              <div className="flex items-center space-x-1 md:space-x-2">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-cta" />
                <div className="text-xs md:text-sm font-medium">En menos de 20 días</div>
              </div>
            </div>

            <div className="absolute -right-4 md:-right-8 top-1/4 glass-card p-2 md:p-4 rounded-xl shadow-xl">
              <div className="flex items-center space-x-1 md:space-x-2">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                <div className="text-xs md:text-sm font-medium">Sin complicaciones</div>
              </div>
            </div>

            <div className="absolute right-4 md:right-10 bottom-1/4 glass-card p-2 md:p-4 rounded-xl shadow-xl">
              <div className="flex items-center space-x-1 md:space-x-2">
                <BarChart className="h-4 w-4 md:h-5 md:w-5 text-highlight" />
                <div className="text-xs md:text-sm font-medium">Resultados inmediatos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
