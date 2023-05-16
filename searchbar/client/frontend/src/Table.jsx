// import "./Table.css"
// const Table = ({ data, selectedOption }) => {
//     return (
//       <table>
//         <tbody>
//           <tr>
//             <th>{selectedOption === "parts" ? "Part Number" : "Minifig Number"}</th>
//             <th>Name</th>
//             <th>Minifig image id</th>
//           </tr>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{selectedOption === "parts" ? item.part_num : item.set_num}</td>
//               <td>{item.name}</td>
//               <td>{<img src={ selectedOption === "parts" ? item.part_img_url : item.set_img_url} width="auto" height="200"></img>}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   export default Table;


import './Table.css';
import NoImg from './NoImg.jpg';

const Table = ({ data, selectedOption }) => {
  return (
    <div className="table-grid">
      {data.map((item) => (
        <div className="table-item" key={item.id}>
          <div className="table-top">
            <div className="item-name">{item.name}</div>
            <div className="item-num">
              {selectedOption === 'parts' ? item.part_num : item.set_num}
            </div>
          </div>
          <div className="table-bottom">
            <img
              src={
                (selectedOption === 'parts' ? item.part_img_url : item.set_img_url) ||
                NoImg
              }
              alt={item.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;


