# Guía de Despliegue en Render

Esta guía te ayudará a desplegar tu portfolio en Render.com de forma gratuita.

## Requisitos Previos

1. Cuenta en [GitHub](https://github.com) (gratis)
2. Cuenta en [Render](https://render.com) (gratis)
3. Tu código en un repositorio de GitHub

## Paso 1: Subir tu Código a GitHub

Si aún no has subido tu código a GitHub:

```bash
# Inicializar repositorio git
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: Portfolio project"

# Crear un repositorio en GitHub y conectarlo
# Ve a github.com y crea un nuevo repositorio
# Luego ejecuta:
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

## Paso 2: Configurar Variables de Entorno (Opcional)

Si necesitas variables de entorno, crea un archivo `.env.local` (ya no lo subas a GitHub):

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://tu-sitio.onrender.com
```

## Paso 3: Desplegar en Render

### Opción A: Usando el Dashboard de Render (Recomendado)

1. **Inicia sesión en Render**
   - Ve a https://render.com
   - Crea una cuenta o inicia sesión

2. **Crea un nuevo Web Service**
   - Click en "New +"
   - Selecciona "Web Service"

3. **Conecta tu repositorio de GitHub**
   - Autoriza Render para acceder a GitHub
   - Selecciona el repositorio de tu portfolio

4. **Configura el servicio**
   - **Name**: `mi-portfolio` (o el nombre que prefieras)
   - **Region**: Selecciona la más cercana (Oregon, Frankfurt, etc.)
   - **Branch**: `main`
   - **Root Directory**: (dejar vacío)
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

5. **Plan**
   - Selecciona el plan **Free** (gratis)

6. **Variables de Entorno** (si las necesitas)
   - Click en "Advanced"
   - Agrega las variables:
     - `NODE_VERSION` = `18.17.0`
     - `NODE_ENV` = `production`
     - `NEXT_PUBLIC_SITE_URL` = `https://tu-app.onrender.com`

7. **Crear Web Service**
   - Click en "Create Web Service"
   - Render comenzará a construir y desplegar tu aplicación

### Opción B: Usando render.yaml (Blueprint)

El archivo `render.yaml` ya está configurado en tu proyecto. Para usarlo:

1. En Render Dashboard, click en "New +" → "Blueprint"
2. Conecta tu repositorio de GitHub
3. Render detectará automáticamente el archivo `render.yaml`
4. Click en "Apply" para crear el servicio

## Paso 4: Configuración Posterior al Despliegue

### Personalizar el Dominio

**Dominio gratuito de Render:**
- Tu sitio estará disponible en: `https://tu-app.onrender.com`
- Este dominio es gratuito y funcional

**Dominio personalizado (opcional):**
1. En el Dashboard de Render, ve a tu servicio
2. Click en "Settings"
3. En la sección "Custom Domain", click en "Add Custom Domain"
4. Sigue las instrucciones para configurar tu DNS

### Configurar Variables de Entorno Adicionales

Si necesitas agregar más variables:

1. Ve a tu servicio en Render
2. Click en "Environment"
3. Agrega las variables necesarias:
   - `RESEND_API_KEY` (si usas el servicio de email)
   - `NEXT_PUBLIC_GA_ID` (si usas Google Analytics)

## Características del Plan Gratuito de Render

✅ **Incluye:**
- 750 horas de ejecución al mes (suficiente para un portfolio)
- 512 MB RAM
- SSL/HTTPS automático
- Despliegues automáticos desde GitHub
- Subdominios gratuitos (.onrender.com)

⚠️ **Limitaciones:**
- El servicio se "duerme" después de 15 minutos de inactividad
- La primera carga puede tardar 30-50 segundos al despertar
- Después, funciona normalmente

💡 **Tip**: Para evitar que se duerma, puedes usar servicios como UptimeRobot para hacer ping cada 10 minutos.

## Despliegues Automáticos

Cada vez que hagas push a tu rama `main` en GitHub, Render automáticamente:

1. Detectará los cambios
2. Ejecutará el build
3. Desplegará la nueva versión

```bash
# Para actualizar tu sitio:
git add .
git commit -m "Actualizar contenido"
git push origin main
```

## Solución de Problemas

### Build Falla

Si el build falla:

1. **Revisa los logs** en Render Dashboard → Events
2. **Verifica la versión de Node.js**:
   - Debe ser >= 18.17.0
3. **Limpia y reconstruye localmente**:
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

### El Sitio No Carga

1. **Verifica el Start Command**: Debe ser `npm start`
2. **Revisa que el puerto sea el correcto**: Next.js usa el puerto 3000 por defecto
3. **Revisa los logs**: Render Dashboard → Logs

### Imágenes No Cargan

1. **Verifica las rutas**: Deben empezar con `/images/`
2. **Asegúrate de que estén en** `public/images/`
3. **Re-despliega** después de agregar imágenes

## Monitoreo y Logs

### Ver Logs en Tiempo Real

1. Ve a tu servicio en Render
2. Click en la pestaña "Logs"
3. Verás logs en tiempo real de tu aplicación

### Revisar Métricas

1. Click en la pestaña "Metrics"
2. Verás:
   - CPU usage
   - Memory usage
   - Request count
   - Response times

## Actualizar tu Portfolio

1. **Edita tu contenido localmente**
2. **Prueba los cambios**: `npm run dev`
3. **Commit y push**:
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   git push origin main
   ```
4. **Render desplegará automáticamente** en 2-5 minutos

## URLs Importantes

- **Dashboard**: https://dashboard.render.com
- **Documentación**: https://render.com/docs
- **Status**: https://status.render.com

## Costos

- **Plan Free**: $0/mes
  - Perfecto para portfolios personales
  - Se duerme después de inactividad

- **Plan Starter**: $7/mes
  - No se duerme
  - Más recursos
  - Mejor para sitios en producción

## Comparación: Render vs Vercel

| Característica | Render (Free) | Vercel (Free) |
|---------------|---------------|---------------|
| Costo | Gratis | Gratis |
| Se duerme | Sí (15 min) | No |
| Despliegues | Ilimitados | 100/día |
| Ancho de banda | 100 GB/mes | 100 GB/mes |
| Build time | 15 min max | 45 min max |
| Dominio custom | ✅ | ✅ |
| SSL | ✅ | ✅ |

**Recomendación**:
- Render es excelente si no te importa el cold start
- Vercel es mejor para Next.js (optimizado específicamente)

## Siguiente Paso

Una vez desplegado en Render:

1. ✅ Verifica que tu sitio carga correctamente
2. ✅ Prueba todas las páginas (Home, Blog, Proyectos, Contacto)
3. ✅ Verifica que el dark mode funciona
4. ✅ Prueba en móvil
5. ✅ Comparte tu portfolio: `https://tu-app.onrender.com`

## Soporte

- **Documentación Render**: https://render.com/docs/deploy-nextjs-app
- **Comunidad Render**: https://community.render.com
- **Discord Render**: https://render.com/discord

---

**Tu portfolio estará en línea en menos de 10 minutos** 🚀
