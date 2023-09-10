import { useEffect } from "react";
import Nav from "../../components/nav/Nav";
import style from "./detail.module.css";

const Detail = () => {
  const getProject = window.localStorage.getItem("project");
  const project = JSON.parse(getProject);

  const { name, image, repositorio, deploy, title, description } = project;

  useEffect(() => {
    console.log(typeof image === "string");
  }, [image]);

  return (
    <div>
      <header>
        <div className={style.containerNavBar}> 
          <nav className={style.navBar}>
            <ul className={style.containerList}>
              <li className={style.item}>{title}</li>
              <li className={style.item}>home</li>
              <li className={style.item}>deploy</li>
              <li className={style.item}>repositorio</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className={style.main}>

        <div className={style.contentGeneral}>




        {project?.image ? (
          <img src={image} className={style.img} />
          ) : (
            <p>cargando...</p>
            )}

       {/*  <a href={deploy} target="_blank" rel="noopener noreferrer">
          Deploy
          </a>
          
          <a href={repositorio} target="_blank" rel="noopener noreferrer">
          Github
        </a>
 */}
        <div className={style.description}>
          <p>{description}</p>
        </div>

        <div className={style.Containertecnologie}>
          <div className={style.Containerfront}>
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
      </main>
    </div>
  );
};

export default Detail;
