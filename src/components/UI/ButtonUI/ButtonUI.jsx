import './ButtonUIStyle.css'

export const ButtonUI = ( {text, style, event, id} ) => {
  return (
    <button
        className={style}
        onClick={event}
        id={id}
    >
        { text }
    </button>
  )
}
