import  img  from "./img3new.png";
import './ImageUI.css';

export const ImagenUI = ( {style} ) => {
  return (
    <img
        className={`imgLogin ${style}`}
        src={ img }
    />
  )
}
