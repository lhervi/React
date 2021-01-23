import React from "react";
import Button from '@material-ui/core/Button';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from '@material-ui/core/styles';



const LoginButton = () => {

    const useStyles = makeStyles((theme) => ({
       submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }));
      
    const classes = useStyles();

  const { loginWithRedirect } = useAuth0();
    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => loginWithRedirect()}            
            >
            Sign In
        </Button>
    )
};

export default LoginButton;

/*

          */