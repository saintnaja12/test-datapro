
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
// store
import useStore from '../../../store'
// icon
import { PlusCircle, MinusCircle, Trash } from "@phosphor-icons/react"

const CartSummary = () => {

    const [cartList, setCartList] = useState([])

    const { cart,  addToCart, minusFromCart, removeFromCart } = useStore((state) => ({
        cart: state.cart,
        addToCart: state.addToCart,
        minusFromCart: state.minusFromCart,
        removeFromCart: state.removeFromCart,
    }));

    const add = (data) => {
        addToCart(data)
    };

    const minus = (data) => {
        if(data.quantity == 1) {
            Swal.fire({
                title: "Do you want to remove from cart?",
                showCancelButton: true,
                confirmButtonColor: "#ee361f",
                confirmButtonText: "Yes",
            }).then((result) => {
                if (result.isConfirmed) {
                    minusFromCart(data)
                }
            })
        }else {
            minusFromCart(data)
        }
    };

    const remove = (data) => {
        Swal.fire({
            title: "Do you want to remove from cart?",
            showCancelButton: true,
            confirmButtonColor: "#ee361f",
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(data)
                Swal.fire("Saved!", "", "success");
            }
        });
    };

    useEffect(() => {
        setCartList(cart)
    }, [cart])

    return (
        <>
            {
                cartList.length > 0 ? (
                    <>
                        {
                            cartList.map((item, idx) => (
                                <div key={item.id} className={`mb-4 bg-white p-4 flex gap-3 rounded-10`}>
                                    <img className="object-contain aspect-square max-h-[160px] rounded-5 border border-a-gray-F4F4F4" src={item.image} alt={item.title} />
                                    <div className="relative w-full flex flex-col justify-items-stretch gap-2">
                                        <div className="text-16 text-a-black-333333 font-semibold h-12 line-clamp-2">{item.title}</div>

                                        <div className="flex justify-between items-center gap-4">
                                            <div className="text-14 text-a-black-333333 font-semibold">{item.getFormattedPrice()}</div>
                                        </div>
                                        <div className='absolute bottom-0 w-full flex justify-between'>
                                            <div className='flex justify-between items-center w-[108px]'>
                                                <MinusCircle onClick={() => minus(item)} className='cursor-pointer text-32 text-a-primary-ee361f' />
                                                <div className='font-semibold'>{item.quantity}</div>
                                                <PlusCircle onClick={() => add(item)} className='cursor-pointer text-32 text-a-primary-ee361f' />
                                            </div>
                                            <Trash onClick={() => remove(item)} className='cursor-pointer text-32 text-a-primary-ee361f'></Trash>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                ) : (
                    <div className='text-center'>No Item</div>
                )
            }
        </>
    )
}

export default CartSummary
