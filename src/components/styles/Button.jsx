import React from "react";
import styled, { css } from "styled-components";
import Loader from "./Loader";

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: ${props =>
    props.secondary
      ? props => props.theme.secondaryBackground
      : props => props.theme.primaryBackground};
  color: #fff;
  padding: 10px 15px;
  font-size: ${props => {
    if (props.big) return "20px";
    if (props.mid) return "16px";
    return "12px";
  }};
  outline: none;
  border: none;
  cursor: pointer;
  margin: 5px;
  border: 1px solid
    ${props =>
      props.secondary
        ? props => props.theme.secondaryBackground
        : props => props.theme.primaryBackground};

  ${props => {
    return (
      props.inverse &&
      css`
        background-color: transparent;
        color: ${({ theme }) => theme.primaryBackground};
        a {
          color: ${({ theme }) => theme.primaryColor}!important;
        }
      `
    );
  }}
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.secondaryColor};
    transition: color 0.25s ease-in-out;
  }
`;

const Button = ({
  secondary,
  big,
  mid,
  inverse,
  loading,
  children,
  ...props
}) => {
  return (
    <StyledButton
      secondary={secondary}
      big={big}
      mid={mid}
      inverse={inverse}
      {...props}
    >
      {loading ? <Loader small white /> : children}
    </StyledButton>
  );
};

export default Button;
