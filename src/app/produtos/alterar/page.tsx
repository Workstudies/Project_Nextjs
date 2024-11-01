"use client"

import { TypeProduto } from "@/types"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

export default function Alterar({params}: {params: {id:number}}){

    const navigate = useRouter()

    const [product, setProduct] = useState<TypeProduto>({
        id: 0,
        marca:"",
        nome:"",
        preco: 0

    })

    const idProduto = params.id

    useEffect(
        ()=>{
            const callApi = async ()=>{
                const response = await fetch(`http://localhost:3000/api/dados-produtos/${idProduto}`)
                const dataB = await response.json()
                setProduct(dataB)
                console.log(dataB);
            }
            callApi()
        }, [idProduto]
    )

    const changeProduct = (e:React. ChangeEvent<HTMLInputElement>)=>{
        const{title, value} = e.target
        setProduct({...product, [title]:value})
    }

    const submitProduct = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()


        try{
            const header = {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(product)
            
            }

        
            const response = await fetch(`http://localhost:3000/api/dados-produtos/${idProduto}`, header)
            if(response.ok){
                setProduct({id:0, marca:"", nome:"", preco:0})
                navigate.push('/produto')
            }else{
                alert("Erro ao atualizar produto")
            }
        }catch(error){
            console.log("Erro ao atualizar o produto", error)
        }
    }

    

    return(
        <main>
            <h2>Produto</h2>
            <form>
                <div>
                    <label htmlFor="idMarca">Marca</label>
                    <input type="text" title="marca" id="idmarca" value={product.marca}/>
                </div>
                <div>
                    <label htmlFor="idnome">Nome</label>
                    <input type="text" title="nome" id="idnome" value={product.nome}  />
                </div>
                <div>
                    <label htmlFor="idpreco">Preço</label>
                    <input type="number" title="preco" id="idpreco" value={product.preco} />
                </div>
                <button type="submit">Editar produtos</button>
            </form>
        </main>

    )
}