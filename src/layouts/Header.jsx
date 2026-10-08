import { AppBar, Toolbar, Typography } from '@mui/material'

// Layout: elemento visual sin lógica de negocio (va en App, no en el container).
function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Desarrollo Front-End
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
