import { Button } from "@mui/material";
import { checktst, update } from ".";
import FormDialog from "./dialog";

export const ListItemValue = props => {
  const {id, name, create_at} = props;
  return (
    <tr>
      <td>{id}</td>
      <td><FormDialog id={id} name={name}/></td>
      <td>{create_at}</td>
      <td><Button variant="contained" color="error" onClick={() => checktst({id})}>delete</Button></td>
    </tr>
  )
}