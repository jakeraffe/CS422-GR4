import React, { useState } from "react";
import "./Styles/FilterPage.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import JSONDATA from "./MOCK_DATA.json";

const FilterModule = (props) => {
  const filter_array = props.array;
  console.log()
  const filter_1_title = Object.keys(filter_array)[0];
  const filter_2_title = Object.keys(filter_array)[1];
  const filter_3_title = Object.keys(filter_array)[2];
  var filter_1_value_array = ""
  var filter_1_option_1 = ""
  var filter_1_option_2 = ""
  var filter_1_option_3 = ""
  
  var filter_2_value_array = ""
  var filter_1_option_1 = ""
  var filter_2_option_2 = ""
  var filter_2_option_3 = ""

  var filter_3_value_array = ""
  var filter_1_option_1 = ""
  var filter_3_option_2 = ""
  var filter_3_option_3 = ""

  if (filter_1_title){ 
    filter_1_value_array = filter_array[filter_1_title]
    console.log("Filter 1 array:", filter_1_value_array);
    console.log("title 1:", filter_1_title);

    var filter_1_option_1 = filter_array[filter_1_title][0]
    var filter_1_option_2 = filter_array[filter_1_title][1]
    var filter_1_option_3 = filter_array[filter_1_title][2]
  }
  if (filter_2_title){
    filter_2_value_array = filter_array[filter_2_title]
    console.log("title 2:", filter_2_title);
    console.log("Filter 2 array:", filter_2_value_array);

    var filter_2_option_1 = filter_array[filter_2_title][0]
    var filter_2_option_2 = filter_array[filter_2_title][1]
    var filter_2_option_3 = filter_array[filter_2_title][2]
  }
  if (filter_3_title){
    filter_3_value_array = filter_array[filter_3_title]
    console.log("title 3:", filter_3_title);
    console.log("Filter 3 array:", filter_3_value_array);
    var filter_3_option_1 = filter_array[filter_3_title][0]
    var filter_3_option_2 = filter_array[filter_3_title][1]
    // var filter_3_option_3 = filter_array[filter_3_title][2]
  }



  
  // Work in progress. Trying to make this dynamic but failing so far
  // const build_filter_list = () => {
  //   var pop_filter = "";
  //   const items = [];
  //   if (filter_array) {
  //     // for (const [key, value] of Object.entries(filter_array)) {
  //     //     const button = (
  //     //         <DropdownButton id="dropdown-basic-button" title={key}>

  //     //         </DropdownButton>
  //     //     );
  //     //     items.push(button);

  //     //   }
  //     return (
  //       <div className="row">
  //         <div className="col-xs-6 margins">
  //           <h3>Filter By:</h3>
  //         </div>
  //         <div className="col-xs-6 justify-content-center">
  //           {Object.keys(filter_array).map((item) => (
  //             <DropdownButton id="dropdown-basic-button" title={item}>
  //               {Object.values(item).map((values) => (
  //                 <Dropdown.Item href="#/action-1">{values}</Dropdown.Item>
  //               ))}
  //             </DropdownButton>
  //           ))}
  //         </div>
  //       </div>
  //     );
  //   }
  // };
  return (
    <div className="row">
      <div className="col-xs-6 margins">
        <h3>Filter By:</h3>
      </div>
      <div className="col-xs-6 margins justify-content-center">
        <Dropdown>
          <Dropdown.Toggle className="filterBtn shadow-none">
            {filter_1_title}
          </Dropdown.Toggle>
          <Dropdown.Menu className="filterMenu" title={filter_1_title}>
            <Dropdown.Item className="filterItem" href="#/action-1">
              {filter_1_option_1}
            </Dropdown.Item>
            <Dropdown.Item className="filterItem" href="#/action-2">
              {filter_1_option_2}
            </Dropdown.Item>
            <Dropdown.Item className="filterItem" href="#/action-2">
              {filter_1_option_3}
            </Dropdown.Item>
          </Dropdown.Menu>
          
        </Dropdown>
      </div>
      <div className="col-xs-6 margins justify-content-center">
        <Dropdown>
          <Dropdown.Toggle className="filterBtn shadow-none">
          {filter_2_title}
          </Dropdown.Toggle>
          <Dropdown.Menu className="filterMenu" title={filter_2_title}>
            <Dropdown.Item className="filterItem" href="#/action-1">
            {filter_2_option_1}
            </Dropdown.Item>
            <Dropdown.Item className="filterItem" href="#/action-2">
            {filter_2_option_2}
            </Dropdown.Item>
            <Dropdown.Item className="filterItem" href="#/action-2">
            {filter_2_option_3}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="col-xs-6 margins justify-content-center">
        <Dropdown>
        <Dropdown.Toggle className="filterBtn shadow-none">
        {filter_3_title}
        </Dropdown.Toggle>
          <Dropdown.Menu className="filterMenu" title="Filter 3">
            <Dropdown.Item className="filterItem" href="#/action-1">
              {filter_3_option_1}
            </Dropdown.Item>
            <Dropdown.Item className="filterItem" href="#/action-2">
            {filter_3_option_2}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
export default FilterModule;

// filter_array = {"Platform":["Twitter", "Instagram", "Facebook", "Youtube"], "Age-Range": ["0-16", "17-25", "26-35"]}
// pop_filter += <DropdownButton id="dropdown-basic-button" title={}
