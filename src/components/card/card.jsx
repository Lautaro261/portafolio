import style from './card.module.css'; 
const Card =({image, repo, deploy, title, description})=>{
/* console.log(repo) */
    return(
        <div className={style.containerCard}>



            <img className={style.img} src={image}/> {/* IMAGEN */}


            <div className={style.containerButtons}>
            <button className={style.btnRepo}>{repo}</button>
            <button className={style.btnDep}>{deploy}</button>
            </div>




            <div className={style.containerText}>
            <h3 className={style.title}>{title}</h3>   {/* TITLE */}
            <p className={style.description}>{description}</p>                      {/* FRASE */}
            </div>




            
        </div>
    )

}

export default  Card;