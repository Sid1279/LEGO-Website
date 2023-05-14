const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          <tr>
            <th>Minifig Number</th>
            <th>Name</th>
            <th>Set image id</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.set_num}</td>
              <td>{item.name}</td>
              <td>{<a href={item.set_img_url}>{item.set_img_url}</a>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;