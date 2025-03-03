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

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+5491130332808";
    const message = encodeURIComponent("Hola, estoy interesado en solicitar un presupuesto para mi proyecto.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

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
          <Button
            className="rounded-full px-12 py-8 bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-4 border-2 border-green-400 relative overflow-hidden group"
            onClick={handleWhatsAppRedirect}
            style={{
              animation: 'pulse 2s infinite',
              boxShadow: '0 0 20px rgba(74, 222, 128, 0.6)'
            }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="absolute -inset-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 blur-sm transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" className="animate-pulse">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            <span className="relative z-10 tracking-wide">Solicitar presupuesto sin cargo</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
