import { QuestionText, QuestionWrapper } from "./styled";
import { decode } from "html-entities";

export default function Question({ question }) {
  return (
    <QuestionWrapper>
      <QuestionText>{decode(question)}</QuestionText>
    </QuestionWrapper>
  );
}
