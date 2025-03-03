import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import LazyImage from '@/components/ui/LazyImage';
import { projectsData } from '@/data/projects';
import ProjectHeader from '@/components/ProjectHeader';
import TechIcon from '@/components/ui/TechIcon';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData.find(p => p.id === projectId);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="container mx-auto py-20 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Proyecto no encontrado</h1>
          <p className="mb-8">Lo sentimos, el proyecto que estás buscando no existe.</p>
          <Link
            to="/#portafolio"
            className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al portafolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/10">
      <ProjectHeader />

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-secondary/30 to-secondary/10 pt-24 pb-12">
        <div className="container mx-auto px-4 pt-16">
          <Link
            to="/#portafolio"
            className="inline-flex items-center text-sm font-medium text-accent hover:underline mb-6"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Volver al portafolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className={`text-sm px-4 py-1 font-medium rounded-full border inline-block mb-4 ${getCategoryColor(project.category)}`}>
                {project.category}
              </span>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-lg text-gray-700 mb-6">{project.summary}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-gray-100 text-gray-700 font-medium rounded-full border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <LazyImage
                src={project.image}
                alt={project.title}
                fallbackSrc={project.fallbackImage}
                width="800"
                height="600"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-6">Sobre el proyecto</h2>
            <div className="prose max-w-none">
              {project.description.map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>

          {project.features && (
            <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
              <h2 className="text-2xl font-bold mb-6">Características principales</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-accent/10 text-accent p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && (
            <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
              <h2 className="text-2xl font-bold mb-6">Tecnologías utilizadas</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {project.technologies.map((tech, index) => (
                  <TechIcon key={index} name={tech.name} icon={tech.icon} />
                ))}
              </div>
            </div>
          )}

          {project.testimonial && (
            <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
              <h2 className="text-2xl font-bold mb-6">Testimonio del cliente</h2>
              <blockquote className="border-l-4 border-accent pl-4 italic">
                "{project.testimonial.quote}"
                <footer className="mt-4 font-medium">
                  — {project.testimonial.author}, {project.testimonial.position}
                </footer>
              </blockquote>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/#portafolio"
              className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al portafolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Función para obtener el color de la categoría
const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Web':
      return 'bg-blue-100 text-blue-600 border-blue-200';
    case 'E-commerce':
      return 'bg-green-100 text-green-600 border-green-200';
    case 'Aplicaciones':
      return 'bg-purple-100 text-purple-600 border-purple-200';
    case 'Emprendimientos':
      return 'bg-amber-100 text-amber-600 border-amber-200';
    default:
      return 'bg-accent/10 text-accent border-accent/20';
  }
};

export default ProjectDetail;