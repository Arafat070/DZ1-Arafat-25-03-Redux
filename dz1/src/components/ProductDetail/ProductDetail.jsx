import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {

    const location = useLocation()
    const products = location.state

    return (
        <div >
            <h1>Детали товара</h1>
            <h2>Название: {products.name}</h2>
            <img src={products.picture} alt="image" />
            <h2>Описание: {products.description}</h2>
            <h2>Цена:{products.price}</h2>
        </div>
    );
};

export default ProductDetail;