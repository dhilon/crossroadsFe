import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from "react";
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import {CardMembershipOutlined} from '@mui/icons-material';
import PropTypes from 'prop-types';


function StoreDialog(props) {
    const { onClose, open } = props;
  
    return (
      <Dialog onClose={onClose} open={open}>
        <DialogTitle>The Store</DialogTitle>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined" /*onClick = {App.inventoryClose}*/ >
            <React.Fragment>
              <CardActionArea>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Item #?
                  </Typography>
                  <Typography variant="h5" component="div">
                    Random Item
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Strength: 
                  </Typography>
                  <Typography variant="body2">
                    A great ploy to ...
                    <br />
                    {'"..."'}
                  </Typography>
                  <Typography variant="body1">
                    <CardMembershipOutlined size = "small"/> 34
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" onClick = {onClose}>
                  Buy
                </Button>
              </CardActions>
            </React.Fragment>
          </Card>
        </Box>
      </Dialog>
    );
  }

StoreDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default StoreDialog;