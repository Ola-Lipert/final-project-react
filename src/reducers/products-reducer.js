import { GET_PRODUCTS } from '../actions/actions-product';
import productsData from '../data/products.json';

const initialState = {
    products: productsData
};

const productsReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return Object.assign({}, state, {products: state.products})
    }

    return state;
};

export default productsReducer;