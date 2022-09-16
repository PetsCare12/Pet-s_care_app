import React from 'react'
import './style.css'

export const LoaderCards = ( {extra} ) => {
    return (
        <span className={`loader ${extra}`}></span>
    )
}
