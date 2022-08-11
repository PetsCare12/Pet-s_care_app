import React from 'react'

const InfoUser = () => {
    return (
        <div className='infoUser__container'>
            <div className='infoUser__data'>
                <h2>10000000000</h2>
                <h1>Jennifer Lopez</h1>
            </div>
            <button className='infoUser__managment'>
                <p className='casilla edit'>🖋</p>
                <p className='casilla delete'>🗑</p>
            </button>
        </div>
    )
}

export default InfoUser;