'use client'
import { useEffect, useState } from 'react';
// store
import useStore from '../../store'
// service
import { fetchProducts } from '../../core/Product/service/ProductService';
// components
import NavBar from '../components/Navbar';
import CatalogList from '../components/Catalog/CatalogList';
import Loading from '../components/Loading'
// route
import ProtectedRoute from '../router/ProtectedRoute'

export default function Catalog() {
    const [isLoading, setIsLoading] = useState(false)
    const { products, setProducts } = useStore((state) => ({
        products: state.products,
        setProducts: state.setProducts,
    }));

    async function fetchData() {
        setIsLoading(true)
        const response = await fetchProducts()
        if(response){
            setIsLoading(false)
            setProducts(response)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <ProtectedRoute>
            <Loading isShowing={isLoading} />
            <NavBar title="Shopping App" />
            <main className="flex min-h-screen flex-col mx-auto container">
                <div className='my-[72px] mx-5 grid desktop-lg:grid-cols-3 laptop-lg:grid-cols-2 tablet-lg:grid-cols-1 gap-5'>
                    <CatalogList />
                </div>
            </main>
        </ProtectedRoute>
    );
}
