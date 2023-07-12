import Nav from "../../components/nav/Nav";
import Card from "../../components/card/card"
import style from "./projects.module.css";

const Projects =()=>{
    const data=[
        {
            image: '../../image/paby.PNG',
            repo: 'repolink.com',
            deploy:'deploylink.com',
            title: 'PABY',
            description:'De “La colección Verde” de 2020'
        },
        {
            image: '../../../public/tecno.PNG',
            repo: 'gitlink.com',
            deploy:'deploylink.com',
            title: 'TECNO CAMP',
            description:'este es un proyecto muy lindo'
        },
        {
            image: '/public/pokemon.PNG',
            repo: 'gitlink.com',
            deploy:'deploylink.com',
            title: 'PI POKEMONS',
            description:'este es un proyecto muy lindo'
        }
    ];

    return(
        <div className={style.container}>
            <Nav/>
            <h4>Aqui van mis proyectos</h4>
            {data.map((p, index)=>{
                return (
                    <Card 
                    key={index} 
                    image={p.image} 
                    repo={p.repo} 
                    deploy={p.deploy}
                    title={p.title}
                    description={p.description}
                    />
                )
            })}
            
        </div>
    )

}

export default  Projects;