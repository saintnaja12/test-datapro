// store.js
import create from 'zustand';
// import { devtools } from 'zustand/middleware'

const useStore = create((set) => ({
    // Initial state
    products: [],
    cart: [],
    totalSelected: 0,
    totalPrice: 0,

    // Actions
    setProducts: (products) => set(() => ({ products })),
    addToCart: (productToAdd) => set((state) => {
        const existingCartItemIndex = state.cart.findIndex(item => item.id === productToAdd.id);
        const newCart = [...state.cart];

        if (existingCartItemIndex >= 0) {
          const existingCartItem = newCart[existingCartItemIndex];
          newCart[existingCartItemIndex] = { ...existingCartItem };
        } else {
          // Product does not exist, add new item
          newCart.push(productToAdd);
        }
        state.totalSelected = newCart.length
        const total = newCart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price;
        }, 0)
        state.totalPrice = `$${total.toFixed(2)}`
        return { cart: newCart };
    }),
    removeFromCart: (productToRemove) => set((state) => {
        const newCart = state.cart.filter(product => product.id !== productToRemove.id)
        state.totalSelected = newCart.length
        const total = newCart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price;
        }, 0)
        state.totalPrice = `$${total.toFixed(2)}`
        return { cart: newCart };
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
