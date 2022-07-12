import * as React from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Leaderboard, BatteryCharging90Outlined, CardMembershipOutlined} from "@mui/icons-material";
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



function WhichLeaderboard(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { leadClickOpen } = props;
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
        id="which-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={leadClickOpen}>
          <TopStreaksMenu>
            
          </TopStreaksMenu>
          
        </MenuItem>
        <MenuItem onClick={leadClickOpen}>
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
        id="points-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
export default WhichLeaderboard