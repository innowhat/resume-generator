import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Container from "../styles/Container";
import Button from "../styles/Button";
import Pdf from "../content/pdf/Main";

const Downloader = props => {
  return (
    <Container style={{ padding: "0", float: "right" }}>
      <div center>
        <button inverse>
          <PDFDownloadLink
            document={
              <Pdf
                state={props.state}
                handleChange={props.handleChange}
                aboutItem={props.aboutItem}
                handleAboutItem={props.handleAboutItem}
                educationItem={props.educationItem}
                handleEducationItem={props.handleEducationItem}
                employmentItem={props.employmentItem}
                handleEmploymentItem={props.handleEmploymentItem}
                skillsItem={props.skillsItem}
                handleSkillsItem={props.handleSkillsItem}
                toolsItem={props.toolsItem}
                handleToolsItem={props.handleToolsItem}
                theme={props.theme}
              />
            }
            fileName="resume.pdf"
          >
            Download pdf
          </PDFDownloadLink>
        </button>
      </div>
    </Container>
  );
};

export default Downloader;
