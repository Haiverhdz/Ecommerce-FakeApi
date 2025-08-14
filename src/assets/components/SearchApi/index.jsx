import { useEffect, useState } from "react";
import Item from "../Item";
import Title from "../Title";
import "./index.css";

const SearchApi = () => {
  const [items, setItems] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.slice(0, 20)); 
      });
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchParam.toLowerCase())
  );

  return (
    <>
      <Title heading="h1" text="¡Busca a tu manera!" />

      <div className="container-label">
        <label>Buscar: </label>
        <input
          type="text"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Escribe un producto..."
        />
      </div>

      <main className="item-container">
        {filteredItems.map((item, i) => (
          <Item
            id={item.id}
            key={`item-${i}`}
            title={item.title}
            price={item.price}
            img={item.image}
            link={item.permalink}
            category={item.category}
            type="primary"
          />
        ))}
      </main>
    </>
  );
};

export default SearchApi;
