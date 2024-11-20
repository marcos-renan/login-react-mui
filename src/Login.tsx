import { Box, Button, TextField, Typography } from "@mui/material"


const Login = () => {

  return (
    <Box
      bgcolor={"#7159c1"}
      display={"flex"}
      flexDirection={"column"}
      minHeight={"100vh"}
    >
      <Typography variant="h1" align="center">
        Sign In
      </Typography>
      <Box
        bgcolor={"#d7d2d7"}
        display={"flex"}
        flexDirection={"column"}
      >
        <TextField type="email" label="E-mail" variant="outlined" />
        <TextField type="password" label="Senha" variant="outlined" />
      </Box>
      <Button variant="contained">Entrar</Button>
    </Box>
  );
}

export default Login