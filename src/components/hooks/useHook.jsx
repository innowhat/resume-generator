import { useState } from "react";
import resume from "../../data/resume.json";
import letter from "../../data/letter.json";

const useHook = () => {
  const [state, setState] = useState(resume);
  const [aboutItem, setAboutItem] = useState(resume.about_item);
  const [educationItem, setEducationItem] = useState(resume.education_item);
  const [employmentItem, setEmploymentItem] = useState(resume.employment_item);
  const [skillsItem, setSkillsItem] = useState(resume.skills_item);
  const [toolsItem, setToolsItem] = useState(resume.tools_item);

  const handleTemplateChange = e => {
    console.log("template changed: " + e.target.value);
    if (e.target.value === "letter") {
      setState(letter);
      setAboutItem(letter.about_item);
      setEducationItem(letter.education_item);
      setEmploymentItem(letter.employment_item);
      setSkillsItem(letter.skills_item);
      setToolsItem(letter.tools_item);
    } else {
      setState(resume);
      setAboutItem(resume.about_item);
      setEducationItem(resume.education_item);
      setEmploymentItem(resume.employment_item);
      setSkillsItem(resume.skills_item);
      setToolsItem(resume.tools_item);
    }
  };

  const handleChange = evt => {
    console.log(evt.target.name);
    console.log(evt.target.value);
    const { name, value } = evt.target;
    setState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // FIELD SECTION
  const handleAboutItem = event => {
    const fieldInfo = [...aboutItem];
    fieldInfo[event.target.id][event.target.name] = event.target.value;
    setAboutItem(fieldInfo);
  };

  const handleEducationItem = event => {
    const fieldInfo = [...educationItem];
    fieldInfo[event.target.id][event.target.name] = event.target.value;
    setEducationItem(fieldInfo);
  };

  const handleEmploymentItem = event => {
    const fieldInfo = [...employmentItem];
    fieldInfo[event.target.id][event.target.name] = event.target.value;
    setEmploymentItem(fieldInfo);
  };

  const handleSkillsItem = event => {
    const fieldInfo = [...skillsItem];
    fieldInfo[event.target.id][event.target.name] = event.target.value;
    setSkillsItem(fieldInfo);
  };

  const handleToolsItem = event => {
    const fieldInfo = [...toolsItem];
    fieldInfo[event.target.id][event.target.name] = event.target.value;
    setToolsItem(fieldInfo);
  };

  //Reset to default value

  const handleReset = () => {
    console.log("Reset form");
    setState(resume);
    setAboutItem(resume.about_item);
    setEducationItem(resume.education_item);
    setEmploymentItem(resume.employment_item);
    setSkillsItem(resume.skills_item);
    setToolsItem(resume.tools_item);
    setSkillsItem(resume.skills_item);
  };

  return {
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
  };
};

export default useHook;
