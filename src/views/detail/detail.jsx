import { useEffect } from "react";
import Nav from "../../components/nav/Nav";
import style from "./detail.module.css";
import { Link } from "react-router-dom";

const Detail = () => {
  const getProject = window.localStorage.getItem("project");
  const project = JSON.parse(getProject);

  const { name, image, repositorio, deploy, title, tecnology, shortDescription, longDescription } = project;

  useEffect(() => {
    console.log(typeof image === "string");
  }, [image]);

  return (
    <div>
      <header>
        <div className={style.containerNavBar}> 
          <nav className={style.navBar}>
            <ul className={style.containerList}>
              <li > <a href={deploy} rel="noopener noreferrer" className={style.item}>{title}</a> </li>
              <li > <Link to='/' className={style.item}> Home</Link> </li>
              <li ><a href={repositorio} rel="noopener noreferrer" className={style.item}>Repositorio</a></li>
              
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
          <p className={style.text}>{longDescription}</p>
        </div>

        <div className={style.containerTechnologies}>
          
          


            {tecnology.front && (
              
              <div className={style.containerFront}>
              
              <h3 className={style.titleTechnologies}>Front</h3>
            <div className={style.containerImages}>
              {tecnology.front.map((tec) => (
                <div className={style.card} key={tec.id}>
                  <img src={tec.image} alt={tec.name} className={style.logo} />
                  <h5 className={style.subTitleTechnologies}>{tec.name}</h5>
                </div>
              ))}


            </div>
          </div>
          )}


          
            {tecnology.back && (
              
              
              
              <div className={style.containerFront}>
              <h3 className={style.titleTechnologies}>Back</h3>
            <div className={style.containerImages}>
              {tecnology.back.map((tec) => (
                <div className={style.card} key={tec.id}>
                  <img src={tec.image} alt={tec.name} className={style.logo} />
                  <h5 className={style.subTitleTechnologies}>{tec.name}</h5>
                </div>
              ))}
            </div>
          </div>


          )}


            {tecnology.base && (
          <div className={style.containerFront}>
              
              
              
              <h3 className={style.titleTechnologies}>Data Base</h3>
            <div className={style.containerImages}>
              {tecnology.base.map((tec) => (
                <div className={style.card} key={tec.id}>
                  <img src={tec.image} alt={tec.name} className={style.logo} />
                  <h5 className={style.subTitleTechnologies}>{tec.name}</h5>
                </div>
              ))}
            </div>
          </div>


          )}


        </div>
          </div>
      </main>
    </div>
  );
};

export default Detail;
