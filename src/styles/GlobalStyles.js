import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#025DB3",
    secondary: "#9321d1",
  },
};

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Open Sans Condensed', sans-serif;
    }
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overflow-x: hidden;
      background: linear-gradient(to right top, #025db3, #2e6bbd, #4778c7, #5b87d0, #6e95da, #819ddf, #92a5e3, #a2aee8, #b3b3e8, #c2b8e7, #cfbee7, #dac5e7) no-repeat;
      background-size: cover;
      height: 100vh;
    }
    h1 {
      font-size: 65px;
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
  text-shadow: 2px 2px 3px ${theme.colors.secondary};
  color: whitesmoke;
`;
