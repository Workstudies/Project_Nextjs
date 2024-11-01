import { TypeProduto } from "@/types";
import { promises as fs } from "fs"
import { NextResponse } from "next/server";
export async function GET() {
    const fl = await fs.readFile(process.cwd() + '/src/data/banco.json', 'utf-8');
    const products = JSON.parse(fl)

    return NextResponse.json(products);
    
}

export async function POST(request:Request) {

    const fl = await fs.readFile(process.cwd() + '/src/data/banco.json', 'utf-8')
    const dataB = JSON.parse(fl)
    const {marca, nome, preco} = await request.json()
    const product = {marca, nome, preco} as TypeProduto
    product.id = Number(Date.now())
    dataB.push(product)
    const json = JSON.stringify(dataB)
    await fs.writeFile(process.cwd() + '/src/data/banco.json', json)
    return NextResponse.json(product)
    
}