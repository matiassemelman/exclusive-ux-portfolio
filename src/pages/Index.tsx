import React, { useEffect, lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// Lazy load components that are below the fold
const About = lazy(() => import('@/components/About'));
const Services = lazy(() => import('@/components/Services'));
const Portfolio = lazy(() => import('@/components/Portfolio'));
const Process = lazy(() => import('@/components/Process'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Cargando...</div>}>
          <About />
          <Services />
          <Portfolio />
          <Process />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-20"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
