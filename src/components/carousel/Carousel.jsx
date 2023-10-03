import React, { useState } from 'react';
import Card from '../card/card';
import style from "./Carousel.module.css"
import der from "../../assets/der.svg";
import izq from "../../assets/izq.svg";

const Carousel = ({ cards, cardsPerPage, setProject }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const handlePrevClick = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };
  const handleNextClick = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };
  const start = currentPage * cardsPerPage;
  const end = start + cardsPerPage;
  const visibleCards = cards.slice(start, end);

  return (
    <div className={style.carouselContainer}>
        
        {/* <button onClick={handlePrevClick} className={style.Btn}>&lt;</button> */}
        <div onClick={handlePrevClick} className={style.Btn}>
            <img src={izq} alt="izquierda"/>
        </div>

      <div className={style.carousel}>
        {visibleCards.map((card, index) => (
          <div key={index} className={style.carouselCard}>
            <Card
              setProject={setProject}
              key={index}
              id={index}
              name={card.name}
              image={card.image}
              repositorio={card.repositorio}
              deploy={card.deploy}
              title={card.title}
              description={card.description}
              tecnology={card.tecnology}
            />
          </div>
        ))}
      </div>



        
        {/* <button onClick={handleNextClick} className={style.Btn}>&gt;</button> */}

        <div onClick={handleNextClick} className={style.Btn}>
            <img src={der} alt="derecha"/>
        </div>


    </div>
  );
};

export default Carousel;

