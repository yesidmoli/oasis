# Configuración para GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

## Configuración Inicial

### 1. Habilitar GitHub Pages en tu repositorio

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona **GitHub Actions**
5. Guarda los cambios

### 2. Configuración del Repositorio

El proyecto está configurado para funcionar automáticamente con cualquier nombre de repositorio:

- **Si tu repositorio es `usuario.github.io`**: El sitio se desplegará en `https://usuario.github.io`
- **Si tu repositorio tiene otro nombre**: El sitio se desplegará en `https://usuario.github.io/nombre-repositorio`

El workflow de GitHub Actions detecta automáticamente el nombre del repositorio y configura el base path correctamente.

### 3. Despliegue Automático

Una vez configurado, cada vez que hagas `push` a la rama `main`, el workflow:
1. Instalará las dependencias
2. Construirá el proyecto
3. Desplegará automáticamente en GitHub Pages

Puedes ver el progreso en la pestaña **Actions** de tu repositorio.

## Estructura de Archivos Creados

- `.github/workflows/deploy.yml`: Workflow de GitHub Actions para despliegue automático
- `public/.nojekyll`: Archivo necesario para que GitHub Pages sirva archivos que empiezan con `_`
- `vite.config.ts`: Configurado con base path dinámico
- `src/App.tsx`: Configurado para usar el base path correcto
- `package.json`: Scripts actualizados para crear `404.html` necesario para SPA

## Solución de Problemas

### El sitio no se despliega

1. Verifica que hayas habilitado GitHub Pages con **GitHub Actions** como fuente
2. Revisa la pestaña **Actions** para ver si hay errores en el workflow
3. Asegúrate de que el workflow tenga permisos para escribir en Pages (esto se configura automáticamente)

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

