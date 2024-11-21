import { Box, Button, FormControl, TextField, Typography } from "@mui/material"


const Login = () => {

  return (
    
    <Box
      bgcolor={"#7159c1"}
      display={"flex"}
      flexDirection={"column"}
      minHeight={"100vh"}
    >

      <Typography align="center">Acessar a conta</Typography>

      <Box
        component={"form"}
        bgcolor={"#d7d2d7"}
        display={"flex"}
        flexDirection={"column"}
      >
        <FormControl>
          <TextField type="email" label="E-mail" variant="outlined" />
        </FormControl>

        <TextField type="password" label="Senha" variant="outlined" />

      </Box>

      <Button variant="contained">Entrar</Button>

    </Box>
  );
}

export default Login