import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  fallbackSrc,
  width,
  height,
  className = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Reiniciar estados si cambia la fuente
    setIsLoaded(false);
    setError(false);
  }, [src]);

  useEffect(() => {
    const currentImgRef = imgRef.current;

    if (!currentImgRef) return;

    // Configurar IntersectionObserver para carga perezosa
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;

          // Cargar la imagen cuando sea visible
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }

          // Dejar de observar una vez que se inicia la carga
          if (observerRef.current) {
            observerRef.current.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '200px 0px', // Cargar imágenes cuando estén a 200px de la ventana
      threshold: 0.01
    });

    // Comenzar a observar la imagen
    observerRef.current.observe(currentImgRef);

    return () => {
      // Limpiar el observer cuando el componente se desmonte
      if (observerRef.current && currentImgRef) {
        observerRef.current.unobserve(currentImgRef);
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    if (fallbackSrc) {
      const img = imgRef.current;
      if (img) {
        img.src = fallbackSrc;
      }
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        ref={imgRef}
        data-src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
};

export default LazyImage;