import {configureStore} from '@reduxjs/toolkit'
import authReducer from './auth-slice';
import adminProductsSlice from "./admin/products-slice";
import adminOrderSlice from "./admin/order-slice";

import shoppingProductSlice from './shop/products-slice';
import shopCartSlice from "./shop/cart-slice";
import shopReviewSlice from "./shop/review-slice";
import shopAddressSlice from "./shop/address-slice";
import shopSearchSlice from "./shop/search-slice";
import commonFeatureSlice from "./common-slice";
import shopOrderSlice from "./shop/order-slice";




// Global Reducer contains all reducers inside it
const store= configureStore({
    reducer:{ // reducer is the mandatory property
         auth: authReducer,
         adminProducts: adminProductsSlice,
         adminOrder: adminOrderSlice,
         shopProducts: shoppingProductSlice,
         shopCart: shopCartSlice,
         shopReview: shopReviewSlice,
         shopAddress: shopAddressSlice,
         shopSearch: shopSearchSlice,
         shopOrder: shopOrderSlice,

         commonFeature: commonFeatureSlice,
    },
})



export default store;