import React from "react";
import style from './projectsApp.module.css'
import dataMobil from '../../data/projectsMobil';
//import CardApp from "../../components/cardApp/CardApp";
import CarouselMovil from "../../components/carouselMovil/CarouselMovil";

const ProjectsApp = ({ setProject })=>{

    return(
        <div className={style.container}>
            {/* <Nav/> */}
            <h4 className={style.title}>Proyectos android</h4>
            <CarouselMovil cards={dataMobil} cardsPerPage={4} setProject={setProject}/>

            
        </div>
    )
}

export default ProjectsApp;