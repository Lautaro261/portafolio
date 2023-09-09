import style from "./CardApp.module.css";
import { Link } from "react-router-dom";
import { useState } from "react"; // Importa useState

const CardApp = ({ id, image, repositorio, title, description }) => {

  return (
    <div /* className={newContainerCard} */ className={style.containerCard}>

        <Link to={`/projectsmobil/detail/${id}`} className={style.linkDetail}>
            <img /* className={style.img} */ src={image} alt="image" /> {/* IMAGEN */}
        </Link>


      <div className={style.containerButtons}>
       
        <a
          href={repositorio}
          className={style.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>



      <div className={style.containerText}>
        <h3 className={style.title}>{title}</h3> {/* TITLE */}
        <p className={style.description}>{description}</p> {/* FRASE */}
        {/* <p>{id}</p> */}
      </div>




    </div>
  );
};

export default CardApp;