import React from "react";

import Title from "./Title";
import { Text, View } from "@react-pdf/renderer";

const Employment = props => {
  return (
    <View>
      {props.props.state.employment_header.length !== 0 && (
        <View style={{ borderBottomWidth: 1 }}>
          <Title>{props.props.state.employment_header}</Title>
        </View>
      )}
      {props.props.employmentItem.map((item, index) => {
        return (
          <View style={{ fontSize: 10 }}>
            <View key={item.id}>
              <View>
                <Text style={{ fontSize: 14, paddingTop: 10 }}>
                  {item.company}
                </Text>
              </View>
              <View
                style={{
                  fontSize: 8,
                  alignItems: "right"
                }}
              >
                <Text>{item.date}</Text>
              </View>
              <Text>{item.position}</Text>
              <Text>{item.details}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Employment;
