'use client'
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
// icon
import { Notepad } from "@phosphor-icons/react"
// store
import useStore from '../../store'
// components
import Button from './Button';

const Footer = () => {

    const router = useRouter()
    const { totalSelected, totalPrice, clearCart } = useStore((state) => ({
        totalSelected: state.totalSelected,
        totalPrice: state.totalPrice,
        clearCart: state.clearCart,
    }));

    const checkout = () => {
        if(totalSelected > 0) {
            Swal.fire({
                title: "Do you want to checkout cart?",
                showCancelButton: true,
                confirmButtonColor: "#ee361f",
                confirmButtonText: "Yes",
            }).then((result1) => {
                if(result1.isConfirmed){
                    Swal.fire({
                        title: "Checkout Success!",
                        confirmButtonColor: "#ee361f",
                        text: `Payable amount ${totalPrice}`,
                        icon: "success"
                    }).then((result2) => {
                        if (result2.isConfirmed) {
                            clearCart()
                            router.push('/catalog')
                        }
                    });
                }
            })
        }else {
            Swal.fire({
                title: "Please add item to cart ",
                confirmButtonColor: "#ee361f",
                icon: "warning"
            })
        }
    }

    return (
        <nav className="fixed bottom-0 w-full bg-white z-50">
            <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4 text-18">
                <div className="flex gap-2 text-a-black-333333">
                    <Notepad className="text-2xl text-a-primary-ee361f " />
                    Total Amount ({totalSelected} item)
                </div>
                <div className='flex items-center gap-4'>
                    <div className="text-a-primary-ee361f font-semibold">
                        Payable amount {totalPrice}
                    </div>
                    <Button
                        onClick={() => checkout()}
                        customClass={`mt-1 rounded-full py-1 px-3 text-14 font-semibold h-[40px] text-white bg-a-primary-ee361f hover:bg-a-primary-ff6653 duration-200`}
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Footer
