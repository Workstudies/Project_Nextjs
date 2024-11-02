"use client";
import { TypeProduto } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ConfirmDeleteModal from "./DeleteModal";

export default function Produtos() {
    const [open, setOpen] = useState(false);
    const [idDelete, setIdDelete] = useState(0);
    const [products, setProducts] = useState<TypeProduto[]>([]);
    const navigation = useRouter();

    const idModal = (id: number) => {
        setOpen(true);
        setIdDelete(id);
    };

    // Carregar dados dos produtos da API
    useEffect(() => {
        const dataApi = async () => {
            try {
                const response = await fetch("http://localhost:3000/dados-produtos");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Erro ao buscar os produtos", error);
            }
        };
        dataApi();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3000/dados-produtos/${id}`, { method: 'DELETE' });
            if (response.ok) {
                setOpen(false);
                window.location.reload();
            } else {
                setOpen(false);
                alert("Erro ao deletar produto");
                navigation.push('/produtos');
            }
        } catch (error) {
            console.error("Falha ao apagar", error);
        }
    };

    return (
        <main className="grow p-5 items-center">
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
                    {products.map((p) => (
                        <tr key={p.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-2 px-4">{p.id}</td>
                            <td className="py-2 px-4">{p.marca}</td>
                            <td className="py-2 px-4">{p.nome}</td>
                            <td className="py-2 px-4">{p.preco}</td>
                            <td className="flex justify-center items-center gap-2 py-2 px-4">
                                <Link title="Editar" href={`/produtos/alterar/${p.id}`} className="text-blue-600">Editar</Link>
                                {' | '}
                                <button onClick={() => idModal(p.id)} className="text-red-600">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ConfirmDeleteModal
                open={open}
                onClose={() => setOpen(false)}
                onConfirm={() => handleDelete(idDelete)}
            />
        </main>
    );
}
