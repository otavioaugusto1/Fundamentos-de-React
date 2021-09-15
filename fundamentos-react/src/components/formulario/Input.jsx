import React, { useState } from "react";
import "./Input.css"
export default props => {
    const [valor, setValor] = useState("Inicial")
    function quandoMudar(e) {
        setValor(e.target.value)
    }
    return (
        <div className="Input">
            <h2>{valor}</h2>
            <h3>Componente controlado:</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly />
            </div>
            <h3>Componente não controlado:</h3>
            <input value= {undefined} />
        </div>
    )
}