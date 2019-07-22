import React, { Component } from 'react'
import './AppRetire.css'
import Btn from '../components/Input'
import Buttonok from '../components/button.jsx'
import Display from '../components/display.jsx'
import Profile from '../components/profile.jsx'
import Navbar from '../components/bar.jsx'

export default class Retire extends Component {
    investir(perfil,idade,valor,meses){
        var txd = 0
        if(perfil==="Conservador"){
            txd = 0.10
        } else if (perfil==="Moderado"){
            txd = 0.12
        } else{
            txd = 0.14
        }

        var monthsToDie = 1320
        var monthsRetired = monthsToDie - ( idade * 12 + meses )

        var txdM = Math.pow(( 1 + txd ),( 1 / 12 )) - 1

        var vp = 0

        for(var i = 0; i < monthsRetired; i++){
            vp += (valor / Math.pow((1 + txd),((i+1+meses)/12)))
        }
        
        vp *= 1.05

        var parcela = ((vp / (Math.pow((1 + txdM) , meses) - 1 )) * (Math.pow((1+txdM) , meses) * txdM))

        var result = parcela

        return result
    }

    calcular(a) {
        let result = 0;
        let perfil = document.getElementById("drops")
        
        let bool1 = a!=="Conservador" & a!=="Moderado" & a!=="Arriscado"
        if (bool1) {
            a = "Conservador"            
        }
        let valor1 = document.getElementById("valor0").value
        let valor2 = document.getElementById("valor1").value
        let valor3 = document.getElementById("valor2").value
        
        perfil.innerHTML = a
        
        let bool2 = valor1===""&valor2===""&valor3===""
        if(!bool2){

            result = this.investir(a,Number(valor1),Number(valor2),Number(valor3))
            
            let res = 'R$ ' + Math.round(result) + ',00'
            console.log("calcular: " + res)
            document.getElementById("display").innerHTML = res
        }else{
        }
    }
    render() {
        var calcular = a => this.calcular(a)
        return (
            <div>
                <div className="retire">
                    <h1>
                        Planejamento de Aposentaria
                     </h1>
                    <Display value={0} />
                    <Profile click={n => calcular(n)}/><br />
                    <Btn label="Calcular" />
                    <Buttonok click={n => calcular(n)} />
                </div>
                    <Navbar />
            </div>
        )
    }
}
