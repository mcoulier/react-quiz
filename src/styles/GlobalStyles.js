import styled, { createGlobalStyle } from "styled-components";
import { Button } from "./Button";

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
    html {
      min-height: 100%;
    }
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overflow-x: hidden;
      min-height: 100%;
      background: linear-gradient(
      to right top,
      #025db3,
      #2e6bbd,
      #4778c7,
      #5b87d0,
      #6e95da,
      #819ddf,
      #92a5e3,
      #a2aee8,
      #b3b3e8,
      #c2b8e7,
      #cfbee7,
      #dac5e7
    )
    no-repeat;
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
  height: 100%;
  z-index: 5;
  position: relative;
`;

export const StartContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  & :last-child {
    margin-top: 20px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  text-shadow: 1px 3px 3px ${theme.colors.secondary};
  color: #674fd1;
`;

export const StartButton = styled(Button)`
  background: #674fd1;
  &:hover {
    background: #4530a3;
  }
  &:focus {
    border: none;
  }
`;

export const Waves = styled.svg`
  position: fixed;
  bottom: 0;
  z-index: -1;
  opacity: 0.3;

`;
