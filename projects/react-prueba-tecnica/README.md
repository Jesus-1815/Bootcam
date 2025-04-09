# Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:
- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello
 Endpoint para usar: `https://cataas.com/cat/says/${firtsWord}?fontSize=50&fontColor=red&json=true`
-Recupera un hecho aleatorio de gatos de la primera API 
-Recuperar la primera palabra del hecho 
-Muestra la imagen de3 un gato con la primera palabra 
y muestra una imagen de un gato con la primera palabra del hecho recuperado usando la segunda API.



para crear un proyecto desde vanilla sin vite es:
-npm install @vitejs/plugin-react -E
-npm install react react-dom -E
-import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});

-mainjsx: import { createRoot } from "react-dom/client"
import {App} from "/src/App.jsx"
const root = createRoot(document.getElementById('app'));
root.render(<App/>);

-npm install standard -D
-"eslintConfig": {
    "extends":"./node_modules/standard/eslintrc.jason"
  }

ya luego crear el app jsx y empezar el proyecto 