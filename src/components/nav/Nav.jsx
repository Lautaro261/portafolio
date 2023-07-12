import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav =()=>{

    return(
        <div className={style.nav}> 
        <Link to='/'>
           <p>Inicio</p>
        </Link>
        <Link to='/projects'>
           <p>Proyectos</p>
        </Link>
        <Link to='/aboutme'>
           <p>Sobre mi</p>
        </Link>
        <Link to='/finish'>
           <p>Contacto</p>
        </Link>
            
        </div>
    )

}

export default  Nav;