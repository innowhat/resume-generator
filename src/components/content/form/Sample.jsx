import React, { useEffect, useState, useReducer } from "react";

import resume from "../../../data/resume.json";

const Sample = () => {
  const [state, setState] = useState({ countries: [] });
  console.log("STATE", state);

  const addCountry = () => {
    setState({
      countries: [...state.countries, ""]
    });
  };

  const handleChange = (e, index, item) => {
    if (item.country) {
      state.countries[index] = e.target.value;
      setState({ countries: state.countries });
    }
  };

  const handleRemove = index => {
    state.countries.splice(index, 1);
    setState({ countries: state.countries });
  };

  return (
    <div>
      <h1>COUNTRIES</h1>
      {state.countries.map((country, index) => {
        return (
          <div key={index}>
            <input
              value={country}
              onChange={e => handleChange(e, index, country)}
            />
            <button onClick={() => handleRemove(index)}> Remove</button>
          </div>
        );
      })}
      <button onClick={addCountry}>Add</button>

      <div>
        {state.countries.map((country, index) => {
          return (
            <div key={index}>
              <li>{country}</li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sample;
