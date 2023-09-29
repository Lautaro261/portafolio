import style from './BtnFlottant.module.css'
import redes from "../../assets/redes.svg";
import gmail from "../../assets/gmail.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import phone from "../../assets/phone.svg";
import down from "../../assets/down.svg"
import { useState } from 'react';

const BtnFlottant = () => {
    const [ visible, setVisible ] = useState(false)

    const handlerClick = (event) =>{
        if(event.target.name === 'redes'|| event.target.name == 'close'){
            setVisible(!visible)
        }

    }
    return ( 
        <div>
            <div className={style.ContainerBtnFlottant1}>
             <button className={`${style.btnFlottant1} ${visible ? style.btnFlottant1Hidden : ''}`} name='redes' onClick={handlerClick}>
                <img src={redes} alt="Icon" name='redes'/>
              </button> 
            </div>



            <div className={`${style.ContainerBtnFlottant2} ${visible ? '' : style.ContainerBtnFlottant2Hidden}`}  onClick={handlerClick}>
                <a href='https://api.whatsapp.com/send/?phone=543888563611&text&type=phone_number&app_absent=0' target="_blank">
                    <img src={phone} alt='phone' className={style.icons}/>
                </a>

                <a href="mailto:nahueltorrestec@gmail.com">
                   <img src={gmail} alt='gmail'/> 
                </a>

                <a href='https://www.linkedin.com/in/nahuel-lautaro-torres-loretto-511085235/' target='_blank'>
                    <img src={linkedin} alt='linkedin'/>
                </a>

                <a href='https://github.com/Lautaro261' target='_blank'>
                    <img src={github} alt='github'/>
                </a>

                <div name='close' >
                    <img src={down} alt='close' name='close' className={style.closeIcon}/>
                </div>

            </div> 

        </div>


     );
}
 
export default BtnFlottant;