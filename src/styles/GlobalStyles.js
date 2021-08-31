import styled, { createGlobalStyle } from "styled-components";

export const theme = {};

export const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Raleway', sans-serif;
      overflow-x: hidden;
    }
    button {
      font-family: 'Raleway', sans-serif;
    }
`;

export const QuizWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
`;