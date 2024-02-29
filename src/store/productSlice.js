import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    status: 'idle'
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // fetchProducts(state, action) {
        //     state.data = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'success'
        })
        .addCase(getProducts.rejected, (state, action)=>{
            state.status = 'error'
        })

    }
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
})

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         try {
//             const response = await fetch("https://fakestoreapi.com/products");
//             const data = await response.json();
//             dispatch(fetchProducts(data));
//         } catch (error) {
//             console.error("Error fetching products:", error);
//         }
//     }
// }
