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

  const handleTheChange = evt => {
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

  const handleAddAboutItem = () => {
    setAboutItem(prevFields => [
      ...prevFields,
      { title: "Item", details: "details" }
    ]);
  };

  const handleAddEducationItem = () => {
    setEducationItem(prevEdu => [
      ...prevEdu,
      {
        institution: "University2",
        period: "01/01/2011 - 01/01/2012",
        degree: "Bachelor",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquam eligendi"
      }
    ]);
  };

  const handleAddEmploymentItem = () => {
    setEmploymentItem(prevEmp => [
      ...prevEmp,
      {
        company: "Data Science Inc1",
        date: "01/01/2011 - date",
        position: "Frontend developer",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquam eligendi perferendis, sequi, nihil eos saepe eum libero harum, exercitationem voluptatum..."
      }
    ]);
  };

  const handleAddSkillsItem = () => {
    setSkillsItem(prevSkill => [...prevSkill, { type: "HTML", level: 99 }]);
  };

  const handleAddToolsItem = () => {
    setToolsItem(prevTool => [...prevTool, { name: "VsCode" }]);
  };

  //HANDLE REMOVAL

  const handleRemoveAboutItem = i => {
    const values = [...aboutItem];
    values.splice(i, 1);
    setAboutItem(values);
  };

  const handleRemoveEducationItem = i => {
    const values = [...educationItem];
    values.splice(i, 1);
    setEducationItem(values);
  };

  const handleRemoveEmploymentItem = i => {
    const values = [...employmentItem];
    values.splice(i, 1);
    setEmploymentItem(values);
  };

  const handleRemoveSkillsItem = i => {
    const values = [...skillsItem];
    values.splice(i, 1);
    setSkillsItem(values);
  };

  const handleRemoveToolsItem = i => {
    const values = [...toolsItem];
    values.splice(i, 1);
    setToolsItem(values);
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

    handleTemplateChange,
    handleReset
  };
};

export default useHook;
