import { useState, useEffect } from "react";
import Question from "../Question/Question";
import Answer from "../Answers/Answer";
import { ScoreWrapper } from "./styled";
import { Spinner } from "../../styles/Spinner";

export default function Quiz({ isPlaying, difficulty }) {
  const [triviaData, setTriviaData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [stage, setStage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [lives, setLives] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(
          `https://opentdb.com/api.php?amount=10&$difficulty=${difficulty}`
        );
        response = await response.json();
        setTriviaData(
          response.results.map((q) => ({
            ...q,
            answers: [...q.incorrect_answers, q.correct_answer].sort(
              (a, b) => a > b
            ),
          }))
        );
        setIsLoading(false);
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  }, [stage, difficulty]);

  const checkAnswer = (answer) => {
    const correct = triviaData[questionIndex]?.correct_answer === answer;
    const lastQuestion = questionIndex + 1 >= triviaData.length;
    if (correct && lastQuestion) {
      setQuestionIndex(0);
      setScore((score) => score + 1);
      setStage((stage) => stage + 1);
      setTriviaData([]);
    } else if (correct) {
      setQuestionIndex((questionIndex) => questionIndex + 1);
      setScore((score) => score + 1);
    } else {
      setLives((lives) => lives - 1);
      setQuestionIndex((questionIndex) => questionIndex + 1);
    }
  };

  useEffect(() => {
    if (lives === 0) isPlaying(false);
  }, [lives, isPlaying]);

  return (
    <>
      <ScoreWrapper>
        <h2>Score: {score}</h2>
        <h2>Lives: {lives}</h2>
      </ScoreWrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Question
            question={triviaData[questionIndex]?.question}
            index={questionIndex}
          />
          <Answer
            answers={triviaData[questionIndex]?.answers}
            checkAnswer={checkAnswer}
          />
        </>
      )}
      <p>{triviaData[questionIndex]?.correct_answer}</p>
    </>
  );
}
