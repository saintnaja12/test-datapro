
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
// store
import useStore from '../../../store'
// components
import Button from '../Button';
// model
import Product from '../../../core/Product/models/ProductModel';

const CartSummary = () => {

    const [cartList, setCartList] = useState([])

    const { cart, products, setProducts, removeFromCart } = useStore((state) => ({
        cart: state.cart,
        products: state.products,
        setProducts: state.setProducts,
        removeFromCart: state.removeFromCart,
    }));

    const remove = (data) => {
        Swal.fire({
            title: "Do you want to remove from cart?",
            showCancelButton: true,
            confirmButtonColor: "#ee361f",
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedProducts = products.map(product =>
                    product.id === data.id ? new Product({ ...product, selected: false }) : product
                );
                setProducts(updatedProducts);
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
                                <div key={item.id} className={`mb-4 bg-white p-4 flex gap-3 max-w-500px rounded-10 ${cartList.length  == idx + 1 && 'mb-[70px]'}`}>
                                    <img className="object-contain aspect-square max-h-[160px] rounded-5 border border-a-gray-F4F4F4" src={item.image} alt={item.title} />
                                    <div className="relative w-full flex flex-col justify-items-stretch gap-2">
                                        <div className="text-16 text-a-black-333333 font-semibold h-12 line-clamp-2">{item.title}</div>

                                        <div className="flex justify-between items-center gap-4">
                                            <div className="text-14 text-a-black-333333 font-semibold">{item.getFormattedPrice()}</div>
                                        </div>
                                        <Button
                                            onClick={() => remove(item)}
                                            customClass={`absolute bottom-0 w-full mt-1 rounded-full py-1 px-3 text-14 font-semibold h-[40px] text-a-primary-ee361f bg-white border border-a-primary-ee361f hover:bg-a-bg-F7F9F9 duration-200`}
                                        >
                                            Remove from cart
                                        </Button>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                ) : (
                    <>No Item</>
                )
            }
        </>
    )
}

export default CartSummary
