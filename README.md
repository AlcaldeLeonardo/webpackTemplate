# webpackTemplate

Plantilla de Webpack y ESlint StandarD JS

## Caracteristicas y tecnologias

- reset.css
- Vanilla JS
- webpack 5
- webpack html plugin
- webpack server
- Cargas de modulos en caliente para en el desarrollo

## Como usar

### Paso 1

Ejecutar el comando:

```bash
npm install
```

Tienes detallado en package.json los scripts disponibles.

### Paso 2

Para eliminar rastros de git y asi luego crear tus propios commit
ejecuta en la raiz de tu proyecto:

En bash:

```bash
rm -rf .git
```

En PoweShell:

```powershell
Remove-Item -Recurse -Force .git
```

### Para publicar el proyecto en GH Pages

```bash
git subtree push --prefix dist origin gh-pages
```

Tambien configura en github, de ser necesario si no se hizo en automatico,
la rama gh-pages como rama en la seccion Settings > Pages > branch
