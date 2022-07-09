import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserData } from ".";
import { ListItemValue } from "./list";

type User = {
  id:string
  name:string,
  create_at:string, 
}
export const Page = () => {
  const {users, setUsers} = useContext(UserData);
  useEffect(() => {
    axios.get<User[]>("http://localhost:3000/api/hello").then((res) => {
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
export default Page;