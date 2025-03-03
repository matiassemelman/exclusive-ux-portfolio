import React, { useEffect, useRef, useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
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
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="glass-card rounded-xl p-8 text-center mx-4">
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
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-4">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-full border border-border hover:bg-accent hover:text-white hover:border-accent transition-colors duration-300" />

                <CarouselNext className="static translate-y-0 h-12 w-12 rounded-full border border-border hover:bg-accent hover:text-white hover:border-accent transition-colors duration-300" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
