import React from "react";

import "./App.css"
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

// export default function App(props){}
export default props =>
    <div className ="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="Desafio Aleatório" color = "#080">
                <Aleatorio min={1.0} max={10} />
            </Card>
            <Card titulo="Fragmento">
                <Fragmento />
            </Card>
            <Card titulo="Com parâmetro">
                <ComParametro titulo="Segundo componente"
                    subtitulo="muito legal"
                    nota={5.0} />
            </Card>
            <Card titulo="Primeiro componente">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>

