<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Send Email Massive
## Description
Este proyecto ha sido desarrollado con el propósito de aprender y mejorar mis habilidades en Nest.js, así como explorar conceptos de modularización, manipulación de datos falsos y la implementación de envío masivo de correos electrónicos con el fin de mejorar el rendimiento. También incorpora el uso de tareas programadas y se esfuerza por seguir las mejores prácticas SOLID en su diseño.

**Nota:** Este proyecto no está destinado a un entorno de producción, sino que se crea con fines educativos y de aprendizaje.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```
## Fake Data Seed

Para cargar datos de prueba en la aplicación, puedes utilizar el endpoint `/faker/seed`. Esto te permitirá generar datos ficticios para realizar pruebas. A continuación, se muestra cómo puedes usar este endpoint:

```bash
# Cargar datos de prueba
$ curl -X GET http://localhost:3000/faker/seed
```
## Tecnologías y Conceptos Utilizados

El proyecto utiliza las siguientes tecnologías y conceptos:

- Nest.js
- TypeORM para la gestión de la base de datos
- Nodemailer para el envío de correos electrónicos
- Tareas programadas
- Modularización y organización del código fuente
- Manipulación de datos falsos para pruebas
## Autor

- Luis Angel Murrugarra Astolingon

