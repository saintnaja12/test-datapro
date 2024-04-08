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
            <main className="flex min-h-screen flex-col items-center justify-between ">
                <Loading isShowing={isLoading} />
                <NavBar title="Shopping App" />
                <div className='mt-[72px]'>
                    <CatalogList />
                </div>
            </main>
        </ProtectedRoute>
    );
}
