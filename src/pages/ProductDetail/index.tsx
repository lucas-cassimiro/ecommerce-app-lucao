import { useParams } from "react-router-dom"
import { products } from "../../mocks"

export const ProductDetail = () => {
    const { id } = useParams()

    const productFiltered = products.find(item => item.id === Number(id))
    const similarProducts = products.filter(item => item.category === productFiltered?.category).slice(0, 4)

    console.log(similarProducts)

    return (
        <div className="container flex flex-col gap-8">
            <div className="flex gap-16">
                <img src={productFiltered?.image} alt={productFiltered?.name} />
                <div className="flex flex-col gap-6">
                    <p>{productFiltered?.name}</p>

                    <div>
                        <p>Cor: {productFiltered?.color}</p>
                        <p>Tamanho: {productFiltered?.size}</p>
                    </div>

                    <p>{productFiltered?.price}</p>
                    <p>Descrição</p>
                    <button>Adicionar ao carrinho</button>
                </div>
            </div>

            <p className="text-2xl">Produtos semelhantes</p>

            <div className="flex gap-8 justify-between">
                {similarProducts.map(product => (
                    <img src={product.image} alt={product.name} className="w-[270px]"/>
                ))}
            </div>
        </div>
    )
}

// useParams
// uuid => string '23948934uasuash'
// id => number

