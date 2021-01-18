import React from 'react';
import loginStatus from '../components/login/loginStatus';
import {useSelector, useDispatch} from 'react-redux';
import { setEmail, setPassword, setProcessing, selectPassword, selectEmail, selectProcessing} from '../reducers/loginSlice';
import {setLoginTries, setConnectionStatus, setUserLogged, setUserInfo, setJwt,
        selectLoginTries, selectConnectionStatus } from '../reducers/statusSlice';


import ValidateAccess from '../components/login/validateAccess';
import CircularProgress from '@material-ui/core/CircularProgress';

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

import BardaszLogoDG from '../images/logoBardasz/BardaszLogoDarkGray'; 
import App from '../App';



function Login() {   
  
    const dispatch = useDispatch(); 

    const userEmail = useSelector(selectEmail);
    const userPass = useSelector(selectPassword);
    const userProcessing = useSelector(selectProcessing); 
    const userConnectionStatus = useSelector(selectConnectionStatus); 
    const userTries = useSelector(selectLoginTries);   

    
    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        }
      },
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

    const classes = useStyles();

    function delay(t) {       
    
      let miliseconds = Math.round(Math.random()*t*1000);      
      return new Promise (function (cadena){      
        setTimeout(cadena, miliseconds);      
      })
    } 
  
      function Footer() {
      return (
        <Typography variant="body2" color="textSecondary" align="center">
          {/*'Copyright © '*/}
          <Link color="inherit" href="https://bardasz.com/">
            Bardasz.com
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
    }

    function Validate(e){
      e.preventDefault();

      dispatch(setProcessing(true));                   //  Indicates that the processing access has begun        
      const tr={tryResult:'', time:(()=>new Date())().toJSON(), email: userEmail}
      const userData = {id:'', middle:'', lastname:'' ,name:'', username:'', 
      email: userEmail, password: userPass, role:''};       
      
      try{
        ValidateAccess(userEmail, userPass).then(function(validateAccessResult){        
          tr.tryResult = validateAccessResult.connectionResult.connectionStatusNumber; //HTML Code number Eg. 200 / 404
          const jwt = validateAccessResult.connectionResult.jwt 
          delay(5).then(function(result){               // Fake delay
            if (validateAccessResult.status) {
              dispatch(setUserLogged(true))          
              const {id, middle, lastname ,name, username, role} = validateAccessResult.userData;
              userData.Id = id;
              userData.lastname = lastname;
              userData.middle = middle;
              userData.name = name;        
              userData.username = username;     
              userData.role = role; 
              dispatch(setUserInfo(userData)); 
              dispatch(setJwt(jwt));
            };  // If ends
            dispatch(setLoginTries(tr));
            dispatch(setConnectionStatus(validateAccessResult.connectionResult.result));
            dispatch(setProcessing(false));
            console.log(`userTries: ${JSON.stringify(userTries)}`)
            
            
          })
        })
      } catch(e) {
        
        alert(`There is a problem: ${e} `);

      }
  }
const log = loginStatus();
if (log) {
  return <App />
}else{
      
  return (
  
    <Container component="main" maxWidth="xs">
      <CssBaseline /> 
      
      <div className={classes.paper}>
        <Grid container maxWidth="xs" direction='row' justify='space-between' alignItems='center'>
          <Grid item>            
          <BardaszLogoDG w='220' h='220'/>
          </Grid>
          <Grid item alignItems='flex-start'>
          
          </Grid>
          <Grid item alignItems='flex-start' justify='center' direction='column'>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />            
            </Avatar>
            <Typography component="h6" variant="h6" color='textSecondary' justify='center' direction='column'>
            Sign in
            </Typography> 
          </Grid>
          
        </Grid>
      
          <Grid>
          
          </Grid>   
          <Grid>
            <Grid>              
              {userConnectionStatus /*login proceess status infiormation*/ }
            </Grid>
          </Grid>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus       
            onChange={e => dispatch(setEmail(e.target.value))}     
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"            
            id="password"
            autoComplete="current-password"            
            onChange={e => dispatch(setPassword(e.target.value))}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}           
          />  
          <CircularProgress 
            variant="indeterminate" 
            thickness={userProcessing ? .8: 0}                
            />
          <label>{userProcessing && "Login in progress..."}</label>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => Validate(e)}            
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>             
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={4}>
        <Footer />
      </Box>
    </Container>
  );}

}

export default Login;