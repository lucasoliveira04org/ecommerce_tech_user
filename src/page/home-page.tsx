import { Header } from "../components/header"

export const HomePage = () => {
    const navigation = [
        { label: 'Home', href: '/' },
        { label: 'Produtos', href: '/products' },
        { label: 'Contatos', href: '/contact' },
        { label: 'Sobre nós', href: '/about'}
      ];

    const social_media = [
        { name: 'facebook', href: 'https://www.facebook.com/lucas.oliveiracampos.19' },
        { name: 'twitter', href: 'https://x.com/lucasoli04' },
        { name: 'instagram', href: 'https://www.instagram.com/lucasoliveira.04_/' }
    ]

    return(
        <>
            <Header
                title={"Name Bussiness"}
                navigation={navigation}
                social_medias={social_media}
            />
        </>
    )
}