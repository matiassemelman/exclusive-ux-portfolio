
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, CheckCircle, BarChart } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    const image = imageRef.current;

    if (title) title.classList.add('animate-fade-in');
    
    setTimeout(() => {
      if (subtitle) subtitle.classList.add('animate-fade-in');
    }, 300);
    
    setTimeout(() => {
      if (cta) cta.classList.add('animate-fade-in');
    }, 600);
    
    setTimeout(() => {
      if (image) image.classList.add('animate-fade-in-right');
    }, 900);
    
  }, []);

  return (
    <section id="inicio" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="badge badge-cta inline-block mb-4 opacity-0 animate-fade-in">
                Soluciones digitales para PyMEs argentinas
              </div>
              <h1 
                ref={titleRef} 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0"
              >
                Tu negocio <span className="text-accent">digitalizado</span> <br/>
                en menos de 20 días
              </h1>
              <p 
                ref={subtitleRef} 
                className="text-lg md:text-xl text-muted-foreground mt-6 max-w-lg opacity-0"
              >
                Ayudo a PyMEs y emprendedores argentinos a digitalizarse rápido con webs y apps funcionales en tiempo récord. Sin excusas, sin demoras.
              </p>
            </div>
            
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0">
              <Button className="rounded-full px-8 py-6 text-base bg-cta text-dark hover:bg-cta/90">
                Ver resultados
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-base border-primary">
                Charlemos
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary">-70%</h3>
                <p className="text-sm text-muted-foreground">Tiempo de desarrollo</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary">+80%</h3>
                <p className="text-sm text-muted-foreground">Conversión digital</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary">100%</h3>
                <p className="text-sm text-muted-foreground">Clientes satisfechos</p>
              </div>
            </div>
          </div>
          
          <div 
            ref={imageRef} 
            className="relative opacity-0 lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Emprendedor argentino trabajando en su negocio" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -right-6 -bottom-6 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -left-16 -top-16 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
            
            {/* Floating features */}
            <div className="absolute -left-12 top-1/3 glass-card p-4 rounded-xl animate-float shadow-xl">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-cta" />
                <div className="text-sm font-medium">En menos de 20 días</div>
              </div>
            </div>
            
            <div className="absolute -right-8 top-1/4 glass-card p-4 rounded-xl shadow-xl animate-float animation-delay-1000">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <div className="text-sm font-medium">Sin complicaciones</div>
              </div>
            </div>
            
            <div className="absolute right-10 bottom-1/4 glass-card p-4 rounded-xl shadow-xl animate-float animation-delay-2000">
              <div className="flex items-center space-x-2">
                <BarChart className="h-5 w-5 text-highlight" />
                <div className="text-sm font-medium">Resultados inmediatos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
