import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-highlight text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="text-3xl font-bold transition-all duration-300 mb-4 block">
              portfolio<span className="text-primary">.</span>
            </a>
            <p className="text-white/70 mb-6 max-w-xs">
              Desarrollo soluciones digitales exclusivas que combinan diseño elegante con tecnología avanzada.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'github', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  {/* Here you would add the appropriate icon for each social network */}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold mb-6 text-white">Servicios</h4>
            <ul className="space-y-4">
              {['Desarrollo Web', 'Aplicaciones Móviles', 'Desarrollo Full Stack', 'Arquitectura de Sistemas', 'Optimización', 'Consultoría'].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-300 block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold mb-6 text-white">Enlaces</h4>
            <ul className="space-y-4">
              {[
                { name: 'Inicio', link: '#inicio' },
                { name: 'Sobre mí', link: '#sobre-mí' },
                { name: 'Servicios', link: '#servicios' },
                { name: 'Portafolio', link: '#portafolio' },
                { name: 'Testimonios', link: '#testimonios' },
                { name: 'Contacto', link: '#contacto' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-white/70 hover:text-white transition-colors duration-300 block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold mb-6 text-white">Contacto</h4>
            <ul className="space-y-4">
              <li className="text-white/70">
                <span className="block font-medium text-white">Email:</span>
                <a
                  href="mailto:contacto@tudominio.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  contacto@tudominio.com
                </a>
              </li>
              <li className="text-white/70">
                <span className="block font-medium text-white">Teléfono:</span>
                <a
                  href="tel:+34612345678"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +34 612 345 678
                </a>
              </li>
              <li className="text-white/70">
                <span className="block font-medium text-white">Ubicación:</span>
                Madrid, España
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} | Todos los derechos reservados
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-white/70 hover:text-white text-sm">Política de Privacidad</a>
            <a href="#" className="text-white/70 hover:text-white text-sm">Términos de Servicio</a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300 ml-4"
            >
              <ArrowUp className="w-5 h-5" />
              <span className="sr-only">Volver arriba</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
