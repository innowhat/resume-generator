import React from "react";
import ThemeSelector from "../../widget/ThemeSelector";
import TemplateSelector from "../../widget/TemplateSelector";
import Heading from "../../styles/Heading";
import Flex from "../../styles/Flex";
import MiniCard from "../../styles/MiniCard";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-image: linear-gradient(to right, #16222a 0%, #3a6073 100%);
  height: auto;
  z-index: 1;
  opacity: 0.95;
  padding: 10px;
`;

const Spacer = styled.div`
  height: 180px;
  @media (max-width: 640px) {
    height: 340px;
  }
`;

const Header = props => {
  return (
    <div>
      <HeaderWrapper>
        <Heading h2 center style={{ color: "#fff" }}>
          RESUME AND COVER LETTER MAKER
        </Heading>
        <Heading h5 center style={{ color: "#fff" }}>
          Generate your resume or cover letter and download as PDF (A4 format).
        </Heading>
        <Flex style={{ width: "100%", justifyContent: "center" }}>
          <MiniCard
            style={{
              textAlign: "center",
              border: "1px solid #fff",
              width: "auto"
            }}
          >
            <span style={{ color: "#fff", paddingRight: "10px" }}>
              Select template
            </span>
            <TemplateSelector
              handleTemplateChange={props.handleTemplateChange}
            />
          </MiniCard>
          <MiniCard
            style={{
              textAlign: "center",
              border: "1px solid #fff",
              width: "auto"
            }}
          >
            <span style={{ color: "#fff", paddingRight: "10px" }}>
              Select theme
            </span>
            <ThemeSelector />
          </MiniCard>
        </Flex>
      </HeaderWrapper>
      <Spacer />
    </div>
  );
};

export default Header;
