import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';


function ProfileDialog(props) {
    const { onClose, open } = props;
  
    return (
      <div>
        <Dialog onClose={onClose} open={open}>
          <DialogTitle>All About YOU</DialogTitle>
          Account ID:
          <br></br>
          Created:
          <br></br>
          Hours Played:
          <br></br>
          Hours Won:
          <br></br>
          Highest Streak Rank:
          <br></br>
          Highest Points Rank: 
        </Dialog>
      </div>
      
    );
  }

export default ProfileDialog