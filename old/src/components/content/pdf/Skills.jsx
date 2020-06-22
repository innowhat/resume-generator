import React from "react";
import Title from "./Title";
import { Text, View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

const Skills = props => {
  const SkillsLevel = styled.Text`
    margin: 0;
    margin-bottom: "10px";
    width: 100%;
    /*  height: "10px",*/
    text-align: right;
    background-color: ${props.props.theme === "dark" ? "#434343" : "#007991"};
    color: #fff;
    font-size: 10;
  `;

  return (
    <View>
      {props.props.state.skills_header.length !== 0 && (
        <View style={{ borderBottomWidth: 1 }}>
          <Title>{props.props.state.skills_header}</Title>
        </View>
      )}

      {props.props.skillsItem.map((skill, index) => (
        <View key={skill.id} style={{ width: `${skill.level}%` }}>
          <Text style={{ fontSize: "10" }}> {skill.type}:</Text>
          <SkillsLevel>{`${skill.level}%`}</SkillsLevel>
        </View>
      ))}
    </View>
  );
};

export default Skills;
