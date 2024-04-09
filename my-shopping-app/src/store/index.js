// store.js
import create from 'zustand';
// import { devtools } from 'zustand/middleware'
// model
import Product from '../core/Product/models/ProductModel';

const useStore = create((set) => ({
    // Initial state
    products: [],
    cart: [],
    totalSelected: 0,
    totalPrice: 0,

    // Actions
    setProducts: (products) => set(() => ({ products })),
    addToCart: (productToAdd) => set((state) => {
        let newCart = [...state.cart];
        const existingProduct = newCart.find((item) => item.id === productToAdd.id);

        if (existingProduct) {
            // Product exists, increase quantity
            newCart = newCart.map((item) =>
                item.id === productToAdd.id ? new Product({ ...item, quantity: item.quantity + 1 }) : item
            );
        } else {
            // Product does not exist, add new item with quantity 1
            newCart.push(new Product({ ...productToAdd, quantity: 1 }));
        }

        const totalSelected = newCart.reduce((count, item) => count + item.quantity, 0);
        const totalPrice = newCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        return {
            cart: newCart,
            totalSelected,
            totalPrice: `$${totalPrice.toFixed(2)}`
        };
    }),
    minusFromCart: (productToMinus) => set((state) => {
        let newCart = [...state.cart];
        const existingProduct = newCart.find((item) => item.id === productToMinus.id);

        if (existingProduct && existingProduct.quantity > 1) {
            // Product exists with quantity > 1, decrease quantity
            newCart = newCart.map((item) =>
                item.id === productToMinus.id ? new Product({ ...item, quantity: item.quantity - 1 }) : item
            );
        } else {
            // Remove the item from the cart
            newCart = newCart.filter((item) => {
                if(item.id !== productToMinus.id){
                    return new Product(item)
                }
            });
        }

        const totalSelected = newCart.reduce((count, item) => count + item.quantity, 0);
        const totalPrice = newCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        return {
            cart: newCart,
            totalSelected,
            totalPrice: `$${totalPrice.toFixed(2)}`
        };
    }),
    removeFromCart: (productToRemove) => set((state) => {
        const newCart = state.cart.filter(product => product.id !== productToRemove.id)
        const totalSelected = newCart.reduce((count, item) => count + item.quantity, 0)
        const totalPrice = newCart.reduce((count, item) => count * item.quantity, 0)
        return {
            cart: newCart,
            totalSelected,
            totalPrice: `$${totalPrice.toFixed(2)}`
        };
    }),
    clearCart: () => set(() => {
        return {
            cart: [],
            totalSelected: 0,
            totalPrice: 0,
        }
    }),
}));

export default useStore;
