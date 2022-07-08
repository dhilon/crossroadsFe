//import logo from './logo.svg';
import './App.css';
import logo from './download.jpg'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import * as React from "react";
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import {CalendarMonth, CalendarToday, Inventory, CardMembershipOutlined, CheckBox, CheckBoxOutlineBlank, Leaderboard, ShoppingCart, BatterySaver, CreditCard, DisabledByDefault, BatteryCharging90Outlined} from '@mui/icons-material';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { isDisabled } from '@testing-library/user-event/dist/utils';
import { CardActionArea } from '@mui/material';


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
      voteOpen: false
    };
  }

  htpClickOpen = () => {
    this.setState({htpOpen : true});
  };

  htpClose = (value) => {
    this.setState({htpOpen : false});
  };

  voteClose = (value) => {
    this.setState({voteOpen : true});
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
            
            

            <WhichLeaderboard open={this.state.dfOpen} onClick={this.handleLeads.bind(this)}>
              <Button variant = "contained" size = "normal">
                <Leaderboard fontSize="large" />
                  <TopStreaksMenu open = {this.state.leadMenu} onClose = {this.leadClose.bind(this)}>
                    
                  </TopStreaksMenu>

                  <MostPointsMenu open = {this.state.leadMenu} onClose = {this.leadClose.bind(this)}>
                    
                  </MostPointsMenu>
                <Leaderboard fontSize="large"/>
              </Button>
            </WhichLeaderboard>

            
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
            <Button>
              Left
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Paper elevation = {7}>
              <img src={logo} className="App-logo" alt="logo" />
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Button>
              Right
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" disabled={this.state.voteOpen} onClick = {this.voteClose.bind(this)}>
              Vote
            </Button>
          </Grid>

          <Grid item xs={4}>
          
            <IconButton aria-label="shopping-cart" size = "large">
              <ShoppingCart sx = {{ fontSize : 60, border: 2}}/>
            </IconButton>

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
            <ResponsiveAppBar>

            </ResponsiveAppBar>
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
        This game involves the complex natures of game theory and the trustworthiness of cooperation. Choose the side that you think other people will not choose. Whichever side has the least amount of 
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
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" onClick = {onClose}>
                Use
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

InventoryDialog.propTypes = {
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

function WhichLeaderboard() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant = "contained" size = "normal" onClick={handleClick}>
        <Leaderboard fontSize="large" />
          <Typography variant = "h5" sx = {{padding: 1}}>
            Leaderboards
          </Typography>
        <Leaderboard fontSize="large"/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={App.leadClickOpen}>
          <TopStreaksMenu>
            
          </TopStreaksMenu>
          
        </MenuItem>
        <MenuItem onClick={App.leadClickOpen}>
          <MostPointsMenu>
          
          </MostPointsMenu>
        </MenuItem>
      </Menu>
    </div>
  );
}

function TopStreaksMenu(props){

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant = "contained" size = "normal" onClick={handleClick}>
        <Leaderboard fontSize="large" />
          <Typography variant = "h5" sx = {{padding: 1}}>
            <BatteryCharging90Outlined size = "small"/>
            Top Streaks
            <BatteryCharging90Outlined size = "small"/>
          </Typography>
        <Leaderboard fontSize="large"/>
      </Button>
      <Menu
        id="leads-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>1st place: ...</MenuItem>
        <MenuItem>2nd place: ...</MenuItem>
        <MenuItem>3rd place: ...</MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem>Your place: ...</MenuItem>
      </Menu>
    </div>
  )
}

function MostPointsMenu(props){

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant = "contained" size = "normal" onClick={handleClick}>
        <Leaderboard fontSize="large" />
          <Typography variant = "h5" sx = {{padding: 1}}>
            <CardMembershipOutlined size = "small"/>
              Most Points
            <CardMembershipOutlined size = "small"/>
          </Typography>
        <Leaderboard fontSize="large"/>
      </Button>
      <Menu
        id="leads-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>1st place: ...</MenuItem>
        <MenuItem>2nd place: ...</MenuItem>
        <MenuItem>3rd place: ...</MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem>Your place: ...</MenuItem>
      </Menu>
    </div>
  )
}

const pages = ['About Us', 'Feedback'];
const settings = ['Profile'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CROSSROADS LLC
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CROSSROADS LLC
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};



export default App;