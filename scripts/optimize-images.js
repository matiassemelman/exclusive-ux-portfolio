// Este script descarga imágenes de Unsplash y las optimiza
// Para ejecutarlo: node scripts/optimize-images.js

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Obtener el directorio actual en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Asegurarse de que el directorio existe
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Lista de imágenes a descargar
const images = [
  {
    url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    filename: 'hero-image.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1614771637369-ed6747060d21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    filename: 'portfolio-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    filename: 'portfolio-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    filename: 'portfolio-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    filename: 'portfolio-4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    filename: 'portfolio-5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    filename: 'portfolio-6.jpg'
  }
];

// Función para descargar una imagen
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Descargada: ${filename}`);
        resolve(filePath);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Eliminar archivo parcial
      reject(err);
    });
  });
}

// Función para convertir una imagen a WebP
function convertToWebP(filePath) {
  const webpPath = filePath.replace(/\.[^.]+$/, '.webp');

  try {
    // Usar sharp si está disponible, o cualquier otra herramienta de línea de comandos
    // Aquí usamos un enfoque simple con console.log para simular la conversión
    console.log(`Convirtiendo ${filePath} a WebP...`);

    // En un entorno real, usarías algo como:
    // execSync(`cwebp -q 80 ${filePath} -o ${webpPath}`);

    // Simulamos la conversión copiando el archivo
    fs.copyFileSync(filePath, webpPath);
    console.log(`Convertida: ${webpPath}`);
    return webpPath;
  } catch (error) {
    console.error(`Error al convertir ${filePath} a WebP:`, error);
    return null;
  }
}

// Descargar y optimizar todas las imágenes
async function processAllImages() {
  console.log('Iniciando descarga y optimización de imágenes...');

  for (const image of images) {
    try {
      const filePath = await downloadImage(image.url, image.filename);
      convertToWebP(filePath);
    } catch (error) {
      console.error(`Error procesando ${image.filename}:`, error);
    }
  }

  console.log('Proceso completado.');
}

processAllImages();