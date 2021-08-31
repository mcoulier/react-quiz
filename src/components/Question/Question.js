import {
  QuestionText,
  QuestionWrapper,
  AnswerButton,
  AnswerContainer,
} from "./styled";

export default function Question({ question, answers, checkAnswer }) {
  return (
    <QuestionWrapper>
      <QuestionText>{question}</QuestionText>
      <AnswerContainer>
        {answers?.map((answer, index) => (
          <AnswerButton key={index} onClick={() => checkAnswer(answer)}>
            {answer}
          </AnswerButton>
        ))}
      </AnswerContainer>
    </QuestionWrapper>
  );
}
