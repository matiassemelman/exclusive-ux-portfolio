import React, { useEffect, useRef } from 'react';
import { CheckCircle, Clock, Target, Lightbulb } from 'lucide-react';

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
    "Desarrollo web rápido y efectivo",
    "Apps y sistemas a medida en tiempo récord",
    "Digitalización de procesos de negocios",
    "Sistemas de e-commerce y ventas",
    "Optimización de canales digitales",
    "Re-ingeniería de ventas digitales",
    "Integración entre sistemas",
    "Consultoría para digitalización"
  ];

  return (
    <section id="sobre-mí" className="section-padding bg-secondary/5" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-on-scroll opacity-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/og-image.png"
                alt="Matias Semelman - Programador Argentino especializado en IA"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>

            {/* Experience badge */}
            <div className="absolute -right-5 -bottom-5 glass-card rounded-xl p-4 shadow-xl bg-white/90">
              <div className="text-center">
                <span className="text-3xl font-bold text-accent">4+</span>
                <p className="text-sm text-primary">Años de experiencia</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-cta/10 rounded-full filter blur-xl"></div>
          </div>

          <div className="space-y-6">
            <div className="badge badge-cta inline-block mb-2 animate-on-scroll opacity-0">Mi historia</div>
            <h2 className="section-heading animate-on-scroll opacity-0">
              Desarrollo <span className="text-accent">digital acelerado</span> para resultados reales
            </h2>
            <p className="text-lg text-muted-foreground animate-on-scroll opacity-0">
              Soy Matias Semelman, un programador Argentino apasionado por la inteligencia artificial. Durante años vi cómo las PyMEs en Argentina luchaban con procesos obsoletos, perdiendo oportunidades por falta de digitalización. La mayoría de proveedores ofrecían soluciones a 3-6 meses vista. Mientras tanto, los negocios seguían perdiendo clientes.
            </p>

            <p className="text-lg text-muted-foreground animate-on-scroll opacity-0">
              Por eso creé un método para entregar soluciones funcionales y estratégicas en menos de 20 días. Un desarrollo rápido no significa malo, sino que con un enfoque adecuado se pueden lograr resultados tangibles en semanas, no meses.
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

        {/* Value proposition boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="glass-card p-6 rounded-xl animate-on-scroll opacity-0">
            <Clock className="w-10 h-10 text-cta mb-4" />
            <h3 className="text-xl font-bold mb-2">Velocidad</h3>
            <p className="text-muted-foreground">
              Tu negocio digitalizado en menos de 20 días. Sin excusas, sin demoras. Cada día sin una estrategia digital es dinero perdido.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl animate-on-scroll opacity-0" style={{animationDelay: '100ms'}}>
            <Target className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Efectividad</h3>
            <p className="text-muted-foreground">
              No es solo una web o app. Es una transformación real en tu negocio que genera resultados inmediatos y medibles.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl animate-on-scroll opacity-0" style={{animationDelay: '200ms'}}>
            <Lightbulb className="w-10 h-10 text-highlight mb-4" />
            <h3 className="text-xl font-bold mb-2">Simplicidad</h3>
            <p className="text-muted-foreground">
              La digitalización no tiene por qué ser un proceso eterno o complicado. En 20 días podés empezar a vender más y mejor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
