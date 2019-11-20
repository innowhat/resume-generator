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
    setAboutItem,
    setEducationItem,
    setEmploymentItem,
    setSkillsItem,
    setToolsItem,
    state,
    handleChange,

    aboutItem,
    handleAboutItem,

    employmentItem,
    handleEmploymentItem,

    educationItem,
    handleEducationItem,

    skillsItem,
    handleSkillsItem,

    toolsItem,
    handleToolsItem,
    handleTemplateChange,

    handleReset
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
              setSkillsItem={setSkillsItem}
              setToolsItem={setToolsItem}
              setEmploymentItem={setEmploymentItem}
              setEducationItem={setEducationItem}
              setAboutItem={setAboutItem}
              state={state}
              handleChange={handleChange}
              aboutItem={aboutItem}
              handleAboutItem={handleAboutItem}
              educationItem={educationItem}
              handleEducationItem={handleEducationItem}
              employmentItem={employmentItem}
              handleEmploymentItem={handleEmploymentItem}
              skillsItem={skillsItem}
              handleSkillsItem={handleSkillsItem}
              toolsItem={toolsItem}
              handleToolsItem={handleToolsItem}
              handleTemplateChange={handleTemplateChange}
              handleReset={handleReset}
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
              handleReset={handleReset}
            />
          </TabPanel>

          <TabPanel>
            <Downloader
              state={state}
              handleChange={handleChange}
              aboutItem={aboutItem}
              handleAboutItem={handleAboutItem}
              educationItem={educationItem}
              handleEducationItem={handleEducationItem}
              employmentItem={employmentItem}
              handleEmploymentItem={handleEmploymentItem}
              skillsItem={skillsItem}
              handleSkillsItem={handleSkillsItem}
              toolsItem={toolsItem}
              handleToolsItem={handleToolsItem}
              handleTemplateChange={handleTemplateChange}
              theme={theme}
            />
            <PDFViewer style={{ width: "100%", height: "800px" }}>
              <Pdf
                state={state}
                handleChange={handleChange}
                aboutItem={aboutItem}
                handleAboutItem={handleAboutItem}
                educationItem={educationItem}
                handleEducationItem={handleEducationItem}
                employmentItem={employmentItem}
                handleEmploymentItem={handleEmploymentItem}
                skillsItem={skillsItem}
                handleSkillsItem={handleSkillsItem}
                toolsItem={toolsItem}
                handleToolsItem={handleToolsItem}
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
