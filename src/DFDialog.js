import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from "react";
import {Typography } from '@mui/material';


function DFDialog(props) {
    const { onClose, open } = props;
  
    return (
      <Dialog onClose={onClose} open={open}>
        <DialogTitle>Daily Fact</DialogTitle>
        <Typography variant = "body1" sx = {{padding: 1}}>
          1 in 5,000 north Atlantic lobsters are born bright blue.
        </Typography>
      </Dialog>
    );
  }

export default DFDialog;