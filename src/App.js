import { useState, useEffect } from "react";

function App() {
  const [triviaData, setTriviaData] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [difficulty, setDifficulty] = useState("medium");
  const [amount, setAmount] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [questionIndex, setQuestionindex] = useState(0);

  const fetchData = async () => {
    try {
      let response = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&$difficulty=${difficulty}&type=multiple`
      );
      response = await response.json();
      setTriviaData(response.results);
    } catch (err) {
      alert(err);
    }
  };

  const formatQuestions = (data) => {
    setQuestions(
      data.map((q) => ({
        ...q,
        answers: [...q.incorrect_answers, q.correct_answer].sort(
          (a, b) => a > b
        ),
      }))
    );
  };

  const checkAnswer = (answer) => {
    if (answer === questions[questionIndex]?.correct_answer) {
      setQuestionindex((questionIndex) => questionIndex + 1);
    } else {
      setGameOver(true);
      setQuestionindex(0);
    }
  };

  function startGame() {
    setGameOver(false);
    fetchData();
    formatQuestions(triviaData);
  }

  useEffect(() => {
    startGame();
  }, []);

  return (
    <>
      {!gameOver && (
        <>
          <p>Streak: {questionIndex}</p>
          <p>{questions[questionIndex]?.question}</p>
          <ul>
            {questions[questionIndex]?.answers.map((answer, index) => (
              <button key={index} onClick={() => checkAnswer(answer)}>
                {answer}
              </button>
            ))}
          </ul>
        </>
      )}
      <button onClick={startGame}>Start</button>
    </>
  );
}

export default App;
