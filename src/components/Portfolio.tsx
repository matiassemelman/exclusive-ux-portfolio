import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import LazyImage from './ui/LazyImage';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projects';

// Función para obtener el color de la categoría
const getCategoryColor = (category: string, isActive: boolean = false) => {
  switch (category) {
    case 'Web':
      return isActive
        ? 'bg-blue-600 text-white border-blue-600'
        : 'bg-blue-100 text-blue-600 border-blue-200';
    case 'E-commerce':
      return isActive
        ? 'bg-green-600 text-white border-green-600'
        : 'bg-green-100 text-green-600 border-green-200';
    case 'Aplicaciones':
      return isActive
        ? 'bg-purple-600 text-white border-purple-600'
        : 'bg-purple-100 text-purple-600 border-purple-200';
    case 'Emprendimientos':
      return isActive
        ? 'bg-amber-600 text-white border-amber-600'
        : 'bg-amber-100 text-amber-600 border-amber-200';
    case 'Todos':
      return isActive
        ? 'bg-accent text-white border-accent'
        : 'bg-accent/10 text-accent border-accent/20';
    default:
      return isActive
        ? 'bg-accent text-white border-accent'
        : 'bg-accent/10 text-accent border-accent/20';
  }
};

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [isChangingCategory, setIsChangingCategory] = useState(false);

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
      { threshold: 0.1, rootMargin: '50px' }
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

  const categories = ['Todos', 'Web', 'E-commerce', 'Aplicaciones', 'Emprendimientos'];

  // Usar los datos de proyectos del archivo de datos
  const projects = projectsData;

  // Mostrar todos los proyectos pero aplicar filtro visual
  const handleCategoryChange = (category: string) => {
    setIsChangingCategory(true);
    setActiveCategory(category);
    // Pequeño retraso para permitir la transición visual
    setTimeout(() => {
      setIsChangingCategory(false);
    }, 300); // Aumentado a 300ms para dar tiempo a la transición
  };

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portafolio" className="section-padding bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-accent inline-block mb-2 animate-on-scroll opacity-0">Portafolio</div>
          <h2 className="section-heading animate-on-scroll opacity-0">
            Proyectos <span className="text-accent">realizados</span>
          </h2>
          <p className="section-subheading mx-auto animate-on-scroll opacity-0">
            Conocé algunos de los trabajos que he realizado para emprendedores y pequeñas empresas argentinas.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll opacity-0">
          {categories.map((category) => {
            // Definir clases de hover específicas para cada categoría
            let hoverClass = '';
            if (activeCategory !== category) {
              switch (category) {
                case 'Web':
                  hoverClass = 'hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200';
                  break;
                case 'E-commerce':
                  hoverClass = 'hover:bg-green-50 hover:text-green-600 hover:border-green-200';
                  break;
                case 'Aplicaciones':
                  hoverClass = 'hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200';
                  break;
                case 'Emprendimientos':
                  hoverClass = 'hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200';
                  break;
                case 'Todos':
                  hoverClass = 'hover:bg-accent/5 hover:text-accent hover:border-accent/20';
                  break;
                default:
                  hoverClass = 'hover:bg-gray-50';
              }
            }

            return (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap min-w-[120px] ${
                  activeCategory === category
                    ? getCategoryColor(category, true) + ' shadow-sm'
                    : `bg-white border ${hoverClass}`
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative min-h-[400px]">
          {projects.map((project, index) => {
            const isVisible = activeCategory === 'Todos' || project.category === activeCategory;

            return (
              <div
                key={index}
                className={`group animate-on-scroll transition-all duration-500 ease-in-out ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0 absolute pointer-events-none'
                }`}
                style={{
                  position: isVisible ? 'relative' : 'absolute',
                  zIndex: isVisible ? 1 : 0,
                  height: isVisible ? 'auto' : 0,
                  overflow: 'hidden',
                  visibility: isVisible ? 'visible' : 'hidden',
                  transform: `translateY(${isChangingCategory ? '10px' : '0'})`,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div className="relative rounded-xl overflow-hidden subtle-shadow transition-all duration-300 group-hover:shadow-lg">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <LazyImage
                      src={project.image}
                      alt={project.title}
                      fallbackSrc={project.fallbackImage}
                      width="600"
                      height="450"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      {/* Botón "Ver proyecto" eliminado */}
                    </div>
                  </div>

                  <div className="p-6 bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <span className={`text-xs px-3 py-1 font-medium rounded-full border whitespace-nowrap min-w-[90px] text-center ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-700 font-medium rounded-full border border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/proyecto/${project.id}`}
                      className="inline-flex items-center text-accent font-medium text-sm hover:underline"
                    >
                      Ver detalles
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
