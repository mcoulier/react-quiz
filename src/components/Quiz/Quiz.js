import { useState, useEffect } from "react";
import Question from "../Question/Question";
import Answers from "../Answers/Answers";
import { Score, TopWrapper, Heart, Feedback, TopItem } from "./styled";
import { Spinner } from "../../styles/Spinner";
import heartImg from "../../assets/heart.png";
import okIcon from "../../assets/okIcon.png";
import wrongIcon from "../../assets/wrongIcon.png";

export default function Quiz({ isPlaying, difficulty }) {
  const [triviaData, setTriviaData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [stage, setStage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [lives, setLives] = useState([1, 2, 3]);
  const [answers, setAnswers] = useState([]);
  const [feedback, setFeedback] = useState(null);

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
      setFeedback(okIcon);
    } else {
      setLives((lives) => lives.filter((x) => x % lives.length));
      setFeedback(wrongIcon);
    }
    if (lastQuestion) {
      setStage((stage) => stage + 1);
      setQuestionIndex(0);
    }
  };

  return (
    <>
      <TopWrapper>
        <TopItem>
          <Score>Score: {score}</Score>
        </TopItem>
        <TopItem>{feedback && <Feedback src={feedback} alt="" />}</TopItem>
        <TopItem>
          {lives?.length &&
            lives.map((live, index) => (
              <Heart key={index} src={heartImg} alt="" />
            ))}
        </TopItem>
      </TopWrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Question question={triviaData[questionIndex]?.question} />
          <Answers answers={answers} checkAnswer={checkAnswer} />
        </>
      )}
    </>
  );
}
