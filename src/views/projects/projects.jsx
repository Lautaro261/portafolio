import Nav from "../../components/nav/Nav";
import Card from "../../components/card/card"
import style from "./projects.module.css";
import dataWeb from "../../data/projectsWeb";

const Projects =()=>{

    return(
        <div className={style.container}>
            {/* <Nav/> */}
            <h4 className={style.title}>Muestra de trabajos realizados</h4>
            <div className={style.containerCards}>

            {dataWeb.map((p, index)=>{
                return (
                    <Card 
                    key={index} 
                    id={index}
                    image={p.image} 
                    repositorio={p.repositorio} 
                    deploy={p.deploy}
                    title={p.title}
                    description={p.description}
                    />
                )
            })}
            </div>
            
        </div>
    )

}

export default  Projects;