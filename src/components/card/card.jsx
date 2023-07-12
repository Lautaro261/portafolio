import style from './card.module.css'; 
const Card =({image, repo, deploy, title, description})=>{
/* console.log(repo) */
    return(
        <div className={style.containerCard}>
            <img className={style.img} src={image}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <button>{repo}</button>
            <button>{deploy}</button>
            
        </div>
    )

}

export default  Card;