import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './Slices/CartSlice'

//this is global state storage  
export default configureStore({
  reducer: {
    // this redux store that made by number of slices 
    //here we create the one slice list below 
    // we can made number of slice as per your requirement
    cart:CartSlice

  },
})