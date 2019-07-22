import React from 'react'
import './button.css'

export default props =>{
    return(
        <button className='button' onClick={e => props.click && props.click(props.label)} >Calcular</button>
    )
    }