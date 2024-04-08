import axios from 'axios';
import Product from '../models/ProductModel';

export const fetchProducts = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data.map(item => new Product(item));
    } catch (error) {
        console.error('Error fetching products', error);
        throw error;
    }
};
