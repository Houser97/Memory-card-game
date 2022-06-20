import '../styles/card.css';

const Card = (props) => {
    const {image} = props;

    return(
        <div className="card" onClick={props.shuffleCards}>
            <div className="card-image-section">
                <img className='image' src={image.img} alt={image.name}></img>
            </div>
            <div className="card-text-section">{image.name}</div>
        </div>
    )
}

export default Card;