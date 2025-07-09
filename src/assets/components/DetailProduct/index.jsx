import Title from "../Title";
import "./index.css";
import Counter from "../Counter";

const DetailProduct = ({ title, price, id, category, img}) => {
  return (
    <>
      <section className="main">
        <picture>
        <img className="img-art" src={img} alt="" />
        </picture>
        <article
          className='detail-art'>
          <Title heading="h4" className="card-title" text={title} />
          <p className="art-price">Precio: {price}</p>
          <p className="art-category">Categoria: {category}</p>
          <Counter title={title} price={price} id={price} category={category} img={img} />
        </article>
      </section>
    </>
  );
};

export default DetailProduct;

