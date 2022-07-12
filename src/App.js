import './App.css';
import logo from './download.jpg'



import WhichLeaderboard from './WhichLeaderboard.js'
import InventoryDialog from './InventoryDialog.js'
import ResponsiveAppBar from './AppBar.js';
import ProfileDialog from './ProfileDialog.js';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from "react";
import { 
   Button, 
   Typography, 
   Grid, 
   Box,  
   Dialog,
   TextField,
   IconButton,
   Paper,
   DialogTitle,
   Card, 
   CardActions,
   CardContent, 
   CardActionArea
  } from '@mui/material';

import PropTypes from 'prop-types';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import {
  CalendarToday, 
  Inventory, 
  CardMembershipOutlined, 
  CheckBox, 
  CheckBoxOutlineBlank, 
  Leaderboard, 
  ShoppingCart, 
  BatterySaver, 
  CreditCard, 
  DisabledByDefault, 
  BatteryCharging90Outlined
} from '@mui/icons-material';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showHowToPlay: true,
      dropdownLead: false,
      htpOpen: false,
      dfOpen: false,
      leads: false,
      leadMenu: false,
      calendarOpen: false,
      inventoryOpen: false,
      voteOpen: false,
      profileOpen: false,
      storeOpen: false,
      leftright: false,
    };
  }

  htpClickOpen = () => {
    this.setState({htpOpen : true});
  };

  htpClose = (value) => {
    this.setState({htpOpen : false});
  };

  leftrightClose = (value) => {
    this.setState({leftright : true});
  };

  storeClickOpen = () => {
    this.setState({storeOpen : true});
  };

  storeClose = (value) => {
    this.setState({storeOpen : false});
  };

  voteClose = (value) => {
    this.setState({voteOpen : this.state.leftright});
  };

  inventoryClickOpen = () => {
    this.setState({inventoryOpen : true});
  };

  inventoryClose = (value) => {
    this.setState({inventoryOpen : false});
  };

  dfClickOpen = () => {
    this.setState({dfOpen : true});
  };

  dfClose = (value) => {
    this.setState({dfOpen : false});
  };

  profileClickOpen = () => {
    this.setState({profileOpen : true});
  };

  profileClose = (value) => {
    this.setState({profileOpen : false});
  };

  calendarClickOpen = () => {
    this.setState({calendarOpen : true});
  };

  calendarClose = (value) => {
    this.setState({calendarOpen : false});
  };

  leadClickOpen = () => {
    this.setState({leadMenu : true});
  };

  leadClose = (value) => {
    this.setState({leadMenu : false});
  };

  handleClick(){
    this.setState({showHowToPlay : !this.state.showHowToPlay});
  }
  handleLeaderboard(){
    this.setState({dropdownLead : !this.state.dropdownLead});
  }

  handleLeads(){
    this.setState({leads : !this.state.leads});
  }
  
  render () {
    return (
      <div className="App">

        <Grid container spacing={2}>
            
          <Grid item xs={4}>
            <Button variant = "outlined" onClick = {this.htpClickOpen.bind(this)}>
              How to Play
            </Button>
            <HTPDialog
              open={this.state.htpOpen}
              onClose={this.htpClose.bind(this)}
            />

          </Grid>
          <Grid item xs={4}>
            
            

            <WhichLeaderboard open={this.state.dfOpen} onClick={this.handleLeads.bind(this)} leadClickOpen={this.leadClickOpen.bind(this)} />
          </Grid>

          <Grid item xs={4}>
            <Button variant = "outlined" onClick = {this.dfClickOpen.bind(this)}>
              Daily Fact 
            </Button>
            <DFDialog
              open={this.state.dfOpen}
              onClose={this.dfClose.bind(this)}
            />
          </Grid>

          <Grid item xs={4}>
            Current Streak: 
          </Grid>

          <Grid item xs={4}>
            <IconButton aria-label="inventory" size = "large" onClick = {this.inventoryClickOpen.bind(this)}>
              <Inventory sx = {{ fontSize : 45, border: 2}}/>
            </IconButton>
            <InventoryDialog
              open={this.state.inventoryOpen}
              onClose={this.inventoryClose.bind(this)}
            />
          </Grid>

          <Grid item xs={4}>
            Best Streak: 
          </Grid>

          <Grid item xs={3}>
            <Button disabled = {this.state.leftright} onClick = {this.leftrightClose.bind(this)}>
              Left
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Paper elevation = {7}>
              <img src={logo} className="App-logo" alt="logo" />
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Button disabled = {this.state.leftright} onClick = {this.leftrightClose.bind(this)}>
              Right
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" disabled={this.state.voteOpen && this.state.leftright} onClick = {this.voteClose.bind(this)}>
              Vote
            </Button>
          </Grid>

          <Grid item xs={4}>
          
            <IconButton aria-label="shopping-cart" size = "large" onClick = {this.storeClickOpen.bind(this)}>
              <ShoppingCart sx = {{ fontSize : 60, border: 2}}/>
              
            </IconButton>
            <StoreDialog open = {this.state.storeOpen} onClose = {this.storeClose.bind(this)}/>

          </Grid>
          
          <Grid item xs={4}>
            <Typography variant = "h4" sx = {{padding: 1}}>
              My Points: 
            </Typography>
          </Grid>
          

          <Grid item xs={4}>
          
            <IconButton aria-label="calendar-today" size = "large" onClick = {this.calendarClickOpen.bind(this)}>
              <CalendarToday sx = {{ fontSize : 60, border: 2}}/>
            </IconButton>

            <CalendarDialog
              open={this.state.calendarOpen}
              onClose={this.calendarClose.bind(this)}
            />

          </Grid>

          <Grid item xs={12} fontSize = "large">
            <Typography variant = "h2" sx = {{padding: 1}}>
              Welcome to Crossroads!
            </Typography>
          </Grid>
              
          <Grid item xs = {12}>
            <ResponsiveAppBar profileOpen = {this.state.profileOpen} profileClose = {this.profileClose.bind(this)} profileClickOpen = {this.profileClickOpen.bind(this)}/>
            <ProfileDialog open = {this.state.profileOpen} onClose = {this.profileClose.bind(this)}/>
          </Grid>


        </Grid>




        
      </div>
    );

            }
  
  
}

function HTPDialog(props) {
  const { onClose, open } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>How to Play</DialogTitle>
      <Typography variant = "body1" sx = {{padding: 1}}>
        This game delves into both the complex natures of game theory and the trustworthiness of cooperation. Choose the side that you think other people will not choose. Whichever side has the least amount of 
        votes by the hour will get a certain amount of points added to the score and their streak increased by one. 
        Use other tools on screen to help you decide the road you will take.
        
      </Typography>
    </Dialog>
  );
}

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

function CalendarDialog(props) {
  const [value, setValue] = React.useState(new Date());
  const { onClose, open } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle> </DialogTitle>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Ultimate Calendar of Votes"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
    </Dialog>
  );
}

DFDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

ProfileDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};


StoreDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

HTPDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

CalendarDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};






export default App;
