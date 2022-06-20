import '../styles/gameboard.css';
import Card from './card';

const Gameboard = () =>{
    return(
        <div className="gameboard-flex">
            <div className='gameboard-grid'>
                <Card />
            </div>
        </div>
    )
}

export default Gameboard;