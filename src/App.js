import { GlobalStyle, QuizWrapper } from "./styles/GlobalStyles";
import Quiz from "./components/Quiz/Quiz";
import { useState } from "react";
import { Button } from "./styles/Button";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <QuizWrapper>
      <GlobalStyle />
      {isPlaying ? (
        <Quiz isPlaying={() => setIsPlaying()} />
      ) : (
        <Button onClick={() => setIsPlaying(true)}>Start</Button>
      )}
    </QuizWrapper>
  );
}

export default App;
