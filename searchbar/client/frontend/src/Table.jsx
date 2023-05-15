// import { TablePagination } from "@mui/material";

const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          <tr>
            <th>Minifig Number</th>
            <th>Name</th>
            <th>Minifig image id</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.set_num}</td>
              <td>{item.name}</td>
              <td>{<img src={item.set_img_url} width="auto" height="200"></img>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;