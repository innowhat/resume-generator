import React from "react";
import styled from "@react-pdf/styled-components";
import { Text, View } from "@react-pdf/renderer";
import Title from "./Title";

export const Header = styled.Text`
  border-bottom: 2px solid red;
  font-size: 14px;
  margin-bottom: 10px;
  text-transform: "uppercase";
`;

const Education = props => {
  return (
    <View>
      {props.props.state.education_header.length !== 0 && (
        <View style={{ borderBottomWidth: 1 }}>
          <Title>{props.props.state.education_header}</Title>
        </View>
      )}
      {props.props.educationItem.map((item, index) => {
        return (
          <View style={{ fontSize: 10 }}>
            <View key={item.id}>
              <View>
                <Text style={{ fontSize: 14, paddingTop: 10 }}>
                  {item.institution}
                </Text>
              </View>
              <View
                style={{
                  fontSize: 8,
                  alignItems: "right"
                }}
              >
                <Text>{item.period}</Text>
              </View>
              <Text>{item.degree}</Text>
              <Text>{item.info}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Education;
