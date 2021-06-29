import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';


import '../styles/store/Login.css';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#444444',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#f00',
    },
  },
});

const Register= () => {
  

  const classes = useStyles();

  const userRegiser = (event) => {
    event.preventDefault();
    alert("login success ");
    console.log(event.preventDefault())
  }
  return (
    <div className="login-container">
      <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registro
        </Typography>
        <form className={classes.form}  onSubmit={userRegiser}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nameEmpresa"
            label="Nombre de la Empresa"
            name="nameEmpresa"
            autoComplete="Nombre de la Empresa"
            autoFocus
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            id="rfc"
            label="RFC"
            name="rfc"
            autoComplete="RFC"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="telefono"
            label="Telefono"
            name="telefono"
            autoComplete="Telefono"
            autoFocus
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            id="puesto"
            label="Cargo en la Empresa"
            name="puesto"
            autoComplete="Cargo en la Empresa"
            autoFocus
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="ubicacion"
            label="Ubicacion"
            name="ubicacion"
            autoComplete="Ubicacion"
            autoFocus
          />
          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Correo Electronico"
          name="email"
          autoComplete="email"
          autoFocus
        />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="sector"
            label="Sector"
            name="sector"
            autoComplete="Sector"
            autoFocus
          />
           
          <TextField
            variant="outlined"
            margin="normal"
            required
            
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
                       
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrame
          </Button>
          <Grid container>
            <Grid item xs>

            </Grid>
           
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        {/* <Copyright /> */}
      </Box>
    </Container>
    </ThemeProvider>
    </div>
  );

}

export default Register;