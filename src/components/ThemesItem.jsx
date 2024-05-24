import React from 'react'

const ThemesItem = ({ color, img, changeColor }) => {
    return (
        <div>
            <img src={img} alt="" className="theme__img" onClick={() => { changeColor(color) }} />
        </div>
    )
}

export default ThemesItem
