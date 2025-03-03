import React, { useEffect, useRef } from 'react';
import { Coffee, Lightbulb, Rocket, Handshake, GraduationCap, BarChart } from 'lucide-react';

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
      icon: <Coffee className="w-10 h-10" />,
      title: "Charlamos sobre tu negocio",
      description: "Nos juntamos a tomar un café (virtual o presencial) para entender qué necesitás y cómo podemos ayudarte a crecer."
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Armamos una propuesta a medida",
      description: "Diseñamos una solución pensada específicamente para tu PyME, con un presupuesto claro y sin sorpresas."
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Desarrollamos tu proyecto",
      description: "Trabajamos codo a codo con vos para crear una web o aplicación que realmente impulse tu negocio, sin complicaciones técnicas."
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Te capacitamos",
      description: "Te enseñamos a usar tu nueva herramienta digital para que puedas sacarle el máximo provecho desde el primer día."
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Te acompañamos en el crecimiento",
      description: "No desaparecemos después de la entrega. Seguimos a tu lado para ayudarte a evolucionar y adaptarte a los cambios del mercado."
    }
  ];

  return (
    <section id="proceso" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-accent inline-block mb-2 animate-on-scroll opacity-0">Cómo trabajamos</div>
          <h2 className="section-heading animate-on-scroll opacity-0">
            Un proceso <span className="text-accent">simple y efectivo</span>
          </h2>
          <p className="section-subheading mx-auto animate-on-scroll opacity-0">
            Olvidate de la jerga técnica y los procesos complicados. Así es como vamos a trabajar juntos para hacer crecer tu negocio.
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
