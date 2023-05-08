import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// *********************************** get all products ********************************************
export let getProductList =createAsyncThunk("product/getProductList",async()=>{
    let { data } = await axios.get(`https://dummyjson.com/products?limit=100`)
    return data.products
})
let ProductSlice =createSlice({
    name:"product",
    initialState:{ProductList:[] , loading:false},
    extraReducers:(builder)=>{
         builder.addCase(getProductList.pending,(state , action)=>{
            state.loading=true
        })
        builder.addCase(getProductList.fulfilled,(state , action)=>{
            state.ProductList=action.payload
            state.loading=false
        })
    }
})
export let ProductSliceReducer = ProductSlice.reducer

// *********************************** get detalies ********************************************
export let getDetaliesInfo =createAsyncThunk("detalies/getDetaliesInfo",async(id)=>{
    let { data } = await axios.get(`https://dummyjson.com/products/${id}`)
    return data
})
let DetaliesInfoSlice =createSlice({
    name:"detalies",
    initialState:{detaliesInfo:{} , loading:false},
    extraReducers:(builder)=>{
        builder.addCase(getDetaliesInfo.pending,(state , action)=>{
            state.loading=true
        })
        builder.addCase(getDetaliesInfo.fulfilled,(state , action)=>{
            state.detaliesInfo=action.payload
            state.loading=false
        })
    }
})
export let DetaliesInfoSliceReducer = DetaliesInfoSlice.reducer

// *********************************** search list ********************************************
export let getSearchList =createAsyncThunk("search/getSearchList",async(searchTerm)=>{
    let { data } = await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`)
    return data.products
})
let SearchListSlice =createSlice({
    name:"search",
    initialState:{searchList:[] , loading:false},
    extraReducers:(builder)=>{
        builder.addCase(getSearchList.pending,(state , action)=>{
            state.loading=true
        })
        builder.addCase(getSearchList.fulfilled,(state , action)=>{
            state.searchList=action.payload
            state.loading=false
        })
    }
})
export let SearchListSliceReducer = SearchListSlice.reducer

// *********************************** get all category ********************************************
export let getAllCategoryList =createAsyncThunk("allcategory/getAllCategoryList",async()=>{
    let { data } = await axios.get(`https://dummyjson.com/products/categories`)
    return data
})
let AllCategoryListSlice =createSlice({
    name:"allcategory",
    initialState:{AllCategoryList:[] , loading:false},
    extraReducers:(builder)=>{
        builder.addCase(getAllCategoryList.pending,(state , action)=>{
            state.loading=true
        })
        builder.addCase(getAllCategoryList.fulfilled,(state , action)=>{
            state.AllCategoryList=action.payload
            state.loading=false
        })
    }
})
export let AllCategorySliceReducer = AllCategoryListSlice.reducer

// *********************************** get one of category ********************************************
export let getSpecificCategoryList =createAsyncThunk("category/getSpecificCategoryList",async(cat)=>{
    let { data } = await axios.get(`https://dummyjson.com/products/category/${cat}`)
    return data.products
})
let CategoryListSlice =createSlice({
    name:"category",
    initialState:{CategoryList:[] , loading:false},
    extraReducers:(builder)=>{
        builder.addCase(getSpecificCategoryList.pending,(state , action)=>{
            state.loading=true
        })
        builder.addCase(getSpecificCategoryList.fulfilled,(state , action)=>{
            state.CategoryList=action.payload
            state.loading=false
        })
    }
})
export let CategorySliceReducer = CategoryListSlice.reducer
