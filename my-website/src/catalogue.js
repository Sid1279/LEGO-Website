import React, { useState } from "react";
import { minifigs } from "./minifigs";
import { parts } from "./parts";
import { sets } from "./sets";
import "./catalogue.css";
import Table from "./Table";
import TablePagination, {
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";
import { Radio, RadioGroup, FormControlLabel,  Checkbox, FormGroup } from '@mui/material';
import {Link} from "react-router-dom";
// import Chat from "./chat";

// import axios from "axios";
/////////////////////SEARCH ON A DATATABLE

// function App() {
//   const [paginate, setpaginate] = useState(10);


//   const [query, setQuery] = useState("");
//   const keys = ["set_num", "name", "set_img_url"];

//   // const search = (data) => {
//   //   return data.filter((item) =>
//   //     keys.some((key) => item[key]?.toLowerCase().includes(query))
//   //   );
//   // };

//   function search(data) {
//     return data.filter(
//       (item) =>
//         keys.some((key) =>
//           item[key]?.toLowerCase().includes(query)
//         )
//     );
//   }
//   const load_more = (event) => {
//     setpaginate((prevValue) => prevValue + 8);
//   };


// return (
//   <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//     {<Table data={
//       search(minifigs).slice(0, paginate)
//       } />
//     }
//     <button onClick={load_more}>Load More</button>
//   </div>
// );
// }
// export default App;



///////////////////// TABLE PAGINATION
// function App() {

//   const [query, setQuery] = useState("");
//   const keys = ["set_num", "name", "set_img_url"];
//   const [pg, setpg] = React.useState(0);
//   const [rpg, setrpg] = React.useState(10);

//   // const search = (data) => {
//   //   return data.filter((item) =>
//   //     keys.some((key) => item[key]?.toLowerCase().includes(query))
//   //   );
//   // };

//   function search(data) {
//     const startIndex = pg * rpg; // Calculate the starting index based on the current page and rows per page
//     const endIndex = startIndex + rpg; // Calculate the ending index
//     return data.filter(
//       (item) =>
//         keys.some((key) =>
//           item[key]?.toLowerCase().includes(query)
//         )
//     ).slice(startIndex, endIndex);
//   }

//   function count_search(data) {
//     return data.filter(
//       (item) =>
//         keys.some((key) =>
//           item[key]?.toLowerCase().includes(query)
//         )
//     ).length;
//   }

//   function handleChangePage(event, newpage) {
//     setpg(newpage);
//   }

//   function handleChangeRowsPerPage(event) {
//       setrpg(parseInt(event.target.value, 10));
//       setpg(0);
//   }

// return (
//   <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//     {<Table data={
//       search(minifigs)
//       } />
//     }
//     <TablePagination
//       rowsPerPageOptions={[10, 25]}
//       component="div"
//       count= {query ? count_search(minifigs) : minifigs.length}
//       rowsPerPage={rpg}
//       page={pg}
//       onPageChange={handleChangePage}
//       onRowsPerPageChange={handleChangeRowsPerPage}
//       slots={{ root: 'div', toolbar: 'nav' }}
//     />
//   </div>
// );
// }
// export default App;


///////////////////// TABLE PAGINATION WITH UI
// function App() {

//   const [query, setQuery] = useState("");
//   const keys = ["set_num", "name", "set_img_url"];
//   const [pg, setpg] = React.useState(0);
//   const [rpg, setrpg] = React.useState(10);

//   function search(data) {
//     const startIndex = pg * rpg; // Calculate the starting index based on the current page and rows per page
//     const endIndex = startIndex + rpg; // Calculate the ending index
//     return data.filter(
//       (item) =>
//         keys.some((key) =>
//           item[key]?.toLowerCase().includes(query)
//         )
//     ).slice(startIndex, endIndex);
//   }

//   function count_search(data) {
//     return data.filter(
//       (item) =>
//         keys.some((key) =>
//           item[key]?.toLowerCase().includes(query)
//         )
//     ).length;
//   }

//   function handleChangePage(event, newpage) {
//     setpg(newpage);
//   }

//   function handleChangeRowsPerPage(event) {
//       setrpg(parseInt(event.target.value, 10));
//       setpg(0);
//   }

// return (
//   <div>
//   <div className="header">
//         <h1>Catalogue</h1>
//   </div>
//   <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//     {<Table data={
//       search(minifigs)
//       } />
//     }
//     <TablePagination
//       slotProps={{
//         select: {
//           'aria-label': 'rows per page',
//         },
//         actions: {
//           showFirstButton: true,
//           showLastButton: true,
//         },
//       }}
//       rowsPerPageOptions={[5, 10, 25]}
//       component="div"
//       count= {query ? count_search(minifigs) : minifigs.length}
//       rowsPerPage={rpg}
//       page={pg}
//       onPageChange={handleChangePage}
//       onRowsPerPageChange={handleChangeRowsPerPage}
//     />
//   </div>
//   </div>
// );
// }
function Catalogue() {
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("minifigs"); // Default to searching minifigs
  let keys = ["set_num", "name", "set_img_url"];
  const [pg, setpg] = React.useState(0);
  const [rpg, setrpg] = React.useState(12);
  const handleLogout = () => {
		localStorage.removeItem("token");
    window.location.href = "/home";
	};

  function getDataBySelectedOption() {
    switch (selectedOption) {
      case "minifigs":
        keys = ["set_num", "name", "set_img_url"];
        return minifigs;
      case "parts":
        keys = ["part_num", "name", "part_img_url"];
        return parts.filter((item) => item !== null);
      case "sets":
        keys = ["set_num", "name", "set_img_url"];
        return sets;
      default:
        return [];
    }
  }

  function search(data) {
    const startIndex = pg * rpg; // Calculate the starting index based on the current page and rows per page
    const endIndex = startIndex + rpg; // Calculate the ending index
    return data
      .filter((item) =>
        keys.some((key) => item[key]?.toLowerCase().includes(query))
      )
      .slice(startIndex, endIndex);
  }

  function count_search(data) {
    return data.filter((item) =>
      keys.some((key) => item[key]?.toLowerCase().includes(query))
    ).length;
  }

  function handleChangePage(event, newpage) {
    setpg(newpage);
  }

  function handleChangeRowsPerPage(event) {
    setrpg(parseInt(event.target.value, 10));
    setpg(0);
  }

  function handleFilterChange(event) {
    setSelectedOption(event.target.value);
    setQuery(""); // Reset the query when changing the filter
  }

  return (
    <div className="full">
      <div className="header">
        <div className="header-left-section">
          <h1>Dragonbricks Catalogue</h1>
          <button className="button-85">
            <Link to="/home">Home</Link>
          </button>
          <button className="button-85">
            <Link to="/chat">Chat</Link>
          </button>
          <button className="button-85" onClick={handleLogout}>
					  Logout
				  </button>
        </div>
        <div className="filter-box">
          <h1>Filter by:</h1>
          <FormGroup className="filter-radio-group">
            <FormControlLabel
              value="minifigs"
              control={
                <Checkbox
                  checked={selectedOption === 'minifigs'}
                  onChange={handleFilterChange}
                  value="minifigs"
                  color="default"
                  sx={{
                    color: '#C2E7DA',
                    '&.Mui-checked': {
                      color: '#BAFF29',
                    },
                    '&:hover': { color: '#BAFF29' }
                  }}
                />
              }
              label="Minifigures"
              className="filter-radio-label"
            />
            <FormControlLabel
              value="sets"
              control={
                <Checkbox
                  checked={selectedOption === 'sets'}
                  onChange={handleFilterChange}
                  value="sets"
                  color="default"
                  sx={{
                    color: '#C2E7DA',
                    '&.Mui-checked': {
                      color: '#BAFF29',
                    },
                    '&:hover': { color: '#BAFF29' }
                  }}
                />
              }
              label="Sets"
              className="filter-radio-label"
            />
            <FormControlLabel
              value="parts"
              control={
                <Checkbox
                  checked={selectedOption === 'parts'}
                  onChange={handleFilterChange}
                  value="parts"
                  color="default"
                  sx={{
                    color: '#C2E7DA',
                    '&.Mui-checked': {
                      color: '#BAFF29',
                    },
                    '&:hover': { color: '#BAFF29' }
                  }}
                />
              }
              label="Parts"
              className="filter-radio-label"
            />
          </FormGroup>
        </div>
      </div>

      <div className="app">
        <div className="right-section">
        <div className="search-container">
          <input
            className="search"
            placeholder="Search..." autofocus required
            onChange={(e) => setQuery(e.target.value.toLowerCase())
            }
          />
        </div>
          <Table data={search(getDataBySelectedOption())} selectedOption={selectedOption} />
        </div>
      </div>
      <div className="footer">
        <div className="footer-left-section">
              <h1>Explore More Results: </h1>
        </div>
        <div class="pagination-container">
          <TablePagination
            className="custom-table-pagination"
            slotProps={{
              select: {
                "aria-label": "rows per page",
              },
              actions: {
                showFirstButton: true,
                showLastButton: true,
              },
            }}
            rowsPerPageOptions={[12, 24, 36]}
            component="div"
            count={query ? count_search(getDataBySelectedOption()) : getDataBySelectedOption().length}
            rowsPerPage={rpg}
            page={pg}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Items per page"
          />
        </div>
      </div>
    </div>
  );


}
export default Catalogue;




  // return (
  //   <div>
  //     <div className="header">
  //       <h1>Catalogue</h1>
  //     </div>
  //     <div className="app">
  //       <div className="filter">
  //         <RadioGroup
  //           aria-label="filter"
  //           value={selectedOption}
  //           onChange={handleFilterChange}
  //           className="filter-radio-group"
  //         >
  //           <FormControlLabel
  //             value="minifigs"
  //             control={<Radio />}
  //             label="Minifigs"
  //             className="filter-radio-label"
  //           />
  //           <FormControlLabel
  //             value="sets"
  //             control={<Radio />}
  //             label="Sets"
  //             className="filter-radio-label"
  //           />
  //           <FormControlLabel
  //             value="parts"
  //             control={<Radio />}
  //             label="Parts"
  //             className="filter-radio-label"
  //           />
  //         </RadioGroup>
  //       </div>

  //       <input
  //         className="search"
  //         placeholder="Search..."
  //         onChange={(e) => setQuery(e.target.value.toLowerCase())}
  //       />
  //       <Table data={search(getDataBySelectedOption())} selectedOption = {selectedOption} />
  //       <TablePagination
  //         slotProps={{
  //           select: {
  //             "aria-label": "rows per page",
  //           },
  //           actions: {
  //             showFirstButton: true,
  //             showLastButton: true,
  //           },
  //         }}
  //         rowsPerPageOptions={[5, 10, 25]}
  //         component="div"
  //         count={query ? count_search(getDataBySelectedOption()) : getDataBySelectedOption().length}
  //         rowsPerPage={rpg}
  //         page={pg}
  //         onPageChange={handleChangePage}
  //         onRowsPerPageChange={handleChangeRowsPerPage}
  //       />
  //     </div>
  //   </div>
  // );








// const blue = {
//   200: '#A5D8FF',
//   400: '#3399FF',
// };

// const grey = {
//   50: '#F3F6F9',
//   100: '#E7EBF0',
//   200: '#E0E3E7',
//   300: '#CDD2D7',
//   400: '#B2BAC2',
//   500: '#A0AAB4',
//   600: '#6F7E8C',
//   700: '#3E5060',
//   800: '#2D3843',
//   900: '#1A2027',
// };
// const Root = styled('div')(
//   ({ theme }) => `
//   table {
//     font-family: IBM Plex Sans, sans-serif;
//     font-size: 0.875rem;
//     border-collapse: collapse;
//     width: 100%;
//   }

//   td,
//   th {
//     border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
//     text-align: left;
//     padding: 6px;
//   }

//   th {
//     background-color: ${theme.palette.mode === 'dark' ? grey[900] : grey[100]};
//   }
//   `,
// );

// const CustomTablePagination = styled(TablePagination)(
//   ({ theme }) => `
//   & .${classes.spacer} {
//     display: none;
//   }

//   & .${classes.toolbar}  {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 10px;

//     @media (min-width: 768px) {
//       flex-direction: row;
//       align-items: center;
//     }
//   }

//   & .${classes.selectLabel} {
//     margin: 0;
//   }

//   & .${classes.select}{
//     padding: 2px;
//     border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
//     border-radius: 50px;
//     background-color: transparent;

//     &:hover {
//       background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
//     }

//     &:focus {
//       outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
//     }
//   }

//   & .${classes.displayedRows} {
//     margin: 0;

//     @media (min-width: 768px) {
//       margin-left: auto;
//     }
//   }

//   & .${classes.actions} {
//     padding: 2px;
//     border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
//     border-radius: 50px;
//     text-align: center;
//   }

//   & .${classes.actions} > button {
//     margin: 0 8px;
//     border: transparent;
//     border-radius: 2px;
//     background-color: transparent;

//     &:hover {
//       background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
//     }

//     &:focus {
//       outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
//     }
//   }
//   `,
// );
// export default App;


///////////////////// SAVE FILES
// import { saveAs } from 'file-saver';
// function App() {
//   let API_KEY = ***************************;
//   async function getAllData() {
//     const minifig_urls = [];
//     const set_urls = [];
//     const part_urls = [];

//     function delay(ms) {
//       return new Promise(resolve => setTimeout(resolve, ms));
//     }
  
//     for (let i = 1; i <= 13; i++) {
//       minifig_urls.push(`https://rebrickable.com/api/v3/lego/minifigs/?key={API_KEY}&page=${i}&page_size=1000`);
//       delay(1000);
//     }
//     for (let i = 1; i <= 22; i++) {
//       set_urls.push(`https://rebrickable.com/api/v3/lego/sets/?key={API_KEY}&page=${i}&page_size=1000`);
//       delay(1000);
//     }
//     for (let i = 1; i <= 51; i++) {
//       part_urls.push(`https://rebrickable.com/api/v3/lego/parts/?key={API_KEY}&page=${i}&page_size=1000`);
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
//       `https://rebrickable.com/api/v3/lego/minifigs/?key={API_KEY}&page=1&page_size=1000`,
//       `https://rebrickable.com/api/v3/lego/minifigs/?key={API_KEY}&page=2&page_size=1000`,
//       `https://rebrickable.com/api/v3/lego/minifigs/?key={API_KEY}&page=3&page_size=1000`
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