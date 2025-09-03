# Servicios Sierras Chicas

> Plataforma web para conectar **vecinos y prestadores de servicios** en la región de Sierras Chicas (Córdoba, AR): publicación de servicios, solicitudes, reservas, pagos y reseñas.

## ✨ Características

- **Catálogo de servicios** por categoría, ubicación y palabras clave.  
- **Perfiles** de prestadores con calificaciones y reseñas.  
- **Flujo de reserva**: solicitud → confirmación del prestador → estado de la orden.  
- **Pagos online** (integración lista para usar con proveedor tipo Mercado Pago – modo sandbox/producción).  
- **Autenticación y roles** (cliente, prestador, admin).  
- **Panel de administración**: gestión de usuarios, servicios, órdenes y métricas.  
- **Notificaciones** por email para eventos clave (alta, reserva, confirmación, etc.).  
- **API REST** documentada (OpenAPI/Swagger) y separada del frontend.  

> **Monorepo** con dos carpetas principales: **Frontend** (Angular) y **Backend** (Spring Boot). Lenguajes predominantes: **Java** y **TypeScript**, además de **HTML/CSS** para UI.

---

## 🏗️ Arquitectura

- **Frontend**: Angular, consumo de API REST, routing, guards por rol, componentes reutilizables.  
- **Backend**: Spring Boot (Web, Security, Data JPA), arquitectura en capas (controller → service → repository), mapeo JPA, validaciones.  
- **Base de datos**: PostgreSQL.  
- **Integraciones**: proveedor de pagos (SDK/REST), servicio de email (SMTP/API).  
- **DevOps básico**: configuraciones `application.yml`/`.env`, scripts de seed y perfiles `dev`/`prod`.

---

## 🔧 Tech Stack

**Frontend**
- Angular, TypeScript, RxJS, Angular Router, Forms, HTTPClient.
- Estilos con CSS/SCSS; íconos/material (opcional).

**Backend**
- Java 17+, Spring Boot, Spring Web, Spring Security (JWT), Spring Data JPA, Bean Validation.
- Swagger/OpenAPI para documentación de endpoints.

**DB**
- PostgreSQL 14+ (entorno local y producción).

**Herramientas**
- Git/GitHub, Docker (opcional para levantar DB), Jira/Scrum para gestión.

---

## 📂 Estructura del repo

```plaintext
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
```
---

## 📝 Roadmap

- [ ] Filtros avanzados (por disponibilidad, rating, distancia).  
- [ ] Panel de métricas para administradores (Ingresos, órdenes, conversión).  

---

## 👥 Autor

- **Genaro Freccia** – Backend & Frontend  
  - [LinkedIn](https://www.linkedin.com/in/genaro-freccia/)  
  - [GitHub](https://github.com/Genaa03)

---

### 🇬🇧 Short summary (EN)

Full-stack web platform to connect residents and service providers in Córdoba’s *Sierras Chicas* area. Angular frontend, Spring Boot backend, PostgreSQL database, JWT auth, payments integration (sandbox/production), and reviews. Monorepo with `Frontend/` and `Backend/` modules, Docker-ready DB, and Swagger docs for the API.

