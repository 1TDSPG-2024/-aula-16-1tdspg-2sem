import { NextResponse } from "next/server";

//CRIAR AQUI NESTE LOCAL OU TRAZER PARA CÁ A LISTA DE
//PRODUTOS E APRESENTAR ELA NO RETORNO DA API...
const produtos = [
    { id: 1, nome: "mouse", preco: 50, qntd: 100 },
    { id: 2, nome: "monitor", preco: 1500, qntd: 20 },
    { id: 3, nome: "teclado", preco: 150, qntd: 40 },
];

export async function GET(response:Response, {params}:{params:{id:number}}) {

    const produto = produtos.find( p => p.id == params.id);
    return NextResponse.json(produto);
}

