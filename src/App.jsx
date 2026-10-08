import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es'
import Header from './layouts/Header'

// App solo arma la página: el Provider de fechas (para el DatePicker), el header y el container.
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <Header />
      {/* TODO: reemplazar este bloque por tu container, por ejemplo <MascotasContainer /> */}
      <div className="container mt-4">
        <p className="text-center text-secondary">✅ Proyecto base listo. Aquí va tu container.</p>
      </div>
    </LocalizationProvider>
  )
}

export default App
