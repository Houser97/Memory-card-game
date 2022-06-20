import '../styles/gameboard.css';
import React, {useState, useEffect} from "react";
import Card from './card';
import Cheems from './cheems.jpg';
import Queso from './Queso.jpg';
import Rocco from './Cocco.jpg';
import House from './House.jpg';
import Doge from './Doge.jpg';

const Gameboard = () =>{

    const [images, setImages] = useState(
        [{name: "Cheems",   img: Cheems}, 
         {name: "Queso",    img: Queso}, 
         {name: "Rocco",    img: Rocco}, 
         {name: "House",    img: House}, 
         {name: "Doge",     img: Doge}]
    )

    const shuffleCards = () => {
        let imagesArray = [...images];
        for(let i = imagesArray.length-1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [imagesArray[i], imagesArray[j]] = [imagesArray[j], imagesArray[i]];
        }
        setImages(imagesArray);
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
                                <Card key={iterator.toString()} image = {item} shuffleCards = {shuffleCards}/>
                                )
                            }
                    )
                }
            </div>
        </div>
    )
}

export default Gameboard;