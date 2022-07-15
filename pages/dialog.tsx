import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export const FormDialog = props => {
  const {id, name} = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const callUpdateApi = () => {
    const updatename = document.getElementById("dialogName").value;
    console.log("updatename " + updatename);
    axios.put("/api/update/" + {id}.id ,{
      name: updatename
    }).then((res) => {
      console.log(res);
    });
    setOpen(false);
  };

  return (
    <div>
      <p onClick={handleClickOpen}>{name}</p>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="dialogName"
            type="text"
            fullWidth
            defaultValue={name}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={callUpdateApi}>更新する</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormDialog;
