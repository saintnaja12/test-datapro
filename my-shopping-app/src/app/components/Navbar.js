'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
// icon
import { ShoppingCart, ArrowCircleLeft, TextAlignJustify } from "@phosphor-icons/react"
// store
import useStore from '../../store'
import Loading from "./Loading";

const NavBar = ({ isBack = false, title = 'default' }) => {
    const router = useRouter();
    const [dropdownSide, setDropdownSide] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { totalSelected } = useStore((state) => ({
        totalSelected: state.totalSelected,
    }));

    const goTo = () => {
        router.push('/cart');
    }

    const goBack = () => {
        router.back()
    }

    const logout = () => {
        localStorage.clear()
        router.push('/')
        setIsLoading(true)
    }

    return (
        <nav className="fixed w-full bg-a-primary-ee361f z-50">
            <Loading isShowing={isLoading} />
            <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="cursor-pointer">
                    {isBack ? (
                        <ArrowCircleLeft onClick={() => goBack()} className='text-2xl text-white' />
                    ) : (
                        <TextAlignJustify onClick={() => setDropdownSide(!dropdownSide)} className='text-2xl text-white' />
                    )
                    }
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    {title}
                </div>
                <div className="relative cursor-pointer" onClick={() => goTo()}>
                    {!isBack && (
                        <>
                            <ShoppingCart className='text-2xl text-white' />
                            <span className="absolute -top-1 left-4 bg-a-primary-ff9285 text-a-primary-660b00 text-10 me-2 p-1 rounded-full">{totalSelected}</span>
                        </>
                    )}
                </div>
            </div>
            {
                dropdownSide && (
                    <div onClick={() => logout()} className="absolute top-10 left-4 p-2 text-a-black-333333 bg-white rounded-10 cursor-pointer hover:bg-a-bg-F7F9F9 box-shadow">
                        Logout
                    </div>
                )
            }
        </nav>
    )
}

export default NavBar
