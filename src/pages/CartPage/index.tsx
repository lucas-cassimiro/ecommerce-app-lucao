import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { CartEmpty } from "../../components/CartEmpty"

export const CartPage = () => {
    const { cart, productCartDecrement, productCartIncrement, removeProductFromCart } = useContext(CartContext)

    return (
        <div className="container">
            {cart.length === 0 && <CartEmpty />}
            {cart.map((item) => (
                <div>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <button onClick={() => removeProductFromCart(item)}>X</button>
                </div>
            ))}
        </div>
    )
}