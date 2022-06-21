import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Gameboard from './components/gameboard';

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const checkIfBestScoreIsBeate = () => {
    if(currentScore > bestScore) setBestScore(currentScore);
  }

  const changeScore = (id) => {
    if(clickedCards.includes(id)){
      checkIfBestScoreIsBeate();
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      setCurrentScore(currentScore + 1);
      setClickedCards([...clickedCards,id]);
    }
  }

  return (
    <div className="App">
      <Header currentScore = {currentScore} bestScore = {bestScore}/>
      <Gameboard changeScore = {changeScore}/>
      <Footer />
    </div>
  );
}

export default App;
