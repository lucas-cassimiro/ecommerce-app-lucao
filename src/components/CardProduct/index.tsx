import { type ProductData } from "../../interfaces"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

interface CardProductProps {
    products: ProductData[]
}

export const CardProduct = ({ products }: CardProductProps) => {
    const { addProductIntoCart } = useContext(CartContext)

    return (
        <>
            {products.map((product) => (
                <div key={product.id} className="flex flex-col gap-4">
                    <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.name} />
                    </Link>

                    <div className="flex flex-col bg-purple-dark py-10 px-5 rounded-b-[20px] mb-20">
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                        <div>
                            <p>Cor: {product.color}</p>
                            {product.size && <p>Tamanho: {product.size}</p>}
                            {!product.size && <p>Tamanho: único</p>}
                        </div>
                        <p className="self-end text-green-gram text-2xl p-3n">
                            R$ {product.price},00
                        </p>
                        <button
                            type="button"
                            className="bg-purple-light py-4 rounded-sm cursor-pointer"
                            onClick={() => addProductIntoCart(product)}
                        >
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}
