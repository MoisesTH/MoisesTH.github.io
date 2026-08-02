# Portafolio Profesional y Página Personal — Moisés Torres Hernández

Página web personal, portafolio profesional, CV en línea y espacio de divulgación académica desarrollado para **Moisés Torres Hernández**, especializado en desarrollo Python, investigación en ciencias del comportamiento (descuento temporal y modelos bayesianos en la UNAM) y docencia tecnológica (MCT).

Desarrollado con **React**, **Vite**, **TypeScript**, **Tailwind CSS** y preparado para despliegue automatizado en **GitHub Pages** mediante **GitHub Actions**.

---

## 🚀 1. INSTALACIÓN Y DESARROLLO LOCAL

### Requisitos previos
- Node.js versión 18 o superior.
- Gestor de paquetes `npm`.

### Comandos de ejecución

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre tu navegador en `http://localhost:3000` (o el puerto mostrado en la consola).

3. **Compilar para producción:**
   ```bash
   npm run build
   ```

4. **Probar la vista previa de producción:**
   ```bash
   npm run preview
   ```

---

## 📦 2. CONFIGURACIÓN DEL REPOSITORIO DE GITHUB

Sigue estos pasos para vincular tu proyecto local con un nuevo repositorio en tu cuenta de GitHub:

```bash
# 1. Inicializar el repositorio Git local
git init

# 2. Agregar todos los archivos al seguimiento
git add .

# 3. Realizar el primer commit
git commit -m "Crear página personal y portafolio profesional con React y Vite"

# 4. Asegurar que la rama principal se llame 'main'
git branch -M main

# 5. Conectar con el repositorio remoto de GitHub (Sustituye URL_DEL_REPOSITORIO por tu enlace)
git remote add origin https://github.com/tu-usuario/NOMBRE-DEL-REPOSITORIO.git

# 6. Subir el proyecto a GitHub
git push -u origin main
```

### 💡 ¿Qué hacer en situaciones comunes de Git?
- **Si el repositorio remoto ya tiene archivos (como README o LICENSE):**
  Ejecuta primero `git pull origin main --rebase` antes de hacer `git push`.
- **Si la carpeta no fue clonada originalmente de GitHub:**
  El comando `git remote add origin URL_DEL_REPOSITORIO` establecerá la vinculación correctamente.

---

## ⚙️ 3. CONFIGURACIÓN DE GITHUB PAGES & GITHUB ACTIONS

Este proyecto incluye un flujo automatizado de CI/CD en `.github/workflows/deploy.yml` que compila y publica la página automáticamente cada vez que haces un `git push` a la rama `main`.

### Pasos para activar el despliegue automático:

1. Abre tu repositorio en GitHub (`https://github.com/tu-usuario/NOMBRE-DEL-REPOSITORIO`).
2. Ve a la pestaña **Settings** (Configuración).
3. En el menú lateral izquierdo, selecciona **Pages**.
4. En la sección **Build and deployment** -> **Source**, cambia la opción de *Deploy from a branch* a **GitHub Actions**.
5. ¡Listo! Al realizar cualquier `git push origin main`, se ejecutará la acción en la pestaña **Actions** y tu sitio estará en vivo en pocos segundos en:
   - `https://tu-usuario.github.io/` (si el repositorio se llama `tu-usuario.github.io`)
   - `https://tu-usuario.github.io/NOMBRE-DEL-REPOSITORIO/` (si el repositorio tiene otro nombre).

### 🛠️ Manejo de la ruta base (`base` en Vite)
El archivo `vite.config.ts` utiliza la configuración `./` por defecto en producción. Esto garantiza que todos los recursos (CSS, JS, imágenes) se carguen correctamente sin importar si el proyecto está alojado en la raíz del usuario o dentro de un subdirectorio.

---

## ✏️ 4. CONTROL Y PERSONALIZACIÓN DE CONTENIDOS

Toda la información del sitio está centralizada en la carpeta `src/data/` para que puedas actualizar tus datos sin necesidad de modificar el código JSX de los componentes:

