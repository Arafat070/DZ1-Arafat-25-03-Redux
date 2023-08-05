import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import ProductList from './Components/ProductList/ProductList'
import ProductDetail from './Components/ProductDetail/ProductDetail'


function App() {


    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<ProductList />} />
                    <Route path='/detail' element={<ProductDetail />} />
                </Route>
            </Routes >
        </>
    )
}

export default App