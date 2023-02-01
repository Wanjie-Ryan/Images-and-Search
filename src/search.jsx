import React from 'react'
import JsonData from "./MOCK_DATA.json";

function Search() {






  return (
    <>
    

      <div className="search">


        <input type="text" placeholder="search..." />
        {JsonData.map((val, key)=>{

          return <div><p>{val.first_name}</p></div>

        })}




      </div>
    



    </>
  );
}



    
  

export default Search