import style from "./card.module.css";
import { useState } from "react"; // Importa useState

const Card = ({ id, image, repositorio, deploy, title, description }) => {
  const [isClicked, setIsClicked] = useState(false); // Estado para rastrear si se hizo clic

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 400);
  };

  const linkClass = `${style.link} ${isClicked ? style["swing-top"] : ""}`;

  /*  let newContainerCard = style.containerCard;

    if (id === 1) {
      newContainerCard = style.containerCard2;
    } */

  return (
    <div /* className={newContainerCard} */ className={style.containerCard}>
      <img className={style.img} src={image} alt="image" /> {/* IMAGEN */}
      <div className={style.containerButtons}>
        <a
          href={deploy}
          className={linkClass}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploy
        </a>
        <a
          href={repositorio}
          className={linkClass}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
      <div className={style.containerText}>
        <h3 className={style.title}>{title}</h3> {/* TITLE */}
        <p className={style.description}>{description}</p> {/* FRASE */}
        <p>{id}</p>
      </div>
    </div>
  );
};

export default Card;
