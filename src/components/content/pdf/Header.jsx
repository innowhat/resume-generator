import React from "react";
import { Text, View } from "@react-pdf/renderer";

const Header = props => {
  return (
    <View style={{ paddingBottom: 10 }}>
      <Text style={{ fontSize: 40 }}>{props.props.state.main_title}</Text>
      <Text style={{ fontSize: 20 }}>{props.props.state.main_subtitle}</Text>
      <Text style={{ fontSize: 14 }}>{props.props.state.main_intro}</Text>
    </View>
  );
};

export default Header;
