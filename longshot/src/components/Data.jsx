import React, { useEffect, useState } from 'react';
import axios from "axios";



function Data() {
    

   

const [items, setItems] = useState();

    useEffect(()=>{
        // axios.get("data/data.json").then((response) => setItems(response));

       axios
         .get("data/data.json")
         .then((res) => setItems( res.data.raw_broadmatch_data ));
      //  axios
      //    .get("data/tableData.json")
      //    .then((res) => setItems([...res.data.raw_related_data]));
      //  axios
      //    .get("data/tableData.json")
      //    .then((res) => setItems([...res.data.raw_question_data]));

        
    },[])
  return (
    <>
      <div className="dataContainer">
        {console.log(items)}
        

        {/* {items ? items.map((item) => (
          <h1>{item}</h1>
        )) : <p>Loading...</p>} */}

        {/* {items?.map((item) => {
          return ( */}
            <div>
              {/* <h1>{item}</h1> */}

              <table>
                <tr>
                  <th>Keyword</th>
                  <th>Volume</th>
                  <th>KD</th>
                  <th>CPC</th>
                  <th>Competition</th>
                  <th>Number Of Results</th>
                </tr>
                {items?.map((item) => {
          return (
            <tr>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[item.length - 1]}</td>
              <td>{item[3]}</td>
              <td>{item[4]}</td>
              <td>{Math.floor((item[5])/1000000)}M</td>
            </tr>
          )})}
             
               </table>
            </div>
        
        
      </div>
    </>
  );
}

export default Data