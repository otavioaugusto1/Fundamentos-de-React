import React from "react"
//<react.fragment/> ou <> -> </>

export default function ComParametro(props){
    return(
        <React.Fragment>
            <h2>O título é:{props.titulo}</h2>
            <h3>Subtítulo: {props.subtitulo} e nota igual a {props.nota}</h3>
            
        </React.Fragment>
    )
}