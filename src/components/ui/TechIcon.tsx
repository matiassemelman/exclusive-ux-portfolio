import React from 'react';

// Mapa de colores para diferentes tecnologías
const techColors: Record<string, { bg: string, text: string }> = {
  react: { bg: 'bg-blue-100', text: 'text-blue-600' },
  nextjs: { bg: 'bg-black/10', text: 'text-black' },
  nodejs: { bg: 'bg-green-100', text: 'text-green-600' },
  javascript: { bg: 'bg-yellow-100', text: 'text-yellow-700' },
  typescript: { bg: 'bg-blue-100', text: 'text-blue-700' },
  php: { bg: 'bg-indigo-100', text: 'text-indigo-600' },
  wordpress: { bg: 'bg-blue-100', text: 'text-blue-800' },
  woocommerce: { bg: 'bg-purple-100', text: 'text-purple-600' },
  mysql: { bg: 'bg-blue-100', text: 'text-blue-800' },
  mongodb: { bg: 'bg-green-100', text: 'text-green-700' },
  css3: { bg: 'bg-blue-100', text: 'text-blue-600' },
  html5: { bg: 'bg-orange-100', text: 'text-orange-600' },
  tailwind: { bg: 'bg-cyan-100', text: 'text-cyan-600' },
  express: { bg: 'bg-gray-100', text: 'text-gray-800' },
  redux: { bg: 'bg-purple-100', text: 'text-purple-700' },
  socketio: { bg: 'bg-gray-100', text: 'text-gray-800' },
  chartjs: { bg: 'bg-pink-100', text: 'text-pink-600' },
  pwa: { bg: 'bg-indigo-100', text: 'text-indigo-700' },
  gsap: { bg: 'bg-green-100', text: 'text-green-800' },
  fullcalendarjs: { bg: 'bg-blue-100', text: 'text-blue-700' },
  lightbox: { bg: 'bg-gray-100', text: 'text-gray-700' },
  ajax: { bg: 'bg-blue-100', text: 'text-blue-600' },
  framermotion: { bg: 'bg-purple-100', text: 'text-purple-600' },
  contentful: { bg: 'bg-blue-100', text: 'text-blue-700' },
  vercel: { bg: 'bg-black/10', text: 'text-black' },
  googleanalytics: { bg: 'bg-orange-100', text: 'text-orange-700' },
  hubspotapi: { bg: 'bg-orange-100', text: 'text-orange-600' },
  mercadopagoapi: { bg: 'bg-blue-100', text: 'text-blue-600' },
  correoargentinoapi: { bg: 'bg-blue-100', text: 'text-blue-600' },
  andreaniapi: { bg: 'bg-blue-100', text: 'text-blue-600' },
  googlecalendarapi: { bg: 'bg-blue-100', text: 'text-blue-600' },
  yoastseo: { bg: 'bg-red-100', text: 'text-red-600' },
};

// Función para obtener las iniciales de una tecnología
const getInitials = (name: string): string => {
  // Casos especiales
  const specialCases: Record<string, string> = {
    react: 'Re',
    nextjs: 'N.js',
    nodejs: 'Node',
    javascript: 'JS',
    typescript: 'TS',
    php: 'PHP',
    wordpress: 'WP',
    woocommerce: 'WC',
    mysql: 'SQL',
    mongodb: 'MDB',
    css3: 'CSS',
    html5: 'HTML',
    tailwind: 'TW',
    express: 'Exp',
    redux: 'Rdx',
    socketio: 'Sock',
    chartjs: 'Chart',
    pwa: 'PWA',
    gsap: 'GS',
    fullcalendarjs: 'Cal',
    lightbox: 'LB',
    ajax: 'AJAX',
    framermotion: 'FM',
    contentful: 'CF',
    vercel: 'Ver',
    googleanalytics: 'GA',
    hubspotapi: 'HS',
    mercadopagoapi: 'MP',
    correoargentinoapi: 'CA',
    andreaniapi: 'And',
    googlecalendarapi: 'GCal',
    yoastseo: 'Yoast',
  };

  const normalized = name.toLowerCase().replace(/\s+/g, '');

  if (specialCases[normalized]) {
    return specialCases[normalized];
  }

  // Si no hay caso especial, tomar las primeras letras de cada palabra
  return name
    .split(/[\s.-]+/)
    .map(word => word.charAt(0).toUpperCase())
    .join('');
};

interface TechIconProps {
  name: string;
  icon?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, icon }) => {
  const normalizedName = name.toLowerCase().replace(/\s+/g, '');
  const { bg, text } = techColors[normalizedName] || { bg: 'bg-gray-100', text: 'text-gray-700' };
  const initials = getInitials(name);

  return (
    <div className="flex flex-col items-center text-center">
      <div className={`w-16 h-16 ${bg} rounded-full flex items-center justify-center mb-3`}>
        {icon ? (
          <img
            src={icon}
            alt={name}
            className="w-8 h-8"
            onError={(e) => {
              // Si la imagen falla, mostrar las iniciales
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = `<span class="font-bold ${text}">${initials}</span>`;
            }}
          />
        ) : (
          <span className={`font-bold ${text}`}>{initials}</span>
        )}
      </div>
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default TechIcon;
