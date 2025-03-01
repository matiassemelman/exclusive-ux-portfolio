
import React, { useEffect, useRef, useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
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

  const testimonials = [
    {
      name: "Carlos Méndez",
      position: "CEO, InnoTech Solutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "El nivel de profesionalismo y calidad del trabajo es excepcional. No solo entregó el proyecto a tiempo, sino que superó todas nuestras expectativas con su atención al detalle y soluciones innovadoras.",
      rating: 5
    },
    {
      name: "María González",
      position: "Directora de Marketing, LuxBrands",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Nuestra plataforma de e-commerce transformó por completo nuestro negocio. La experiencia de usuario es impecable y hemos visto un aumento significativo en nuestras conversiones desde el lanzamiento.",
      rating: 5
    },
    {
      name: "Javier Rodríguez",
      position: "Fundador, StartupVision",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      quote: "Su capacidad para entender nuestros objetivos de negocio y traducirlos en una solución técnica eficiente fue impresionante. La aplicación que desarrolló es fundamental para nuestro crecimiento.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (testimonialsRef.current) {
      testimonialsRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex]);

  return (
    <section id="testimonios" className="section-padding bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-accent inline-block mb-2 animate-on-scroll opacity-0">Testimonios</div>
          <h2 className="section-heading animate-on-scroll opacity-0">
            Lo que dicen mis <span className="text-accent">clientes</span>
          </h2>
          <p className="section-subheading mx-auto animate-on-scroll opacity-0">
            Clientes satisfechos que han confiado en mis servicios para sus proyectos digitales más importantes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative animate-on-scroll opacity-0">
          <div className="overflow-hidden">
            <div 
              ref={testimonialsRef} 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full px-4" style={{ flex: `0 0 ${100 / testimonials.length}%` }}>
                  <div className="glass-card rounded-xl p-8 text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-4 border-accent/20">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <h4 className="text-lg font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-accent w-8' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
