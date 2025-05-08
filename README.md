# Auto Escuela Genesis

Estructura del proyecto:

```
autoescuela_genesis/
│
├── index.html          # Página principal con todas las secciones
├── css/
│   └── styles.css      # Estilos comentados para fácil personalización
├── assets/
│   └── logo.jpg        # Logo de Auto Escuela Genesis
└── README.md           # Esta documentación
```

## Despliegue con GitHub Pages

1. Crea un repositorio nuevo en GitHub llamado `autoescuela-genesis`.
2. Sube la carpeta del proyecto.
3. En la configuración del repositorio, en la sección **Pages**, selecciona la rama `main` y la carpeta `/` para desplegar.
4. GitHub generará una URL donde tu sitio estará disponible.

## Personalización de Colores y Fuentes

- Variables CSS en `css/styles.css`:
  - `--color-primary`: color principal (amarillo dorado).
  - `--color-background`: color de fondo (negro).
  - `--color-secondary`: acentos o secciones (gris oscuro).
- Fuente Montserrat importada desde Google Fonts, modificable en el `<head>` de `index.html`.
