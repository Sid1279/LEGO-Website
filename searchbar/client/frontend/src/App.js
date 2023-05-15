import { useEffect, useState } from "react";
import {minifigs} from "./minifigs";
// import {parts} from "./parts";
// import {sets} from "./sets";
import "./app.css";
import Table from "./Table";
import { TablePagination } from '@mui/material';
// import axios from "axios";

//////////////////////BASIC SEARCH

// function App() {
//   const [query, setQuery] = useState("");
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <ul className="list">
//         {Users.filter((asd) =>
//           asd.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

/////////////////////SEARCH ON A DATATABLE

function App() {
  const [paginate, setpaginate] = useState(10);


  const [query, setQuery] = useState("");
  const keys = ["set_num", "name", "set_img_url"];

  // const search = (data) => {
  //   return data.filter((item) =>
  //     keys.some((key) => item[key]?.toLowerCase().includes(query))
  //   );
  // };

  function search(data) {
    return data.filter(
      (item) =>
        keys.some((key) =>
          item[key]?.toLowerCase().includes(query)
        )
    );
  }
  const load_more = (event) => {
    setpaginate((prevValue) => prevValue + 8);
  };


return (
  <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    {<Table data={
      search(minifigs).slice(0, paginate)
      } />
    }
    <button onClick={load_more}>Load More</button>
  </div>
);
}
export default App;


///////////////////// SAVE FILES
// import { saveAs } from 'file-saver';
// function App() {
//   async function getAllData() {
//     const minifig_urls = [];
//     const set_urls = [];
//     const part_urls = [];

//     function delay(ms) {
//       return new Promise(resolve => setTimeout(resolve, ms));
//     }
  
//     for (let i = 1; i <= 13; i++) {
//       minifig_urls.push(`https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=${i}&page_size=1000`);
//       delay(1000);
//     }
//     for (let i = 1; i <= 22; i++) {
//       set_urls.push(`https://rebrickable.com/api/v3/lego/sets/?key=7dd3aa13b924bb746bbad213b865bab5&page=${i}&page_size=1000`);
//       delay(1000);
//     }
//     for (let i = 1; i <= 51; i++) {
//       part_urls.push(`https://rebrickable.com/api/v3/lego/parts/?key=7dd3aa13b924bb746bbad213b865bab5&page=${i}&page_size=1000`);
//       delay(1000);
//     }

//     let minifig_dataArr = [];
//     let set_dataArr = [];
//     let part_dataArr = [];

//     try {
//       for (const url of minifig_urls) {
//         const response = await fetch(url);
//         const data = await response.json();
//         const jsonObject = JSON.parse(JSON.stringify(data));
//         const results = jsonObject.results;

//         // Do something with the jsonObject
//         minifig_dataArr = minifig_dataArr.concat(results);
//       }
//       for (const url of set_urls) {
//         const response = await fetch(url);
//         const data = await response.json();
//         const jsonObject = JSON.parse(JSON.stringify(data));
//         const results = jsonObject.results;

//         // Do something with the jsonObject
//         set_dataArr = set_dataArr.concat(results);
//       }

//       for (const url of part_urls) {
//         const response = await fetch(url);
//         const data = await response.json();
//         const jsonObject = JSON.parse(JSON.stringify(data));
//         const results = jsonObject.results;

//         // Do something with the jsonObject
//         part_dataArr = part_dataArr.concat(results);
//       }

//       // Do something with the combinedData.results
//       const file_minifig_data = `const data = ${JSON.stringify(minifig_dataArr)}`;
//       const minifig_blob = new Blob([file_minifig_data], { type: 'text/javascript;charset=utf-8' });
//       saveAs(minifig_blob, 'minifigs.js');


//       // Do something with the combinedData.results
//       const file_set_data = `const data = ${JSON.stringify(set_dataArr)}`;
//       const set_blob = new Blob([file_set_data], { type: 'text/javascript;charset=utf-8' });
//       saveAs(set_blob, 'sets.js');

//       //Do something with the combinedData.results
//       const file_part_data = `const data = ${JSON.stringify(part_dataArr)}`;
//       const part_blob = new Blob([file_part_data], { type: 'text/javascript;charset=utf-8' });
//       saveAs(part_blob, 'parts.js');
      
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   getAllData();
// }
// export default App;



////////////////////// SAMPLE FILE SAVER

// function App() {
//   async function getData() {
//     const urls = [
//       "https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=1&page_size=1000",
//       "https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=2&page_size=1000",
//       "https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=3&page_size=1000"
//     ];
  
//     let dataArr = [];
//         try {
//           for (const url of urls) {
//             const response = await fetch(url);
//             const data = await response.json();
//             const jsonObject = JSON.parse(JSON.stringify(data));
//             const results = jsonObject.results;

//             // Do something with the jsonObject
//             dataArr = dataArr.concat(results);
//           }
//         } catch (error) {
//           console.error(error);
//         }
//         console.log(dataArr);
//     }

//     getData();
// }
// export default App;