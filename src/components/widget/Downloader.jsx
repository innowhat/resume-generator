import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Container from "../styles/Container";
import Button from "../styles/Button";
import Pdf from "../content/pdf/Main";

const Downloader = props => {
  return (
    <Container style={{ padding: "0", float: "right" }}>
      <div center>
        <Button inverse>
          <PDFDownloadLink
            document={
              <Pdf
                state={props.state}
                handleTheChange={props.handleTheChange}
                aboutItem={props.aboutItem}
                handleAboutItem={props.handleAboutItem}
                handleAddAboutItem={props.handleAddAboutItem}
                handleRemoveAboutItem={props.handleRemoveAboutItem}
                educationItem={props.educationItem}
                handleEducationItem={props.handleEducationItem}
                handleAddEducationItem={props.handleAddEducationItem}
                handleRemoveEducationItem={props.handleRemoveEducationItem}
                employmentItem={props.employmentItem}
                handleEmploymentItem={props.handleEmploymentItem}
                handleAddEmploymentItem={props.handleAddEmploymentItem}
                handleRemoveEmploymentItem={props.handleRemoveEmploymentItem}
                skillsItem={props.skillsItem}
                handleSkillsItem={props.handleSkillsItem}
                handleAddSkillsItem={props.handleAddSkillsItem}
                handleRemoveSkillsItem={props.handleRemoveSkillsItem}
                toolsItem={props.toolsItem}
                handleToolsItem={props.handleToolsItem}
                handleAddToolsItem={props.handleAddToolsItem}
                handleRemoveToolsItem={props.handleRemoveToolsItem}
                theme={props.theme}
              />
            }
            fileName="resume.pdf"
          >
            Download pdf
          </PDFDownloadLink>
        </Button>
      </div>
    </Container>
  );
};

export default Downloader;
