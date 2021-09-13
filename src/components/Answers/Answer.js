import { AnswerContainer, AnswerButton } from "../Answers/styled";
import { decode } from "html-entities";

export default function Answer({ answers, checkAnswer }) {
  return (
    <AnswerContainer>
      {answers?.map((answer, index) => (
        <AnswerButton key={index} onClick={() => checkAnswer(answer)}>
          {decode(answer)}
        </AnswerButton>
      ))}
    </AnswerContainer>
  );
}
