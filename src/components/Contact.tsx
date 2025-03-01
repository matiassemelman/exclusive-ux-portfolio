
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Gracias por contactarme. Me pondré en contacto contigo pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "contacto@tudominio.com",
      link: "mailto:contacto@tudominio.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      details: "+34 612 345 678",
      link: "tel:+34612345678"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      details: "Madrid, España",
      link: "https://maps.google.com/?q=Madrid,España"
    }
  ];

  return (
    <section id="contacto" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-accent inline-block mb-2 animate-on-scroll opacity-0">Contacto</div>
          <h2 className="section-heading animate-on-scroll opacity-0">
            Hablemos de tu <span className="text-accent">proyecto</span>
          </h2>
          <p className="section-subheading mx-auto animate-on-scroll opacity-0">
            ¿Tienes un proyecto en mente? Contáctame para discutir cómo puedo ayudarte a alcanzar tus objetivos digitales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 animate-on-scroll opacity-0">
            <div className="glass-card rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-3 bg-accent/10 inline-flex rounded-lg text-accent mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <a 
                        href={item.link} 
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {item.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium mb-4">Sígueme en</h4>
                <div className="flex space-x-4">
                  {['twitter', 'linkedin', 'github', 'instagram'].map((social) => (
                    <a 
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors duration-300"
                    >
                      <span className="sr-only">{social}</span>
                      {/* Here you would add the appropriate icon for each social network */}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 animate-on-scroll opacity-0">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+34 612 345 678"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">Tipo de proyecto</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="web">Desarrollo Web</option>
                    <option value="app">Aplicación Móvil</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="saas">Plataforma SaaS</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Describe brevemente tu proyecto y objetivos"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full py-6 rounded-lg">
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
