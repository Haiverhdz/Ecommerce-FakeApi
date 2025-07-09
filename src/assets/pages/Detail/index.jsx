import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailProduct from "../../components/DetailProduct/index.jsx";

const Detail = () => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  

  return (
    <>
      {productData && (
        <>
          <DetailProduct
            id={productData.id}
            title={productData.title}
            price={productData.price}
            img={productData.image}
            link={productData.permalink}
            category={productData.category}
            type="primary"
          />
        </>
      )}
    </>
  );
};

export default Detail;
