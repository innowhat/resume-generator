import React from "react";
import List, { Item } from "./List";
import styled from "@react-pdf/styled-components";
import { Text, View, Font, Document, StyleSheet } from "@react-pdf/renderer";

import {
  Main,
  Container,
  LeftAboutView,
  LeftItemView,
  LeftItemTitle,
  Photo,
  RightMainView,
  RightItemView
} from "./Main.css";

import Header from "./Header";
import Education from "./Education";
import Employment from "./Employment";
import Skills from "./Skills";
import Tools from "./Tools";
import Letter from "./Letter";

Font.register({
  family: "Roboto",
  src:
    "https://innowhat.github.io/resume-generator/fonts/roboto/Roboto-Regular.ttf"
});

const styles = StyleSheet.create({
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey"
  }
});

const PdfDocument = props => {
  console.log("pdf props", props.theme);

  const LeftMainView = styled.View`
    color: #fff;
    background-color: ${props.theme === "dark" ? "#434343" : "#007991"};
    flex-direction: column;
    width: 200px;
    padding: 10px;
    @media (max-width: 400px) {
      width: 100%;
    }
    @media (orientation: landscape) {
      width: 200px;
    }
  `;

  return (
    <Document>
      <Main {...props}>
        <Container>
          <LeftMainView>
            <LeftAboutView>
              <View style={{ alignSelf: "center" }}>
                <Photo source={props.state.about_picture} />
              </View>
              <Text style={{ fontSize: 20, padding: 5 }}>
                {props.state.about_name}
              </Text>
              <Text style={{ fontSize: 16, padding: 5 }}>
                {props.state.about_profession}
              </Text>
              <Text style={{ fontSize: 10 }}>{props.state.about_summary}</Text>
            </LeftAboutView>
            {props.aboutItem !== undefined && (
              <LeftItemView>
                {props.aboutItem.map((item, index) => {
                  return (
                    <View>
                      <LeftItemTitle>{item.title}</LeftItemTitle>
                      <List key={index}>
                        <Item>{item.item1}</Item>
                        <Item>{item.item2}</Item>
                        <Item>{item.item3}</Item>
                      </List>
                    </View>
                  );
                })}
              </LeftItemView>
            )}
            <View style={{ alignSelf: "center", paddingTop: "20px" }} break>
              <Photo source={props.state.about_qr_code} />
            </View>
          </LeftMainView>
          <RightMainView>
            <RightItemView>
              <View>
                <Header props={props} />
              </View>
              <View>
                <View>
                  {props.educationItem !== undefined && (
                    <Education props={props} />
                  )}
                  {props.employmentItem !== undefined && (
                    <Employment props={props} />
                  )}
                </View>
                <View break>
                  {props.skillsItem !== undefined && <Skills props={props} />}
                </View>
                <View break>
                  {props.toolsItem !== undefined && <Tools props={props} />}
                </View>

                <View break>
                  <Letter props={props} />
                </View>
              </View>
            </RightItemView>
          </RightMainView>
        </Container>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Main>
    </Document>
  );
};

export default PdfDocument;
