import { useEffect, useState } from "react";
import {results} from "./minifigs";
import "./app.css";
import Table from "./Table";
import axios from "axios";

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

// function App() {
//   const [query, setQuery] = useState("");
//   const keys = ["set_num", "name", "set_img_url"];
//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key]?.toLowerCase().includes(query))
//     );
//   };
// return (
//   <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//     {<Table data={search(results)} />}
//   </div>
// );
// }


////////////////////// API SEARCH

// function App() {
//   const [query, setQuery] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(`http://localhost:5000?q=${query}`);
//       setData(res.data);
//     };
//     if (query.length === 0 || query.length > 2) fetchData();
//   }, [query]);

//   return (
//     <div className="app">
//         <input
//           className="search"
//           placeholder="Search..."
//           onChange={(e) => setQuery(e.target.value.toLowerCase())}
//         />
//       {<Table data={data} />}
//     </div>
//   );
// }

// function App() {
//   async function getData() {
//     try {
//       const response = await fetch('https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=2&page_size=1000');
//       const data = await response.json();
//       const results = data.results;
//       const jsonObject = JSON.parse(JSON.stringify(results));
//       // Do something with the jsonObject
//       console.log(jsonObject);
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   getData();
// }

// export default App;

import { saveAs } from 'file-saver';
function App() {
  async function getDataMinifigs() {
    const minifig_urls = [
      'https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=1&page_size=1000',
      'https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=2&page_size=1000',
      'https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=3&page_size=1000',
      'https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=4&page_size=1000',
      'https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=5&page_size=1000',
      'https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=6&page_size=1000',
      'https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=7&page_size=1000',
      'https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=8&page_size=1000',
      'https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=9&page_size=1000',
      'https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=10&page_size=1000',
      'https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=11&page_size=1000',
      'https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=12&page_size=1000',
      'https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5&page=13&page_size=1000',
    ];

    try {
      const responses = await Promise.all(minifig_urls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(res => res.json()));
      const combinedData = Object.assign({}, ...data);
      const results_final = combinedData.results;
      // Do something with the combinedData
      console.log(combinedData.results);
      const fileData = `const data = ${JSON.stringify(results_final)}`;

      const blob = new Blob([fileData], { type: 'text/javascript;charset=utf-8' });
      saveAs(blob, 'data.js');

    } catch (error) {
      console.error(error);
    }
  }
  getDataMinifigs();
}
export default App;

