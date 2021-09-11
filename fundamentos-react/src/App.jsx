import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

// export default function App(props){}
export default props =>
    <div>
        <h1>Fundamentos React</h1>
        <Fragmento />
        <ComParametro titulo="Segundo componente"
            subtitulo="muito legal"
            nota={5.0} />
        <Primeiro></Primeiro>
    </div>

