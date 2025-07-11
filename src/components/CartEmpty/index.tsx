import { Link } from "react-router-dom"
import EmptyCart from '../../assets/carrinho-vazio.png'

export const CartEmpty = () => {
    return (
        <div className="flex flex-col items-center">
            <h1>Ops! Seu carrinho está vazio</h1>

            <Link to='/'>
                Voltar para produtos
            </Link>

            <img src={EmptyCart} alt="Carrinho vazio"/>
        </div>
    )
}