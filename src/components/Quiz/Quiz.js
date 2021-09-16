import { useState, useEffect } from "react";
import Question from "../Question/Question";
import Answers from "../Answers/Answers";
import { Score, TopWrapper, Hearts, Heart } from "./styled";
import { Spinner } from "../../styles/Spinner";
import heartImg from "../../assets/heart.png";

export default function Quiz({ isPlaying, difficulty }) {
  const [triviaData, setTriviaData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [stage, setStage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [lives, setLives] = useState([1, 2, 3]);

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

  //check for wrong & last question
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
      setLives((lives) => lives.filter((x) => x % lives.length));
      setQuestionIndex((questionIndex) => questionIndex + 1);
    }
  };

  useEffect(() => {
    if (lives.length === 0) isPlaying(false);
  }, [lives, isPlaying]);

  return (
    <>
      <TopWrapper>
        <Score>Score: {score}</Score>
        <Hearts>
          {lives?.length &&
            lives.map((live, index) => (
              <Heart key={index} src={heartImg} alt=""></Heart>
            ))}
        </Hearts>
      </TopWrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Question question={triviaData[questionIndex]?.question} />
          <Answers
            answers={triviaData[questionIndex]?.answers}
            checkAnswer={checkAnswer}
          />
        </>
      )}
      {/* <p>{triviaData[questionIndex]?.correct_answer}</p> */}
    </>
  );
}
