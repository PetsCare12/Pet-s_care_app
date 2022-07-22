import React from 'react'
import { Header } from '../../layout/HeaderHome/HeaderHome'
import { CitaCard } from './CitaCard'

import './citas.css'

export const Citas = () => {
    return (
        <>
            <Header />
            <div className="typePage">
                <h1>Citas</h1>
            </div>
            <div className="citas__contenedor">
                <CitaCard />
            </div>
        </>
    )
}