- **Información Personal y Contacto:** `src/data/personal.ts`
- **Experiencia Laboral:** `src/data/experience.ts`
- **Formación Académica y Tesis:** `src/data/education.ts`
- **Certificaciones (PCEP, PCAP, MCT):** `src/data/certifications.ts`
- **Habilidades Técnicas:** `src/data/skills.ts`
- **Proyectos Destacados:** `src/data/projects.ts`
- **Investigación Conductual:** `src/data/research.ts`
- **Docencia y Cursos:** `src/data/teaching.ts`

---

## 📄 5. CÓMO AGREGAR TU ARCHIVO DE CV EN PDF

Para activar el botón de descarga del CV en formato PDF:

1. Coloca tu archivo en la siguiente ruta:
   ```text
   public/assets/cv/Moises_Torres_CV.pdf
   ```
2. Asegúrate de que se llame exactamente `Moises_Torres_CV.pdf`.

---

## 🌐 6. CONFIGURACIÓN DE DOMINIO PERSONALIZADO (OPCIONAL)

Si compras un dominio propio (por ejemplo `moisestorres.com`):

1. **En tu proveedor de dominio (DNS):**
   - Agrega un registro **CNAME** apuntando `www` a `tu-usuario.github.io.`.
   - Agrega registros **A** para el dominio raíz pointing a las IP de GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
2. **En GitHub:**
   - Ve a **Settings** -> **Pages** -> **Custom domain**.
   - Escribe tu dominio (`moisestorres.com`) y marca la casilla **Enforce HTTPS**.

---

## 🏷️ 7. LISTA DE MARCADORES PARA SUSTITUIR

Antes de publicar el sitio a producción, reemplaza los siguientes marcadores con tus datos reales en los archivos indicados:

- `[CORREO ELECTRÓNICO]` — `src/data/personal.ts`
- `[URL DE GITHUB]` — `src/data/personal.ts`
- `[URL DE LINKEDIN]` — `src/data/personal.ts`
- `[NOMBRE-DEL-REPOSITORIO]` — `vite.config.ts` y `.github/workflows/deploy.yml`
- `[URL DEL SITIO]` — `index.html`, `public/robots.txt` y `public/sitemap.xml`
- `[DOMINIO PERSONAL]` — Configuración DNS si aplica
- `[AGREGAR PUESTO]` — `src/data/experience.ts`
- `[AGREGAR FECHA DE INICIO]` — `src/data/experience.ts`
- `[AGREGAR FECHA DE FINALIZACIÓN]` — `src/data/experience.ts`
- `[AGREGAR RESPONSABILIDADES]` — `src/data/experience.ts`
- `[AGREGAR LOGROS]` — `src/data/experience.ts`
- `[AGREGAR FECHA]` — `src/data/certifications.ts`
- `[AGREGAR URL]` — `src/data/certifications.ts`

---

## ✅ 8. LISTA DE VERIFICACIÓN FINAL (CHECKLIST)

- [ ] Información personal actualizada en `src/data/personal.ts`
- [ ] Enlace real de GitHub agregado
- [ ] Enlace real de LinkedIn agregado
- [ ] Correo electrónico de contacto actualizado
- [ ] Archivo PDF del CV agregado en `public/assets/cv/Moises_Torres_CV.pdf`
- [ ] Experiencia laboral y fechas revisadas en `src/data/experience.ts`
- [ ] Fechas de certificaciones agregadas en `src/data/certifications.ts`
- [ ] URLs de proyectos de GitHub y Demos verificadas en `src/data/projects.ts`
- [ ] Nombre del repositorio configurado en GitHub
- [ ] GitHub Actions activado en Settings -> Pages -> GitHub Actions
- [ ] Sitio desplegado y funcionando en GitHub Pages
- [ ] Probad la navegación en móviles y dispositivos de escritorio
- [ ] Probad la alternancia entre Modo Claro y Modo Oscuro
