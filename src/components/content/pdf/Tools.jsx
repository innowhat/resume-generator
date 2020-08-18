import React from "react";
import Title from "./Title";
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

const Tools = props => {
  const ToolBoxWrapper = styled.View`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: row;
    max-height: 100;
  `;

  const ToolBox = styled.Text`
    margin: 5px;
    padding: 5px;
    border: 1px solid ${props.props.theme === "dark" ? "#434343" : "#007991"};
    max-width: 23vw;
    font-size: 10;
    border-radius: 3;
    margin-bottom: "10px";
    margin-top: "10px";
  `;

  return (
    <View>
      {props.props.state.tools_header.length !== 0 && (
        <View style={{ borderBottomWidth: 1 }}>
          <Title>{props.props.state.tools_header}</Title>
        </View>
      )}
      <ToolBoxWrapper>
        {props.props.toolsItem.map((item, index) => {
          return (
            <View inverse key={item.id}>
              <ToolBox>{item.name}</ToolBox>
            </View>
          );
        })}
      </ToolBoxWrapper>
    </View>
  );
};

export default Tools;
