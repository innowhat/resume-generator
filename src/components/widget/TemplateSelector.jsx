import React from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 200px;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-right: 15px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const TemplateSelector = props => {
  return (
    <Select onChange={props.handleTemplateChange}>
      <option value="resume">Resume</option>
      <option value="letter">Letter</option>
    </Select>
  );
};

export default TemplateSelector;
