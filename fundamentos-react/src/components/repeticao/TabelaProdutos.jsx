import React from "react";
import produtos from '../../data/produtos'
import './TabelaProdutos.css'
export default props => {
    const produtosJSX = produtos.map((produto) => {
        return (
            <tr key={produto.id}>
                <td>
                    {produto.id}
                </td>
                <td>
                    {produto.nome}
                </td>
                <td>
                    {produto.preco}
                </td>
            </tr>
        )
    })


    return (
        <div className = "TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nome</td>
                        <td>Preço</td>
                    </tr>
                </thead>
                {produtosJSX}
            </table>
        </div>
    )
}