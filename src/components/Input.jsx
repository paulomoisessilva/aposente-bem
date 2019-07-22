import React from 'react'
import './Input.css'

export default props => {
    return (
        
        <div>
            <label className="inp-tex" htmlFor="valor0">Quantos anos você tem?</label>
            <input className="inp-inp-tex" type="number" min="0" step=".1" id="valor0" /><br /><br />
            <label className="inp-tex" htmlFor="valor1">Quanto você quer recebr por mês ao se aposentar?</label>
            <input className="inp-inp-tex" type="number" min="0" step="1" id="valor1" /><br /><br />
            <label className="inp-tex" htmlFor="valor2">Em quanto tempo você pretende apostentar?</label>
            <br/><small>Coloque o tempo em meses.</small>
            <input className="inp-inp-tex" type="number" min="0" step="1" id="valor2" />
        </div>
    )
}
