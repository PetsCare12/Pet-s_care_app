import './InputUIStyle.css'

export const InputUI = ( { type, style, txt, id, ref, event, req } ) => {
  return (
    <input 
      type={type} 
      className={style}
      placeholder={txt}
      id={id}
      ref={ref}
    />
  )
}
