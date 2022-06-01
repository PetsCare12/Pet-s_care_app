import './InputUIStyle.css'

export const InputUI = ( { type, style, txt, event, req } ) => {
  return (
    <input 
      type={type} 
      className={style}
      placeholder={txt}
    />
  )
}
