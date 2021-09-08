import reactDOM from 'react-dom'
import React from "react"
import "./index.css"


//const el = document.getElementById("root")

const tag  = <strong>Olá, REACT</strong>

reactDOM.render(
    <div>
        {tag}
    </div>,
    document.getElementById("root"))