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
            <main className="flex min-h-screen flex-col items-center justify-between ">
                <Loading isShowing={isLoading} />
                <NavBar title="Cart" isBack />
                <div className='mt-[72px]'>
                    <CartSummary />
                </div>
                <Footer />
            </main>
        </ProtectedRoute>
    );
}
