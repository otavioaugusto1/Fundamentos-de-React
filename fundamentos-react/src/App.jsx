import React from "react";


import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

// export default function App(props){}
export default props =>
    <div>
        <h1>Fundamentos React</h1>
        <Card titulo = "Card"/>
        <Aleatorio min = {1.0} max = {10}/>
        <Fragmento />
        <ComParametro titulo="Segundo componente"
            subtitulo="muito legal"
            nota={5.0} />
        <Primeiro></Primeiro>
    </div>

