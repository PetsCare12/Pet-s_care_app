import React from 'react'
import './style.css'

export const LoaderCards = ( {extra} ) => {
    return (
        <span class={`loader ${extra}`}></span>
    )
}
