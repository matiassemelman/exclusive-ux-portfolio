
import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
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

  const skills = [
    "Desarrollo de sitios web modernos",
    "Aplicaciones web a medida para PyMEs",
    "Tiendas online y ecommerce",
    "Optimización de velocidad y SEO",
    "Integración con redes sociales",
    "Diseño adaptado a todos los dispositivos",
    "Soluciones para gestión de negocios",
    "Consultoría digital para emprendedores"
  ];

  return (
    <section id="sobre-mí" className="section-padding bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-on-scroll opacity-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
                alt="Emprendedor argentino trabajando"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay"></div>
            </div>
            
            {/* Experience badge */}
            <div className="absolute -right-5 -bottom-5 glass-card rounded-xl p-4 shadow-xl">
              <div className="text-center">
                <span className="text-3xl font-bold text-primary">7+</span>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-accent/10 rounded-full filter blur-xl"></div>
          </div>
          
          <div className="space-y-6">
            <div className="badge badge-accent inline-block mb-2 animate-on-scroll opacity-0">Sobre mí</div>
            <h2 className="section-heading animate-on-scroll opacity-0">
              Desarrollo soluciones digitales con <span className="text-accent">impacto real</span>
            </h2>
            <p className="text-lg text-muted-foreground animate-on-scroll opacity-0">
              Soy un desarrollador web con más de 7 años de experiencia, especializado en ayudar a emprendedores y PyMEs argentinas a crecer en el mundo digital. Mi enfoque combina conocimiento técnico con una comprensión práctica de las necesidades de los negocios locales.
            </p>
            
            <div className="pt-4 animate-on-scroll opacity-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 text-accent mr-2" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
