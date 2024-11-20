import { Button, TextField, Typography } from "@mui/material"


const Login = () => {

  return (
    <>
      <Typography variant="h1" align="center">
        Sign In
      </Typography>
      <TextField
        type="email"
        label="E-mail"
        variant="outlined"
      />
      <TextField
        type="password"
        label="Senha"
        variant="outlined"
      />
      <Button variant="contained">Entrar</Button>
    </>
  );
}

export default Login