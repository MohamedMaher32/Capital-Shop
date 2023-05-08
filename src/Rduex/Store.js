import { configureStore } from "@reduxjs/toolkit";
import { AllCategorySliceReducer, CategorySliceReducer, DetaliesInfoSliceReducer, ProductSliceReducer, SearchListSliceReducer } from "./DataSlice";
import { CartSliceReducer } from "./CartSlice";
export let store = configureStore({
    reducer: {
        ProductData:ProductSliceReducer,
        CategoryData:CategorySliceReducer,
        AllCategoryData:AllCategorySliceReducer,
        DetaliesData:DetaliesInfoSliceReducer,
        SearchData:SearchListSliceReducer,
        cart: CartSliceReducer,
    }
})