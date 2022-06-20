import '../styles/header.css'

const Header = (props) =>{

    const {currentScore, bestScore} =props;

    return(
        <header>
            <div className="title-page">Memory Card Game</div>
            <div className="scores">
                <div className="current-score score">Current score: {currentScore}</div>
                <div className="best-score score">Best score: {bestScore}</div>
            </div>
        </header>
    )
}

export default Header;