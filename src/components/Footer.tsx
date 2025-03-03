import React from 'react';
import { ArrowUp } from 'lucide-react';

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
              Soy Matias Semelman, programador Argentino apasionado por la inteligencia artificial. Desarrollo soluciones digitales exclusivas que combinan diseño elegante con tecnología avanzada.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300"
                aria-label="Twitter/X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
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
                  href="mailto:matias.semelman@gmail.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  matias.semelman@tudominio.com
                </a>
              </li>
              <li className="text-white/70">
                <span className="block font-medium text-white">Teléfono:</span>
                <a
                  href="tel:+5491130332808"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +54 9 11 3033-2808
                </a>
              </li>
              <li className="text-white/70">
                <span className="block font-medium text-white">Ubicación:</span>
                Buenos Aires, Argentina
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} | Matias Semelman | Todos los derechos reservados
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
