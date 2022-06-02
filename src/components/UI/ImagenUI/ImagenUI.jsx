import  img  from "./img4.png";
import './ImageUI.css';

export const ImagenUI = ( {style} ) => {
  return (
    <img
        className={`imgLogin ${style}`}
        src={ img }
    />
  )
}
