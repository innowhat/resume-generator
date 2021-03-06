import React from "react";
import Flex from "../../styles/Flex";
import Card from "../../styles/Card";
import Heading from "../../styles/Heading";
import Button from "../../styles/Button";

import { FormWrapper, GroupInput, Input, Textarea } from "./FormInput.css";

const FormInput = props => {
  console.log(props.state);
  return (
    <Flex style={{ background: "#fff" }}>
      <div></div>

      <Card style={{ width: "100%", textAlign: "center" }}>
        <Heading h3 center style={{ color: "#3a6073" }}>
          Enter your information and check Preview tab for output
        </Heading>
        <small>Note: default data will be restored if page is refreshed</small>{" "}
        <br />
        <Button inverse onClick={props.handleReset}>
          Restore default
        </Button>
      </Card>
      <Card noMargin>
        <FormWrapper>
          <h3>About info section</h3>
          <GroupInput>
            <Input
              type="link"
              name="about_picture"
              placeholder="Enter picture link"
              value={props.state.about_picture}
              onChange={props.handleTheChange}
            />
            <Input
              type="text"
              name="about_name"
              placeholder="Enter text"
              value={props.state.about_name}
              onChange={props.handleTheChange}
            />
            <br />
            <Input
              type="text"
              name="about_profession"
              placeholder="Enter profession"
              value={props.state.about_profession}
              onChange={props.handleTheChange}
            />
            <br />
            <Textarea
              name="about_summary"
              type="text"
              placeholder="Enter summary"
              value={props.state.about_summary}
              onChange={props.handleTheChange}
              style={{ minHeight: "100px" }}
            />
          </GroupInput>
        </FormWrapper>
        {props.aboutItem !== undefined && (
          <FormWrapper>
            <h4>Profile section</h4>
            <GroupInput>
              {props.aboutItem.map((item, index) => {
                return (
                  <div key={index}>
                    <Input
                      type="button"
                      value=" X"
                      onClick={() => props.handleRemoveAboutItem(index)}
                      style={{
                        float: "right",
                        color: "red",
                        fontSize: "16px",
                        fontWeight: "bold"
                      }}
                    />

                    <br />
                    <Input
                      id={index}
                      type="text"
                      name="title"
                      placeholder="Enter header"
                      value={item.title}
                      onChange={props.handleAboutItem}
                    />
                    <br />
                    <Input
                      id={index}
                      name="item1"
                      type="text"
                      placeholder="Enter item1"
                      value={item.item1}
                      onChange={props.handleAboutItem}
                    />
                    <Input
                      id={index}
                      name="item2"
                      type="text"
                      placeholder="Enter item2"
                      value={item.item2}
                      onChange={props.handleAboutItem}
                    />
                    <Input
                      id={index}
                      name="item3"
                      type="text"
                      placeholder="Enter item3"
                      value={item.item3}
                      onChange={props.handleAboutItem}
                    />
                  </div>
                );
              })}
            </GroupInput>
            <Input
              type="button"
              value="+ Add items"
              onClick={props.handleAddAboutItem}
              style={{ backgroundColor: "#ddd", color: "green" }}
            />
          </FormWrapper>
        )}
        <FormWrapper>
          <h3>QR code section</h3>
          <GroupInput>
            <Input
              type="link"
              name="about_qr_code"
              placeholder="Enter QR code link"
              value={props.state.about_qr_code}
              onChange={props.handleTheChange}
            />
          </GroupInput>
        </FormWrapper>
      </Card>
      <Card big noMargin>
        {props.state.main_title !== undefined && (
          <FormWrapper>
            <h3>Header section</h3>
            <GroupInput>
              <br />
              <Input
                type="text"
                name="main_title"
                placeholder="Enter main title"
                value={props.state.main_title}
                onChange={props.handleTheChange}
              />
              <br />
              <Input
                type="text"
                name="main_subtitle"
                placeholder="Enter main sub title"
                value={props.state.main_subtitle}
                onChange={props.handleTheChange}
              />
              <br />
              <Textarea
                type="text"
                name="main_intro"
                placeholder="Enter main introductory text - optional"
                value={props.state.main_intro}
                onChange={props.handleTheChange}
                style={{ minHeight: "100px" }}
              />
            </GroupInput>
          </FormWrapper>
        )}
        {props.educationItem !== undefined && (
          <FormWrapper>
            <h4>Education section</h4>
            <Input
              type="text"
              name="education_header"
              placeholder="Enter section header"
              value={props.state.education_header}
              onChange={props.handleTheChange}
            />
            <GroupInput>
              {props.educationItem.map((item, index) => {
                return (
                  <div key={index}>
                    <Input
                      type="button"
                      value=" X"
                      onClick={() => props.handleRemoveEducationItem(index)}
                      style={{
                        float: "right",
                        color: "red",
                        fontSize: "16px",
                        fontWeight: "bold"
                      }}
                    />
                    <br />
                    <Input
                      id={index}
                      type="text"
                      name="institution"
                      placeholder="Enter institution"
                      value={item.institution}
                      onChange={props.handleEducationItem}
                    />
                    <br />
                    <Input
                      id={index}
                      type="text"
                      name="period"
                      placeholder="Enter date"
                      value={item.period}
                      onChange={props.handleEducationItem}
                    />{" "}
                    <br />
                    <Input
                      id={index}
                      type="text"
                      name="degree"
                      placeholder="Enter degree"
                      value={item.degree}
                      onChange={props.handleEducationItem}
                    />{" "}
                    <br />
                    <Textarea
                      id={index}
                      name="info"
                      type="text"
                      placeholder="More info"
                      value={item.info}
                      onChange={props.handleEducationItem}
                      style={{ minHeight: "100px" }}
                    />
                  </div>
                );
              })}
            </GroupInput>
            <Input
              type="button"
              value="+ Add education"
              onClick={props.handleAddEducationItem}
              style={{ backgroundColor: "#ddd", color: "green" }}
            />
          </FormWrapper>
        )}

        {props.employmentItem !== undefined && (
          <FormWrapper>
            <h4>Employment section</h4>
            <Input
              type="text"
              name="employment_header"
              placeholder="Enter section header"
              value={props.state.employment_header}
              onChange={props.handleTheChange}
            />

            <GroupInput>
              {props.employmentItem.map((item, index) => {
                return (
                  <div key={index}>
                    <Input
                      type="button"
                      value=" X"
                      onClick={() => props.handleRemoveEmploymentItem(index)}
                      style={{
                        float: "right",
                        color: "red",
                        fontSize: "16px",
                        fontWeight: "bold"
                      }}
                    />
                    <br />
                    <Input
                      id={index}
                      type="text"
                      name="company"
                      placeholder="Enter company"
                      value={item.company}
                      onChange={props.handleEmploymentItem}
                    />
                    <br />
                    <Input
                      id={index}
                      type="text"
                      name="date"
                      placeholder="Enter date"
                      value={item.date}
                      onChange={props.handleEmploymentItem}
                    />{" "}
                    <br />
                    <Input
                      id={index}
                      type="text"
                      name="position"
                      placeholder="Enter position"
                      value={item.position}
                      onChange={props.handleEmploymentItem}
                    />{" "}
                    <br />
                    <Textarea
                      id={index}
                      name="details"
                      type="text"
                      placeholder="Enter details"
                      value={item.details}
                      onChange={props.handleEmploymentItem}
                      style={{ minHeight: "100px" }}
                    />
                  </div>
                );
              })}
            </GroupInput>
            <Input
              type="button"
              value="+ Add employment"
              onClick={props.handleAddEmploymentItem}
              style={{ backgroundColor: "#ddd", color: "green" }}
            />
          </FormWrapper>
        )}

        {props.skillsItem !== undefined && (
          <FormWrapper>
            <h4>Skills section</h4>
            <Input
              type="text"
              name="skills_header"
              placeholder="Enter section header"
              value={props.state.skills_header}
              onChange={props.handleTheChange}
            />
            <GroupInput>
              {props.skillsItem.map((item, index) => {
                return (
                  <div key={index}>
                    <Input
                      type="button"
                      value=" X"
                      onClick={() => props.handleRemoveSkillsItem(index)}
                      style={{
                        float: "right",
                        color: "red",
                        fontSize: "16px",
                        fontWeight: "bold"
                      }}
                    />
                    <br />
                    <Input
                      id={index}
                      type="text"
                      name="type"
                      placeholder="Enter skills type eg HTML"
                      value={item.type}
                      onChange={props.handleSkillsItem}
                    />
                    <br />
                    <Input
                      id={index}
                      type="number"
                      name="level"
                      placeholder="Enter level, 1 - 100"
                      value={item.level}
                      onChange={props.handleSkillsItem}
                      min="1"
                      max="100"
                    />
                  </div>
                );
              })}
            </GroupInput>
            <Input
              type="button"
              value="+ Add skills"
              onClick={props.handleAddSkillsItem}
              style={{ backgroundColor: "#ddd", color: "green" }}
            />
          </FormWrapper>
        )}
        {props.toolsItem !== undefined && (
          <FormWrapper>
            <h4>Tools section</h4>
            <Input
              type="text"
              name="tools_header"
              placeholder="Enter section header"
              value={props.state.tools_header}
              onChange={props.handleTheChange}
            />
            <GroupInput>
              {props.toolsItem.map((item, index) => {
                return (
                  <div key={index}>
                    <Input
                      type="button"
                      value=" X"
                      onClick={() => props.handleRemoveToolsItem(index)}
                      style={{
                        float: "right",
                        color: "red",
                        fontSize: "16px",
                        fontWeight: "bold"
                      }}
                    />
                    <br />
                    <Input
                      id={index}
                      type="text"
                      name="name"
                      placeholder="Enter tool type eg VSCODE"
                      value={item.name}
                      onChange={props.handleToolsItem}
                    />
                  </div>
                );
              })}
            </GroupInput>
            <Input
              type="button"
              value="+ Add tool"
              onClick={props.handleAddToolsItem}
              style={{ backgroundColor: "#ddd", color: "green" }}
            />
          </FormWrapper>
        )}

        {props.state.letter_header !== undefined && (
          <FormWrapper>
            <h4>Cover letter section</h4>
            <span>
              <Input
                type="text"
                name="letter_header"
                placeholder="Enter label"
                value={props.state.letter_header}
                onChange={props.handleTheChange}
              />
            </span>

            <GroupInput>
              <br />
              <Input
                type="text"
                name="letter_position"
                placeholder="Enter title"
                value={props.state.letter_position}
                onChange={props.handleTheChange}
              />
              <br />
              <Input
                type="text"
                name="letter_date"
                placeholder="Enter date"
                value={props.state.letter_date}
                onChange={props.handleTheChange}
              />
              <br />
              <Input
                type="text"
                name="letter_recipient"
                placeholder="Enter recipient name"
                value={props.state.letter_recipient}
                onChange={props.handleTheChange}
              />
              <br />
              <Input
                type="text"
                name="letter_address"
                placeholder="Enter recipient address"
                value={props.state.letter_address}
                onChange={props.handleTheChange}
              />
              <br />
              <Textarea
                name="letter_message"
                type="text"
                placeholder="Enter message"
                value={props.state.letter_message}
                onChange={props.handleTheChange}
                style={{ minHeight: "100px" }}
              />

              <Input
                type="text"
                name="letter_sender"
                placeholder="Enter senders name"
                value={props.state.letter_sender}
                onChange={props.handleTheChange}
              />
            </GroupInput>
          </FormWrapper>
        )}
      </Card>
    </Flex>
  );
};

export default FormInput;
