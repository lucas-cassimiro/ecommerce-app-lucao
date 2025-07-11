import { type ProductData } from "../../interfaces"
import { Link } from "react-router-dom"

interface CardProductProps {
    products: ProductData[]
}

export const CardProduct = ({ products }: CardProductProps) => {
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
                        >
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}
