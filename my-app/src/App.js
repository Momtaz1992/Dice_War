import React, { useState } from 'react';
import dice1 from './images/dice1.png';
import dice2 from './images/dice2.png';
import dice3 from './images/dice3.png';
import dice4 from './images/dice4.png';
import dice5 from './images/dice5.png';
import dice6 from './images/dice6.png';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function App() {
  const [randomNum1, setRandomNum1] = useState(1);
  const [randomNum2, setRandomNum2] = useState(1);
  const [winner, setWinner] = useState('');

  const rollDice = () => {
    const newRandomNum1 = Math.floor(Math.random() * 6) + 1;
    const newRandomNum2 = Math.floor(Math.random() * 6) + 1;
    setRandomNum1(newRandomNum1);
    setRandomNum2(newRandomNum2);

    if (newRandomNum1 > newRandomNum2) {
      setWinner('Player 1');
    } else if (newRandomNum2 > newRandomNum1) {
      setWinner('Player 2');
    } else {
      setWinner('It\'s a tie');
    }
  };

  return (
    <>
    <div className="App">
      <h2>
        Dice War
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-dice-geek-culture-flaticons-lineal-color-flat-icons-5.png"
          alt="external-dice-geek-culture-flaticons-lineal-color-flat-icons-5"
        />
      </h2>

      <div className="main-container">
        <div className="players">
          {/* Player 1 */}
          <div className="player-1">
            <h3>Player 1</h3>
            <img src={diceImages[randomNum1 - 1]} alt={`dice-${randomNum1}`} id="p1" />
          </div>

          {/* Player 2 */}
          <div className="player-2">
            <h3>Player 2</h3>
            <img src={diceImages[randomNum2 - 1]} alt={`dice-${randomNum2}`} id="p2" />
          </div>
        </div>

        {/* Display Result */}
        <div id="result">Winner: {winner}</div>

        <button onClick={rollDice}>Roll The Dice</button>
      </div>
      </div>
    </>
  );
}

export default App;
