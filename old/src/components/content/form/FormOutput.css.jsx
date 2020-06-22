import styled from "styled-components";

export const WidgetWrapper = styled.div`
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  transform: rotate(90deg);
  a {
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    color: white;
    font-size: 20px;
  }
`;

export const FlexContainer = styled.div`
  margin: auto;
  max-width: rem-calc(1200);
  /* background: white; */
  @media screen and (min-width: 640px) {
    display: flex;
  }
`;

export const Aside = styled.aside`
  color: #fff;
  flex: 0 1 300px;
  background: ${({ theme }) => theme.primaryBackground};
`;
export const Content = styled.section`
  flex: 1;
  min-width: 300px;
`;

export const LeftContent = styled.div`
  hr {
    border: 0.5px solid ${({ theme }) => theme.primaryBackground};
    width: 100%;
  }
  p {
    color: ${({ theme }) => theme.secondaryColor};
    text-align: justify;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${({ theme }) => theme.secondaryColor};
  }
  span {
    /*display: block; */
  }
  ul {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

export const SkillsLevel = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  /*  height: "10px",*/
  text-align: right;
  background: ${({ theme }) => theme.primaryBackground};
  color: ${({ theme }) => theme.secondaryColor};
`;
