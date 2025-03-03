// Definición de tipos para los proyectos
export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'E-commerce' | 'Aplicaciones' | 'Emprendimientos';
  image: string;
  fallbackImage: string;
  tags: string[];
  summary: string;
  description: string[];
  features?: string[];
  technologies?: {
    name: string;
    icon?: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  demoUrl?: string;
}

// Datos de los proyectos
export const projectsData: Project[] = [
  {
    id: "tienda-indumentaria",
    title: "Tienda Online de Indumentaria",
    category: "E-commerce",
    image: "/images/portfolio-1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    tags: ["Woocommerce", "Diseño Responsivo", "Medios de Pago"],
    summary: "E-commerce completo para una tienda de ropa con múltiples opciones de pago y envío a todo el país.",
    description: [
      "Este proyecto consistió en el desarrollo de una tienda online completa para una marca de indumentaria femenina en crecimiento. La cliente necesitaba una plataforma que reflejara la identidad de su marca y permitiera a sus clientas comprar de manera sencilla y segura.",
      "Implementamos una solución basada en WooCommerce, personalizada completamente para adaptarse a la estética de la marca. Se configuraron múltiples métodos de pago incluyendo tarjetas de crédito, transferencia bancaria y billeteras virtuales como MercadoPago.",
      "Un aspecto clave del proyecto fue la optimización para dispositivos móviles, ya que más del 70% de las visitas provienen de smartphones. Además, se implementó un sistema de gestión de inventario que permite a la dueña mantener actualizado el stock de manera sencilla.",
      "El resultado fue un aumento del 45% en las ventas online durante los primeros tres meses después del lanzamiento, con una tasa de conversión significativamente mayor a la que tenían con su plataforma anterior."
    ],
    features: [
      "Catálogo de productos con filtros avanzados",
      "Carrito de compras optimizado para reducir abandonos",
      "Integración con múltiples medios de pago",
      "Sistema de cupones y descuentos",
      "Cálculo automático de costos de envío",
      "Panel de administración intuitivo",
      "Notificaciones automáticas de stock bajo",
      "Informes de ventas y estadísticas"
    ],
    technologies: [
      { name: "WordPress" },
      { name: "WooCommerce" },
      { name: "PHP" },
      { name: "MySQL" },
      { name: "JavaScript" },
      { name: "CSS3" },
      { name: "MercadoPago API" },
      { name: "Correo Argentino API" }
    ],
    testimonial: {
      quote: "La tienda online superó todas mis expectativas. No solo es hermosa y refleja perfectamente la identidad de mi marca, sino que es muy fácil de administrar. Mis clientas me felicitan constantemente por lo sencillo que es comprar.",
      author: "Carolina Méndez",
      position: "Fundadora de la marca"
    },
    demoUrl: "#"
  },
  {
    id: "web-estudio-contable",
    title: "Web para Estudio Contable",
    category: "Web",
    image: "/images/portfolio-2.webp",
    fallbackImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    tags: ["WordPress", "Formularios", "SEO"],
    summary: "Sitio web profesional para un estudio contable con sistema de reserva de consultas y recursos para clientes.",
    description: [
      "Este proyecto fue desarrollado para un estudio contable con más de 15 años de trayectoria que necesitaba modernizar su presencia digital. El objetivo principal era proyectar profesionalismo y confianza, además de facilitar la captación de nuevos clientes.",
      "Diseñamos un sitio web elegante y funcional utilizando WordPress como CMS, lo que permite al cliente actualizar fácilmente el contenido. La estructura del sitio fue pensada para guiar a los visitantes hacia la conversión, con llamados a la acción estratégicamente ubicados.",
      "Un componente clave fue la implementación de un sistema de reserva de consultas que se integra con el calendario de los contadores, permitiendo a los potenciales clientes agendar reuniones sin necesidad de llamadas telefónicas.",
      "También se desarrolló una sección privada donde los clientes actuales pueden acceder a documentos, tutoriales y recursos útiles relacionados con sus obligaciones fiscales."
    ],
    features: [
      "Diseño profesional y elegante",
      "Sistema de reserva de consultas online",
      "Área privada para clientes",
      "Blog con artículos sobre novedades impositivas",
      "Formularios de contacto segmentados por tipo de consulta",
      "Integración con redes sociales",
      "Optimización SEO completa",
      "Certificado SSL para navegación segura"
    ],
    technologies: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "JavaScript" },
      { name: "MySQL" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Google Calendar API" },
      { name: "Yoast SEO" }
    ],
    testimonial: {
      quote: "Nuestra web no solo mejoró nuestra imagen profesional, sino que se convirtió en una herramienta fundamental para nuestro negocio. El sistema de reserva de consultas nos ahorra tiempo y nos permite organizar mejor nuestra agenda.",
      author: "Dr. Martín Acosta",
      position: "Socio fundador"
    }
  },
  {
    id: "app-gestion-cafeteria",
    title: "App de Gestión para Cafetería",
    category: "Aplicaciones",
    image: "/images/portfolio-3.webp",
    fallbackImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    tags: ["React", "Sistema de Pedidos", "Reportes"],
    summary: "Aplicación web para gestionar pedidos, inventario y personal de una cadena de cafeterías con múltiples sucursales.",
    description: [
      "Desarrollamos una aplicación web completa para una cadena de cafeterías con 5 sucursales en Buenos Aires. El cliente necesitaba centralizar la gestión de pedidos, inventario y personal, además de obtener reportes detallados sobre el rendimiento de cada local.",
      "La solución implementada permite tomar pedidos desde tablets o dispositivos móviles, enviándolos directamente a la cocina. El sistema gestiona automáticamente el inventario, descontando ingredientes y generando alertas cuando es necesario reponer stock.",
      "Un módulo de recursos humanos facilita la gestión de turnos del personal, cálculo de horas trabajadas y asignación de tareas. Los gerentes pueden acceder a reportes detallados sobre ventas, productos más populares, horas pico y rendimiento de empleados.",
      "La aplicación fue desarrollada con React para el frontend y Node.js para el backend, utilizando una arquitectura que permite su funcionamiento incluso con conexiones a internet inestables, sincronizando los datos cuando la conexión se restablece."
    ],
    features: [
      "Sistema de toma de pedidos en tiempo real",
      "Gestión automática de inventario",
      "Programación y control de turnos de personal",
      "Reportes y estadísticas detalladas",
      "Panel de administración para gerentes",
      "Funcionamiento offline con sincronización posterior",
      "Notificaciones automáticas de stock bajo",
      "Integración con sistema de facturación electrónica"
    ],
    technologies: [
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express" },
      { name: "Socket.io" },
      { name: "Redux" },
      { name: "Chart.js" },
      { name: "PWA" }
    ],
    testimonial: {
      quote: "Esta aplicación transformó completamente nuestra operación diaria. Ahora tenemos control total sobre nuestro negocio y podemos tomar decisiones basadas en datos reales. El tiempo de atención se redujo y la satisfacción de nuestros clientes aumentó notablemente.",
      author: "Laura Giménez",
      position: "Gerente General"
    },
    demoUrl: "#"
  },
  {
    id: "web-productora-eventos",
    title: "Página para Productora de Eventos",
    category: "Web",
    image: "/images/portfolio-4.webp",
    fallbackImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    tags: ["Diseño Web", "Galería", "Calendario"],
    summary: "Sitio web dinámico para una productora de eventos con galería multimedia, calendario de eventos y sistema de venta de entradas.",
    description: [
      "Diseñamos y desarrollamos un sitio web para una productora de eventos musicales y culturales con presencia en varias provincias argentinas. El objetivo era crear una plataforma atractiva que mostrara su portfolio de eventos pasados y promocionara los próximos.",
      "El sitio cuenta con una galería multimedia que muestra fotografías y videos de alta calidad de los eventos realizados, organizados por categorías. Un calendario interactivo permite a los visitantes ver fácilmente los próximos eventos y filtrarlos por ubicación o tipo.",
      "Implementamos un sistema de venta de entradas que se integra con plataformas de pago locales, permitiendo a los usuarios comprar tickets directamente desde el sitio. También desarrollamos un sistema de newsletter para mantener informados a los suscriptores sobre nuevos eventos.",
      "El diseño es completamente responsivo y pone énfasis en lo visual, con animaciones sutiles y transiciones que mejoran la experiencia del usuario sin comprometer la velocidad de carga."
    ],
    features: [
      "Galería multimedia con filtros por categoría",
      "Calendario interactivo de eventos",
      "Sistema de venta de entradas online",
      "Integración con redes sociales",
      "Suscripción a newsletter",
      "Mapa interactivo de ubicaciones",
      "Sección de prensa y medios",
      "Blog con noticias del sector"
    ],
    technologies: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "MySQL" },
      { name: "FullCalendar.js" },
      { name: "Lightbox" },
      { name: "GSAP" }
    ],
    testimonial: {
      quote: "El sitio web captura perfectamente la esencia de nuestra productora. Es visualmente impactante y funcional. Desde que lo lanzamos, hemos notado un aumento significativo en la venta de entradas online y en el reconocimiento de nuestra marca.",
      author: "Federico Torres",
      position: "Director Creativo"
    }
  },
  {
    id: "ecommerce-productos-regionales",
    title: "E-commerce de Productos Regionales",
    category: "E-commerce",
    image: "/images/portfolio-5.webp",
    fallbackImage: "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    tags: ["Tienda Online", "Envíos", "MercadoPago"],
    summary: "Plataforma de comercio electrónico para una cooperativa de productores regionales con sistema de envíos a todo el país.",
    description: [
      "Desarrollamos una tienda online para una cooperativa que reúne a más de 30 pequeños productores de alimentos y artesanías de la Patagonia argentina. El objetivo era crear un canal de venta directo que les permitiera llegar a clientes de todo el país sin intermediarios.",
      "La plataforma permite a cada productor gestionar sus propios productos, descripciones y stock, mientras que la cooperativa administra los aspectos generales como envíos y pagos. Implementamos un sistema de comisiones transparente que se calcula automáticamente para cada venta.",
      "Un desafío importante fue la logística de envíos, ya que muchos productos son perecederos o frágiles. Desarrollamos un sistema que calcula los costos de envío según el peso, volumen y destino, y agrupa productos de diferentes vendedores en un solo envío para reducir costos.",
      "La tienda incluye historias sobre cada productor y el origen de sus productos, creando una conexión emocional con los compradores y destacando el impacto social y ambiental positivo de cada compra."
    ],
    features: [
      "Multi-vendedor con perfiles de productores",
      "Sistema de cálculo de envíos complejo",
      "Integración con múltiples medios de pago",
      "Gestión de productos perecederos",
      "Historias y trazabilidad de productos",
      "Sistema de valoraciones y reseñas",
      "Calculadora de impacto social",
      "Programa de fidelización"
    ],
    technologies: [
      { name: "WooCommerce" },
      { name: "WordPress" },
      { name: "PHP" },
      { name: "MySQL" },
      { name: "JavaScript" },
      { name: "MercadoPago API" },
      { name: "Andreani API" },
      { name: "AJAX" }
    ],
    testimonial: {
      quote: "Esta plataforma cambió la vida de nuestra comunidad de productores. Ahora podemos vender nuestros productos a precios justos a clientes de todo el país. La tecnología nos permitió mantener nuestra forma de producción tradicional mientras accedemos a mercados modernos.",
      author: "Juana Rodríguez",
      position: "Presidenta de la Cooperativa"
    },
    demoUrl: "#"
  },
  {
    id: "web-startup-agropecuaria",
    title: "Web para Startup Agropecuaria",
    category: "Emprendimientos",
    image: "/images/portfolio-6.webp",
    fallbackImage: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    tags: ["Landing Page", "Formulario de Contacto", "SEO"],
    summary: "Sitio web para una startup de tecnología agropecuaria que desarrolla soluciones de IoT para el campo argentino.",
    description: [
      "Creamos el sitio web para una startup innovadora que desarrolla sensores y sistemas IoT para optimizar la producción agropecuaria. El cliente necesitaba una plataforma que explicara su tecnología de forma clara tanto para inversores como para productores rurales.",
      "Diseñamos una landing page principal que comunica de manera efectiva el valor de su producto, con animaciones y gráficos que ilustran cómo funciona su tecnología y los beneficios que aporta. Utilizamos un lenguaje accesible y evitamos jerga técnica innecesaria.",
      "Implementamos un sistema de formularios segmentados según el perfil del visitante: productores interesados en adquirir la tecnología, posibles inversores o instituciones académicas para colaboraciones. Cada formulario recopila información específica relevante para ese perfil.",
      "También desarrollamos una sección de blog donde publican regularmente artículos sobre innovación en el campo, casos de éxito y análisis de datos recopilados por sus sistemas, posicionándolos como referentes en el sector."
    ],
    features: [
      "Diseño moderno y tecnológico",
      "Animaciones explicativas del producto",
      "Formularios de contacto segmentados",
      "Integración con CRM",
      "Blog especializado en agrotecnología",
      "Calculadora de ROI para clientes potenciales",
      "Testimonios y casos de éxito",
      "Optimización SEO para términos clave del sector"
    ],
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Contentful" },
      { name: "HubSpot API" },
      { name: "Google Analytics" },
      { name: "Vercel" }
    ],
    testimonial: {
      quote: "El sitio web logró comunicar perfectamente nuestra propuesta de valor, algo que nos resultaba difícil explicar por la complejidad técnica. Desde el lanzamiento, hemos captado el interés de importantes inversores y cerrado acuerdos con cooperativas agrícolas de todo el país.",
      author: "Ing. Martín Gutiérrez",
      position: "CEO y Fundador"
    }
  }
];