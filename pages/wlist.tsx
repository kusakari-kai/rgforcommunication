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
    axios.get<User[]>("/api/hello").then((res) => {
      setUsers(res.data);
    })
  },[]);

  return (
    <div>
      <table>
        <thead>
          <tr><th>ID</th><th>name</th><th>create_at</th></tr>
        </thead>
        <tbody>
      {users.map(user => (
        <ListItemValue id={user.id} name={user.name} create_at={user.create_at} key={user.name}/>
      ))}
      </tbody></table>
    </div>
  );
}
export default Page;