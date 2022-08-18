import './InputUIStyle.css';

export const InputUI = ( { name, type, style, txt, id, eventChange, eventBlur, value, event, ref } ) => {
  return (
    <input 
      type={type} 
      className={style}
      placeholder={txt}
      onChange={eventChange}
      onBlur={eventBlur}
      id={id}
      value={value}
      name={name}
      ref={ref}
    />
  )
}
