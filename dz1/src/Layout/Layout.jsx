import React from 'react';
import ProductList from '../Components/ProductList/ProductList';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/">Каталог</NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default Layout;