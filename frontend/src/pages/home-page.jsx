import { HeaderComponent } from "../components/_header"
import { MainProducts } from "./main-products"

export const HomePage = () => {
    const navigation_header = [
        { name: "Home" },
        { name: "Produtos" },
        { name: "Contatos" },
        { name: "Sobre nós" },
    ]

    const buttons_header = [
        { 
            name: "Login", 
            onClick: () => alert("Login"),
            className: "bg-blue-500 text-white p-2 rounded-md"
        },
        { 
            name: "Cadastrar", 
            onClick: () => alert("Cadastrar"),
            className: "bg-green-500 text-white p-2 rounded-md"
        },

    ]

    const product_data = [
        { name: "Produto 1", description: "Descrição do produto 1", price: 100 },
        { name: "Produto 2", description: "Descrição do produto 2", price: 200 },
        { name: "Produto 3", description: "Descrição do produto 3", price: 300 },
        { name: "Produto 4", description: "Descrição do produto 4", price: 400 },
        { name: "Produto 5", description: "Descrição do produto 5", price: 500 },
    ]

    return(
        <div>
            <HeaderComponent
                navigation={navigation_header}
                buttons={buttons_header}
            />

            <div className="flex justify-center place-items-center w-full border h-[450px] bg-gray-200">
                Carrosel de imagens
            </div>

            <MainProducts
                product_data={product_data}
            />

        </div>
    )
}