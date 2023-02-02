import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json";

function Search() {
  // the state represents anything that we write on the input field

  const [searchterm, setsearchterm] = useState(" ");

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="search..."
          onChange={(event) => {
            setsearchterm(event.target.value);
          }}
        />

        {JsonData.filter((val) => {
          if (searchterm == "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchterm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div className="names" key={key}>
              <p>{val.first_name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Search;
