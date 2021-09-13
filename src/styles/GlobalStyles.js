import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#0E76F5",
    secondary: "#D95B29",
    tertiary: "#5A3D2B",
    accent: "#75C8AE",
    alert: "#cc322b",
  },
};

export const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Raleway', sans-serif;
      overflow-x: hidden;
      background-color: ${theme.colors.primary};
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

export const StartContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;  
`;
