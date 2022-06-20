import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Gameboard from './components/gameboard';

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Header currentScore = {currentScore} bestScore = {bestScore}/>
      <Gameboard />
      <Footer />
    </div>
  );
}

export default App;
