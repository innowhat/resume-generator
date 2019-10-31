import React from "react";
// eslint-disable-next-line
import styled, { css, keyframes } from "styled-components";

const animatedCss = css`
  opacity: 1;
  transform: translateY(0);
`;

const primaryCss = css`
  background-color: ${({ theme }) => theme.primaryBackground};
  color: ${({ theme }) => theme.primaryColor};
`;

const StyledCard = styled.div`
  width: ${props => (props.big ? "620px" : "400px")};
  padding: 10px;
  opacity: 0;
  transform: translateY(50px);
  transition: ${props => (props.doTrans ? "500ms all ease-in-out" : 0)};
  margin: ${props => (props.noMargin ? 0 : "10px")};
  box-shadow: ${props =>
    props.Shadow ? "0 5px 15px -5px rgba(0, 0, 0, 1)" : 0};
  border-radius: 5px;

  ${props => props.animated && animatedCss}
  ${props => props.primary && primaryCss}
`;

class MiniCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { animated: true };
      });
    }, this.props.delay);
  }

  render() {
    const {
      delay = 0,
      noAnimation,
      doTrans,
      primary,
      noMargin,
      big,
      Shadow,
      ...props
    } = this.props;
    return (
      <StyledCard
        animated={this.state.animated}
        delay={delay}
        primary={primary}
        noAnimation={noAnimation}
        doTrans={doTrans}
        big={big}
        noMargin={noMargin}
        Shadow={Shadow}
        {...props}
      />
    );
  }
}

export default MiniCard;
