import '../styles/card.css';

const Card = (props) => {
    const {image} = props;

    return(
        <div id={image.id} className="card" onClick={props.shuffleCards}>
            <div className="card-image-section">
                <img id={image.id} className='image' src={image.img} alt={image.name}></img>
            </div>
            <div id={image.id} className="card-text-section">{image.name}</div>
        </div>
    )
}

export default Card;