import { AnswerContainer, AnswerButton } from "./styled";
import { decode } from "html-entities";

export default function Answers({ answers, checkAnswer }) {
  return (
    <AnswerContainer>
      {answers.map((answer, index) => (
        <AnswerButton key={index} onClick={() => checkAnswer(answer)}>
          {decode(answer)}
        </AnswerButton>
      ))}
    </AnswerContainer>
  );
}
