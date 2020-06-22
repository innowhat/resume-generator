import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        font-size: 16px;
        font-family: "Roboto", sans-serif;
        font-weight: 300; 
        background: #ccc;
        color:#888;
        height:100%
        }`;

export default GlobalStyle;
