import style from "./inicio.module.css";

const Inicio = () => {
  return (
    <div>
      <div>
        <h1 className={style.white}>Hola, me llamo<span className={style.black}> Nahuel Lautaro</span></h1>
        <h1 className={style.black}>Torres Loretto<span className={style.white}> y soy</span></h1>
        <h1 className={style.white}>Desarrollador<span className={style.black}> web full stack<span className={style.white}>.</span></span></h1>
      </div>
      <div>
        <p>*aqui va foto</p>
      </div>
      <button className={style.conoceme}>Conóceme</button>
    </div>
  );
};

export default Inicio;
