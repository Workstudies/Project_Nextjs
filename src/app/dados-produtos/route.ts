import {promises as f} from "fs";
import { NextResponse } from "next/server";
import { TypeProduto } from "@/types";
 
 
async function readData(): Promise<TypeProduto[]>{
    const file = await f.readFile(process.cwd() + '/src/data/banco.json', 'utf-8')
    return JSON.parse(file) as TypeProduto[];
}
 
async function writeData(data: TypeProduto[]):Promise<void> {
    const json = JSON.stringify(data);
    await f.writeFile(process.cwd() + '/src/data/banco.json', json)
   
}
   
 
export async function GET() {
    const products = await readData();
    return NextResponse.json(products);
}
 
export async function POST(request:Request) {
    const dataB = await readData();
    const {marca, nome, preco} = await request.json();
    const object = {marca,nome,preco, id:Number(Date.now())} as TypeProduto;
 
    dataB.push(object);
    await writeData(dataB);
 
    return NextResponse.json(object);
   
}