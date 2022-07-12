import './App.css';
import logo from './download.jpg'



import WhichLeaderboard from './WhichLeaderboard.js'
import InventoryDialog from './InventoryDialog.js'
import ResponsiveAppBar from './AppBar.js';
import ProfileDialog from './ProfileDialog.js';
import HTPDialog from './HTPDialog.js';
import DFDialog from './DFDialog.js';
import CalendarDialog from './CalendarDialog.js';
import StoreDialog from './StoreDialog.js';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import * as React from "react";

import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import {CalendarToday, Inventory, CheckBox, CheckBoxOutlineBlank, ShoppingCart, CreditCard, DisabledByDefault} from '@mui/icons-material';



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
