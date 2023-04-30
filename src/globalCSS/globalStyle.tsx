import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: black;
    }

    .App {
        max-width: 1280px;
        text-align: center;
        margin: 0 auto;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`

export const Error = styled.h2`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`
