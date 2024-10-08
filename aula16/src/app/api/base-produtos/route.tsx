
import { NextResponse } from "next/server";

//CRIAR AQUI NESTE LOCAL OU TRAZER PARA CÁ A LISTA DE
//PRODUTOS E APRESENTAR ELA NO RETORNO DA API...
const produtos = [
    { id: 1, nome: "mouse", preco: 50, qtd: 100 },
    { id: 2, nome: "monitor", preco: 1500, qtd: 20 },
    { id: 3, nome: "teclado", preco: 130, qtd: 40 },
];

export async function GET() {
    return NextResponse.json(produtos);
}

export async function POST(request:Request) {

    const produto:TipoProduto = await request.json();

    //Gerando um novo ID para o produto:
    const novoId = produtos[produtos.length-1].id + 1;
    produto.id = novoId;

    produtos.push(produto);
    
    return NextResponse.json(produto, {status:201});
}
