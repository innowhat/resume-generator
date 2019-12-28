import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useTheme } from "../../context/ThemeContext";
import Heading from "../../styles/Heading";
import Card from "../../styles/Card";
import Flex from "../../styles/Flex";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PDFViewer } from "@react-pdf/renderer";
import Container from "../../styles/Container";
import Pdf from "../pdf/Main";
import FormInput from "../form/FormInput";
import FormOutput from "../form/FormOutput";
import Header from "./Header";
import Footer from "./Footer";
import Downloader from "../../widget/Downloader";

export default props => {
  const { theme } = useTheme();
  return (
    // Pass on our props
    <div>
      <Menu {...props} width={"40%"}>
        <a className="menu-item" href="/">
          {" "}
        </a>

        <FormInput
          setSkillsItem={props.setSkillsItem}
          setToolsItem={props.setToolsItem}
          setEmploymentItem={props.setEmploymentItem}
          setEducationItem={props.setEducationItem}
          setAboutItem={props.setAboutItem}
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
          handleTemplateChange={props.handleTemplateChange}
          handleReset={props.handleReset}
          theme={theme}
        />
      </Menu>
    </div>
  );
};
