import '../styles/gameboard.css';
import React, {useState} from "react";
import Card from './card';
import Cheems from './cheems.jpg';
import Queso from './Queso.jpg';
import Rocco from './Cocco.jpg';
import House from './House.jpg';
import Doge from './Doge.jpg';
import Chock from './Chock.jpg';
import Bethoveen from './Bethoveen.jpg'
import Lucky from './Luckys.jpg';
import Hamster from './Hamster.jpg';
import Racoon from './Racoon.jpg';


const Gameboard = (props) =>{

    const [images, setImages] = useState(
        [{name: "Cheems",   img: Cheems,    id: 0}, 
         {name: "Queso",    img: Queso,     id: 1}, 
         {name: "Rocco",    img: Rocco,     id: 2}, 
         {name: "House",    img: House,     id: 3}, 
         {name: "Doge",     img: Doge,      id: 4},
         {name: "Beethoven", img: Bethoveen, id: 5},
         {name: "Chock",    img: Chock,     id: 6},
         {name: "Luckys",   img: Lucky,     id: 7},
         {name: "Hamster",  img: Hamster,   id: 8},
         {name: "Racoon",  img: Racoon,     id: 9}]
    )

    const changeScoreApp = props.changeScore;

    const shuffleCards = (e) => {
        changeScoreApp(e.target.id);
        
        setTimeout(()=>{let imagesArray = [...images];
        for(let i = imagesArray.length-1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [imagesArray[i], imagesArray[j]] = [imagesArray[j], imagesArray[i]];
        }
        setImages(imagesArray);}, 100)
    }

   /* useEffect(() => {
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => card.addEventListener("click", (e) => {
            shuffleCards();
        }))


        return () => {
            cards.forEach(card => card.removeEventListener("click", (e) => {
                console.log("stop click");   
            }))
        }
    }, [])*/


    return(
        <div className="gameboard-flex">
            <div className='gameboard-grid'>
                {        
                    images.map(
                        function iterateImages(item, iterator){
                            return(
                                <Card key={iterator.toString()} image = {item} shuffleCards = {shuffleCards} changeScore = {props.changeScore}/>
                                )
                            }
                    )
                }
            </div>
        </div>
    )
}

export default Gameboard;