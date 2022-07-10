import axios from "axios";
import { useState } from "react";

type User = {
  name:string,
  age:number, 
}
export const getApi = () => {
const [users, setUsers] = useState<User[]>([]);
  axios.get<User[]>("http://localhost:3000/api/hello").then((res) => {
    setUsers(res.data);
  });
return users;
}
export default getApi;