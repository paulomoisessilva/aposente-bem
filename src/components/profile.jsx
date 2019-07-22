import React from 'react'
import './profile.css'

export default props => {
    return (
        <div className="dropdown">
            <button className="dropbtn" id='drops'>Selecione o seu perfil</button>
            <div className="dropdown-content">
                <a href="/#" className="perfil" value={0.08} onClick={e => props.click && props.click("Conservador")} id="conservador">Conservador</a>
                <a href="/#" className="perfil" value={0.12} onClick={e => props.click && props.click("Moderado")} id="moderado">Moderado</a>
                <a href="/#" className="perfil" value={0.16} onClick={e => props.click && props.click("Arriscado")} id="arriscado">Arriscado</a>
            </div>
        </div>
    )
}
