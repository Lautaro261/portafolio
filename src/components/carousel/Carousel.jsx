import React, { useState } from 'react';
import Cardv2 from '../cardv2/Cardv2';
import style from './Carousel.module.css';
import der from '../../assets/der.svg';
import izq from '../../assets/izq.svg';

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



{/*       <div className={style.carouselButtons}>
        <button onClick={handlePrevClick} className={style.prevButton}>
          <img src={izq} alt="Izquierda" className={style.icon}/>
        </button>


        <button onClick={handleNextClick} className={style.nextButton}>
          <img src={der} alt="Derecha" className={style.icon}/>
        </button>
      </div> */}





      <div className={style.carousel}>
        {visibleCards.map((card, index) => (
          <div key={index} className={style.carouselCard}>
            <Cardv2
              setProject={setProject}
              key={index}
              id={index}
              name={card.name}
              image={card.image}
              repositorio={card.repositorio}
              deploy={card.deploy}
              title={card.title}
              shortDescription={card.shortDescription}
              longDescription={card.longDescription}
              tecnology={card.tecnology}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
