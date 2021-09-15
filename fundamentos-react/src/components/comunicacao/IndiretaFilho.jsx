import React from "react";
const gerarNerd = () =>  Math.random() > 0.5
const min = 20
const max = 90
const gerarIdade = () => parseInt(Math.random() * (70)) +  20
export default props =>{
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick = {e => props.quandoClicar("joão",gerarIdade(), gerarNerd())
            }>Fornecer informações</button>
        </div>
    )
}