import React, { useState} from 'react';
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
import Loading from '../components/Loading';
import Header from '../components/Header';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


import '../styles/proveedor/Login.css';

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

export default function Login() {

  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  const usuarioLogin = (event) => {
    event.preventDefault();
    setLoading(true);


    const endpoint = 'https://webdevelopersgdl.com/comercializadora-material/v1/api/proveedor/login';

    const credenciales = {
      'correoEmpresarial': event.target.correoElectronico.value,
      'password': event.target.password.value
    };

    axios.post(endpoint, JSON.stringify(credenciales)).then((response) => {
      console.log(response);
      setLoading(false);

      if(response.status == 200 && response.data.message === 'success') {
        localStorage.setItem('proveedor', JSON.stringify(response.data.data));
        window.location.href = "/proveedor";
      }else {
        alert("Datos de sesión invalidos!!!")
      }

    }).catch((error)=> {
      setLoading(false);
      alert("Datos de sesión invalidos!!!")
      console.log(error.status);
    })

  }

  return (
    <div className="login-container">
     
    </div>
  );
}