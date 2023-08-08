import style from './Finish.module.css';


const Finish =()=>{

    return(
        <div className={style.parent}>
            <div className={style.div1}>
                <h1 className={style.frase1}>Un código es poderoso no</h1>
                <h1 className={style.frase1}>porque funcione, sino porque </h1>
                <h1 className={style.frase1}>puede expresar ideas.</h1>
            </div>

            <div className={style.div2}>
                <h4 className={style.frase2}>Mi abuelo me solía decir esto </h4>
                <h4 className={style.frase2}>cuando quería abandonar </h4>
                <h4 className={style.frase2}>la idea de ser programador.</h4>
            </div>
            
        </div>
    )

}

export default  Finish;