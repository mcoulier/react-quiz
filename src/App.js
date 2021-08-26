import { useState, useEffect } from "react";

function App() {
  const [triviaData, setTriviaData] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [difficulty, setDifficulty] = useState("medium");
  const [amount, setAmount] = useState(5);
  const [gameOver, setGameOver] = useState(false);

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
        answers: [...q.incorrect_answers, q.correct_answer],
      }))
    );
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
      {questions && (
        <>
          <p>{questions[0]?.question}</p>
          <ul>
            {questions[0]?.answers.map((q) => (
              <button>{q}</button>
            ))}
          </ul>
          <p>{questions[0]?.correct_answer}</p>
        </>
      )}
      <button onClick={startGame}>Start</button>
    </>
  );
}

export default App;
