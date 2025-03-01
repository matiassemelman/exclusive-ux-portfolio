
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
            <div className="space-y-2">
              <div className="badge badge-accent inline-block mb-4 opacity-0 animate-fade-in">
                Desarrollador Full Stack Premium
              </div>
              <h1 
                ref={titleRef} 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0"
              >
                Soluciones digitales <br />
                <span className="text-accent">exclusivas</span> para tu negocio
              </h1>
              <p 
                ref={subtitleRef} 
                className="text-lg md:text-xl text-muted-foreground mt-6 max-w-lg opacity-0"
              >
                Desarrollo aplicaciones web y móviles a medida con los más altos estándares de calidad para clientes premium que buscan destacar en el mercado digital.
              </p>
            </div>
            
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0">
              <Button className="rounded-full px-8 py-6 text-base">
                Ver proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-base">
                Conoce mi proceso
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <h3 className="text-3xl font-bold">7+</h3>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-sm text-muted-foreground">Proyectos completados</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold">100%</h3>
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
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                alt="Desarrollo de software profesional" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -right-6 -bottom-6 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -left-16 -top-16 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
            
            {/* Floating code snippets */}
            <div className="absolute -left-12 top-1/3 glass-card p-3 rounded-xl animate-float shadow-xl">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="mt-2 text-xs text-primary/70 font-mono">
                <div>const <span className="text-blue-500">premium</span> = <span className="text-green-500">true</span>;</div>
                <div><span className="text-purple-500">function</span> deliverValue() &#123;</div>
                <div>&nbsp;&nbsp;return <span className="text-blue-500">excellence</span>;</div>
                <div>&#125;</div>
              </div>
            </div>
            
            <div className="absolute -right-10 bottom-1/4 glass-card p-2 rounded-xl shadow-xl animate-float animation-delay-1000">
              <div className="text-xs text-primary/70 font-mono">
                <div>&lt;<span className="text-blue-500">Design</span>&gt;</div>
                <div>&nbsp;&nbsp;<span className="text-green-500">Pixel Perfect</span></div>
                <div>&lt;/<span className="text-blue-500">Design</span>&gt;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
