import React from "react";
import { slide as Menu } from "react-burger-menu";
import SideBar from "./Sidebar";
import "./demo.css";
import { useTheme } from "../../context/ThemeContext";

import "react-tabs/style/react-tabs.css";
import { PDFViewer } from "@react-pdf/renderer";
import Container from "../../styles/Container";
import Flex from "../../styles/Flex";
import Card from "../../styles/Card";

import useHook from "../../hooks/useHook";
import Pdf from "../pdf/Main";
import FormInput from "../form/FormInput";
import FormOutput from "../form/FormOutput";
import Header from "./Header";
import Footer from "./Footer";
import Downloader from "../../widget/Downloader";
import Heading from "../../styles/Heading";

const Demo = () => {
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
    <div id="Res">
      <SideBar
        pageWrapId={"page-wrap"}
        outerContainerId={"Res"}
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
      <div id="page-wrap">
        <Container full small>
          <Flex>
            <Card style={{ width: "40%", color: "#fff" }}>
              <br />
              <br />
              <br />
              <Header />
            </Card>
            <Card style={{ width: "50%" }}>
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
            </Card>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default Demo;
