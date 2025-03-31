import { Box, Button, FormControl, Link, TextField, Typography } from "@mui/material";
import { Google, Facebook } from "@mui/icons-material";

const Login = () => {

  return (
    <>
      {/* container principal */} {/* */}
      <Box display="flex" flexDirection="column" minHeight="100vh" alignItems="center" justifyContent="center">
        <Typography variant="h3" align="center"> Login</Typography>
        {/* container do formulario */}
        <Box display="flex" flexDirection="column" component="form" maxWidth="360px" gap={2} width="100%" marginTop="25px">
          {/* formulario */}
          <FormControl>
            {/* input do email*/}
            <TextField type="email" placeholder="E-mail" variant="outlined" required/>
          </FormControl>
          {/* input da senha */}
          <TextField type="password" placeholder="E-Senha" variant="outlined" required/>
          {/* botao de entrar*/}
          <Button type="submit" variant="contained" color="primary">Entrar</Button>
        </Box>
        {/* links de 'esqueci senha' e 'cadastro' */}
        <Box width="100%" display="flex" justifyContent="space-between" maxWidth="360px" alignItems="center" mt={1}>
          <Link href="#" variant="body2">
            Esqueci minha senha
          </Link>
          <Link href="#" variant="body2" >
            Cadastrar-se
          </Link>
        </Box>
        {/* botoes para entrar com google ou facebook */}
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          {/* botao google */}
          <Button variant="outlined" startIcon={<Google/>}>Entrar com Google</Button>
          {/* botao facebook */}
          <Button variant="outlined" startIcon={<Facebook/>}>Entrar com Facebook</Button>
        </Box>
      </Box>
    </>
  );
}

export default Login;