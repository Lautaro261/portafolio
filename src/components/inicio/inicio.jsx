import style from "./inicio.module.css";

const Inicio = () => {
  return (
    <div className={style.parent}>
      <div className={style.div1}>
        <h1 className={style.white}>Hola,  me</h1>
        <h1 className={style.white}>llamo  <span className={style.black}> Nahuel</span></h1>
        <h1 className={style.black}>Lautaro  Torres</h1>
        <h1 className={style.black}>Loretto <span className={style.white}> y soy</span></h1>
        <h1 className={style.white}>Desarrollador</h1>
        <h1 className={style.black}>web  full  stack<span className={style.white}>.</span></h1>
      </div>
      <div className={style.div2}>
        <img className={style.img} src='/src/image/Imagen de WhatsApp 2023-07-18 a las 19.31.48.jpg'/>
      </div>
      <div className={style.div3}>
      <button className={style.conoceme}>CONOCEME ▼ </button>
      </div>
    </div>
  );
};

export default Inicio;
