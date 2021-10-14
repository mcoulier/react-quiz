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
  const [answers, setAnswers] = useState([]);

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

  useEffect(() => {
    setAnswers(triviaData[questionIndex]?.answers);
  }, [triviaData, questionIndex]);

  useEffect(() => {
    if (lives.length === 0) isPlaying(false);
  }, [lives, isPlaying]);

  const checkAnswer = (answer) => {
    const correct = triviaData[questionIndex]?.correct_answer === answer;
    const lastQuestion = questionIndex + 1 >= triviaData.length;
    setQuestionIndex((questionIndex) => questionIndex + 1);
    setAnswers([]);
    if (correct) {
      setScore((score) => score + 1);
    } else {
      setLives((lives) => lives.filter((x) => x % lives.length));
    }
    if (lastQuestion) {
      setStage((stage) => stage + 1);
      setQuestionIndex(0);
    }
  };

  return (
    <>
      <TopWrapper>
        <Score>Score: {score}</Score>
        <Hearts>
          {lives?.length &&
            lives.map((live, index) => (
              <Heart key={index} src={heartImg} alt="" />
            ))}
        </Hearts>
      </TopWrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Question question={triviaData[questionIndex]?.question} />
          <Answers answers={answers} checkAnswer={checkAnswer} />
        </>
      )}
      {<p>{triviaData[questionIndex]?.correct_answer}</p>}
    </>
  );
}
