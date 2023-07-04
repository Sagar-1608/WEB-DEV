import { createSlice } from '@reduxjs/toolkit'


// define the slice in that three parameter is there 
// name . initialtate and the reducers (reqiured functionn for appication) 
export const CartSlice = createSlice(
    {
        name:"cart",
        initialState:[],
        reducers:{
            add:(state , action)=>{
                // push the input parameter in initialstate 
                state.push(action.payload); // (action.payload) is access to input parameter 
            },
            remove :(state,action)=>{
                // save all item in state except input item  
                return state.filter((item)=>item.id!==action.payload);
            }
            
        }

    }
)

// exporting the created function and the reducers 

export const{add, remove} =CartSlice.actions;
export default CartSlice.reducer;