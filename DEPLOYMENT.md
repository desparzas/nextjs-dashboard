# 🚀 Guía de Despliegue - Next.js Dashboard

## 📋 Requisitos Previos

- Cuenta en GitHub (ya tienes el código)
- Cuenta en Vercel (gratis)
- Base de datos PostgreSQL en la nube

## 🌟 Opción 1: Desplegar en Vercel (Recomendado)

### Paso 1: Preparar la Base de Datos

#### Opción A: Vercel Postgres
1. Ve a [vercel.com](https://vercel.com) y crea una cuenta
2. Importa tu repositorio GitHub
3. En el dashboard, ve a "Storage" → "Create Database" → "Postgres"
4. Copia las variables de entorno que se generan automáticamente

#### Opción B: Supabase (Alternativa gratuita)
1. Ve a [supabase.com](https://supabase.com)
2. Crea un nuevo proyecto
3. Ve a Settings → Database
4. Copia la "Connection string" en modo "URI"

### Paso 2: Configurar Variables de Entorno en Vercel

En tu proyecto de Vercel, ve a Settings → Environment Variables y añade:

```bash
# Base de datos (obtén estos valores de tu proveedor)
POSTGRES_URL=postgresql://username:password@host:port/database?sslmode=require
POSTGRES_PRISMA_URL=postgresql://username:password@host:port/database?sslmode=require&pgbouncer=true
POSTGRES_URL_NO_SSL=postgresql://username:password@host:port/database
POSTGRES_URL_NON_POOLING=postgresql://username:password@host:port/database?sslmode=require

# Información de conexión
POSTGRES_USER=tu_usuario
POSTGRES_HOST=tu_host
POSTGRES_PASSWORD=tu_contraseña
POSTGRES_DATABASE=tu_database

# Autenticación (genera una nueva clave secreta)
AUTH_SECRET=nueva_clave_super_secreta_de_32_caracteres

# URL para NextAuth (reemplaza con tu dominio de Vercel)
NEXTAUTH_URL=https://tu-app.vercel.app
```

### Paso 3: Generar Nueva Clave Secreta

Ejecuta este comando para generar una clave segura:
```bash
openssl rand -base64 32
```

### Paso 4: Inicializar la Base de Datos

Una vez desplegado, ve a: `https://tu-app.vercel.app/seed`
Esto creará las tablas y datos de ejemplo.

### Paso 5: Probar la Aplicación

1. Ve a `https://tu-app.vercel.app/login`
2. Usa las credenciales de prueba:
   - Email: `user@nextmail.com`
   - Password: `123456`

## 🐳 Opción 2: Docker (Para cualquier proveedor)

### Construir y ejecutar localmente:
```bash
docker build -t nextjs-dashboard .
docker run -p 3000:3000 nextjs-dashboard
```

### Con base de datos incluida:
```bash
docker-compose up
```

## ☁️ Otros Proveedores de Hosting

### Netlify
1. Conecta tu repositorio en netlify.com
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Configura las mismas variables de entorno

### Railway
1. Ve a railway.app
2. Conecta GitHub
3. Railway detecta automáticamente Next.js
4. Añade las variables de entorno

## 🗃️ Proveedores de Base de Datos

### Neon (Serverless Postgres)
- Ve a [neon.tech](https://neon.tech)
- Plan gratuito con 3GB
- Perfecto para proyectos pequeños

### PlanetScale (MySQL)
- Ve a [planetscale.com](https://planetscale.com)
- Necesitarías adaptar las consultas SQL

### MongoDB Atlas
- Requeriría cambiar todo el código de base de datos

## 🔧 Solución de Problemas

### Error de Conexión a Base de Datos
- Verifica que las variables de entorno estén correctas
- Asegúrate de que la URL incluya `?sslmode=require`
- Confirma que la base de datos permite conexiones externas

### Error de Autenticación
- Verifica que `AUTH_SECRET` esté configurado
- Asegúrate de que `NEXTAUTH_URL` coincida con tu dominio

### Error de Build
- Ejecuta `npm run build` localmente para verificar
- Revisa los logs de build en tu plataforma de hosting

## 📊 Rendimiento en Producción

Tu aplicación incluye:
- ✅ Renderizado estático y dinámico optimizado
- ✅ Partial Prerendering (PPR) experimental
- ✅ Streaming para mejor UX
- ✅ Metadata para SEO
- ✅ Imágenes optimizadas
- ✅ Middleware de autenticación eficiente

## 🔒 Seguridad

- ✅ Autenticación con NextAuth.js
- ✅ Hash de contraseñas con bcrypt
- ✅ Variables de entorno seguras
- ✅ Middleware de protección de rutas
- ✅ Validación de formularios con Zod

¡Tu aplicación está lista para producción! 🎉
