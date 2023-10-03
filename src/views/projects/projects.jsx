import Nav from "../../components/nav/Nav";
import Card from "../../components/card/card";
import style from "./projects.module.css";
import dataWeb from "../../data/projectsWeb";
import Carousel from "../../components/carousel/Carousel";

const ProjectsWeb = ({ setProject }) => {
  return (
    <div className={style.container}>
      {/* <Nav/> */}
      <h4 className={style.title}>Muestra de trabajos webs realizados</h4>
      <Carousel cards={dataWeb} cardsPerPage={3} setProject={setProject}/>
    </div>
  );
};

export default ProjectsWeb;
