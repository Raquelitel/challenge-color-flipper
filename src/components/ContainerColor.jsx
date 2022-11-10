import React, { useState } from 'react'
import ButtonCopy from './ButtonCopy.jsx';
import "../index.css"

const ContainerColor = () => {

    const [color, setColor] = useState("#61D165")
    
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColorValue = "#";

    const getRandomColor = () => {
        for (let i = 0; i < 6; i++) {
            const randomNumberValue = Math.floor(Math.random() * hex.length);
            hexColorValue += hex[randomNumberValue];
        }
        setColor(hexColorValue)
    }

    return (
        <div className="d-flex container-size shadow" style={{ backgroundColor: color }}>

            <div className='d-flex flex-column justify-content-center align-items-center col-10'>
                <p className='fw-bold fs-1'>{color}</p>
                <button className='btn btn-secondary mb-2 text-uppercase shadow' onClick={getRandomColor}>Cambiar color</button>
            </div>

            <div className='mt-1'>
                <ButtonCopy
                    color={color} 
                    />
            </div>
        </div>
    )
}

export default ContainerColor
