import React, { useState } from "react";
import "./styles.css";

function GuessTheNumber() {
  // Generate random number only ONCE at start
  const [targetNumber, setTargetNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  // Function to handle guess checking
  const handleGuess = () => {
    if (number === "" || number <= 0 || number > 100) {
      setMessage("Please enter a number between 1 and 100.");
      setNumber("");
      return;
    }

    setAttempts((prev) => prev + 1);

    if (parseInt(number) === targetNumber) {
      setMessage(
        `Congratulations! You guessed the number in ${attempts + 1} attempts.`
      );
    } else if (number < targetNumber) {
      setMessage("Too low! Try Again.");
    } else {
      setMessage("Too high! Try Again.");
    }

    setNumber("");
  };

  // Function to reset the game
  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1); // generate new number
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
        id="guess-input"
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div>
        <button onClick={handleGuess}>Check Guess</button>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default GuessTheNumber;
