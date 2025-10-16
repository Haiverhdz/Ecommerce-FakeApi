import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";


const Carousel1 = (id) => {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const navigate = useNavigate();
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleNext = () => {
    setTransition(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    setTimeout(() => setTransition(true), 300); 
  };

  const handlePrev = () => {
    setTransition(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setTimeout(() => setTransition(true), 300); 
  };

  if (items.length === 0) {
    return <div>Loading...</div>;
  }

  const currentItem = items[currentIndex];

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>
        &#10094;
      </button>
      <div style={{ background: "#145577" }} className={`carousel-content ${transition ? "transition" : ""}`}>
        <div className="divs-content">
          <h3>{currentItem.title}</h3>
          <p>Price: ${currentItem.price}</p>
          <p>
            Rating: {currentItem.rating.rate} ({currentItem.rating.count}{" "}{currentIndex.id}
            reviews)
          </p>
        </div>
        <div className="divs-content">
          <img
            onClick={()=> navigate(`/detail/${id}`)}
            src={currentItem.image}
            alt={currentItem.title}
          />
        </div>
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel1;
