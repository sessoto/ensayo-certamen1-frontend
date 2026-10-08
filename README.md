# Desarrollo Front-End — proyecto base

React 19 + Vite + Material UI 9 + MUI X Date Pickers (dayjs) + Bootstrap (solo grilla y utilidades) + fuente Roboto.

## Estructura
```
src/
├── main.jsx          punto de partida (createRoot)
├── App.jsx           LocalizationProvider + Header + container
├── index.css         Roboto + Bootstrap (reboot, grid, utilities)
├── layouts/          Header.jsx
├── containers/       componentes con estado y lógica (XContainer.jsx)
└── components/       componentes presentacionales (XForm.jsx, XView.jsx)
```

## Cómo ejecutarlo
```bash
npm install      # solo la primera vez (crea node_modules)
npm run dev      # http://localhost:5173
```

## Flujo con Git
```bash
git clone <url-del-repo>        # primera vez: descarga el proyecto
git pull                        # traer cambios nuevos del repositorio
git add -A                      # preparar todos los cambios
git commit -m "mensaje"         # guardar una versión
git push origin main            # subir a GitHub
```
