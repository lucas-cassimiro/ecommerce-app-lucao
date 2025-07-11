import { Routes, Route } from 'react-router-dom'
import { HomePage } from './HomePage'
import { MainPage } from './MainPage'
import { ProductDetail } from './ProductDetail'
import { CartPage } from './CartPage'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/product/:id' element={<ProductDetail />}/>
                <Route path='/cart' element={<CartPage />}/>
            </Route>
        </Routes>
    )
}

// query param => enviando uma informação na URL, enviando um parâmetro na URL
