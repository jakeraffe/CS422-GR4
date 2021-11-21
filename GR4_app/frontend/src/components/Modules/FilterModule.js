import React, { useState } from "react";
import "./Styles/FilterPage.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import JSONDATA from "./MOCK_DATA.json";

const FilterModule = (props) => {
  const filter_array = props.array;
  // Work in progress. Trying to make this dynamic but failing so far
  const build_filter_list = () => {
    var pop_filter = "";
    const items = [];
    if (filter_array) {
      // for (const [key, value] of Object.entries(filter_array)) {
      //     const button = (
      //         <DropdownButton id="dropdown-basic-button" title={key}>

      //         </DropdownButton>
      //     );
      //     items.push(button);

      //   }
      return (
        <div className="row">
          <div className="col-xs-6 margins">
            <h3>Filter By:</h3>
          </div>
          <div className="col-xs-6 justify-content-center">
            {Object.keys(filter_array).map((item) => (
              <DropdownButton id="dropdown-basic-button" title={item}>
                {Object.values(item).map((values) => (
                  <Dropdown.Item href="#/action-1">{values}</Dropdown.Item>
                ))}
              </DropdownButton>
            ))}
          </div>
        </div>
      );
    }
  };
  return (
    <div className="row">
      <div className="col-xs-6 margins">
        <h3>Filter By:</h3>
      </div>
      <div className="col-xs-6 margins justify-content-center">
        <Dropdown>
          <Dropdown.Toggle className="filterBtn shadow-none">
            Filter 1
          </Dropdown.Toggle>
          <Dropdown.Menu className="filterMenu" title="Filter 1">
            <Dropdown.Item className="filterItem" href="#/action-1">
              Option 1
            </Dropdown.Item>
            <Dropdown.Item className="filterItem" href="#/action-2">
              Option 2
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="col-xs-6 margins justify-content-center">
        <Dropdown>
          <Dropdown.Toggle className="filterBtn">Filter 2</Dropdown.Toggle>
          <Dropdown.Menu className="filterMenu" title="Filter 2">
            <Dropdown.Item className="filterItem" href="#/action-1">
              Option 1
            </Dropdown.Item>
            <Dropdown.Item className="filterItem" href="#/action-2">
              Option 2
            </Dropdown.Item>
            <Dropdown.Item className="filterItem" href="#/action-2">
              Option 3
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="col-xs-6 margins justify-content-center">
        <Dropdown>
          <Dropdown.Toggle className="filterBtn">Filter 3</Dropdown.Toggle>
          <Dropdown.Menu className="filterMenu" title="Filter 3">
            <Dropdown.Item className="filterItem" href="#/action-1">
              Option 1
            </Dropdown.Item>
            <Dropdown.Item className="filterItem" href="#/action-2">
              Option 2
            </Dropdown.Item>
            <Dropdown.Item className="filterItem" href="#/action-2">
              Option 3
            </Dropdown.Item>
            <Dropdown.Item className="filterItem" href="#/action-2">
              Option 4
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
