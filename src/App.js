import './App.css';
import Card from './Components/Card';
import { useState, useEffect } from 'react';
import Header from './Components/Header';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [resetGame, setResetGame] = useState(false);

  const updateGame = () => {
    updateScore(score + 1);
    flipArr();
  };

  const endGame = () => {
    updateScore(0);
    setResetGame(!resetGame);
  };

  useEffect(() => {
    console.log('use effect is called');
    if (resetGame === true) {
      placeCards(flipArr());
    }
  });

  const componentsArr = [
    {
      name: 'Finn',
      src: '',
      reset: resetGame
    },
    {
      name: 'Jake',
      src: '',
      reset: resetGame
    },
    {
      name: 'Bubblegum Princess',
      src: '',
      reset: resetGame
    },
    {
      name: 'Ice King',
      src: '',
      reset: resetGame
    },
    {
      name: 'Marceline',
      src: '',
      reset: resetGame
    },
    {
      name: 'Magic Man',
      src: '',
      reset: resetGame
    },
    {
      name: 'Gunter',
      src: '',
      reset: resetGame
    },
    {
      name: 'BMO',
      src: '',
      reset: resetGame
    },
    {
      name: 'Prismo',
      src: '',
      reset: resetGame
    },
    {
      name: 'Lumpy Space Princess',
      src: '',
      reset: resetGame
    },

    {
      name: 'Earl of Lemongrab',
      src: '',
      reset: resetGame
    },
    {
      name: 'Peppermint Butler',
      src: '',
      reset: resetGame
    }
  ];

  const flipArr = () => {
    const intArray = [...componentsArr];
    const length = intArray.length;

    for (let i = 0; i < length; i++) {
      const randomPosition = Math.floor((intArray.length - i) * Math.random());
      const randomItem = intArray.splice(randomPosition, 1);

      intArray.push(...randomItem);
    }
    return intArray;
  };

  const placeCards = (arr) => {
    let newArray = [];
    for (let j = 0; j < arr.length; j++) {
      const card = (
        <Card
          key={arr[j].name}
          name={arr[j].name}
          src={arr[j].src}
          updateGame={updateGame}
          endGame={endGame}
          reset={resetGame}
        />
      );
      newArray.push(card);
    }
    return newArray;
  };

  const updateScore = (num) => {
    setScore(num);
    num > bestScore ? setBestScore(num) : setBestScore(bestScore);
  };

  return (
    <div className='App'>
      <Header current={score} best={bestScore} />
      <div className='card-grid'>{placeCards(flipArr())}</div>
    </div>
  );
}

export default App;
