# Configuración para GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

## Configuración Inicial

### ⚠️ IMPORTANTE: Pasos que DEBES completar ANTES de hacer push

### 1. Habilitar GitHub Pages en tu repositorio (OBLIGATORIO)

**DEBES hacer esto ANTES de que el workflow funcione:**

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración) en la parte superior del repositorio
3. En el menú lateral izquierdo, busca y haz clic en **Pages**
4. En la sección **Build and deployment**:
   - En **Source**, selecciona **GitHub Actions** (NO selecciones "Deploy from a branch")
   - Si no ves la opción "GitHub Actions", asegúrate de que tu repositorio sea público o que tengas GitHub Pro/Team
5. **NO** selecciones ninguna rama específica, solo selecciona **GitHub Actions**
6. Guarda los cambios (si hay un botón Save, haz clic en él)

**Nota**: Si no habilitas Pages primero, el workflow fallará con el error "Get Pages site failed".

### 2. Verificar permisos del repositorio

Asegúrate de que tu cuenta de GitHub tenga los permisos necesarios:
- Si el repositorio es privado, necesitas una cuenta de GitHub Pro, Team o Enterprise para usar GitHub Pages
- Los repositorios públicos pueden usar GitHub Pages de forma gratuita

### 3. Configuración del Repositorio

El proyecto está configurado para funcionar automáticamente con cualquier nombre de repositorio:

- **Si tu repositorio es `usuario.github.io`**: El sitio se desplegará en `https://usuario.github.io`
- **Si tu repositorio tiene otro nombre**: El sitio se desplegará en `https://usuario.github.io/nombre-repositorio`

El workflow de GitHub Actions detecta automáticamente el nombre del repositorio y configura el base path correctamente.

### 4. Hacer commit y push de los cambios

Una vez que hayas habilitado GitHub Pages:

```bash
git add .
git commit -m "Configurar despliegue en GitHub Pages"
git push origin main
```

### 5. Despliegue Automático

Una vez configurado correctamente, cada vez que hagas `push` a la rama `main`, el workflow:
1. Instalará las dependencias
2. Construirá el proyecto
3. Desplegará automáticamente en GitHub Pages

Puedes ver el progreso en la pestaña **Actions** de tu repositorio. El despliegue puede tardar 1-2 minutos en completarse.

## Estructura de Archivos Creados

- `.github/workflows/deploy.yml`: Workflow de GitHub Actions para despliegue automático
- `public/.nojekyll`: Archivo necesario para que GitHub Pages sirva archivos que empiezan con `_`
- `vite.config.ts`: Configurado con base path dinámico
- `src/App.tsx`: Configurado para usar el base path correcto
- `package.json`: Scripts actualizados para crear `404.html` necesario para SPA

## Solución de Problemas

### Error: "Get Pages site failed" o "Please verify that the repository has Pages enabled"

**Este es el error más común y ocurre cuando GitHub Pages no está habilitado correctamente.**

**Solución:**
1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** → **Pages**
3. En **Source**, asegúrate de que esté seleccionado **GitHub Actions** (no "Deploy from a branch")
4. Si GitHub Actions no aparece como opción:
   - Verifica que tu repositorio sea público, O
   - Si es privado, necesitas GitHub Pro, Team o Enterprise
5. Guarda los cambios
6. Espera 1-2 minutos y luego vuelve a ejecutar el workflow (haz un nuevo push o ve a Actions → Re-run jobs)

### El sitio no se despliega

1. Verifica que hayas habilitado GitHub Pages con **GitHub Actions** como fuente
2. Revisa la pestaña **Actions** para ver si hay errores en el workflow
3. Asegúrate de que el workflow tenga permisos para escribir en Pages (esto se configura automáticamente)
4. Verifica que el workflow se haya completado exitosamente (debe tener una marca verde ✓)

### Las rutas no funcionan

El proyecto está configurado para crear un archivo `404.html` que permite que las rutas de React Router funcionen correctamente en GitHub Pages. Esto se hace automáticamente durante el build.

### Las imágenes no se cargan

Verifica que las rutas de las imágenes usen rutas relativas. Las imágenes en `public/` se sirven desde la raíz del sitio.

## Desarrollo Local

Para desarrollo local, simplemente ejecuta:

```bash
npm run dev
```

El proyecto funcionará normalmente en desarrollo sin necesidad de configurar el base path.

## Build Local

Para hacer un build local y probar:

```bash
npm run build
npm run preview
```

Nota: El script `build:fix-404` solo funciona en sistemas Unix (Linux/Mac). En Windows, puedes ejecutar manualmente:
```bash
copy dist\index.html dist\404.html
```

Pero esto no es necesario para el despliegue en GitHub Pages, ya que el workflow se ejecuta en Ubuntu.

