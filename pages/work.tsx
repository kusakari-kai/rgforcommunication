import React,{createContext, Dispatch, SetStateAction, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import WorkPage from './worklist';
import axios from 'axios';

type User = {
  id:string,
  name:string,
  create_at:string, 
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  let data = new FormData(event.currentTarget);
  console.log("beforepost " + data.get('textinput'));
  axios.post("/api/work",{
    name: data.get('textinput')
  }).then((res) => {
    console.log(res);
  });
};

export const WorkUserData = createContext({} as {
  users: User[],
  setUsers: Dispatch<SetStateAction<User[]>>
});


export default function Index() {
  const [users, setUsers] = useState<User[]>([]);
  const value = {
    users,
    setUsers,
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          padding:2
       }}>
       </Box>
       <WorkUserData.Provider value={value}><WorkPage /></WorkUserData.Provider>
      <Box sx={{
          position:'absolute',
          bottom:0,
          left:0,
          pl:2,
          pr:2,
          minWidth:'100%',
       }}>
        <Box component="form" noValidate onSubmit={handleSubmit} >
          <Grid item xs={12}>
                <TextField
                  required
                  name="textinput"
                  label="作業名"
                  type="text"
                  id="textinput"
                  fullWidth
                />
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mb: 2 }}
            >登録</Button>
        </Box>
      </Box>
    </Container>
  );

}