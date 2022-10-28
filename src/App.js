import './App.css';
import Card from './Components/Card';
import { useState } from 'react';
import Header from './Components/Header';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [resetGame, setResetGame] = useState(false);

  const updateGame = () => {
    updateScore(score + 1);
    flipCards();
  };

  const endGame = () => {
    updateScore(0);
    setResetGame(true);
    flipCards();
  };

  const componentsArr = [
    <Card
      key='Finn'
      name='Finn'
      src=''
      updateGame={updateGame}
      endGame={endGame}
      reset={resetGame}
    />,
    <Card
      key='Jake'
      name='Jake'
      src=''
      updateGame={updateGame}
      endGame={endGame}
      reset={resetGame}
    />,
    <Card
      key='Bubblegum Princess'
      name='Bubblegum Princess'
      src=''
      updateGame={updateGame}
      endGame={endGame}
      reset={resetGame}
    />,
    <Card
      key='Ice King'
      name='Ice King'
      src=''
      updateGame={updateGame}
      endGame={endGame}
      reset={resetGame}
    />,
    <Card
      key='Marceline'
      name='Marceline'
      src=''
      updateGame={updateGame}
      endGame={endGame}
      reset={resetGame}
    />,
    <Card
      key='Magic Man'
      name='Magic Man'
      src=''
      updateGame={updateGame}
      endGame={endGame}
      reset={resetGame}
    />,
    <Card
      key='Gunter'
      name='Gunter'
      src=''
      updateGame={updateGame}
      endGame={endGame}
      reset={resetGame}
    />,
    <Card
      key='BMO'
      name='BMO'
      src=''
      updateGame={updateGame}
      endGame={endGame}
      reset={resetGame}
    />,
    <Card
      key='Prismo'
      name='Prismo'
      src=''
      updateGame={updateGame}
      endGame={endGame}
      reset={resetGame}
    />,
    <Card
      key='Lumpy Space Princess'
      name='Lumpy Space Princess'
      src=''
      updateGame={updateGame}
      endGame={endGame}
      reset={resetGame}
    />,
    <Card
      key='Earl of Lemongrab'
      name='Earl of Lemongrab'
      src=''
      updateGame={updateGame}
      endGame={endGame}
      reset={resetGame}
    />
  ];

  const flipCards = () => {
    const newArray = [...componentsArr];
    const length = newArray.length;

    for (let i = 0; i < length; i++) {
      const randomPosition = Math.floor((newArray.length - i) * Math.random());
      const randomItem = newArray.splice(randomPosition, 1);

      newArray.push(...randomItem);
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
      <div className='gridContainer'>{flipCards()}</div>
    </div>
  );
}

export default App;
