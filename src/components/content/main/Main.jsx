import React from "react";
import { useTheme } from "../../context/ThemeContext";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PDFViewer } from "@react-pdf/renderer";
import Container from "../../styles/Container";
import useHook from "../../hooks/useHook";
import Pdf from "../pdf/Main";
import FormInput from "../form/FormInput";
import FormOutput from "../form/FormOutput";
import Header from "./Header";
import Footer from "./Footer";
import Downloader from "../../widget/Downloader";

const Main = () => {
  const {
    state,
    handleTheChange,

    aboutItem,
    handleAboutItem,
    handleAddAboutItem,
    handleRemoveAboutItem,

    employmentItem,
    handleEmploymentItem,
    handleAddEmploymentItem,
    handleRemoveEmploymentItem,

    educationItem,
    handleEducationItem,
    handleAddEducationItem,
    handleRemoveEducationItem,

    skillsItem,
    handleSkillsItem,
    handleAddSkillsItem,
    handleRemoveSkillsItem,

    toolsItem,
    handleToolsItem,
    handleAddToolsItem,
    handleRemoveToolsItem,
    handleTemplateChange
  } = useHook();

  const { theme } = useTheme();

  return (
    <React.Fragment>
      <Header handleTemplateChange={handleTemplateChange} theme={theme} />
      <Container>
        <Tabs defaultIndex={1}>
          <TabList>
            <Tab>Editor</Tab>
            <Tab>Preview</Tab>
            <Tab>PDF</Tab>
          </TabList>
          <TabPanel>
            <FormInput
              state={state}
              handleTheChange={handleTheChange}
              aboutItem={aboutItem}
              handleAboutItem={handleAboutItem}
              handleAddAboutItem={handleAddAboutItem}
              handleRemoveAboutItem={handleRemoveAboutItem}
              educationItem={educationItem}
              handleEducationItem={handleEducationItem}
              handleAddEducationItem={handleAddEducationItem}
              handleRemoveEducationItem={handleRemoveEducationItem}
              employmentItem={employmentItem}
              handleEmploymentItem={handleEmploymentItem}
              handleAddEmploymentItem={handleAddEmploymentItem}
              handleRemoveEmploymentItem={handleRemoveEmploymentItem}
              skillsItem={skillsItem}
              handleSkillsItem={handleSkillsItem}
              handleAddSkillsItem={handleAddSkillsItem}
              handleRemoveSkillsItem={handleRemoveSkillsItem}
              toolsItem={toolsItem}
              handleToolsItem={handleToolsItem}
              handleAddToolsItem={handleAddToolsItem}
              handleRemoveToolsItem={handleRemoveToolsItem}
              handleTemplateChange={handleTemplateChange}
              theme={theme}
            />
          </TabPanel>
          <TabPanel>
            <FormOutput
              state={state}
              aboutItem={aboutItem}
              employmentItem={employmentItem}
              educationItem={educationItem}
              skillsItem={skillsItem}
              toolsItem={toolsItem}
              theme={theme}
            />
          </TabPanel>

          <TabPanel>
            <Downloader
              state={state}
              handleTheChange={handleTheChange}
              aboutItem={aboutItem}
              handleAboutItem={handleAboutItem}
              handleAddAboutItem={handleAddAboutItem}
              handleRemoveAboutItem={handleRemoveAboutItem}
              educationItem={educationItem}
              handleEducationItem={handleEducationItem}
              handleAddEducationItem={handleAddEducationItem}
              handleRemoveEducationItem={handleRemoveEducationItem}
              employmentItem={employmentItem}
              handleEmploymentItem={handleEmploymentItem}
              handleAddEmploymentItem={handleAddEmploymentItem}
              handleRemoveEmploymentItem={handleRemoveEmploymentItem}
              skillsItem={skillsItem}
              handleSkillsItem={handleSkillsItem}
              handleAddSkillsItem={handleAddSkillsItem}
              handleRemoveSkillsItem={handleRemoveSkillsItem}
              toolsItem={toolsItem}
              handleToolsItem={handleToolsItem}
              handleAddToolsItem={handleAddToolsItem}
              handleRemoveToolsItem={handleRemoveToolsItem}
              handleTemplateChange={handleTemplateChange}
              theme={theme}
            />
            <PDFViewer style={{ width: "100%", height: "800px" }}>
              <Pdf
                state={state}
                handleTheChange={handleTheChange}
                aboutItem={aboutItem}
                handleAboutItem={handleAboutItem}
                handleAddAboutItem={handleAddAboutItem}
                handleRemoveAboutItem={handleRemoveAboutItem}
                educationItem={educationItem}
                handleEducationItem={handleEducationItem}
                handleAddEducationItem={handleAddEducationItem}
                handleRemoveEducationItem={handleRemoveEducationItem}
                employmentItem={employmentItem}
                handleEmploymentItem={handleEmploymentItem}
                handleAddEmploymentItem={handleAddEmploymentItem}
                handleRemoveEmploymentItem={handleRemoveEmploymentItem}
                skillsItem={skillsItem}
                handleSkillsItem={handleSkillsItem}
                handleAddSkillsItem={handleAddSkillsItem}
                handleRemoveSkillsItem={handleRemoveSkillsItem}
                toolsItem={toolsItem}
                handleToolsItem={handleToolsItem}
                handleAddToolsItem={handleAddToolsItem}
                handleRemoveToolsItem={handleRemoveToolsItem}
                handleTemplateChange={handleTemplateChange}
                theme={theme}
              />
            </PDFViewer>
          </TabPanel>
        </Tabs>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Main;
