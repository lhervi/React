
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import App from '../App';

export default function Logout() {  

  const [open, setOpen] = React.useState(true);  

  const goAway =()=>{
    sessionStorage.clear();
    handleClose();
    window.location.href = '/';
    return <App />
  }; 

  const handleClose = () => {  
    window.history.back();
    setOpen(false);
  };

  

  return (
    <div>     
    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"               
      >     
      
        <WarningRoundedIcon fontSize='large' color='secondary'/>
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to quit?"}      
        </DialogTitle>
        
          <Divider light /><br/><br/>
          <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Click "Logout" button if you really want to leave
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={goAway} color="primary" autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    
    </div>
  );
}