import {
  GlobalStyle,
  QuizWrapper,
  theme,
  StartContainer,
  Title,
  Waves,
} from "./styles/GlobalStyles";
import Quiz from "./components/Quiz/Quiz";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { StartButton, DfcButton } from "./styles/GlobalStyles";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QuizWrapper>
          <Title>TriviaTime</Title>
          {isPlaying ? (
            <Quiz isPlaying={() => setIsPlaying()} difficulty={difficulty} />
          ) : (
            <StartContainer>
              <DfcButton onClick={() => setDifficulty("easy")}>Easy</DfcButton>
              <DfcButton onClick={() => setDifficulty("medium")}>
                Medium
              </DfcButton>
              <DfcButton onClick={() => setDifficulty("hard")}>Hard</DfcButton>
              <StartButton onClick={() => setIsPlaying(true)}>
                Start
              </StartButton>
            </StartContainer>
          )}
        </QuizWrapper>
        <Waves xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="0.5"
            d="M0,0L40,16C80,32,160,64,240,85.3C320,107,400,117,480,101.3C560,85,640,43,720,64C800,85,880,171,960,208C1040,245,1120,235,1200,224C1280,213,1360,203,1400,197.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </Waves>
      </ThemeProvider>
    </>
  );
}
