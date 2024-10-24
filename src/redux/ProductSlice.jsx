import {createSlice} from "@reduxjs/toolkit"
const initialState={
    products: [],
    searchTerm:'',
    filterData:[]
}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setproducts(state,action){
            state.products = action.payload
        },
        setSearchTerm(state,action){
            state.searchTerm = action.payload
            state.filterData = state.products.filter(product => (
                product.name.toLowerCase().includes(state.searchTerm.toLowerCase()) 
            ))
        }

    },

})
 export const {setproducts,setSearchTerm} = productSlice.actions;
 export default productSlice.reducer