import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./Cardv2.module.css";

const Cardv2 = ({
  id,
  name,
  image,
  repositorio,
  deploy,
  title,
  shortDescription,
  longDescription,
  tecnology,
  setProject,
}) => {
  const [isClicked, setIsClicked] = useState(false); // Estado para rastrear si se hizo clic

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 400);
  };

  const handlerClickImg = (event) => {
    console.log(event.target.name);
    const newProject = {
      image,
      repositorio,
      deploy,
      title,
      shortDescription,
      longDescription,
      name,
      tecnology,
    };

    window.localStorage.setItem("project", JSON.stringify(newProject));

    setProject({
      name,
      image,
      repositorio,
      deploy,
      title,
      shortDescription,
      longDescription,
      tecnology,
    });
  };


  return (
    <div className={style.cardContainer}>
      {/* -------------------------------------------------------------------------------------------------- */}
      <div className={style.visualContainer}>
        <div className={style.marco}>

        <Link to={`/projects/detail/${id}`} className={style.imageLink}>
          <img
            className={style.image}
            name={name}
            src={image}
            alt="image"
            onClick={() => {
              handlerClickImg(event);
            }}
          />
        </Link>
        </div>


        <div className={style.containerButtons}>

        <a
          href={deploy}
          className={style.buttonLink}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploy
        </a>

        <a
          href={repositorio}
          className={style.buttonLink}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------------------- */}
      <div className={style.textContainer}>
      <h3 className={style.title}>{title}</h3> 
        <p className={style.description}>{shortDescription}</p>
      </div>
    </div>
  );
};

export default Cardv2;
