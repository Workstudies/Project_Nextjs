"use client"
import { TypeProduto } from "@/types"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
 
export default function Produto() {
 
 
    const navigate = useRouter()
    const { id } = useParams()
 
    const [produto, setProduto] = useState<TypeProduto>({
        id:0,
        marca:"",
        nome:"",
        preco:0
    })
 
    useEffect(
        () => {
            const chamadaApi = async () => {
                const response = await fetch(`http://localhost:3000/dados-produtos/${id}`)
                const data = await response.json()
 
                setProduto(data)
            }
            chamadaApi()
    }, [id])
 
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target
        setProduto({...produto,[name]:value})
    }
 
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
 
        try{
            const cabecalho = {
                method: 'PUT',
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(produto)
            }
 
            const response = await fetch(`http://localhost:3000/dados-produtos/${id}`,cabecalho)
            if(response.ok){
                alert("Produto atualizado com sucesso!")
                setProduto({id:0,marca:"",nome:"",preco:0})
                navigate.push('/produtos')
            }else{
                alert("Erro ao atualizar produto!")
            }
        }catch(error){
            console.log("Erro ao atualizar o produto",error);
           
        }
    }
        return(
            <main className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
                <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6" >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edição de produto</h2>
                    <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="idNome" className="block text-gray-700 mb-1">Nome</label>
                <input
                    type="text"
                    name="nome"
                    id="idNome"
                    value={produto.nome}
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
                    value={produto.marca}
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
                    value={produto.preco}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
            </div>
            <button type="submit"
                className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition duration-200">Editar</button>
        </form>
    </div>
 
            </main>
        )
 
 
 
 
 
 
 
 
}