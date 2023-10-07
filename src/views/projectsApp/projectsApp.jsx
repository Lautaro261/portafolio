import React from "react";
import style from './projectsApp.module.css'
import dataMobil from '../../data/projectsMobil';
import CardApp from "../../components/cardApp/CardApp";

const ProjectsApp = ()=>{

    return(
        <div className={style.container}>
            {/* <Nav/> */}
            <h4 className={style.title}>Proyectos android</h4>
            <div className={style.containerCards}>

            {dataMobil.map((p, index)=>{
                return (
                    <CardApp 
                    key={index} 
                    id={index}
                    image={p.image} 
                    repositorio={p.repositorio} 
                    title={p.title}
                    shortDescription={p.shortDescription}
                    longDescription={p.longDescription}
                    />
                )
            })}
            </div>
            
        </div>
    )
}

export default ProjectsApp;