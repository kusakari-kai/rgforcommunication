import { Button } from "@mui/material";
import { checktst } from ".";

export const ListItemValue = props => {
  const {id, name, create_at} = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{create_at}</td>
      <td><Button variant="contained" color="error" onClick={() => checktst({id})}>delete</Button></td>
    </tr>
  )
}