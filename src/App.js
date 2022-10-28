import './App.css';
import Card from './Components/Card';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import BMO from './Assets/BMO.webp';
import Finn from './Assets/Finn_the_Human.webp';
import Gunter from './Assets/gunter.webp';
import IceKing from './Assets/iceking.webp';
import Jake from './Assets/jake.jpg';
import Lemon from './Assets/lemon.jpg';
import LSP from './Assets/lsp_pin.jpg';
import MagicMan from './Assets/magicman.webp';
import Marceline from './Assets/marceline.jpg';
import PeppermintButler from './Assets/peppermintButler.jpg';
import PrincessBG from './Assets/princess-bubblegum-costume.webp';
import Prismo from './Assets/Prismo.webp';

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
      src: Finn,
      reset: resetGame
    },
    {
      name: 'Jake',
      src: Jake,
      reset: resetGame
    },
    {
      name: 'Bubblegum Princess',
      src: PrincessBG,
      reset: resetGame
    },
    {
      name: 'Ice King',
      src: IceKing,
      reset: resetGame
    },
    {
      name: 'Marceline',
      src: Marceline,
      reset: resetGame
    },
    {
      name: 'Magic Man',
      src: MagicMan,
      reset: resetGame
    },
    {
      name: 'Gunter',
      src: Gunter,
      reset: resetGame
    },
    {
      name: 'BMO',
      src: BMO,
      reset: resetGame
    },
    {
      name: 'Prismo',
      src: Prismo,
      reset: resetGame
    },
    {
      name: 'Lumpy Space Princess',
      src: LSP,
      reset: resetGame
    },

    {
      name: 'Earl of Lemongrab',
      src: Lemon,
      reset: resetGame
    },
    {
      name: 'Peppermint Butler',
      src: PeppermintButler,
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
