import { useState } from 'react';
import './App.css';
import Header from './components/header';

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Header currentScore = {currentScore} bestScore = {bestScore}/>
    </div>
  );
}

export default App;
