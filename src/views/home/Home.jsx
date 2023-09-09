import React from "react";
import { Element, Link as ScrollLink } from "react-scroll";
import Landing from "../landing/landing";
import Projects from "../projects/projects";
import AboutMe from "../aboutMe/aboutMe";
import Finish from "../finish/Finish";
import style from "./Home.module.css";

const Home = () => {
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
                  offset={0}
                  duration={750}
                >
                  Proyectos
                </ScrollLink>
              </li>
              <li className={style.item}>
                <ScrollLink
                  to="aboutme"
                  smooth={true}
                  offset={0}
                  duration={750}
                >
                  Sobre mi
                </ScrollLink>
              </li>
              <li className={style.item}>
                <ScrollLink to="finish" smooth={true} offset={0} duration={750}>
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

        <Element name="projects">
          <div className={style.content}>
            <Projects className={style.contentHeader} />
          </div>
        </Element>

        <Element name="aboutme">
          <div className={style.content}>
            <AboutMe className={style.contentHeader} />
          </div>
        </Element>

        <Element name="finish">
          <div className={`${style.content} ${style.banner}`}>
            <Finish className={style.contentHeader} />
          </div>
        </Element>
      </main>
    </div>
  );
};

export default Home;
