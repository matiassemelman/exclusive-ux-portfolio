
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Globe, ShoppingCart, LayoutGrid, BarChart2, Search, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
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

  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Sitios Web Express",
      description: "Páginas web profesionales listas en 20 días o menos, optimizadas para atraer clientes y generar ventas."
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "E-commerce Rápido",
      description: "Tu tienda online lista para vender en tiempo récord, con procesos de pago y envío integrados."
    },
    {
      icon: <LayoutGrid className="w-10 h-10" />,
      title: "Apps a Medida",
      description: "Aplicaciones y sistemas adaptados a tu negocio que digitalizan procesos y mejoran la productividad."
    },
    {
      icon: <BarChart2 className="w-10 h-10" />,
      title: "Re-ingeniería de Ventas",
      description: "Transformación de tu proceso comercial para aprovechar al máximo los canales digitales."
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Posicionamiento SEO",
      description: "Estrategias rápidas para que tu negocio aparezca en los primeros resultados de búsqueda."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Digitalización Express",
      description: "Consultoría y acompañamiento intensivo para digitalizar tu emprendimiento en tiempo récord."
    }
  ];

  return (
    <section id="servicios" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-cta inline-block mb-2 animate-on-scroll opacity-0">Servicios</div>
          <h2 className="section-heading animate-on-scroll opacity-0">
            Soluciones digitales <span className="text-accent">en tiempo récord</span>
          </h2>
          <p className="section-subheading mx-auto animate-on-scroll opacity-0">
            Digitalizo PyMEs y emprendimientos argentinos en menos de 20 días. Sin excusas, sin demoras, con resultados inmediatos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 bg-primary/5 inline-flex rounded-lg text-accent mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <a 
                href="#contacto" 
                className="inline-flex items-center text-accent font-medium text-sm hover:underline"
              >
                Más información
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll opacity-0">
          <Button className="rounded-full px-8 py-6 bg-cta text-dark hover:bg-cta/90">
            Solicitar presupuesto sin cargo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
