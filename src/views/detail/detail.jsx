import { useEffect } from "react";
import Nav from "../../components/nav/Nav";
import style from "./detail.module.css";

const Detail = () => {
    const getProject = window.localStorage.getItem("project")
    const project = JSON.parse(getProject)

  const { name, image, repositorio, deploy, title, description } = project;

  useEffect(() => {
    console.log(typeof image === "string");
  }, [image]);

  return (
    <div>
      <h1>{title}</h1>
      {project?.image ? (
        <img src={image} className={style.img} />
      ) : (
        <p>cargando...</p>
      )}

      <a href={deploy} target="_blank" rel="noopener noreferrer">
        Deploy
      </a>

      <a href={repositorio} target="_blank" rel="noopener noreferrer">
        Github
      </a>

      <div>
        <p>{description}</p>
      </div>

      <div>
        <div>
          <p>front</p>
        </div>
        <div>
          <p>back</p>
        </div>
        <div>
          <p>base de datos</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
