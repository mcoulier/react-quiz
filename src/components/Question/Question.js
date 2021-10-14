import { QuestionText } from "./styled";
import { decode } from "html-entities";

export default function Question({ question }) {
  return <QuestionText>{decode(question)}</QuestionText>;
}
