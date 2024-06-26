'use client'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
// store
import useStore from '../../../store'
// component
import Button from "../Button";
// lib
import StarRatings from 'react-star-ratings';
// model
import Product from '../../../core/Product/models/ProductModel';

const CatalogList = () => {
    const [productList, setProductList] = useState([])

    const { products, setProducts, addToCart, removeFromCart } = useStore((state) => ({
        products: state.products,
        setProducts: state.setProducts,
        addToCart: state.addToCart,
        removeFromCart: state.removeFromCart,
    }));

    const add = (data) => {
        const updatedProducts = products.map(product =>
            product.id === data.id ? new Product({ ...product }) : product
        );
        setProducts(updatedProducts);
        addToCart(data)
        setProductList(updatedProducts)
        Swal.fire({
            title: `Added ${data.title} to cart.`,
            confirmButtonColor: "#ee361f",
            confirmButtonText: "OK",
        })

    };

    useEffect(() => {
        setProductList(products)
    }, [products.length > 0])

    return (
        <>
            {
                productList.length > 0
                ? productList.map((product, idx) => (
                    <div key={product.id} className="bg-white p-4 flex items-center gap-3 rounded-10">
                        <img className="object-contain aspect-square max-h-[160px] rounded-5 border border-a-gray-F4F4F4" src={product.image} alt={product.title} />
                        <div className="w-full flex flex-col gap-2">
                            <div className="text-16 text-a-black-333333 font-semibold h-12 line-clamp-2">{product.title}</div>

                            {/* <div className="text-12 line-clamp-2 text-a-black-666666">{product.description}</div> */}
                            {/* <div className="text-12 text-a-primary-660b00 underline underline-offset-1 cursor-pointer">See more</div> */}

                            <div className="flex justify-between items-center gap-4">
                                <div className="text-14 text-a-black-333333 font-semibold">{product.getFormattedPrice()}</div>
                            </div>
                            <div className='flex flex-col tablet-sm:flex-row items-start tablet-sm:items-end gap-1'>
                                <StarRatings
                                    starRatedColor="#ee361f"
                                    rating={product.rating.rate}
                                    starDimension="12px"
                                    starSpacing="2px"
                                />
                                <div className='text-12'>
                                    {product.rating.count} pieces sold
                                </div>
                            </div>
                            <Button
                                onClick={() => add(product)}
                                customClass={`mt-1 rounded-full py-1 px-3 text-14 font-semibold h-[40px] text-white bg-a-primary-ee361f hover:bg-a-primary-ff6653 duration-200`}
                            >
                                Add to cart
                            </Button>
                        </div>
                    </div>
                ))
                : <div className='text-center'>
                    No Item
                </div>
            }
        </>
    )
}

export default CatalogList
