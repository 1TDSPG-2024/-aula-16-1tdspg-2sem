
export default function CadProduto() {

    return (
        <div>
            <h2>Cadastro de Produtos</h2>

            <div>
                <form className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label
                            htmlFor="idProduto"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                        >
                           Nome Produto
                        </label>
                        <input
                            type="text"
                            id="idProduto"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            name="nome" value=""/>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="idPreco"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                        >
                            Preço Produto
                        </label>
                        <input
                            type="number"
                            id="idPreco"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            name="preco"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="idQtd"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                        >
                            Quantidade Produto
                        </label>
                        <input
                            type="number"
                            id="idQtd"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            name="qtd"
                        />
                    </div>
         
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
