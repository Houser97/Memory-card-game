import '../styles/card.css';
import { useEffect } from 'react';


const Card = (props) => {
    const {image} = props

    return(
        <div className="card">
            <div className="card-image-section">
                <img className='image' src={image.img} alt={image.name}></img>
            </div>
            <div className="card-text-section">{image.name}</div>
        </div>
    )
}

export default Card;