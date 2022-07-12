import * as React from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    Box,
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    Typography 
} from '@mui/material';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';

function InventoryCard(props) {
  const { onClose } = props;
  return (
    <Card variant="outlined">
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
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" onClick = {onClose}>
            Use
          </Button>
        </CardActions>
      </React.Fragment>
    </Card>
  );
}

function InventoryDialog(props) {
  const { onClose, open } = props;
  /*const {alert} = (
  <Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    This is an error alert — <strong>check it out!</strong>
  </Alert>)*/

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Inventory</DialogTitle>
      <Box sx={{ minWidth: 275 }}>
        <FixedSizeList
          height={400}
          width={360}
          itemSize={46}
          itemCount={200}
          overscanCount={5}
        >
          <InventoryCard onClose = {onClose}/>
          <InventoryCard onClose = {onClose}/>
          <InventoryCard onClose = {onClose}/>
        </FixedSizeList>

      </Box>
    </Dialog>
  );
}

InventoryDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default InventoryDialog;