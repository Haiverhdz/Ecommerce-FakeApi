import Title from "../Title";
import { useNavigate } from "react-router-dom";
import './index.css';

const ItemCarousel = ({title, price, img, id}) => {
    const navigate1 = useNavigate();

    return(
        <>
             <article onClick={()=> navigate1(`/detail/${id}`)} className={"card-carousel"}>
                <Title heading="h4" className='card-title' text={title} />
                <img className="img-carousel" src={img} alt="" />
                <p className="card-price">Precio: {price}</p>
            </article>
        </>
    )
};

export default ItemCarousel;