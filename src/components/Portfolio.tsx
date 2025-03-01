
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('Todos');
  
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

  const categories = ['Todos', 'Web', 'App', 'E-commerce', 'SaaS'];

  const projects = [
    {
      title: "Plataforma E-learning Premium",
      category: "Web",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "App de Gestión Financiera",
      category: "App",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      tags: ["React Native", "Firebase", "Redux"]
    },
    {
      title: "E-commerce de Lujo",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      tags: ["Vue.js", "Nuxt", "Strapi"]
    },
    {
      title: "Dashboard Analytics SaaS",
      category: "SaaS",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80",
      tags: ["Angular", "Express", "PostgreSQL"]
    },
    {
      title: "App de Reservas Premium",
      category: "App",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      tags: ["React Native", "GraphQL", "AWS"]
    },
    {
      title: "Plataforma de Marketing Digital",
      category: "SaaS",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
      tags: ["React", "Django", "Redis"]
    }
  ];

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portafolio" className="section-padding bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-accent inline-block mb-2 animate-on-scroll opacity-0">Portafolio Selecto</div>
          <h2 className="section-heading animate-on-scroll opacity-0">
            Proyectos <span className="text-accent">destacados</span>
          </h2>
          <p className="section-subheading mx-auto animate-on-scroll opacity-0">
            Una selección de proyectos premium desarrollados para clientes exclusivos que buscaban soluciones digitales de alto impacto.
          </p>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll opacity-0">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-accent text-white shadow-sm' 
                  : 'bg-white border hover:border-accent'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative rounded-xl overflow-hidden subtle-shadow transition-all duration-300 group-hover:shadow-lg">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a 
                      href="#" 
                      className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-medium border border-white/30 hover:bg-white/30 transition-all duration-300"
                    >
                      Ver detalles
                    </a>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <span className="text-xs px-2 py-1 bg-secondary rounded-full">{project.category}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-accent font-medium text-sm hover:underline"
                  >
                    Ver caso de estudio
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
