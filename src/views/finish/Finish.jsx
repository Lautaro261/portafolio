import style from './Finish.module.css';


const Finish =()=>{

    return(
        <div className={style.parent}>
            <div className={style.div1}>
                <h4 className={style.frase2}>Así como </h4>
                <br></br>
                <h1 className={style.frase1}>"Un lápiz es poderoso no porque escriba,</h1>
                <h1 className={style.frase1}>sino porque puede dibujar".</h1>
                <br></br>
                <h4 className={style.frase2}>Pienso que...</h4>
                <br></br>
                <h1 className={style.frase1}>"Un código es poderoso no porque funcione,</h1>
                <h1 className={style.frase1}>sino porque puede expresar ideas".</h1>
              


            </div>

          {/*   <div className={style.div2}>
                <h4 className={style.frase2}>Mi abuelo me solía decir esto </h4>
                <h4 className={style.frase2}>cuando quería abandonar </h4>
                <h4 className={style.frase2}>la idea de ser programador.</h4>
            </div> */}
            
        </div>
    )

}

export default  Finish;