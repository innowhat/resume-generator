import React from "react";
import Flex from "../../styles/Flex";
import Card from "../../styles/Card";
import Button from "../../styles/Button";

import { FlexContainer, Aside, Content, SkillsLevel } from "./FormOutput.css";

const Output = props => {
  return (
    <React.Fragment>
      <FlexContainer>
        <Card primary style={{ color: "#fff" }} id="leftSide">
          <Card style={{ width: "100%", textAlign: "center" }}>
            {props.state.about_picture.length !== 0 && (
              <img
                src={props.state.about_picture}
                alt="welcome"
                style={{ width: "100px", height: "100px" }}
              />
            )}
            <h2>{props.state.about_name}</h2>
            <h4>{props.state.about_profession}</h4>
            <p style={{ whiteSpace: "pre-line" }}>
              {props.state.about_summary}
            </p>
          </Card>
          {props.aboutItem !== undefined && (
            <Card style={{ width: "100%" }}>
              <div>
                {props.aboutItem.map((item, index) => {
                  return (
                    <div key={index}>
                      <h3>{item.title}</h3>
                      <ul>
                        <li>{item.item1}</li>
                        <li>{item.item2}</li>
                        <li>{item.item3}</li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </Card>
          )}
          <Card style={{ width: "100%", textAlign: "center" }}>
            {props.state.about_qr_code.length !== 0 && (
              <img
                src={props.state.about_qr_code}
                alt="QR code"
                style={{ width: "100px", height: "100px" }}
              />
            )}
          </Card>
        </Card>
        <Card big id="rightSide">
          <Card style={{ width: "100%" }}>
            <h1 style={{ fontSize: 50 }}> {props.state.main_title}</h1>
            <h2>{props.state.main_subtitle}</h2>
            <h3 style={{ whiteSpace: "pre-line" }}>{props.state.main_intro}</h3>
          </Card>

          {props.educationItem !== undefined && (
            <Card style={{ width: "100%" }}>
              <h2> {props.state.education_header}</h2>
              {props.state.education_header.length !== 0 && <hr />}
              <ul>
                {props.educationItem.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <h3>
                        <span>{item.institution} </span>
                        <span style={{ float: "right", fontSize: "10px" }}>
                          {item.period}
                        </span>
                        <br />
                        <span>{item.degree}</span>
                      </h3>
                      <p style={{ whiteSpace: "pre-line" }}>{item.info}</p>
                    </li>
                  );
                })}
              </ul>
            </Card>
          )}

          {props.employmentItem !== undefined && (
            <Card style={{ width: "100%" }}>
              <h2> {props.state.employment_header}</h2>
              {props.state.employment_header.length !== 0 && <hr />}
              <ul>
                {props.employmentItem.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <h3>
                        <span>{item.company} </span>
                        <span style={{ float: "right", fontSize: "10px" }}>
                          {item.date}
                        </span>
                        <br />
                        <span>{item.position} </span>
                      </h3>
                      <p style={{ whiteSpace: "pre-line" }}>{item.details}</p>
                    </li>
                  );
                })}
              </ul>
            </Card>
          )}
          {props.skillsItem !== undefined && (
            <Card style={{ width: "100%" }}>
              <h2> {props.state.skills_header}</h2>
              {props.state.skills_header.length !== 0 && <hr />}
              {props.skillsItem.map((skill, index) => (
                <div key={skill.id} style={{ width: `${skill.level}%` }}>
                  {skill.type}:<SkillsLevel>{`${skill.level}%`}</SkillsLevel>
                </div>
              ))}
            </Card>
          )}
          {props.toolsItem !== undefined && (
            <Card style={{ width: "100%" }}>
              <h2> {props.state.tools_header}</h2>
              {props.state.tools_header.length !== 0 && <hr />}
              <span>
                {props.toolsItem.map((item, index) => {
                  return (
                    <Button inverse key={item.id}>
                      {item.name}
                    </Button>
                  );
                })}
              </span>
            </Card>
          )}
          <Card style={{ width: "100%" }}>
            <h1> {props.state.letter_header}</h1>
            <h3>
              <span style={{ fontSize: "10px", float: "right" }}>
                {props.state.letter_date}
              </span>
              <span>{props.state.letter_recipient} </span>
              <br />
              <span>{props.state.letter_address} </span>
              <br />
              <span>{props.state.letter_position} </span> <br />
            </h3>
            <p> {props.state.letter_title}</p>
            <p style={{ whiteSpace: "pre-line" }}>
              {" "}
              {props.state.letter_message}
            </p>
            <h3>{props.state.letter_sender}</h3>
          </Card>
        </Card>
      </FlexContainer>
    </React.Fragment>
  );
};

export default Output;
