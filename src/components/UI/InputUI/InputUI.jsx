import './InputUIStyle.css';

export const InputUI = ( { type, style, txt, id, eventChange, eventBlur, value, event, req } ) => {
  return (
    <input 
      type={type} 
      className={style}
      placeholder={txt}
      onChange={eventChange}
      onBlur={eventBlur}
      id={id}
      value={value}
    />
  )
}
