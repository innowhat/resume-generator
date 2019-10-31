import styled from "@react-pdf/styled-components";

export const Main = styled.Page`
  padding: 0px;
  font-family: "Roboto";

  width: 960px;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const Photo = styled.Image`
  margin-bottom: 10px;
  width: 80px;
  height: 80px;
`;

export const LeftMainView = styled.View`
  color: #fff;
  background-color: #3a6073;
  flex-direction: column;
  width: 200px;
  padding: 10px;
  @media (max-width: 400px) {
    width: 100%;
  }
  @media (orientation: landscape) {
    width: 200px;
  }
`;

export const LeftAboutView = styled.View`
  text-align: center;
  margin-bottom: 20px;
`;

export const LeftItemView = styled.View`
  margin-top: 20px;
`;

export const LeftItemTitle = styled.Text`
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 800;
`;

export const RightMainView = styled.View`
  background-color: #fff;
  padding: 10px;
  padding-top: 35;
  padding-bottom: 35;
`;

export const RightItemView = styled.View`
  flex-direction: column;
  width: 370px;
`;
