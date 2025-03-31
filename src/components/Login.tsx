import { CheckBox } from "@mui/icons-material";
import { Box, Button, FormControl, FormControlLabel, TextField, Typography } from "@mui/material";


const Login = () => {

  return (
    <>
      {/* container principal */} {/* */}
      <Box bgcolor='green' display='flex' flexDirection='column' minHeight='100vh' component='form'>
        <Typography variant="h3" align="center"> Login</Typography>
        {/* container do formulario */}
        <Box bgcolor='white' display='flex' flexDirection='column'>
          {/* formulario */}
          <FormControl>
            {/* input do email*/}
            <TextField type="email" placeholder="E-mail" variant="outlined" required/>
            {/* input da senha */}
            <TextField type="password" placeholder="E-Senha" variant="outlined" required/>
            {/* checkbox de relembrar dados*/}
            <FormControlLabel control={<CheckBox value="remember" color="primary" required/>} label="Relembre-me" />
            {/* botao de entrar*/}
            <Button type="submit" variant="contained" color="primary">Entrar</Button>
          </FormControl>
        </Box>
      </Box>
    </>
  );
}

export default Login;