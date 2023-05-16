const Table = ({ data, selectedOption }) => {
    return (
      <table>
        <tbody>
          <tr>
            <th>{selectedOption === "parts" ? "Part Number" : "Minifig Number"}</th>
            <th>Name</th>
            <th>Minifig image id</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{selectedOption === "parts" ? item.part_num : item.set_num}</td>
              <td>{item.name}</td>
              <td>{<img src={ selectedOption === "parts" ? item.part_img_url : item.set_img_url} width="auto" height="200"></img>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  export default Table;