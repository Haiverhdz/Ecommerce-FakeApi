import { useEffect, useState } from "react";
import "./index.css";
import ItemCarousel from "../ItemCarousel";

const Carousel2 = () => {
  const [items2, setItems2] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        const shuffledData = data.sort(() => 0.5 - Math.random());
        setItems2(shuffledData.slice(0, 5));
      });
  }, []);

  return (
    <>
      <main className="item-container-carousel">
        {items2.map((item, i) => (
          <ItemCarousel
            id={item.id}
            key={`item.id-${i}`}
            title={item.title}
            price={item.price}
            img={item.image}
            type="primary"
          />
        ))}
      </main>
    </>
  );
};

export default Carousel2;