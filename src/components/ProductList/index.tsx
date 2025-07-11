import { CardProduct } from '../CardProduct'
import { type ProductData } from '../../interfaces'

interface ProductListProps {
    products: ProductData[]
}

export const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className="grid grid-cols-3 gap-8">
            <CardProduct products={products} />
        </div>
    )
}
