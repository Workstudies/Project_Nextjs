"use client"

import { TypeProduto } from "@/types"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CadastroProduto(){

    const navigate = useRouter()

    const [product, setProduct] = useState<TypeProduto>({id: 0,marca: "",nome:"",preco:0})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setProduct({...product, [name]: value})
    }

    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const header = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(product)
        }

        try{
            const response = await fetch('/dados-produtos', header)

            if(response.ok){
                setProduct({id: 0, marca: "",nome: "", preco:0})
                navigate.push('/produtos')
            } else{
                alert("Não foi possível realizar a operação");
            }
        } catch(error){
            console.error("Erro ao realizar cadastro", error)
        }


    }


    return(
        <main className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
    <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cadastro PowerHub</h2>
        <p className="text-gray-600 mb-6">Informe os dados do produto novo da loja:</p>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="idNome" className="block text-gray-700 mb-1">Nome</label>
                <input
                    type="text"
                    name="nome"
                    id="idNome"
                    value={product.nome}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="idMarca" className="block text-gray-700 mb-1">Marca</label>
                <input
                    type="text"
                    name="marca"
                    id="idMarca"
                    value={product.marca}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="idPreco" className="block text-gray-700 mb-1">Preço</label>
                <input
                    type="number"
                    name="preco"
                    id="idPreco"
                    value={product.preco}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition duration-200"
            >
                Cadastrar
            </button>
        </form>
    </div>
</main>

    )
}