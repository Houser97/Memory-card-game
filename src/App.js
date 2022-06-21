import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Gameboard from './components/gameboard';
import Winner from './components/winner';

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const openWinnerComponent = (score) => {
    if(score === 10){
      const winnerDiv = document.querySelector(".DIV-winner");
      winnerDiv.style.display = "flex";
      winnerDiv.style.opacity = 1;
    }
  }

  const closeWinnerComponent = () => {
    const winnerDiv = document.querySelector(".DIV-winner");
    winnerDiv.style.display = "none";
    winnerDiv.style.opacity = 0;
    setCurrentScore(0);
    setClickedCards([]);
    setBestScore(0)
  }

  const checkIfBestScoreIsBeaten = () => {
    if(currentScore > bestScore) setBestScore(currentScore);
  }

  const changeScore = (id) => {
    if(clickedCards.includes(id)){
      checkIfBestScoreIsBeaten();
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      setCurrentScore(currentScore + 1);
      setClickedCards([...clickedCards,id]);
    }
  }

useEffect(() => {
  openWinnerComponent(currentScore);
}, [currentScore]);  

  return (
    <div className="App">
      <div className='fullHeight'>
        <Header currentScore = {currentScore} bestScore = {bestScore}/>
        <Gameboard changeScore = {changeScore}/>
        <Winner closeWinnerComponent = {closeWinnerComponent} />
      </div>
      <Footer />
      
      
    </div>
  );
}

export default App;
