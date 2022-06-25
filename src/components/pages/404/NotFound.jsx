import React from 'react'
import './notfound.css';

export const NotFound = () => {
    return (
        <>
            <div className='container'>
                <h1 id='h1NotFound'>Error 404</h1>
                <h2 id='h2NotFound'>Lo sentimos, esta página no existe</h2>
                <img src="https://media4.giphy.com/media/1JIG6YSBv0w7K9OzXk/giphy.gif?cid=ecf05e47nvsizm2bken8d1302ug4j8uidy0507p4z02544ss&rid=giphy.gif&ct=g" alt="" />
            </div>
        </>
    )
}
