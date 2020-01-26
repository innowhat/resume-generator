import React from "react";
import Flex from "../../styles/Flex";
import styled from "styled-components";
import Card from "../../styles/Card";

const FooterWrapper = styled.footer`
  top: 0;
  left: 0;
  width: 100%;
  background-image: linear-gradient(to right, #16222a 0%, #3a6073 100%);

  height: auto;
  z-index: 1;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
  }

  li a:hover {
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Flex style={{ justifyContent: "center" }}>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/innowhat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/innowhat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <li>
              <a
                href="https://twitter.com/innowhat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </li>
        </ul>

        <Card style={{ width: "100%", textAlign: "center" }}>
          <small>Copyright © 2020 innowhat.com</small>
        </Card>
      </Flex>
    </FooterWrapper>
  );
};

export default Footer;
