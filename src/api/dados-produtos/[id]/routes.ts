import { TypeProduto } from "@/types";
import { promises as fs } from "fs"
import { NextResponse } from "next/server";

export async function GET(request:Request, {params}:{params:{id:number}}) {

    const fl = await fs.readFile(process.cwd() + '/src/data/banco.json', 'utf-8');
    const products:TypeProduto[] = JSON.parse(fl);

    const product = products.find(p=> p.id == params.id);
    return NextResponse.json(product);

    
}

export async function PUT(request:Request, {params}: {params:{id:number}})  {
    try{
        const fl = await fs.readFile(process.cwd() + '/src/data/banco.json', 'utf-8')
        const products:TypeProduto[] = JSON.parse(fl)
        const index = products.findIndex(p => p.id == params.id)
        if(index != -1){
            const bd = await request.json()
            products.splice(index, 1, bd)
            await fs.writeFile(process.cwd() + '/src/data/banco.json', JSON.stringify(products))
            return NextResponse.json(products[index])
        }
    } catch(error){
        return NextResponse.json({msg: "Não foi possível atualizar" + error}, {status:500})
    }
    
}

export async function DELETE(request:Request, {params}: {params:{id:number}}) {
    try{
        const fl = await fs.readFile(process.cwd()+ '/src/data/banco.json', 'utf-8')
        const products:TypeProduto[] = JSON.parse(fl)
        const index = products.findIndex(p=> p.id == params.id)
        if(index != -1){
            products.splice(index, 1)
            await fs.writeFile(process.cwd() + '/src/data/banco.json', JSON.stringify(products))
            return NextResponse.json({msg: "Deletado com sucesso"})
        }
    } catch(error){
        return NextResponse.json({msg: "Não foi possível deletar" + error})
    }
    
}