import { useContext, useState } from 'react' //useState é um hook do React, usado para criar variáveis que mudam o valor na tela (ou seja, estado).
import { Link } from 'react-router-dom'

// Aqui, ele está importando imagens que serão usadas no cabeçalho.
import Logo from '../../assets/logo.png'
import Cart from '../../assets/cart.png'
import Menu from '../../assets/menu.png'
import User from '../../assets/user.png'
// import Close from '../../assets/close.png'

//Aqui está importando outro componente chamado MenuMobile, que provavelmente mostra o menu quando você está no celular.
import { MenuMobile } from '../MenuMobile'
import { CartContext } from '../../contexts/CartContext'

//Isso é uma lista de objetos que representa os links do menu de navegação.
//Cada item tem um name (texto do link) e uma url (para onde vai quando clica).
const navLinks = [
    { name: 'Home', url: '/' },
    { name: 'Sobre', url: '/sobre' },
    { name: 'Produtos', url: '/produtos' },
    { name: 'Perguntas frequentes', url: '/perguntas-frequentes' },
    { name: 'Fale conosco', url: '/fale-conosco' },
]

//Aqui é criado um estado chamado menu, que começa como false.
//false significa que o menu não está visível.
//setMenu é a função que muda o valor de menu.
export const Header = () => {
    const [menu, setMenu] = useState(false)
    const { cart } = useContext(CartContext)

    // /Tudo dentro de return (...) é o que será exibido na página.
    return (
        <header className="border-b border-purple-light py-5 mb-20">
            <div className="container flex items-center justify-between">
                <div className="flex gap-4">
                    <button className="sm:hidden" onClick={() => setMenu(true)}>
                        <img src={Menu} alt="Menu de navegação" />
                    </button>
                    <Link to='/'>
                        <img src={Logo} alt="Logo da empresa Dev em Dobro" />
                    </Link>
                </div>

                <MenuMobile menu={menu} setMenu={setMenu} navLinks={navLinks} />

                <nav className="hidden sm:block">
                    <ul className="flex gap-10">
                        {navLinks.map((nav, index) => (
                            <li key={index}>
                                <Link to={nav.url}>{nav.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="bg-purple-light px-8 py-4 rounded-sm hidden sm:block cursor-pointer">
                        Entrar ou cadastrar-se
                    </button>
                    <button className="sm:hidden">
                        <img className='cursor-pointer' src={User} alt="Ícone de usuário" />
                    </button>
                    <div className='relative'>
                        <Link to='/cart'>
                            <img className='cursor-pointer' src={Cart} alt="Ícone do carrinho de compras" />
                        </Link>
                        <p className='absolute rounded-full px-2 py-0.5 bg-purple-light top-3 left-3 text-xs'>{cart.length}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
