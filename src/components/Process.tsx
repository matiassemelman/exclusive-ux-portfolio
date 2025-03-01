
import React, { useEffect, useRef } from 'react';
import { Search, PenLine, Code, Server, CheckCircle, BarChart } from 'lucide-react';

const Process = () => {
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

  const steps = [
    {
      icon: <Search className="w-10 h-10" />,
      title: "Descubrimiento",
      description: "Entiendo a fondo las necesidades de tu negocio, objetivos y audiencia para crear una solución perfectamente alineada."
    },
    {
      icon: <PenLine className="w-10 h-10" />,
      title: "Planificación y Diseño",
      description: "Creo wireframes, prototipos y diseños de UI/UX que capturan la esencia de tu marca con un enfoque en la experiencia del usuario."
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Desarrollo Frontend",
      description: "Implemento interfaces interactivas y responsivas utilizando tecnologías modernas como React, Vue o Angular."
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Desarrollo Backend",
      description: "Construyo APIs robustas, bases de datos optimizadas y lógica de servidor eficiente para soportar tu aplicación."
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Testing y Calidad",
      description: "Realizo pruebas exhaustivas para garantizar que cada aspecto funcione perfectamente antes del lanzamiento."
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Lanzamiento y Soporte",
      description: "Despliego tu proyecto y proporciono monitoreo continuo, optimizaciones y soporte técnico para asegurar su éxito."
    }
  ];

  return (
    <section id="proceso" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-accent inline-block mb-2 animate-on-scroll opacity-0">Mi Metodología</div>
          <h2 className="section-heading animate-on-scroll opacity-0">
            Proceso de <span className="text-accent">trabajo</span>
          </h2>
          <p className="section-subheading mx-auto animate-on-scroll opacity-0">
            Sigo un proceso estructurado y transparente que asegura resultados excepcionales en cada proyecto.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-secondary hidden md:block"></div>
          
          {/* Steps */}
          <div className="space-y-16 relative">
            {steps.map((step, index) => (
              <div key={index} className="animate-on-scroll opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`p-4 glass-card rounded-xl relative z-10 transition-all duration-300 hover:shadow-lg ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <span className="absolute -top-4 bg-accent text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                        {index + 1}
                      </span>
                      <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className="p-3 bg-accent/10 inline-flex rounded-lg text-accent">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block"></div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -ml-3 w-6 h-6 rounded-full bg-accent hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
