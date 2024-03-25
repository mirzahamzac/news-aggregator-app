import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const Modal = ({ open, onClose, errorMessage }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="error-dialog-title">
      <DialogTitle id="error-dialog-title">Error</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {errorMessage}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;