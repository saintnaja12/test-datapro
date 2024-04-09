'use client'
import { useEffect, useState } from 'react';
// components
import NavBar from '../components/Navbar';
import Loading from '../components/Loading'
import CartSummary from '../components/Cart/CartSummary'
import Footer from '../components/Footer';
// route
import ProtectedRoute from '../router/ProtectedRoute'

export default function Cart() {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setIsLoading(false)
    }, [])

    return (
        <ProtectedRoute>
            <Loading isShowing={isLoading} />
            <NavBar title="Cart" isBack />
            <main className="flex min-h-screen flex-col mx-auto container">
                <div className='my-[72px] mx-5 grid desktop-lg:grid-cols-3 laptop-lg:grid-cols-2 tablet-lg:grid-cols-1 gap-5'>
                    <CartSummary />
                </div>
            </main>
            <Footer />
        </ProtectedRoute>
    );
}
