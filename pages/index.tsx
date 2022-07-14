import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ButtonTest } from './button';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import axios from 'axios';
import Page from './wlist';

type User = {
  id:string,
  name:string,
  create_at:string, 
}

export const UserData = createContext({} as {
  users: User[],
  setUsers: Dispatch<SetStateAction<User[]>>
});

export function checktst(value) {
  axios.delete("/api/delete/" + value.id).then((res) => {
  });
}  

export default function Index() {
  const [users, setUsers] = useState<User[]>([]);
  const value = {
    users,
    setUsers,
  };

  function handleTestCallApi() {
      axios.get("/api/hello").then((res) => {
        setUsers(res.data);
      });
  }
  
  return (
    <Container sx={{
      minWidth:"800px",
      border:"1px solid",
    }}>
      <Box sx={{
        margin: 3
       }}>
        <Button onClick={handleTestCallApi}>更新する</Button>
        <UserData.Provider value={value}><Page /></UserData.Provider>
      </Box>
    </Container>
  );
}