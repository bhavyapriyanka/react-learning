import React, { useState } from "react";
// import "./styles.css";

function GuessTheNumber() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  // Function to handle guess checking
  const handleGuess = () => {
    if (number > 100 || number <= 0 || number === "") {
      setMessage("Please enter a number between 1 and 100.");
      setNumber("");
      return;
    }
    setAttempts((a) => a + 1);

    if (number == randomNumber) {
      setMessage(
        `Congratulations! You guessed the number in ${attempts} attempts.`
      );
    } else if (number < randomNumber) {
      setMessage("Too low! Try Again.");
    } else if (number > randomNumber) {
      setMessage("Too High! Try Again.");
    }
    setNumber("");
  };

  // Function to reset the game
  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setNumber("");
    setAttempts(0);
    setMessage("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <div>
        <button onClick={handleGuess}>Check Guess </button>
        <button onClick={resetGame}>Reset</button>
      </div>

      <p>{message}</p>
    </div>
  );
}

export default GuessTheNumber;
