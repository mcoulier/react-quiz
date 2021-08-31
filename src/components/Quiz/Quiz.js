import { useState, useEffect } from "react";
import Question from "../Question/Question";

export default function Quiz({ isPlaying }) {
  const [triviaData, setTriviaData] = useState([]);
  const [difficulty, setDifficulty] = useState("medium");
  const [amount, setAmount] = useState(5);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [stage, setStage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  console.log(isPlaying);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(
          `https://opentdb.com/api.php?amount=${amount}&$difficulty=${difficulty}&type=multiple`
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
  }, [stage, amount, difficulty]);

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
      setQuestionIndex(0);
      setScore(0);
      isPlaying(false);
    }
  };

/*   function startGame() {
    setQuestionIndex(0);
    setScore(0);
    setStage(1);
  } */

  return (
    <>
      <p>Streak: {score}</p>
      {!isLoading && (
        <Question
          question={triviaData[questionIndex]?.question}
          answers={triviaData[questionIndex]?.answers}
          checkAnswer={checkAnswer}
        />
      )}
      {/*       {!triviaData.length && <button onClick={startGame}>Start</button>}
       */}{" "}
      <p>{triviaData[questionIndex]?.correct_answer}</p>
    </>
  );
}
