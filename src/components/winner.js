import '../styles/winner.css';

const Winner = (props) => {
    return(
        <div className="DIV-winner">
            <div className="winner">You win!</div>
            <button className="new-game" onClick={props.closeWinnerComponent} >New Game</button>
        </div>
    )
}

export default Winner;