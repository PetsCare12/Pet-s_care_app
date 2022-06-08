import './InputUIStyle.css'

export const InputUI = ( { type, style, txt, id, event, req } ) => {
  return (
    <input 
      type={type} 
      className={style}
      placeholder={txt}
      id={id}
    />
  )
}
