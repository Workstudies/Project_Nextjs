import { TypeProduto } from "@/types";
import { promises as f} from "fs";
import { NextResponse } from "next/server";
 
 
async function readProducts(): Promise<TypeProduto[]> {
    const file = await f.readFile(process.cwd() + '/src/data/banco.json', 'utf-8');
    return JSON.parse(file);
}
 
async function writeProducts(produtos: TypeProduto[]): Promise<void> {
    await f.writeFile(process.cwd() + '/src/data/banco.json', JSON.stringify(produtos));
}
 
export async function GET(request:Request, {params}:{params:{id:number}}) {
    const products = await readProducts();
    const product = products.find(p=>p.id==params.id);
 
    return NextResponse.json(product);
   
}
 
export async function PUT(request:Request, {params}:{params:{id:number}}) {
    try{
        const products = await readProducts()
        const index = products.findIndex(p=>p.id==params.id)
        if(index != -1){
            const body = await request.json()
            products[index] = {...products[index], ...body};
            await writeProducts(products);
            return NextResponse.json(products[index]);
        } else{
            return NextResponse.json({msg: 'Produto não encontrado'}, {status: 404});
        }
    }catch(error){
        return NextResponse.json({msg: "Erro ao atualizar produto"}, {status: 500});
    }
   
}
 
export async function DELETE(request: Request, { params }: { params: { id: number } }) {
    try {
        const produtos = await readProducts();
        const index = produtos.findIndex(p => p.id === params.id);
 
        if (index !== -1) {
            produtos.splice(index, 1);
            await writeProducts(produtos);
            return NextResponse.json({ msg: "Produto apagado com sucesso!" });
        } else {
            return NextResponse.json({ msg: 'Produto não encontrado' }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ msg: "Erro ao apagar o produto: " + error }, { status: 500 });
    }
}