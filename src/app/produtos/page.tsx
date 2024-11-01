"use client"
import { TypeProduto } from "@/types"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Produto(){

    const[list, setList] = useState<TypeProduto[]>([])

    useEffect(()=>{
        const callApi = async ()=>{
            const response = await fetch(`http://localhost:3000/api/dados-produtos`)
            const dataB = await response.json()
            setList(dataB);
            console.log(dataB);
        }
        callApi()
    }, [])



    return(
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Id Produto</th><th>Marca</th><th>Nome</th><th>Preço</th><th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(p=>(
                            <tr>
                                <td>{p.id}</td>
                                <td>{p.marca}</td>
                                <td>{p.nome}</td>
                                <td>{p.preco}</td>
                                <td><Link href={`/produtos/alterar/${p.id}`}>Alterar</Link></td>

                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5}>Total de Produtos Cadastrados: {list.length}</td>
                    </tr>
                </tfoot>
            </table>
        </main>

    )
}