import React from "react";
import { Text, View } from "@react-pdf/renderer";

const Letter = props => {
  return (
    <View>
      <View>
        <Text>{props.props.state.letter_header}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 14, paddingBottom: 20 }}>
          {props.props.state.letter_position}{" "}
        </Text>
      </View>
      <View style={{ fontSize: 14, paddingBottom: 10 }}>
        <Text>{props.props.state.letter_date}</Text>
        <Text>{props.props.state.letter_recipient} </Text>
        <Text>{props.props.state.letter_address} </Text>
      </View>
      <View style={{ fontSize: 12, paddingBottom: 20 }}>
        <Text> {props.props.state.letter_message}</Text>
      </View>

      <View style={{ fontSize: 14 }}>
        <Text>{props.props.state.letter_sender}</Text>
      </View>
    </View>
  );
};

export default Letter;
