"use client"
import Image from 'next/image';
import excluirIcon from '../../images/excluir.png'
import { TypeProduto } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Produtos() {

    const [acess, setAcess] = useState(false);

    const [products, setProducts] = useState<TypeProduto[]>([])

    const navigation = useRouter()

    useEffect(()=>{
        const dataApi = async()=>{
            const resposta = await fetch("http://localhost:3001/dados-produtos")
            const dataB = await resposta.json()
            setProducts(dataB)
            console.log(dataB);

        }
        dataApi()
    },[])

    return(
        <main className='grow p-5 items-center'>
            <table className="w-2/3 m-auto bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
                <thead className="bg-yellow-400 text-white">
                    <tr>
                        <th className="py-2 px-4 text-left">Id</th>
                        <th className="py-2 px-4 text-left">Marca</th>
                        <th className="py-2 px-4 text-left">Nome</th>
                        <th className="py-2 px-4 text-left">Preço</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => (
                        <tr key={p.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-2 px-4">{p.id}</td>
                            <td className="py-2 px-4">{p.marca}</td>
                            <td className="py-2 px-4">{p.nome}</td>
                            <td className="py-2 px-4">{p.preco}</td>
                            <td className="flex justify-center items-center gap-2 py-2 px-4">
                                <Link title="Editar" href={`/produtos/alterar/${p.id}`}>Editar</Link>
                                {' | '}
                                <button>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}