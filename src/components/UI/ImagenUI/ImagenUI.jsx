import  img  from "./img4.png";
import './ImageUI.css';

export const ImagenUI = ( {style,img} ) => {
  return (
    <img
        className={`imgLogin ${style}`}
        src={ img }
    />
  )
}
