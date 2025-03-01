
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-md glass-card rounded-xl p-10 animate-scale-up">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl font-medium text-primary mb-4">Página no encontrada</p>
        <p className="text-muted-foreground mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Button className="rounded-full inline-flex items-center" onClick={() => window.location.href = "/"}>
          <ArrowLeft className="mr-2 h-5 w-5" />
          Volver al inicio
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
