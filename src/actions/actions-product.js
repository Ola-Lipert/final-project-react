export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';

export function getProducts() {
    return {
        type: GET_PRODUCTS
    }
}

export function getProduct() {
    return {
        type: GET_PRODUCT,
        id
    }
}

export function searchProducts() {
    return {
        type: GET_PRODUCTS,
        searchText
    }
}