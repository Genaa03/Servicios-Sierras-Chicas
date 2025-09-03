Servicios Sierras Chicas

Plataforma web para conectar vecinos y prestadores de servicios en la región de Sierras Chicas (Córdoba, AR): publicación de servicios, solicitudes, reservas, pagos y reseñas.

✨ Características

Catálogo de servicios por categoría, ubicación y palabras clave.

Perfiles de prestadores con calificaciones y reseñas.

Flujo de reserva: solicitud → confirmación del prestador → estado de la orden.

Pagos online (integración lista para usar con proveedor tipo Mercado Pago – modo sandbox/producción).

Autenticación y roles (cliente, prestador, admin).

Panel de administración: gestión de usuarios, servicios, órdenes y métricas.

Notificaciones por email para eventos clave (alta, reserva, confirmación, etc.).

API REST documentada (OpenAPI/Swagger) y separada del frontend.

Monorepo con dos carpetas principales: Frontend (Angular) y Backend (Spring Boot). Lenguajes predominantes: Java y TypeScript, además de HTML/CSS para UI. 
GitHub

🏗️ Arquitectura

Frontend: Angular, consumo de API REST, routing, guards por rol, componentes reutilizables.

Backend: Spring Boot (Web, Security, Data JPA), arquitectura en capas (controller → service → repository), mapeo JPA, validaciones.

Base de datos: PostgreSQL.

Integraciones: proveedor de pagos (SDK/REST), servicio de email (SMTP/API).

DevOps básico: configuraciones application.yml/.env, scripts de seed y perfiles dev/prod.

🔧 Tech Stack

Frontend

Angular, TypeScript, RxJS, Angular Router, Forms, HTTPClient.

Estilos con CSS/SCSS; íconos/material (opcional).

Backend

Java 17+, Spring Boot, Spring Web, Spring Security (JWT), Spring Data JPA, Bean Validation.

Swagger/OpenAPI para documentación de endpoints.

DB

PostgreSQL 14+ (entorno local y producción).

Herramientas

Git/GitHub, Docker (opcional para levantar DB), Jira/Scrum para gestión.

▶️ Puesta en marcha
1) Requisitos

Node.js 18+ y npm

Java 17+

PostgreSQL 14+

(Opcional) Docker para DB

2) Base de datos
# con Docker
docker run --name ssc-db -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=ssc_db -p 5432:5432 -d postgres:14


Crear usuario/DB si corrés local sin Docker y aplicar migrations o script de schema.

3) Backend (Spring Boot)

Configurar src/main/resources/application.yml (o variables de entorno):

spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/ssc_db
    username: postgres
    password: postgres
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true

security:
  jwt:
    secret: CHANGEME_SUPER_SECRET
payments:
  provider: mercadopago
  mp:
    access-token: YOUR_MP_ACCESS_TOKEN
    public-key: YOUR_MP_PUBLIC_KEY
email:
  sender: no-reply@ssc.com
  smtp:
    host: smtp.example.com
    username: user
    password: pass


Instalar y correr:

./mvnw spring-boot:run
# o
./gradlew bootRun


API por defecto: http://localhost:8080

4) Frontend (Angular)
cd Frontend
npm install
npm start   # o: ng serve


App por defecto: http://localhost:4200

Configurar environment.ts:

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  payments: {
    provider: 'mercadopago',
    publicKey: 'YOUR_MP_PUBLIC_KEY'
  }
};

🔐 Seguridad

JWT para autenticación stateless.

Roles y guards (Angular) para proteger rutas y vistas.

CORS configurado en backend para permitir el dominio del frontend.

🗺️ Endpoints (ejemplo)
GET    /api/services?category=&q=&page=
POST   /api/services
GET    /api/providers/{id}
POST   /api/bookings            # crear reserva
PATCH  /api/bookings/{id}/confirm
POST   /api/payments/preference # inicia pago
POST   /api/auth/login
POST   /api/auth/register
GET    /api/users/me


La documentación completa se expone en /swagger-ui cuando el perfil dev está activo.

🧪 Testing

Backend: JUnit + Spring Test (tests de servicio y de controlador con MockMvc).

Frontend: Karma/Jasmine para unit tests (opcional).

🔄 Datos de ejemplo (seed)

Script de seed para usuarios (admin/cliente/prestador), servicios de prueba y órdenes de ejemplo.

Variables de pago configuradas para sandbox (no genera cargos reales).

🚀 Despliegue

Backend: contenedor Docker + Postgres administrado (RDS/Cloud SQL) o VM.

Frontend: build Angular (ng build --configuration production) y hosting estático (Netlify, Vercel, S3+CF).

Variables sensibles siempre por secrets (no commitearlas).

📂 Estructura del repo
/Backend
  ├─ src/main/java/.../controller
  ├─ src/main/java/.../service
  ├─ src/main/java/.../repository
  ├─ src/main/java/.../model
  └─ src/main/resources

/Frontend
  ├─ src/app
  │   ├─ core/ (auth, interceptors, guards)
  │   ├─ features/ (services, bookings, profile, admin)
  │   ├─ shared/ (components, pipes)
  │   └─ pages/
  └─ src/environments


Confirmado que el repo contiene carpetas Frontend y Backend; breakdown de lenguajes: Java/TypeScript/HTML/CSS. 
GitHub

📝 Roadmap

 Filtros avanzados (por disponibilidad, rating, distancia).

 Historial de transacciones y comprobantes.

 Panel de métricas para administradores (Ingresos, órdenes, conversión).

 Soporte multi-idioma (ES/EN).

 Tests E2E (Cypress/Playwright).

👥 Autores

Genaro Freccia – Backend & Frontend

LinkedIn / GitHub

📄 Licencia

Este proyecto se distribuye bajo la licencia que definas (MIT/Apache-2.0). Actualizá esta sección según corresponda.

🇬🇧 Short summary (EN)

Full-stack web platform to connect residents and service providers in Córdoba’s Sierras Chicas area. Angular frontend, Spring Boot backend, PostgreSQL database, JWT auth, payments integration (sandbox/production), and reviews. Monorepo with Frontend/ and Backend/ modules, Docker-ready DB, and Swagger docs for the API. 
GitHub
