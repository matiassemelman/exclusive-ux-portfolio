
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Layout, Smartphone, Database, SearchCheck, Lightbulb } from 'lucide-react';
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
      icon: <Layout className="w-10 h-10" />,
      title: "Desarrollo Web Premium",
      description: "Sitios web y aplicaciones web personalizadas con diseño exclusivo, alto rendimiento y optimización para SEO."
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Aplicaciones Móviles",
      description: "Apps nativas y cross-platform con experiencias de usuario excepcionales para iOS y Android."
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Desarrollo Full Stack",
      description: "Soluciones end-to-end utilizando las tecnologías más modernas y eficientes del mercado."
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Arquitectura de Sistemas",
      description: "Diseño e implementación de arquitecturas escalables, seguras y de alto rendimiento."
    },
    {
      icon: <SearchCheck className="w-10 h-10" />,
      title: "Optimización y Mejora",
      description: "Análisis y optimización de sistemas existentes para mejorar rendimiento, seguridad y experiencia de usuario."
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Consultoría Estratégica",
      description: "Asesoramiento experto para transformación digital y estrategias tecnológicas alineadas con objetivos de negocio."
    }
  ];

  return (
    <section id="servicios" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-accent inline-block mb-2 animate-on-scroll opacity-0">Servicios Premium</div>
          <h2 className="section-heading animate-on-scroll opacity-0">
            Soluciones digitales <span className="text-accent">exclusivas</span>
          </h2>
          <p className="section-subheading mx-auto animate-on-scroll opacity-0">
            Ofrezco servicios de desarrollo a medida para clientes que buscan calidad excepcional y resultados sobresalientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 bg-accent/10 inline-flex rounded-lg text-accent mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <a 
                href="#contacto" 
                className="inline-flex items-center text-accent font-medium text-sm hover:underline"
              >
                Consultar servicio
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll opacity-0">
          <Button className="rounded-full px-8 py-6">
            Solicitar consulta personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
