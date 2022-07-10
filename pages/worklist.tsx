import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ListItemValue } from "./list";
import { WorkUserData } from "./work";

type User = {
  id:string
  name:string,
  create_at:string, 
}
export const WorkPage = () => {
  const {users, setUsers} = useContext(WorkUserData);
  useEffect(() => {
    axios.get<User[]>("/api/hello").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    })
  },[]);

  return (
    <div>
      {users.map(user => (
        <ListItemValue id={user.id} name={user.name} create_at={user.create_at} key={user.name}/>
      ))}
    </div>
  );
}
export default WorkPage;