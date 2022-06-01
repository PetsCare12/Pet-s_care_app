import './ButtonUIStyle.css'

export const ButtonUI = ( {text, style, event} ) => {
  return (
    <button
        className={style}
        onClick={event}
    >
        { text }
    </button>
  )
}
