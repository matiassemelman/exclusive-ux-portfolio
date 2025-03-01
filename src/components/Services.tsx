
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
      title: "Sitios Web para PyMEs",
      description: "Páginas web profesionales, rápidas y optimizadas para SEO que conectan tu negocio con nuevos clientes."
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Tiendas Online",
      description: "E-commerce a medida para que puedas vender tus productos en todo el país sin complicaciones."
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Aplicaciones Web",
      description: "Sistemas de gestión y aplicaciones para optimizar procesos en tu negocio o emprendimiento."
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Administración de Datos",
      description: "Soluciones para organizar tu información y facilitar la toma de decisiones en tu empresa."
    },
    {
      icon: <SearchCheck className="w-10 h-10" />,
      title: "Posicionamiento SEO",
      description: "Estrategias para que tu negocio aparezca en los primeros resultados de búsqueda y llegue a más clientes."
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Asesoría Digital",
      description: "Acompañamiento para emprendedores que quieren dar sus primeros pasos en el mundo online."
    }
  ];

  return (
    <section id="servicios" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-accent inline-block mb-2 animate-on-scroll opacity-0">Servicios</div>
          <h2 className="section-heading animate-on-scroll opacity-0">
            Soluciones digitales <span className="text-accent">a tu medida</span>
          </h2>
          <p className="section-subheading mx-auto animate-on-scroll opacity-0">
            Desarrollo servicios adaptados a las necesidades de emprendedores y pequeñas empresas argentinas.
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
                Más información
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll opacity-0">
          <Button className="rounded-full px-8 py-6">
            Solicitar presupuesto sin cargo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
