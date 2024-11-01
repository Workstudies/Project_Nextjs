"use client"

import { TypeProduto } from "@/types"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CadastroProduto(){

    const navigate = useRouter()

    const [product, setProduct] = useState<TypeProduto>({
        id: 0,
        marca: "",
        nome:"",
        preco:0
    })

    const changeProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {title, value} = e.target
        setProduct({...product, [title]: value})
    }

    

    const submitProduct = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const header = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(product)
        }

        try{
        const response = await fetch(`http://localhost:3000/api/dados-produtos`, header)

            if(response.ok){
                setProduct({id: 0, marca: "",nome: "", preco:0})
                navigate.push('/produtos/produto')
            } else{
                alert("Não foi possível cadastrar o produto");
            }
        } catch(error){
            console.error("Erro ao realizar cadastro", error)
        }


    }


    return(
        <main>
            <h1>Cadastrado de Produtos PowerHub</h1>
            <p>Realização do cadastro dos produtos personalizados</p>
            <p>Insira os dados necessários: </p>
            <form onSubmit={submitProduct}>
                <div>
                    <label>Marca do produto</label>
                    <input type="text" title="marca" id="idMarca" value={product.marca} onChange={changeProduct}/>
                </div>
                <div>
                    <label>Nome do produto</label>
                    <input type="text" title="nome" id="idNome" value={product.nome} onChange={changeProduct} />
                </div>
                <div>
                    <label>Valor do preço</label>
                    <input type="number" title="preco" id="idPreco" value={product.preco} onChange={changeProduct}/>
                </div>
                <button type="submit">Cadastra</button>
            </form>
        
        
        </main>
        
    )
}