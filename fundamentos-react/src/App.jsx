import React from "react";

import "./App.css"
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
// export default function App(props){}


export default props =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo=" #10 - Comunicação indireta" color="#8BAD39">
                <IndiretaPai>

                </IndiretaPai>
            </Card>
            <Card titulo=" #09 - Comunicação direta" color="#59322C">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo=" #08 - Renderização condicional" color="#982395">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: "otávio" }}></UsuarioInfo>
                <UsuarioInfo usuario={{ nome: "otávio@.com" }}></UsuarioInfo>
            </Card>
            <Card titulo=" #07 - Desafio de repetição com produtos" color="#3A9AD9">
                <TabelaProdutos>

                </TabelaProdutos>
            </Card>

            <Card titulo=" #06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo=" #05 - Componentes com filhos" color="#00C8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" ></FamiliaMembro>
                    <FamiliaMembro nome="Ana"></FamiliaMembro>
                    <FamiliaMembro nome="João"></FamiliaMembro>
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#080">
                <Aleatorio min={1.0} max={10} />
            </Card>
            <Card titulo="Fragmento">
                <Fragmento />
            </Card>
            <Card titulo="#03 - com parâmetro">
                <ComParametro titulo="Segundo componente"
                    subtitulo="muito legal"
                    nota={5.0} />
            </Card>
            <Card titulo="#02 - Primeiro componente">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>

