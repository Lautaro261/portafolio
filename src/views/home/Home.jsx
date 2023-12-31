import React from "react";
import { Element, Link as ScrollLink } from "react-scroll";
import Landing from "../landing/landing";
import ProjectsWeb from "../projects/projects";
import AboutMe from "../aboutMe/aboutMe";
import Finish from "../finish/Finish";
import ProjectsApp from "../projectsApp/projectsApp";
import redes from "../../assets/redes.svg";
import BtnFlottant from "../../components/btnflottant/BtnFflottant";
import style from "./Home.module.css";

const Home = ({ setProject }) => {
  return (
    <div>
      <header>
        <div className={style.containerNavBar}>
          <nav className={style.navBar}>
            <ul className={style.containerList}>
              <li className={style.item}>
                <ScrollLink
                  to="landing"
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Inicio
                </ScrollLink>
              </li>

              <li className={style.item}>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  offset={-50}
                  duration={750}
                >
                  Proyectos Web
                </ScrollLink>
              </li>
              <li className={style.item}>
                <ScrollLink
                  to="projectsMobil"
                  smooth={true}
                  offset={0}
                  duration={750}
                >
                  Proyectos Mobil
                </ScrollLink>
              </li>
              <li className={style.item}>
                <ScrollLink
                  to="finish"
                  smooth={true}
                  offset={-150}
                  duration={750}
                >
                  Contacto
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
        
      </header>


      <main>
        <Element name="landing">
          <div className={style.content}>
            <Landing className={style.contentHeader} />
          </div>
        </Element>

        {/* <Element name="aboutme">
          <div className={style.content}>
            <AboutMe className={style.contentHeader} />
          </div>
        </Element> */}

        <Element name="projects">
          <div className={style.content}>
            <ProjectsWeb
              className={style.contentHeader}
              setProject={setProject}
            />
          </div>
        </Element>

        <Element name="finish">
          <div className={`${style.content} ${style.banner}`}>
            <Finish className={style.contentHeader} />
          </div>
        </Element>

        <Element name="projectsMobil">
          <div className={style.content}>
            <ProjectsApp
              className={style.contentHeader}
              setProject={setProject}
            />
          </div>
        </Element>

        {/* <Element name="footer">
          <div className={`${style.content} ${style.banner}`}>
            <AboutMe className={style.contentHeader} />
          </div>
        </Element> */}{/* si va a ir pero antes de proyectos web, mostrar habilidades blandas y duras */}




     
          <BtnFlottant/>
          {/* <button className={style.btnFlottant}>
            <img src={redes} alt="Icon" />
          </button> */}
       



      </main>
    </div>
  );
};

export default Home;
