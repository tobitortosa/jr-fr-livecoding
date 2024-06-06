import React from 'react'
import s from "./BoxComponent.module.css"

const BoxComponent = ({ boxWidth }) => {
    return (
        <div className={s.box} style={{ width: boxWidth }}>

        </div>
    )
}

export default BoxComponent