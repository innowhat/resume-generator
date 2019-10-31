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

export const Head = styled.header`
  background: ${({ theme }) => theme.accent};
  color: #fff;
`;
