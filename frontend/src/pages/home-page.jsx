import { HeaderComponent } from "../components/_header"

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

    return(
        <div>
            <HeaderComponent
                navigation={navigation_header}
                buttons={buttons_header}
            />
        </div>
    )
}