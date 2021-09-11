import React from "react";

export default function Aleatorio(props){
    // pode ser assim: const {min, max} = props
    const aleatorio = parseInt(Math.random() * (props.max - props.min)) + props.min
    return(
        <>
            <h2>{ aleatorio }</h2>
        </>
    )


}