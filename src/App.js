import {
  GlobalStyle,
  QuizWrapper,
  theme,
  StartContainer,
  Title,
} from "./styles/GlobalStyles";
import Quiz from "./components/Quiz/Quiz";
import { useState } from "react";
import { Button } from "./styles/Button";
import { ThemeProvider } from "styled-components";

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
              <Button onClick={() => setDifficulty("easy")}>Easy</Button>
              <Button onClick={() => setDifficulty("medium")}>Medium</Button>
              <Button onClick={() => setDifficulty("hard")}>Hard</Button>
              <Button onClick={() => setIsPlaying(true)}>Start</Button>
            </StartContainer>
          )}
        </QuizWrapper>
      </ThemeProvider>
    </>
  );
}
