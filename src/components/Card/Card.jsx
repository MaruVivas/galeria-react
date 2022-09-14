import './Card.css'

const Card = ({contenido}) => {
    return (
        <div className="card m-4">
        <img src={contenido.img} className="card-img-top img" alt={contenido.titulo}></img>
        <div className="card-body">
          <h5 className="card-title">{contenido.titulo}</h5>
          <p className="card-text">{contenido.desc}</p>
        </div>
      </div>
    )
};

export default Card;