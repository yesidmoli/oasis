# Configuración para GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

## Configuración Inicial

### ⚠️ Método Simplificado - No requiere configuración previa

Este proyecto ahora usa un método más simple y confiable que **NO requiere** habilitar GitHub Pages manualmente. El workflow creará automáticamente la rama `gh-pages` y configurará todo por ti.

### 1. Habilitar GitHub Pages después del primer deploy

**Pasos simples:**

1. Haz commit y push de los cambios:
   ```bash
   git add .
   git commit -m "Configurar despliegue en GitHub Pages"
   git push origin main
   ```

2. Espera a que el workflow se ejecute (ve a la pestaña **Actions** en GitHub)

3. Una vez que el workflow termine exitosamente, ve a **Settings** → **Pages** en tu repositorio

4. En **Source**, selecciona la rama **gh-pages** y la carpeta **/ (root)**

5. Haz clic en **Save**

6. Tu sitio estará disponible en unos minutos en:
   - `https://tu-usuario.github.io/nombre-repositorio` (si el repo no es username.github.io)
   - O `https://tu-usuario.github.io` (si el repo es username.github.io)

### 2. Configuración del Repositorio

El proyecto está configurado para funcionar automáticamente con cualquier nombre de repositorio:

- **Si tu repositorio es `usuario.github.io`**: El sitio se desplegará en `https://usuario.github.io`
- **Si tu repositorio tiene otro nombre**: El sitio se desplegará en `https://usuario.github.io/nombre-repositorio`

El workflow detecta automáticamente el nombre del repositorio y configura el base path correctamente.

### 3. Despliegue Automático

Una vez configurado, cada vez que hagas `push` a la rama `main`, el workflow:
1. Instalará las dependencias
2. Construirá el proyecto
3. Desplegará automáticamente en la rama `gh-pages`

Puedes ver el progreso en la pestaña **Actions** de tu repositorio. El despliegue puede tardar 1-2 minutos en completarse.

**Nota sobre repositorios privados:**
- Los repositorios públicos pueden usar GitHub Pages de forma gratuita
- Si el repositorio es privado, necesitas una cuenta de GitHub Pro, Team o Enterprise

## Estructura de Archivos Creados

- `.github/workflows/deploy.yml`: Workflow de GitHub Actions para despliegue automático
- `public/.nojekyll`: Archivo necesario para que GitHub Pages sirva archivos que empiezan con `_`
- `vite.config.ts`: Configurado con base path dinámico
- `src/App.tsx`: Configurado para usar el base path correcto
- `package.json`: Scripts actualizados para crear `404.html` necesario para SPA

## Solución de Problemas

### Error: "Get Pages site failed" o problemas con el workflow

**Si estás usando el workflow moderno y tienes este error:**

El proyecto ahora usa el método tradicional de `gh-pages` que es más confiable. Si aún ves este error:

1. Verifica que el workflow se haya ejecutado correctamente
2. Ve a **Settings** → **Pages** y selecciona la rama **gh-pages** como fuente
3. Si no ves la rama `gh-pages`, espera a que el workflow termine de ejecutarse

### La rama gh-pages no aparece

1. Verifica que el workflow se haya ejecutado exitosamente (marca verde ✓ en Actions)
2. Ve a la pestaña **Code** y busca la rama `gh-pages` en el selector de ramas
3. Si no existe, revisa los logs del workflow para ver si hubo algún error

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

