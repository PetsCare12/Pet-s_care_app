import './InputUIStyle.css';

export const InputUI = ( { type, style, txt, id, ref, eventChange, event, req } ) => {
  return (
    <input 
      type={type} 
      className={style}
      placeholder={txt}
      onChange={eventChange}
      id={id}
      ref={ref}
    />
  )
}
