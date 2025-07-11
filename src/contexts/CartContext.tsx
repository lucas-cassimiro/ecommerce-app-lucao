import { createContext, type ReactNode, useState } from "react"
import { type ProductData } from "../interfaces"

interface Products extends ProductData {
    quantity: number
}

interface CartContextProps {
    cart: Products[]
    addProductIntoCart: (product: ProductData) => void
    removeProductFromCart: (product: Products) => void
    productCartIncrement: (product: Products) => void
    productCartDecrement: (product: Products) => void
}

export const CartContext = createContext({} as CartContextProps)

export const CartProvider = ({ children } : { children: ReactNode}) => {
    const [cart, setCart] = useState<Products[]>([])

    console.log(cart)

    function addProductIntoCart(product: ProductData): void {
        const productExistentInCart = cart.find(item => item.id === product.id && item.name === product.name)

        if (productExistentInCart) {
            const newCart = cart.map(item => {
                if (item.id === product.id) {
                    const quantity = item.quantity + 1

                    return {
                        ...item,
                        quantity
                    }
                }

                return item
            })

            setCart(newCart)

            return
        }

        const newProduct = { ...product, quantity: 1 }
        const newCart = [ ...cart, newProduct ]

        setCart(newCart)
    }

    function removeProductFromCart(product: Products): void {
        const newCart = cart.filter(item => !(item.id === product.id && item.name === product.name))

        setCart(newCart)
    }

    function updateProductQuantity(product: Products, newQuantity: number): void {
        if (newQuantity <= 0) return

        const productExistentInCart = cart.find(item => item.id === product.id && item.name === product.name)

        if (!productExistentInCart) return

        const newCart = cart.map(item => {
            if (item.id === product.id && item.name === product.name) {
                return {
                    ...item,
                    quantity: newQuantity
                }
            }

            return item
        })

        setCart(newCart)
    }

    function productCartIncrement(product: Products): void {
        updateProductQuantity(product, product.quantity + 1)
    }

    function productCartDecrement(product: Products): void {
        updateProductQuantity(product, product.quantity - 1)
    }


    return (
        <CartContext.Provider value={{ cart, addProductIntoCart, productCartDecrement, productCartIncrement, removeProductFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

// estado interno do próprio carrinho de compras que armazena os produtos do carrinho - [x]
// adicionar o produto ao carrinho - [x]
// remove um produto do carrinho - [x]
// incrementa a quantidade desse produto no carrinho - [x]
// decrementa a quantidade desse produto no carrinho - [x]
