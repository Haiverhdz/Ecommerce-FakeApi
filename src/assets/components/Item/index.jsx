import Title from "../Title";
import './index.css';
import { useNavigate } from "react-router-dom";
import Counter from "../Counter";

const Item = ({title, price, id, category, img, link, type}) => {
    const navigate = useNavigate();
    
    return(
        <>
            <article onClick={()=>navigate(`/detail/${id}`)} className={`card card--${type}`}>
                <Title heading="h4" className='card-title' text={title} />
                <img className="img" src={img} alt="" />
                <p className="card-price">Precio: {price}</p>
                <p>Categoria: {category}</p>
                <a className="card-link" href={link}>Ir al producto</a>
            </article>
        </>
    )
};

export default Item;