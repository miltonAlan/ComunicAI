# Aplicación de Traducción e Interpretación Multi-Idioma con IA

Esta es una aplicación para Android potenciada por inteligencia artificial, diseñada para mejorar la comunicación entre personas que no comparten un idioma común, tanto en forma escrita como hablada. Con capacidades avanzadas de corrección gramatical y de pronunciación, garantiza una interacción fluida y natural entre los usuarios. 

La aplicación utiliza el modelo de IA **GPT-4** para ofrecer traducciones y correcciones con un alto grado de precisión. Además, la IA adapta las respuestas en tiempo real para ofrecer la mejor experiencia posible.

## Tecnologías Utilizadas

- **Frontend**: Desarrollado con **React Native v0.72** y **TypeScript v5.1**, optimizado para dispositivos Android.
- **Backend**: Implementado con **NestJS v10.2** para garantizar una arquitectura escalable y mantenible.
- **Modelo de IA**: Utiliza **OpenAI GPT-4** para traducción, interpretación y correcciones en múltiples idiomas.

## Estructura del Proyecto

Por razones de simplicidad y para optimizar el despliegue en ambiente local, tanto el frontend como el backend se han alojado en el mismo repositorio. Esta decisión estratégica permite un flujo de desarrollo más rápido y eficiente, reduciendo la sobrecarga de configuración y facilitando la integración continua.

El monorepositorio está organizado en dos módulos principales:

- **Frontend**: La interfaz de usuario desarrollada con React Native permite a los usuarios interactuar fácilmente con la aplicación.
- **Backend**: Gestiona la lógica de negocio, el acceso a la base de datos, la autenticación y la comunicación con el modelo de IA.

## Requisitos

Para poder clonar y ejecutar este repositorio localmente, asegúrate de cumplir con los siguientes requisitos:

- **Node.js v18.x o superior**: Necesario para ejecutar el frontend en React Native y gestionar dependencias.
- **npm v9.x** o **Yarn v1.x**: Para la gestión de paquetes del proyecto.
- **Android SDK**: Requerido si planeas ejecutar la aplicación en un dispositivo Android o emulador.

## Instalación y Configuración Local

1. Clona el repositorio e instala las dependencias: 
   ```bash
   git clone https://github.com/miltonAlan/Translation-App-AI.git
   cd frontend
   npm install
   npm start
   cd ../backend
   npm install
   npm start
   
